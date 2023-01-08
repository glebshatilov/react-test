import React from 'react'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
// @ts-ignore
import { AuthSignIn } from '@/services/apollo/mutations/auth.graphql'
import apolloClient from '@/services/apollo/config/client.js'
import { setToken } from '@/utils/token.js'

interface Props {}

interface State {
  email: string,
  password: string,
  error: {
    message: string
  } | null
}

class SignInForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      error: null
    }

    this.handleInputEmail = this.handleInputEmail.bind(this)
    this.handleInputPassword = this.handleInputPassword.bind(this)
  }

  async handleSubmit() {
    await this.signIn()
  }

  handleInputPassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleInputEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  async signIn() {
    try {
      const res = await apolloClient.mutate({
        mutation: AuthSignIn,
        variables: {
          email: this.state.email,
          password: this.state.password
        }
      })

      const { token } = res?.data?.auth?.signIn

      if (token) {
        setToken(token)
        setTimeout(() => {
          document.location.reload()
        })
      }
    } catch (error) {
      // @ts-ignore
      this.setState({ error })
    }
  }

  render() {
    return (
      <div className="sign-in-form">
        <Paper variant="outlined" sx={{ p: 3, width: '400px' }}>
          <Stack spacing={2}>
            <h3>Sign in</h3>
            <TextField
              error={!!this.state.error}
              variant="standard"
              label="Email"
              value={this.state.email}
              onChange={this.handleInputEmail}
            />
            <TextField
              error={!!this.state.error}
              helperText={this.state.error?.message}
              variant="standard"
              label="Password"
              type="password"
              autoComplete="currentPassword"
              value={this.state.password}
              onChange={this.handleInputPassword}
            />
            <Button
              disabled={!(this.state.email && this.state.password)}
              variant="contained"
              onClick={() => this.handleSubmit()}
            >
              Sign in
            </Button>
          </Stack>
        </Paper>
      </div>
    )
  }
}

export default SignInForm
