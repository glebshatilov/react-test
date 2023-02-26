import { getLocalTimeFromDatetime } from '@/utils/date.js'
import { Typography } from '@mui/material'

interface Props {
  date: string
}

function ChatMessagesItemTime({ date }: Props) {
  return (
    <Typography fontSize={10}>
      {getLocalTimeFromDatetime(date)}
    </Typography>
  )
}

export default ChatMessagesItemTime
