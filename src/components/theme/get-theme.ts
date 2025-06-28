'use client'
import { ThemeMode } from '@/types/themeMode'
import { createTheme, Theme, ThemeOptions } from '@mui/material/styles'
import { darkPalette, lightPalette } from '@/components/theme/palette'

export const getTheme = (mode: ThemeMode): Theme => {
  const themeOptions: ThemeOptions = {
    palette: mode === 'dark' ? darkPalette : lightPalette,
    typography: {
      fontFamily: `var(--font-geist-sans), var(--font-geist-mono), sans-serif`,
    },
  }

  return createTheme(themeOptions)
}
