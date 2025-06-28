'use client'

import { Button as MaterialButton, ButtonOwnProps } from '@mui/material'
import * as React from 'react'

const Button = (
  {
    children,
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
    onClick,
    variant = 'contained',
  }: ButtonOwnProps & { onClick: React.MouseEventHandler<HTMLButtonElement> | undefined }
) => {
  return (
    <MaterialButton
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
      onClick={ onClick }
    >
      { children }
    </MaterialButton>
  )
}

export default Button
