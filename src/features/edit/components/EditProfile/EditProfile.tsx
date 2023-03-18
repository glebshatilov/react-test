import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import { useAuth } from '@/features/auth/index.js'
import { useApiUpdateUser } from '@/features/edit/index.js'

interface ErrorState {
  field: string
  message: string
}

interface SnackbarState {
  open: boolean
  message: string
  severity: 'success' | 'error'
}

const EditProfile: React.FC = () => {
  const { signedInUser, loading } = useAuth()

  const [name, setName] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<ErrorState | null>(null)
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'success'
  })

  useEffect(() => {
    if (signedInUser) {
      setName(signedInUser.name)
      setUsername(signedInUser.username)
      setEmail(signedInUser.email)
    }
  }, [signedInUser])

  const { updateUserHandler, loading: updating } = useApiUpdateUser()

  const handleSubmit = async(event: FormEvent) => {
    event.preventDefault()

    setError(null)

    try {
      const updatedUserData = await updateUserHandler({
        name,
        username,
        email
      })

      if (updatedUserData?.user?.updateInfo?.success) {
        setSnackbar({ open: true, message: 'Profile updated successfully.', severity: 'success' })
      }
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
          setSnackbar({ open: true, message: 'An unexpected error occurred. Please try again later.', severity: 'error' })
        }
      }
    }
  }

  const handleChange = (setState: React.Dispatch<React.SetStateAction<string>>) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setState(event.target.value)
  }

  const noChanges =
    name === signedInUser?.name && username === signedInUser?.username && email === signedInUser?.email

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200vh' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Paper variant="outlined" sx={{ p: 3, minHeight: '200vh' }}>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              error={error?.field === 'name'}
              helperText={error?.field === 'name' && error?.message}
              required
              value={name}
              onChange={handleChange(setName)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              error={error?.field === 'username'}
              helperText={error?.field === 'username' && error?.message}
              value={username}
              onChange={handleChange(setUsername)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              error={error?.field === 'email'}
              helperText={error?.field === 'email' && error?.message}
              required
              value={email}
              onChange={handleChange(setEmail)}
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={noChanges || updating}
              >
                Save Changes
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
    </Paper>
  )
}

export default EditProfile
