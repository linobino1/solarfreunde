import type { PayloadRequest, CollectionSlug, GlobalSlug, Payload } from 'payload'
import type { SeedContext } from './types'
import { readdirSync, rmSync, existsSync } from 'fs'
import path from 'path'
import { globSync } from 'glob'
import { fileURLToPath } from 'url'
import 'dotenv/config.js'
import { seedDoc } from './util/seedDoc'
import { post1 } from './posts/post1'
import { home } from './pages/home'
import { post2 } from './posts/post2'
import { legal } from './pages/legal'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const collections: CollectionSlug[] = ['media', 'pages', 'posts']
const globals: GlobalSlug[] = []

export const seed = async (payload: Payload, req?: PayloadRequest): Promise<void> => {
  payload.logger.info('Seeding database...')

  payload.logger.info(`— Clearing media...`)
  const mediaDir = path.resolve(dirname, '../../media')
  if (existsSync(mediaDir)) {
    readdirSync(mediaDir).forEach((file) => rmSync(path.join(mediaDir, file), { recursive: true }))
  } else {
    payload.logger.error(`— Media directory not found: ${mediaDir}`)
  }

  payload.logger.info(`— Clearing collections and globals...`)
  await Promise.all([
    ...collections.map(async (collection) =>
      payload.delete({
        collection: collection as 'media',
        where: {},
        req,
        context: {
          skipRevalidate: true,
        },
      }),
    ),
    ...globals.map(async (global) =>
      payload.updateGlobal({
        slug: global,
        data: {},
        req,
        context: {
          skipRevalidate: true,
        },
      }),
    ),
  ])

  const context: SeedContext = {
    payload,
    media: new Map(),
  }

  payload.logger.info(`— Seeding media...`)
  await Promise.all(
    globSync(path.resolve(dirname, 'media/*')).map(async (filePath) => {
      const slug = path.basename(filePath).split('.')[0]
      return seedDoc({
        collection: 'media',
        generator: () => ({
          alt: 'ein Bild',
        }),
        slug,
        filePath: path.resolve(dirname, filePath),
        context,
      })
    }),
  )

  payload.logger.info(`— Seeding pages...`)
  await Promise.all(
    [home, legal].map(async (generator) => seedDoc({ collection: 'pages', generator, context })),
  )

  payload.logger.info(`— Seeding posts...`)
  await Promise.all(
    [post1, post2].map(async (generator) => seedDoc({ collection: 'posts', generator, context })),
  )

  payload.logger.info('Seeded database successfully!')
}
