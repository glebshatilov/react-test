import { serializeHTML } from '@/components/common/Editor/utils/serializer.js'
import Editor from '@/components/common/Editor/Editor'
import { TElement } from '@udecode/plate'

interface Props {
  content: TElement[]
}

const usePlateInstance = true

function ArticleContent({ content }: Props) {
  if (usePlateInstance) {
    return (
      <Editor value={content} readOnly />
    )
  }

  const html = serializeHTML(content)

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default ArticleContent
