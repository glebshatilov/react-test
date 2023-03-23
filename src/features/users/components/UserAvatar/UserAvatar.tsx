import Avatar from '@mui/material/Avatar'
import { useAuth } from '@/features/auth/index.js'

interface Props {
  size?: {
    width: number
    height: number
  }
  user?: any
}

function UserAvatar({ size, user: propUser }: Props) {
  const { signedInUser } = useAuth()
  const user = propUser || signedInUser
  const avatarLetter = (user?.name || user?.email)[0].toUpperCase()

  return (
    <Avatar src={user?.avatar?.src || ''} sx={{ width: size?.width, height: size?.height }}>{avatarLetter}</Avatar>
  )
}

export default UserAvatar
