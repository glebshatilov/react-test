/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@udecode/plate-test-utils'
import { mapNodeId } from './utils/mapNodeId'

jsx

export const basicElementsValue: any = mapNodeId(
  <fragment>
    <hh1>🧱 Elements</hh1>
    <hh2>🔥 Basic Elements</hh2>
    <hp>These are the most common elements, known as blocks:</hp>
    <hh1>Heading 1</hh1>
    <hh2>Heading 2</hh2>
    <hh3>Heading 3</hh3>
    <hh4>Heading 4</hh4>
    <hh5>Heading 5</hh5>
    <hh6>Heading 6</hh6>
    <hblockquote>Blockquote</hblockquote>
    <hcodeblock lang="javascript">
      <hcodeline>const a = 'Hello';</hcodeline>
      <hcodeline>const b = 'World';</hcodeline>
    </hcodeblock>
  </fragment>
)

export const basicMarksValue: any = (
  <fragment>
    <hh1>💅 Marks</hh1>
    <hh2>💧 Basic Marks</hh2>
    <hp>
      The basic marks consist of text formatting such as bold, italic,
      underline, strikethrough, subscript, superscript, and code.
    </hp>
    <hp>
      You can customize the type, the component and the hotkey for each of
      these.
    </hp>
    <hp>
      <htext bold>This text is bold.</htext>
    </hp>
    <hp>
      <htext italic>This text is italic.</htext>
    </hp>
    <hp>
      <htext underline>This text is underlined.</htext>
    </hp>
    <hp>
      <htext bold italic underline>
        This text is bold, italic and underlined.
      </htext>
    </hp>
    <hp>
      <htext strikethrough>This is a strikethrough text.</htext>
    </hp>
    <hp>
      <htext code>This is an inline code.</htext>
    </hp>
  </fragment>
)
