import Paper from '@mui/material/Paper'
import { NavList } from '@primer/react'
import NavListItem from '@/components/common/NavListItem/NavListItem.js'

function EditNav() {
  return (
    <Paper variant="outlined" sx={{ p: 1 }}>
      <NavList>
        <NavListItem to="/edit">
          Profile
        </NavListItem>
        <NavListItem to="/edit/avatar">
          Avatar
        </NavListItem>
        <NavListItem to="/edit/contacts">
          Contacts
        </NavListItem>
        <NavList.Divider />
        <NavListItem to="/edit/delete">
          Delete account
        </NavListItem>
      </NavList>
    </Paper>
  )
}

export default EditNav
