import { HeadingToolbar, ToolbarProps } from '@udecode/plate'
import './Toolbar.scss'

import BasicMarkToolbarButtons from './BasicMarkToolbarButtons'
import BasicElementToolbarButtons from './BasicElementToolbarButtons'

const Toolbar = (props: ToolbarProps) => (
  <HeadingToolbar {...props}>
    <BasicElementToolbarButtons />
    <BasicMarkToolbarButtons />
  </HeadingToolbar>
)

export default Toolbar
