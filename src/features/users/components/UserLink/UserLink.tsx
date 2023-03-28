import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  user: any
}

function UserLink({ children, user }: Props) {
  return (
    <Link to={`/u/${user.id}`} style={{ textDecoration: 'inherit', color: 'inherit' }}>
      {children}
    </Link>
  )
}

export default UserLink
