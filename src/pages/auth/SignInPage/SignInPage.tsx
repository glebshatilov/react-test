import SignInForm from '@/components/SignInForm/SignInForm.js'
import Container from '@mui/material/Container'
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.js'

function SignInPage() {
  return (
    <DefaultLayout>
      <div className="sign-in-page">
        <Container>
          <h1>Sign in</h1>
          <SignInForm />
        </Container>
      </div>
    </DefaultLayout>
  )
}

export default SignInPage
