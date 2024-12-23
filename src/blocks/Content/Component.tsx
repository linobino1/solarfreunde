import { Gutter } from '@/components/Gutter'
import { RichText } from '@/components/RichText'
import { ContentBlock } from '@/payload-types'

export const ContentBlockComponent: React.FC<ContentBlock> = ({ content }) => {
  return content ? (
    <Gutter>
      <RichText data={content} />
    </Gutter>
  ) : null
}
