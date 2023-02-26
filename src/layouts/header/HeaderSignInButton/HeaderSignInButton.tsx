import { useState } from 'react'
import { AuthForm } from '@/features/auth'
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
        <AuthForm onSuccess={() => handleSuccessSignIn()} />
      </Dialog>
    </>
  )
}

export default HeaderSignInButton
