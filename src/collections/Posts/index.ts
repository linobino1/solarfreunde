import type { CollectionConfig } from 'payload'
import { revalidatePost, revalidatePostDelete } from './hooks/revalidatePosts'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Beitrag',
    plural: 'Beiträge',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date'],
  },
  defaultSort: '-date',
  hooks: {
    afterChange: [revalidatePost],
    afterDelete: [revalidatePostDelete],
  },
  fields: [
    {
      name: 'title',
      label: 'Titel',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      label: 'Datum',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'image',
      label: 'Bild',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      label: 'Inhalt',
      type: 'richText',
      required: true,
    },
  ],
}
