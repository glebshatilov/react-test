import Box from '@mui/material/Box'
import ChatListItemAvatar from '../ChatListItemAvatar/ChatListItemAvatar.js'
import ChatListItemDate from '../ChatListItemDate/ChatListItemDate.js'
import ChatListItemName from '../ChatListItemName/ChatListItemName.js'
import ChatListItemLastMessage from '../ChatListItemLastMessage/ChatListItemLastMessage.js'
import { useParams, useNavigate } from 'react-router-dom'

interface Props {
  data: any
}

function ChatListItem({ data }: Props) {
  const navigate = useNavigate()
  const { userId } = useParams()
  const isActive = userId ? userId === data.interlocutor.id : false

  function handleClick(e: any) {
    e.preventDefault()
    if (!isActive) {
      navigate(`/messages/dm/${data.interlocutor.id}`)
    }
  }

  // don't show empty chats
  if (!data.lastMessage) {
    return null
  }

  return (
    <Box
      display="grid"
      gridTemplateAreas={'\'avatar name date\' \'avatar lastMessage lastMessage\''}
      gridTemplateColumns="auto minmax(0, 1fr) max-content"
      padding={1}
      sx={{
        '&:not(:last-child)': { borderBottom: '1px solid #d4d4d4' },
        ...(!isActive && {
          cursor: 'pointer',
          ':hover': { backgroundColor: 'rgba(212,212,212,0.2)' }
        }),
        ...(isActive && { cursor: 'default', backgroundColor: '#d4d4d4' })
      }}
      onClick={e => handleClick(e)}
    >
      <ChatListItemAvatar data={data} />
      <ChatListItemName data={data} />
      <ChatListItemDate lastMessageAt={data.lastMessageAt} />
      <ChatListItemLastMessage data={data.lastMessage} />
    </Box>
  )
}

export default ChatListItem
