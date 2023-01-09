import './DefaultContainer.scss'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function DefaultContainer({ children }:Props) {
  return (
    <div className="default-container">
      {children}
    </div>
  )
}

export default DefaultContainer
