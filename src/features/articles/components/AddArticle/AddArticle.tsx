import { useState } from 'react'
import Quill from 'quill'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' // Import the styles
import Button from '@mui/material/Button'
import ImageResize from 'quill-image-resize'

Quill.register('modules/imageResize', ImageResize)

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction

  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ['clean'], // remove formatting button

  ['image'] // Add the image button
]

function AddArticle() {
  const [content, setContent] = useState('')

  const handleChange = (value: string) => {
    setContent(value)
  }

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={{
          toolbar: toolbarOptions,
          imageResize: {
            // You can customize the ImageResize options here
          }
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          // Handle the submission of the article here
          console.log('Article content:', content)
        }}
      >
        Submit
      </Button>
    </div>
  )
}

export default AddArticle
