import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { UserAvatar } from '@/features/users/index.js'

interface Props {
  interlocutor: any
}

function ChatHeaderUser({ interlocutor }: Props) {
  return (
    <Stack alignItems="center" direction="row" spacing={1}>
      <UserAvatar user={interlocutor} size={{ width: 30, height: 30 }} />
      <Typography fontSize={16} fontWeight={500}>{interlocutor.name || interlocutor.email}</Typography>
    </Stack>
  )
}
export default ChatHeaderUser
