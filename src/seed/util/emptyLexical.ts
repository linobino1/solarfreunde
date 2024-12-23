export const emptyLexical = {
  root: {
    type: 'root',
    format: '' as const,
    indent: 0,
    version: 1,
    direction: 'ltr' as const,
    children: [
      {
        format: '',
        type: 'paragraph',
        version: 1,
        children: [
          {
            type: 'text',
            text: ' ',
          },
        ],
      },
    ],
  },
}
