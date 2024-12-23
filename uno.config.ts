import { defineConfig, presetUno, presetWebFonts, presetWind, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWind(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: {
          name: 'Nunito',
          weights: [400, 600, 700],
        },
      },
    }),
    presetTypography({
      cssExtend: {
        p: {
          'line-height': '1.4',
        },
        h2: {
          'font-size': '1.6rem',
        },
      },
    }),
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#052B28',
      darkfont: {
        50: '#E8FED7',
        100: '#D4FDB4',
        200: '#A6FB65',
        300: '#7BF91A',
        400: '#55BD05',
        500: '#347303',
        600: '#285902',
        700: '#1F4602',
        800: '#142D01',
        900: '#0B1901',
        950: '#040A00',
      },
      green: {
        50: '#E8FED7',
        100: '#D4FDB4',
        200: '#A6FB65',
        300: '#7BF91A',
        400: '#55BD05',
        500: '#347303',
        600: '#285902',
        700: '#1F4602',
        800: '#142D01',
        900: '#0B1901',
        950: '#040A00',
      },
    },
    fontSize: {
      base: ['16px', '1.3'],
    },
  },
})
