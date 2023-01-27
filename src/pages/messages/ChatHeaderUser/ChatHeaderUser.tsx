import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import { Typography } from '@mui/material'

interface Props {
  interlocutor: any
}

function ChatHeaderUser({ interlocutor }: Props) {
  const avatarLetter = (interlocutor.name || interlocutor.email)[0].toUpperCase() // ToDo: need to move to separate component

  return (
    <Stack alignItems="center" direction="row" spacing={1}>
      <Avatar sx={{ width: 30, height: 30 }}>{avatarLetter}</Avatar>
      <Typography fontSize={16} fontWeight={500}>{interlocutor.name || interlocutor.email}</Typography>
    </Stack>
  )
}
export default ChatHeaderUser
