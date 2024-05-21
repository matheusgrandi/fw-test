import { TypographyOptions } from '@mui/material/styles/createTypography'

export const FONT_PRIMARY = 'DM Sans'
export const FONT_SECONDARY = 'Inter'

const defaultTypography: TypographyOptions = {
  fontFamily: `${FONT_PRIMARY}, ${FONT_SECONDARY}`,
  h1: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 500,
    fontSize: '1.875rem',
    lineHeight: 2.494,
  },
  h2: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 500,
    fontSize: '1.875rem',
    lineHeight: '2.494rem',
  },
  h3: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    fontSize: '2.25rem',
    lineHeight: 1.2,
  },
  h4: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: '1.938rem',
  },
}

export default defaultTypography
