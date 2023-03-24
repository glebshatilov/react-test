import React, { createContext, useState } from 'react'
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { AlertColor } from '@mui/material'

interface SnackbarState {
  open: boolean
  message: string
  severity: AlertColor
}

interface Props {
  children: React.ReactNode
  anchorOrigin?: SnackbarOrigin
}

interface NotificationContextInterface {
  showNotification: (message: string, severity: AlertColor) => void
}

const NotificationContext = createContext<NotificationContextInterface>({
  showNotification: () => ({})
})

function NotificationContextProvider({
  children,
  anchorOrigin = { vertical: 'top', horizontal: 'center' }
}: Props) {
  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'success'
  })

  const showNotification = (message: string, severity: AlertColor) => {
    setSnackbarState({
      open: true,
      message,
      severity
    })
  }

  const handleClose = () => {
    setSnackbarState({
      ...snackbarState,
      open: false
    })
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
      >
        <Alert onClose={handleClose} severity={snackbarState.severity} variant="filled">
          {snackbarState.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  )
}

export {
  NotificationContextProvider,
  NotificationContext
}

export default NotificationContext
