import SignInForm from '@/components/SignInForm/SignInForm.js'
import Container from '@mui/material/Container'

function SignInPage() {
  return (
    <div className="sign-in-page">
      <Container>
        <h1>Sign in</h1>
        <SignInForm />
      </Container>
    </div>
  )
}

export default SignInPage
