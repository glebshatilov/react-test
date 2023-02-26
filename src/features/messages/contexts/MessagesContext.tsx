import { createContext, ReactNode } from 'react'
import useNewMessagesSubscription from '../hooks/useNewMessagesSubscription.js'

interface Props {
  children: ReactNode
}

// ToDo: add types
interface MessagesContextInterface {
  newMessageInChat: any
}

const MessagesContext = createContext<MessagesContextInterface>(
  {
    newMessageInChat: undefined
  }
)

function MessagesContextProvider({ children }: Props) {
  const { data } = useNewMessagesSubscription()

  return (
    <MessagesContext.Provider value={{ newMessageInChat: data?.newMessageInChat }}>
      {children}
    </MessagesContext.Provider>
  )
}

export {
  MessagesContextProvider,
  MessagesContext
}

export default MessagesContext
