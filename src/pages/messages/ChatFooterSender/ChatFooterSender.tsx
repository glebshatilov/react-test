import ChatFooterSenderInput from '../ChatFooterSenderInput/ChatFooterSenderInput.js'
import Stack from '@mui/material/Stack'
import Send from '@mui/icons-material/Send'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
// @ts-ignore
import { SendMessage } from '@/services/apollo/mutations/messages.graphql'

interface Props {
  interlocutorId?: string
}

function ChatFooterSender({ interlocutorId }: Props) {
  const [message, setMessage] = useState('')
  const [sendMessage, { loading }] = useMutation(SendMessage, {
    variables: {
      userId: interlocutorId,
      text: message
    },
    onCompleted() {
      setMessage('')
    }
  })

  const submitHandler = async(e:any) => {
    e.preventDefault()
    await sendMessage()
  }

  return (

    <Stack direction="row" alignItems="center" spacing={2}>
      <ChatFooterSenderInput message={message} setMessage={setMessage} loading={loading} />
      <IconButton
        size="small"
        onClick={submitHandler}
        disabled={loading}
      >
        <Send />
      </IconButton>
    </Stack>

  )
}

export default ChatFooterSender
