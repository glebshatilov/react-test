import { getLocaleDateFromString, isCurrentYear, isToday } from '@/utils/date.js'
import { Box, Typography } from '@mui/material'

interface Props {
  date: string | undefined
}

function ChatMessagesDate({ date }: Props) {
  if (!date) return null

  return (
    <Box display="flex" justifyContent="center">
      <Typography
        fontSize={11}
        fontWeight={700}
        sx={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
        borderRadius="20px"
        padding="3px 7px"
      >
        {isToday(date) ? 'Today' : getLocaleDateFromString(date, !isCurrentYear(date))}
      </Typography>
    </Box>
  )
}

export default ChatMessagesDate
