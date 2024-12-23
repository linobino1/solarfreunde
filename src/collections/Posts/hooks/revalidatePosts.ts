import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import type { Post } from '@/payload-types'
import { revalidateSite } from '@/util/revalidateSite'

export const revalidatePost: CollectionAfterChangeHook<Post> = ({ context }) => {
  if (context.skipRevalidate) return
  revalidateSite()
}

export const revalidatePostDelete: CollectionAfterDeleteHook<Post> = ({ context }) => {
  if (context.skipRevalidate) return
  revalidateSite()
}
