import { useState } from 'react'
import { TElement } from '@udecode/plate'
import Button from '@mui/material/Button'
import Editor from '@/components/common/Editor/Editor'

function AddArticle() {
  const [value, setValue] = useState<TElement[]>([
    {
      type: 'paragraph',
      children: [{ text: '' }]
    }
  ])

  return (
    <div>
      <Editor value={value} setValue={setValue} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          // Handle the submission of the article here
          console.log('Article content:', value)
        }}
      >
        Submit
      </Button>
    </div>
  )
}

export default AddArticle
