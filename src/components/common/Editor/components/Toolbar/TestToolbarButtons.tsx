import FormatIndentDecrease from '@mui/icons-material/FormatIndentDecrease'
import FormatIndentIncrease from '@mui/icons-material/FormatIndentIncrease'
import { focusEditor, indent, outdent, ToolbarButton, useEditorRef } from '@udecode/plate'

const tooltip = (content: string) => ({
  content
})

const TestToolbarButtons = () => {
  const editor = useEditorRef()

  return (
    <>
      <ToolbarButton
        tooltip={tooltip('Outdent')}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          outdent(editor)

          focusEditor(editor)
        }}
        icon={<FormatIndentDecrease />}
      />
      <ToolbarButton
        tooltip={tooltip('Indent')}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          indent(editor)
          focusEditor(editor)
        }}
        icon={<FormatIndentIncrease />}
      />
    </>
  )
}
export default TestToolbarButtons
