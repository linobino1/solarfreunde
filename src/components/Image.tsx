import NextImage, { ImageProps } from 'next/image'
import React from 'react'
import { cn } from '@/util/cn'
import { Media } from '@/payload-types'

type Props = Omit<ImageProps, 'src'> & { src: Media | string }

export const Image: React.FC<Props> = ({ src, width, height, className, ...props }) => {
  if (typeof src === 'object') {
    if (!props.fill) {
      width ||= src.width ?? 0
      height ||= src.height ?? 0
    }
    src = src.url as string
  }

  return (
    <NextImage
      {...props}
      className={cn('bg-gray-50/50', className)}
      src={src}
      width={width}
      height={height}
    />
  )
}
