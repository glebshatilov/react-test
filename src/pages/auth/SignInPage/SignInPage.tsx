import SignInForm from '@/components/SignInForm/SignInForm.js'
import Container from '@mui/material/Container'
import { useLocation, useNavigate } from 'react-router-dom'

function SignInPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  function handleSuccessSignIn() {
    setTimeout(() => {
      navigate(from, { replace: true })
    })
  }

  return (
    <div className="sign-in-page">
      <Container>
        <h1>Sign in</h1>
        <SignInForm onSuccess={() => handleSuccessSignIn()} />
      </Container>
    </div>
  )
}

export default SignInPage
