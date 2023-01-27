import store from './index.js'
import { Provider } from 'react-redux'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function ReduxProvider({ children }: Props) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider
