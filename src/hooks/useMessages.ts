import { useContext } from 'react'
import MessagesContext from '@/contexts/MessagesContext.js'

function useMessages() {
  return useContext(MessagesContext)
}

export default useMessages
