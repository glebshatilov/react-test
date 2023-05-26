import { CodeBlock } from '@styled-icons/boxicons-regular/CodeBlock'
import FormatQuote from '@mui/icons-material/FormatQuote'
import Looks3 from '@mui/icons-material/Looks3'
import Looks4 from '@mui/icons-material/Looks4'
import Looks5 from '@mui/icons-material/Looks5'
import Looks6 from '@mui/icons-material/Looks6'
import LooksOne from '@mui/icons-material/LooksOne'
import LooksTwo from '@mui/icons-material/LooksTwo'
import {
  BlockToolbarButton,
  CodeBlockToolbarButton,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  getPluginType,
  useEditorRef
} from '@udecode/plate'

const tooltip = (content: string) => ({
  content
})

function BasicElementToolbarButtons() {
  const editor = useEditorRef()

  return (
    <>
      <BlockToolbarButton
        tooltip={tooltip('Heading 1')}
        type={getPluginType(editor, ELEMENT_H1)}
        icon={<LooksOne />}
      />
      <BlockToolbarButton
        tooltip={tooltip('Heading 2')}
        type={getPluginType(editor, ELEMENT_H2)}
        icon={<LooksTwo />}
      />
      <BlockToolbarButton
        tooltip={tooltip('Heading 3')}
        type={getPluginType(editor, ELEMENT_H3)}
        icon={<Looks3 />}
      />
      <BlockToolbarButton
        tooltip={tooltip('Heading 4')}
        type={getPluginType(editor, ELEMENT_H4)}
        icon={<Looks4 />}
      />
      <BlockToolbarButton
        tooltip={tooltip('Heading 5')}
        type={getPluginType(editor, ELEMENT_H5)}
        icon={<Looks5 />}
      />
      <BlockToolbarButton
        tooltip={tooltip('Heading 6')}
        type={getPluginType(editor, ELEMENT_H6)}
        icon={<Looks6 />}
      />
      <BlockToolbarButton
        tooltip={tooltip('Block Quote (⌘+⇧+.)')}
        type={getPluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={<FormatQuote />}
      />
      <CodeBlockToolbarButton icon={<CodeBlock />} />
    </>
  )
}

export default BasicElementToolbarButtons
