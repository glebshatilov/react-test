import React, { useState, ChangeEvent, FormEvent } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { useApiUpdateUser } from '@/features/edit'
import { useAuth } from '@/features/auth'

interface ErrorState {
  field: string
  message: string
}

interface SnackbarState {
  open: boolean
  message: string
  severity: 'success' | 'error'
}

function RequireNameForm() {
  const { signedInUser, signOut } = useAuth()
  const [name, setName] = useState<string>(signedInUser?.name || '')
  const [username, setUsername] = useState<string>(signedInUser?.username || '')
  const [error, setError] = useState<ErrorState | null>(null)
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'success'
  })

  const { updateUserHandler } = useApiUpdateUser()

  const handleSubmit = async(event: FormEvent) => {
    event.preventDefault()
    setError(null)

    try {
      await updateUserHandler({
        name,
        username
      })
    } catch (err) {
      if (
        typeof err === 'object' &&
        err !== null &&
        'graphQLErrors' in err &&
        Array.isArray(err.graphQLErrors)
      ) {
        let handled = false
        for (const e of err.graphQLErrors) {
          if (e.extensions.code === 'BAD_USER_INPUT') {
            setError({
              field: e.extensions.argumentName,
              message: e.message
            })
            handled = true
          }
        }

        if (!handled) {
          setSnackbar({
            open: true,
            message: 'An unexpected error occurred. Please try again later.',
            severity: 'error'
          })
        }
      }
    }
  }

  const handleChange = (setState: React.Dispatch<React.SetStateAction<string>>) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setState(event.target.value)
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Please enter your name
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Having a name is required on our website.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
                value={name}
                onChange={handleChange(setName)}
                error={error?.field === 'name'}
                helperText={error?.field === 'name' && error?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username (optional)"
                variant="outlined"
                fullWidth
                value={username}
                onChange={handleChange(setUsername)}
                error={error?.field === 'username'}
                helperText={error?.field === 'username' && error?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link
                  component="button"
                  underline="none"
                  onClick={signOut}
                >
                  Sign out
                </Link>
                <Button type="submit" variant="contained" color="primary">
                  Continue
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            variant="filled"
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  )
}

export default RequireNameForm
