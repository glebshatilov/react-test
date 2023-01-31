import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

interface Props {
  data: any
}

function ChatListItemName({ data }: Props) {
  return (
    <Box gridArea="name">
      <Typography
        fontSize={13}
        fontWeight={500}
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap"
        marginRight={1}
      >
        {data.interlocutor.name || data.interlocutor.email}
      </Typography>
    </Box>
  )
}

export default ChatListItemName
