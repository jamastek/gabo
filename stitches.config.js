import { createStitches } from "@stitches/react"
import {
  gray,
  blue,
  red,
  green,
  tomato,
  grayDark,
  tomatoDark,
  blueDark,
  redDark,
  greenDark,
} from "@radix-ui/colors"

export const { styled, css, getCssText, createTheme } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...tomato,
    },
  },
})

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...tomatoDark,
  },
})
