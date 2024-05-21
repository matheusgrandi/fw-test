import { createTheme } from '@mui/material'

import defaultPalette from './palette'
import defaultTypography from './typography'

const createDefaultTheme = () => {
  const defaultTheme = createTheme({
    palette: defaultPalette,
    typography: defaultTypography,
  })

  const theme = defaultTheme
  theme.components = {
    ...defaultTheme.components,
  }

  return theme
}

export default createDefaultTheme
