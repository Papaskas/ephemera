'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material';
import { palettes } from '@/providers/theme/palettes';

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      { ...props }
    >
      <CssVarsProvider theme={ palettes } defaultMode="system">
        { children }
      </CssVarsProvider>
    </NextThemesProvider>
  )
}

export default ThemeProvider
