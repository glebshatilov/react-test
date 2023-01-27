import { Box } from '@mui/material'
import ChatFooterSender from '../ChatFooterSender/ChatFooterSender.js'

interface Props {
  interlocutorId?: string
}

function ChatFooter({ interlocutorId }: Props) {
  return (
    <Box padding={2} borderTop="solid 1px #d4d4d4">
      <ChatFooterSender interlocutorId={interlocutorId} />
    </Box>
  )
}

export default ChatFooter
