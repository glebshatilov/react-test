import { useState } from 'react'
import SignInForm from '@/components/SignInForm/SignInForm.js'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'

function HeaderAuthModal() {
  const [isOpen, setOpen] = useState(false)

  function handleClick() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <>
      <Button onClick={() => handleClick()}>Sign in</Button>
      <Dialog open={isOpen} onClose={() => handleClose()}>
        <SignInForm />
      </Dialog>
    </>
  )
}

export default HeaderAuthModal
