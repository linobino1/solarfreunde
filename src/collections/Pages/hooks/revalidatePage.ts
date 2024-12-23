import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath } from 'next/cache'
import { Page } from '@/payload-types'

export const revalidatePage: CollectionAfterChangeHook<Page> = ({ doc, context }) => {
  if (context.skipRevalidate) return
  if (!doc.url) return
  revalidatePath(doc.url)
}

export const revalidatePageDelete: CollectionAfterDeleteHook<Page> = ({ doc, context }) => {
  if (context.skipRevalidate) return
  if (!doc.url) return
  revalidatePath(doc.url)
}
