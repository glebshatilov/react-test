import Code from '@mui/icons-material/Code'
import Subscript from '@mui/icons-material/Subscript'
import Superscript from '@mui/icons-material/Superscript'
import FormatBold from '@mui/icons-material/FormatBold'
import FormatItalic from '@mui/icons-material/FormatItalic'
import FormatStrikethrough from '@mui/icons-material/FormatStrikethrough'
import FormatUnderlined from '@mui/icons-material/FormatUnderlined'
import {
  getPluginType,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  MarkToolbarButton,
  useEditorRef
} from '@udecode/plate'

const tooltip = (content: string) => ({
  content
})

function BasicMarkToolbarButtons() {
  const editor = useEditorRef()

  return (
    <>
      <MarkToolbarButton
        tooltip={tooltip('Bold (⌘+B)')}
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
      />
      <MarkToolbarButton
        tooltip={tooltip('Italic (⌘+I)')}
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
      />
      <MarkToolbarButton
        tooltip={tooltip('Underline (⌘+U)')}
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
      />
      <MarkToolbarButton
        tooltip={tooltip('Strikethrough (⌘+⇧+M)')}
        type={getPluginType(editor, MARK_STRIKETHROUGH)}
        icon={<FormatStrikethrough />}
      />
      <MarkToolbarButton
        tooltip={tooltip('Code (⌘+E)')}
        type={getPluginType(editor, MARK_CODE)}
        icon={<Code />}
      />
      <MarkToolbarButton
        tooltip={tooltip('Superscript (⌘+,)')}
        type={getPluginType(editor, MARK_SUPERSCRIPT)}
        clear={getPluginType(editor, MARK_SUBSCRIPT)}
        icon={<Superscript />}
      />
      <MarkToolbarButton
        tooltip={tooltip('Subscript (⌘+.)')}
        type={getPluginType(editor, MARK_SUBSCRIPT)}
        clear={getPluginType(editor, MARK_SUPERSCRIPT)}
        icon={<Subscript />}
      />
    </>
  )
}

export default BasicMarkToolbarButtons
