import TextField from '@mui/material/TextField'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  message: string
  setMessage: Dispatch<SetStateAction<string>>
  loading: boolean
}

function ChatFooterSenderInput({ message, setMessage, loading }: Props) {
  return (
    <TextField
      multiline
      maxRows={3}
      placeholder="Write a message..."
      size="small"
      fullWidth
      value={message}
      onChange={e => setMessage(e.target.value)}
      disabled={loading}
    />
  )
}

export default ChatFooterSenderInput
