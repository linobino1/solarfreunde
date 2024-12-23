import { DefaultNodeTypes } from '@payloadcms/richtext-lexical'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  JSXConvertersFunction,
  RichText as RichTextWithoutBlocks,
} from '@payloadcms/richtext-lexical/react'

import { cn } from '@/util/cn'

type NodeTypes = DefaultNodeTypes

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {},
})

type Props = {
  data: SerializedEditorState
  enableProse?: boolean
  enableMarginBlock?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export const RichText: React.FC<Props> = ({
  className,
  enableProse = true,
  enableMarginBlock = true,
  ...props
}) => {
  return (
    <RichTextWithoutBlocks
      converters={jsxConverters}
      className={cn(
        {
          'prose md:prose-md max-w-none': enableProse,
          'disable-margin-block': !enableMarginBlock,
        },
        className,
      )}
      {...props}
    />
  )
}
