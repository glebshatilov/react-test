import { createPlugins } from '@udecode/plate'
import { plateUI } from './plateUI'
import pluginList from './list'

const plugins = createPlugins(
  pluginList,
  {
    components: plateUI
  }
)

export default plugins
