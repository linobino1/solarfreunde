import type { Payload } from 'payload'
import type { Media } from '@/payload-types'
import type { CollectionSlug, RequiredDataFromCollectionSlug } from 'payload'

export type MediaMap = Map<string, Media>

export type SeedContext = {
  payload: Payload
  media: MediaMap
}

export type DocGenerator<T extends CollectionSlug> = (args: {
  context: SeedContext
}) => RequiredDataFromCollectionSlug<T>
