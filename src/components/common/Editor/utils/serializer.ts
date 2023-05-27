import { createPlateEditor, serializeHtml, TElement } from '@udecode/plate'
import plugins from '../plugins'

export function serializeHTML(nodes: TElement[]) {
  const mockEditor = createPlateEditor({
    plugins
  })

  const html = serializeHtml(mockEditor, {
    nodes
  })

  return html
}
