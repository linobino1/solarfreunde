import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { ZeptomailTransport } from 'nodemailer-zeptomail-transport'
import { createTransport } from 'nodemailer'
import { de } from 'payload/i18n/de'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Pages, Posts, Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  i18n: {
    supportedLanguages: { de },
    fallbackLanguage: 'de',
  },
  // The email adapter is used to send contact form submissions (admins / clients) and password reset emails (admins)
  ...(process.env.ZEPTOMAIL_API_KEY
    ? {
        email: nodemailerAdapter({
          transport: createTransport(
            new ZeptomailTransport({
              apiKey: process.env.ZEPTOMAIL_API_KEY!,
              region: 'eu',
            }),
          ),
          defaultFromAddress: 'no-reply@solarfreunde-esslingen.de',
          defaultFromName: 'Solarfreunde Esslingen',
        }),
      }
    : {}),
  plugins: [
    seoPlugin({
      collections: ['pages'],
      uploadsCollection: 'media',
    }),
    s3Storage({
      enabled: !!process.env.S3_BUCKET,
      config: {
        endpoint: process.env.S3_ENDPOINT,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY || '',
          secretAccessKey: process.env.S3_SECRET_KEY || '',
        },
        region: process.env.S3_REGION,
      },
      bucket: process.env.S3_BUCKET || '',
      collections: {
        media: {
          prefix: 'media/',
        },
      },
    }),
  ],
})
