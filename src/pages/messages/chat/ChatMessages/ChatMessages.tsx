import Stack from '@mui/material/Stack'
import ChatMessagesItem from '../ChatMessagesItem/ChatMessagesItem.js'
import ChatMessagesDate from '../ChatMessagesDate/ChatMessagesDate.js'
import { MessageInterface } from '@/pages/messages/@types/index.js'
import { checkTheSameDays } from '@/utils/date.js'
import { Fragment } from 'react'

interface Props {
  messages?: MessageInterface[],
  loading?: boolean
}

function ChatMessages({ messages = [], loading = false }: Props) {
  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  let prevMessageDate: string

  return (
    <Stack
      flexDirection="column-reverse"
      maxHeight="100%"
      overflow="auto"
      height="100%"
      paddingY="15px"
    >
      {messages.map((message) => {
        const withDate = !checkTheSameDays(prevMessageDate, message.createdAt)

        const dateComponent = withDate ? <ChatMessagesDate date={prevMessageDate} /> : null

        prevMessageDate = message.createdAt

        return (
          <Fragment key={message.id}>
            {dateComponent}
            <ChatMessagesItem data={message} />
          </Fragment>
        )
      })}
      <ChatMessagesDate date={messages && messages[messages?.length - 1].createdAt} />
    </Stack>
  )
}

export default ChatMessages
