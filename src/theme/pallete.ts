import { PaletteOptions } from '@mui/material'

export const baseColors = {
  black: '#000000',
  gray300: '#F3F4F6',
  gray700: '#374151',
  gray900: '#1F2937',
  yellow: '#FDE047',
  white: '#FFFFFF',
}

const defaultPalette: PaletteOptions = {
  mode: 'light',
  primary: { main: baseColors.yellow },
  secondary: { main: baseColors.gray700 },
  background: { default: baseColors.gray300 },
  text: { primary: baseColors.gray900, secondary: baseColors.gray700 },
}

export default defaultPalette
