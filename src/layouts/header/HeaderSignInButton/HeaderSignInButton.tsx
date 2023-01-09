import { useState } from 'react'
import SignInForm from '@/components/SignInForm/SignInForm.js'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'

function HeaderSignInButton() {
  const [isOpen, setOpen] = useState(false)

  function handleClick() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleSuccessSignIn() {
    setTimeout(() => {
      document.location.reload()
    })
  }

  return (
    <>
      <Button onClick={() => handleClick()}>Sign in</Button>
      <Dialog open={isOpen} onClose={() => handleClose()}>
        <SignInForm onSuccess={() => handleSuccessSignIn()} />
      </Dialog>
    </>
  )
}

export default HeaderSignInButton
