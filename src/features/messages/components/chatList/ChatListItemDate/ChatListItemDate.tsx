import { getLocaleDateFromString, getLocalTimeFromDatetime, isCurrentYear, isToday } from '@/utils/date.js'
import { Typography } from '@mui/material'

interface Props {
  lastMessageAt: string
}

function ChatListItemDate({ lastMessageAt }: Props) {
  return (
    <Typography fontSize={12} gridArea="date">
      {isToday(lastMessageAt) ? getLocalTimeFromDatetime(lastMessageAt) : getLocaleDateFromString(lastMessageAt, !isCurrentYear(lastMessageAt))}
    </Typography>
  )
}

export default ChatListItemDate
