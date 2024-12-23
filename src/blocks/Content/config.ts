import { Block } from 'payload'

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Inhalt',
    plural: 'Inhaltsblöcke',
  },
  interfaceName: 'ContentBlock',
  fields: [
    {
      name: 'content',
      label: false,
      type: 'richText',
    },
  ],
}
