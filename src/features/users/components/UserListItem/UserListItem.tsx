import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import UserListItemActions from '../UserListItemActions/UserListItemActions.js'
import UserListItemData from '../UserListItemData/UserListItemData.js'
import { useAuth } from '@/features/auth'

interface Props {
  data: any
}

function UserListItem({ data }: Props) {
  const { isSignedIn } = useAuth()

  return (
    <Paper sx={{ padding: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <UserListItemData data={data} />
        {isSignedIn && <UserListItemActions data={data} />}
      </Stack>
    </Paper>
  )
}

export default UserListItem
