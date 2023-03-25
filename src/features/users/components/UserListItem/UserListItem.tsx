import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import UserListItemActions from '../UserListItemActions/UserListItemActions.js'
import UserListItemData from '../UserListItemData/UserListItemData.js'
import { useAuth } from '@/features/auth'
import Chip from '@mui/material/Chip'

interface Props {
  data: any
}

function UserListItem({ data }: Props) {
  const { isSignedIn, signedInUserId } = useAuth()
  const isCurrentUserMessage = signedInUserId === data.id

  return (
    <Paper sx={{ padding: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <UserListItemData data={data} />
        {isSignedIn && (isCurrentUserMessage ? <Chip label="It's you" size="small" /> : <UserListItemActions data={data} />)}
      </Stack>
    </Paper>
  )
}

export default UserListItem
