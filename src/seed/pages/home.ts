import type { DocGenerator } from '../types'

export const home: DocGenerator<'pages'> = ({ context: { media } }) => ({
  title: 'Solarfreunde Esslingen',
  slug: 'home',
  slugLock: false,
  meta: {
    image: media.get('img1'),
    description:
      'Die Solarfreunde betreiben eine Photovoltaik-Anlage auf dem Dach des Kanuvereins Esslingen mit 30 kWh.',
  },
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
                  text: 'Die Solarfreunde betreiben eine Photovoltaik-Anlage mit 30 kWh auf dem Dach des Kanuvereins Esslingen.',
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
                  text: 'Kontakt',
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
                  type: 'autolink',

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

                  fields: {
                    linkType: 'custom',
                    url: 'mailto:sonne@solarfreunde-esslingen.de',
                  },
                  format: '',
                  indent: 0,
                  version: 2,
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
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Solarfreunde-Esslingen GbR',
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
              textFormat: 1,
              textStyle: '',
            },

            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Aktuelles',
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
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'root',
          version: 1,
        },
      },
    },
    {
      blockType: 'posts',
    },
  ],
})
