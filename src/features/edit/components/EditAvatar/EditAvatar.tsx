import AvatarForm from '../EditAvatarForm/EditAvatarFrom.js'
import { Paper } from '@mui/material'

function EditAvatar() {
  return (
    <Paper variant="outlined" sx={{ p: 3, minHeight: '200vh' }}>
      <h1>
        Edit Avatar
      </h1>
      <AvatarForm />
    </Paper>
  )
}

export default EditAvatar
