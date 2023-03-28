import Avatar from '@mui/material/Avatar'
import { useAuth } from '@/features/auth/index.js'
import { Link } from 'react-router-dom'

interface Props {
  size?: {
    width: number
    height: number
  }
  user?: any
  link?: boolean
}

function UserAvatar({ size, user: propUser, link = false }: Props) {
  const { signedInUser } = useAuth()
  const user = propUser || signedInUser
  const avatarLetter = (user?.name || user?.email)[0].toUpperCase()

  const avatarLinkAttributes = link
    ? { component: Link, to: `/u/${user.id}`, style: { textDecoration: 'inherit' } }
    : {}

  return (
    <Avatar
      {...avatarLinkAttributes}
      src={user?.avatar?.src || ''}
      sx={{ width: size?.width, height: size?.height }}
    >
      {avatarLetter}
    </Avatar>
  )
}

export default UserAvatar
