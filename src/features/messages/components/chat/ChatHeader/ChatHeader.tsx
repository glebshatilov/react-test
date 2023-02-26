import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import { Menu } from '@mui/icons-material'
import ChatHeaderUser from '../ChatHeaderUser/ChatHeaderUser.js'

interface Props {
  interlocutor?: any
}

function ChatHeader({ interlocutor }: Props) {
  return (
    <Box padding={1.5} borderBottom="solid 1px #d4d4d4">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {interlocutor ? <ChatHeaderUser interlocutor={interlocutor} /> : <div>Loading...</div>}
        <IconButton size="small">
          <Menu />
        </IconButton>
      </Stack>
    </Box>
  )
}

export default ChatHeader
