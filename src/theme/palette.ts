import { PaletteOptions } from '@mui/material'

export const baseColors = {
  black: '#000000',
  gray100: '#F3F4F6',
  gray400: '#D1D5DB',
  gray500: '#6B7280',
  gray700: '#374151',
  gray900: '#1F2937',
  blue700: '#3B82F6',
  yellow: '#FDE047',
  white: '#FFFFFF',
}

const defaultPalette: PaletteOptions = {
  mode: 'light',
  primary: { main: baseColors.yellow },
  secondary: { main: baseColors.gray700 },
  background: { default: baseColors.gray400 },
  text: { primary: baseColors.gray900, secondary: baseColors.gray700 },
  info: { main: baseColors.blue700 },
}

export default defaultPalette
