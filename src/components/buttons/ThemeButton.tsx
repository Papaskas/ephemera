'use client'

import { ButtonOwnProps } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useColorMode } from '@/components/theme/color-mode-context';
import * as React from 'react';
import { useEffect } from 'react';
import { StrictStore } from 'strict-store';
import { storeKeys } from '@/domain/keys/storeKeys';
import Button from '@/components/buttons/Button';

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
  const { mode, toggleColorMode } = useColorMode()

  useEffect(() => {
    StrictStore.save(storeKeys.theme, mode)
  }, [mode])

  const themeIcon = mode === "dark" ? <LightMode /> : <DarkMode />

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
      onClick={ toggleColorMode }
    >
      { themeIcon }
    </Button>
  )
}

export default ThemeButton
