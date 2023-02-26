import Stack from '@mui/material/Stack'
import UserListItem from '../UserListItem/UserListItem.js'

interface Props {
  list: any[]
}

function UserList({ list }:Props) {
  return (
    <div className="user-list">
      <Stack spacing={2}>
        {list.map((user) =>
          <UserListItem key={user.id} data={user} />
        )}
      </Stack>

    </div>
  )
}

export default UserList
