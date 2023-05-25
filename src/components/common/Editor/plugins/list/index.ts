import {
  createBlockquotePlugin,
  createHeadingPlugin,
  createParagraphPlugin,
  createBoldPlugin,
  createItalicPlugin,
  createUnderlinePlugin,
  createStrikethroughPlugin,
  createCodePlugin
} from '@udecode/plate'

const pluginList = [
  createParagraphPlugin(),
  createBlockquotePlugin(),
  createHeadingPlugin(),
  createBoldPlugin(),
  createItalicPlugin(),
  createUnderlinePlugin(),
  createStrikethroughPlugin(),
  createCodePlugin()
]

export default pluginList
