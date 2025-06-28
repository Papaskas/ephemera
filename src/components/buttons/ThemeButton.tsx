'use client'

import { ButtonOwnProps } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import React, { useEffect } from 'react';
import Button from '@/components/buttons/Button';
import { useTheme } from 'next-themes';

const ThemeButton = (
  {
    classes,
    color,
    disabled,
    disableElevation,
    disableFocusRipple,
    endIcon,
    fullWidth,
    href,
    loading,
    loadingIndicator,
    loadingPosition,
    size,
    startIcon,
    sx,
    variant = 'contained',
  }: ButtonOwnProps
) => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return null

  const isDark = resolvedTheme === 'dark'
  const themeIcon = isDark ? <LightMode /> : <DarkMode />

  const handleToggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <Button
      classes={ classes }
      color={ color }
      disabled={ disabled }
      disableElevation={ disableElevation }
      disableFocusRipple={ disableFocusRipple }
      endIcon={ endIcon }
      fullWidth={ fullWidth }
      href={ href }
      loading={ loading }
      loadingIndicator={ loadingIndicator }
      loadingPosition={ loadingPosition }
      size={ size }
      startIcon={ startIcon }
      sx={ sx }
      variant={ variant }
      onClick={ handleToggleTheme }
    >
      { themeIcon }
    </Button>
  )
}

export default ThemeButton
