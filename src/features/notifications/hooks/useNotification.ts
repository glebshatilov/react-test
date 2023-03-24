import { useContext } from 'react'
import NotificationContext from '../contexts/NotificationContext.js'

function useNotification() {
  return useContext(NotificationContext)
}

export default useNotification
