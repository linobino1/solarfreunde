import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'
import { ContentBlockComponent } from './Content/Component'
import { PostsBlockComponent } from './Posts/Component'

export const blockComponents = {
  content: ContentBlockComponent,
  posts: PostsBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['blocks'][number][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error these types might not match exactly */}
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
