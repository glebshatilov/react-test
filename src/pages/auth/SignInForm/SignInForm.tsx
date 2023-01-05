import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
// @ts-ignore
import { AuthSignIn } from '@/services/apollo/mutations/auth.graphql'
import { useMutation } from '@apollo/client'
import { Navigate } from 'react-router-dom'

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [signIn, { data, loading, error, ...rest }] = useMutation(AuthSignIn)

  if (data && !error) {
    console.log('gagagagagga', Math.random())
    return <Navigate replace to="/" />
  }

  console.log('data', data)
  console.log('loading', loading)
  console.log('error', error)
  console.log('rest', rest)

  const ble = Math.random()
  console.log('ble', ble)

  return (
    <div className="sign-in-form">
      <Paper variant="outlined" sx={{ p: 3, width: '400px' }}>
        <Stack spacing={2}>
          <h3>Test {ble}</h3>
          <TextField
            error={!!error}
            variant="standard"
            label="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            error={!!error}
            helperText={error?.message}
            variant="standard"
            label="Password"
            type="password"
            autoComplete="currentPassword"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <Button
            disabled={!(email && password)}
            variant="contained"
            onClick={() => signIn({ variables: { email, password } })}
          >
            Sign in
          </Button>
        </Stack>
      </Paper>
    </div>
  )
}

export default SignInForm
