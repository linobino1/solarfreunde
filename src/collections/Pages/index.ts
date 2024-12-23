import { Content } from '@/blocks/Content/config'
import { Posts } from '@/blocks/Posts/config'
import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'
import { revalidatePage, revalidatePageDelete } from './hooks/revalidatePage'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Seite',
    plural: 'Seiten',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'url'],
  },
  hooks: {
    afterChange: [revalidatePage],
    afterDelete: [revalidatePageDelete],
  },
  fields: [
    {
      name: 'title',
      label: 'Titel',
      type: 'text',
      required: true,
    },
    ...slugField('title'),
    {
      name: 'url',
      virtual: true,
      label: 'URL',
      type: 'text',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
      hooks: {
        afterRead: [
          ({ siblingData: { slug } }) => {
            return slug === 'home' ? '/' : `/${slug}`
          },
        ],
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'hero',
              label: false,
              type: 'radio',
              defaultValue: 'logo',
              options: [
                { label: 'Logo', value: 'logo' },
                { label: 'Kein Hero', value: 'none' },
              ],
            },
          ],
        },
        {
          label: 'Inhalt',
          fields: [
            {
              name: 'blocks',
              label: false,
              type: 'blocks',
              blocks: [Content, Posts],
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
