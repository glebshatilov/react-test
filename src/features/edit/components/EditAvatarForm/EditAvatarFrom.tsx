import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import { useAuth } from '@/features/auth'
import { useApiUpdateUser } from '@/features/edit/index.js'
import { useFileLoader } from '@/features/fileLoader/index.js'
import { useNotification } from '@/features/notifications/index.js'

function EditAvatarForm() {
  const { signedInUser } = useAuth()
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [previewSrc, setPreviewSrc] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { uploadFile } = useFileLoader()
  const { showNotification } = useNotification()
  const { updateUserHandler } = useApiUpdateUser()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setAvatarFile(file)
      setPreviewSrc(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    if (avatarFile) {
      try {
        const response = await uploadFile({
          file: avatarFile,
          fileName: `avatar_${signedInUser?.id}_${Date.now()}`, // Unique file name
          folder: '/avatars'
        })

        await updateUserHandler({
          avatar: response.url
        })

        setLoading(false)
        setAvatarFile(null)
        setPreviewSrc(null)
        showNotification('Avatar updated successfully.', 'success')
      } catch (error) {
        setLoading(false)
        showNotification('Failed to upload image to ImageKit.', 'error')
      }
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Avatar
              src={previewSrc || signedInUser?.avatar?.src || ''}
              alt="User avatar"
              sx={{ width: 120, height: 120, marginRight: 2 }}
            />
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="avatar-upload"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="avatar-upload">
              <Button
                variant="outlined"
                color="primary"
                component="span"
                disabled={loading}
              >
                Upload File
              </Button>
            </label>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {loading && <CircularProgress sx={{ marginRight: 1 }} />}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!avatarFile || loading}
            >
              Save Changes
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default EditAvatarForm
