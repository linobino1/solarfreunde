import type { DocGenerator } from '../types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const legal: DocGenerator<'pages'> = ({ context: { media } }) => ({
  title: 'Impressum',
  blocks: [
    {
      blockType: 'content',

      content: {
        root: {
          children: [
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Impressum',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'center',
              indent: 0,
              type: 'heading',
              version: 1,
              tag: 'h1',
            },

            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Angaben gemäß § 5 TMG:',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'center',
              indent: 0,
              type: 'paragraph',
              version: 1,
              textFormat: 0,
              textStyle: '',
            },

            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Solarfreunde Esslingen GbR (Gesellschaft bürgerlichen Rechts)',
                  type: 'text',
                  version: 1,
                },

                {
                  type: 'linebreak',
                  version: 1,
                },

                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Innere Brücke 6',
                  type: 'text',
                  version: 1,
                },

                {
                  type: 'linebreak',
                  version: 1,
                },

                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '73728 Esslingen am Neckar',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'center',
              indent: 0,
              type: 'paragraph',
              version: 1,
              textFormat: 0,
              textStyle: '',
            },

            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Gesetzlich vertreten durch die Gesellschafter Samuel und Philipp Hilsheimer',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'center',
              indent: 0,
              type: 'paragraph',
              version: 1,
              textFormat: 0,
              textStyle: '',
            },

            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Kontakt ',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'center',
              indent: 0,
              type: 'heading',
              version: 1,
              tag: 'h2',
            },

            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'E-Mail: ',
                  type: 'text',
                  version: 1,
                },

                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'sonne@solarfreunde-esslingen.de',
                      type: 'text',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  type: 'link',
                  version: 3,

                  fields: {
                    doc: null,
                    linkType: 'custom',
                    newTab: false,
                    url: 'mailto:sonne@solarfreunde-esslingen.de',
                  },
                  id: '676945721f40fcdfcadf83fa',
                },
              ],
              direction: 'ltr',
              format: 'center',
              indent: 0,
              type: 'paragraph',
              version: 1,
              textFormat: 0,
              textStyle: '',
            },

            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Tel: ‭+49 177 8640071‬',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'center',
              indent: 0,
              type: 'paragraph',
              version: 1,
              textFormat: 0,
              textStyle: '',
            },

            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Verantwortlich Für Den Inhalt Dieser Internetpräsenz:',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'center',
              indent: 0,
              type: 'heading',
              version: 1,
              tag: 'h3',
            },

            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Samuel Hilsheimer',
                  type: 'text',
                  version: 1,
                },

                {
                  type: 'linebreak',
                  version: 1,
                },

                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Innere Brücke 6',
                  type: 'text',
                  version: 1,
                },

                {
                  type: 'linebreak',
                  version: 1,
                },

                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '73728 Esslingen am Neckar',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'center',
              indent: 0,
              type: 'paragraph',
              version: 1,
              textFormat: 0,
              textStyle: '',
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'root',
          version: 1,
        },
      },
    },
  ],
})
