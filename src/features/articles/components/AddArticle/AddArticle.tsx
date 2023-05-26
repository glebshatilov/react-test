import { useState, ChangeEvent } from 'react'
import { TElement } from '@udecode/plate'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Editor from '@/components/common/Editor/Editor'
import useApiCreateArticle from '../../hooksApi/useApiCreateArticle'
import { useNotification } from '@/features/notifications/index.js'
import { useNavigate } from 'react-router-dom'

interface ErrorState {
  field: string
  message: string
}

function AddArticle() {
  const [title, setTitle] = useState<string>('')
  const [value, setValue] = useState<TElement[]>([
    {
      type: 'paragraph',
      children: [{ text: '' }]
    }
  ])

  const [error, setError] = useState<ErrorState | null>(null)

  const { showNotification } = useNotification()
  const { createArticleHandler, loading } = useApiCreateArticle()
  const navigate = useNavigate()

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleSubmit = async() => {
    setError(null)

    // title validation
    if (title.length < 6) {
      setError({
        field: 'title',
        message: 'Title must be at least 6 characters.'
      })

      showNotification('Title must be at least 6 characters.', 'error')
      return
    }

    try {
      const content = JSON.stringify(value)
      const response = await createArticleHandler({ title, content })

      if (response?.article?.create?.success) {
        const articleId = response?.article?.create?.article?.id

        if (articleId) {
          showNotification('Article created successfully.', 'success')
          navigate(`/a/${articleId}`)
        }
      }
    } catch (err) {
      showNotification('An unexpected error occurred. Please try again later.', 'error')
    }
  }

  return (
    <Stack spacing={5}>
      <TextField
        label="Title"
        variant="standard"
        fullWidth
        error={error?.field === 'title'}
        helperText={error?.field === 'title' && error?.message}
        required
        value={title}
        onChange={handleTitleChange}
        disabled={loading}
      />
      <Editor value={value} setValue={setValue} disabled={loading} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </Button>
    </Stack>
  )
}

export default AddArticle
