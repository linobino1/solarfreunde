import type { CollectionSlug, DataFromCollectionSlug } from 'payload'
import type { DocGenerator, SeedContext } from '../types'

/**
 * Create a new doc in the database with translated data.
 * If the doc is a page or media, it will be stored in the context by its slug (which can be overridden).
 */
export const seedDoc = async <T extends CollectionSlug>({
  collection,
  generator,
  slug,
  filePath,
  context,
}: {
  collection: T
  generator: DocGenerator<T>
  slug?: string // overrides the slug for storing the doc in the context
  filePath?: string
  context: SeedContext
}): Promise<DataFromCollectionSlug<T> | null> => {
  const { payload } = context

  const data = generator({ context })
  slug ??= 'slug' in data ? (data.slug as string) : `${data.id}`
  payload.logger.info(`— Seeding ${collection} doc: ${slug}`)

  let doc: DataFromCollectionSlug<T> | null = null
  try {
    doc = await payload.create<T, typeof collection>({
      collection,
      data,
      filePath,
      context: {
        skipRevalidate: true,
      },
    })
  } catch (e) {
    payload.logger.error(e)
    payload.logger.error(`— ERROR. Failed to seed ${collection} doc: ${slug}`)
    return null
  }

  if (collection === 'media') {
    context.media.set(slug, doc as DataFromCollectionSlug<'media'>)
  }

  payload.logger.info(`— DONE. Seeded ${collection} doc: ${slug}`)

  return doc
}
