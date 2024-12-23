import { getPayload } from 'payload'
import config from '@/payload.config'
import { RichText } from '@/components/RichText'
import { PostsBlock } from '@/payload-types'
import { Image } from '@/components/Image'
import { Collapsible } from '@/components/Collapsible'
import { Gutter } from '@/components/Gutter'
import { Date } from '@/components/Date'

const getData = async () => {
  const payload = await getPayload({
    config,
  })
  const posts = await payload.find({
    collection: 'posts',
    depth: 2,
  })

  return {
    posts,
  }
}

export const PostsBlockComponent: React.FC<PostsBlock> = async () => {
  const { posts } = await getData()
  return (
    <Gutter>
      <ul className="list-none p-0 space-y-8 my-6 prose max-w-none">
        {posts.docs.map(({ title, date, image, content }, index) => (
          <li key={index}>
            <Image src={image} alt={title} className="w-full rounded-lg" />
            <Date iso={date} className="text-green-500/80 text-sm mt-3 block" />
            <h3 className="mt-0 mb-2">{title}</h3>
            <Collapsible>
              <RichText data={content} enableMarginBlock={false} className="mb-4 max-w-prose" />
            </Collapsible>
          </li>
        ))}
      </ul>
    </Gutter>
  )
}
