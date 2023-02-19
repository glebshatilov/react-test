import SignInForm from '../SignInForm/SignInForm.js'
import SignUpForm from '../SignUpForm/SignUpForm.js'
import { useState } from 'react'

interface Props {
  onSuccess?: () => void
}

function AuthForm({ onSuccess }: Props) {
  const [formState, setFormState] = useState('signin')

  const switchState = () => {
    setFormState(prevState => prevState === 'signin' ? 'signup' : 'signin')
  }

  if (formState === 'signin') {
    return (
      <SignInForm onSuccess={onSuccess} switchToSignUp={switchState} />
    )
  } else {
    return (
      <SignUpForm onSuccess={onSuccess} switchToSignIn={switchState} />
    )
  }
}

export default AuthForm
