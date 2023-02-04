import { space } from '../../../tokens/src/space'
import { radii } from '../../../tokens/src/radii'
import { lineHeights } from '../../../tokens/src/line-heights'
import { fonts } from '../../../tokens/src/fonts'
import { fontWeights } from '../../../tokens/src/font-weights'
import { fontSizes } from '../../../tokens/src/font-sizes'
import { colors } from '../../../tokens/src/colors'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    hieght: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
