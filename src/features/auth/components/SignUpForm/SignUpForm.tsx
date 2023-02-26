import React from 'react'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
// @ts-ignore
import { AuthSignUp } from '@/services/apollo/mutations/auth.graphql'
import apolloClient from '@/services/apollo/config/client.js'
import AuthContext from '../../contexts/AuthContext.js'

interface Props {
  onSuccess?: () => void
  switchToSignIn?: () => void
}

interface State {
  email: string,
  password: string,
  confirmPassword: string,
  error: {
    message: string
  } | null
}

class SignUpForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: null
    }

    this.handleInputEmail = this.handleInputEmail.bind(this)
    this.handleInputPassword = this.handleInputPassword.bind(this)
    this.handleInputConfirmPassword = this.handleInputConfirmPassword.bind(this)
  }

  async handleSubmit() {
    this.clearError()

    const isValidInputData = this.validateInputData()

    if (isValidInputData) {
      await this.signUp()
    }
  }

  clearError() {
    this.setState({
      error: null
    })
  }

  validateInputData() {
    if (this.state.email.length < 8) {
      this.setState({
        error: {
          message: 'Email is invalid'
        }
      })

      return false
    }

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        error: {
          message: 'Passwords don\'t match'
        }
      })

      return false
    }

    if (this.state.password.length < 4) {
      this.setState({
        error: {
          message: 'Password must have at least 4 characters'
        }
      })

      return false
    }

    return true
  }

  // @ts-ignore
  handleInputPassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  // @ts-ignore
  handleInputConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    })
  }

  // @ts-ignore
  handleInputEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  async signUp() {
    try {
      const res = await apolloClient.mutate({
        mutation: AuthSignUp,
        variables: {
          email: this.state.email,
          password: this.state.password
        }
      })

      const { token } = res?.data?.auth?.signUp

      if (token) {
        // @ts-ignore
        this.context.signInWithToken(token)
        this.props.onSuccess?.()
      }
    } catch (error) {
      // @ts-ignore
      this.setState({ error })
    }
  }

  render() {
    return (
      <Paper variant="outlined" sx={{ p: 3, width: '400px' }}>
        <Stack spacing={2}>
          <h3>Creating an account</h3>
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
          <TextField
            error={!!this.state.error}
            variant="standard"
            label="Confirm password"
            type="password"
            autoComplete="currentPassword"
            value={this.state.confirmPassword}
            onChange={this.handleInputConfirmPassword}
          />
          <Button
            disabled={!(this.state.email && this.state.password && this.state.confirmPassword)}
            variant="contained"
            onClick={() => this.handleSubmit()}
          >
            Sign up
          </Button>
        </Stack>
        {
          this.props.switchToSignIn &&
            <Link
              component="button"
              underline="none"
              sx={{ marginTop: 3 }}
              onClick={() => { this.props.switchToSignIn?.() }}
            >
              Sign in instead
            </Link>
        }
      </Paper>
    )
  }
}

SignUpForm.contextType = AuthContext

export default SignUpForm
