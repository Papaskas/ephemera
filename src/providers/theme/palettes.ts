import { ColorSystemOptions, extendTheme } from '@mui/material';

const lightPalette: Readonly<ColorSystemOptions> = {
  palette: {
    mode: 'light',

    primary: {
      main: '#276A49',
      light: '#ADF2C7', // primaryContainer
      dark: '#055232',  // onPrimaryContainer
      contrastText: '#FFFFFF', // onPrimary
    },

    secondary: {
      main: '#4E6355',
      light: '#D0E8D6', // secondaryContainer
      dark: '#374B3E',  // onSecondaryContainer
      contrastText: '#FFFFFF', // onSecondary
    },

    error: {
      main: '#BA1A1A',
      light: '#FFDAD6', // errorContainer
      dark: '#93000A',  // onErrorContainer
      contrastText: '#FFFFFF', // onError
    },

    warning: {
      main: '#FFDAD6', // errorContainer
      light: '#FFDAD6',
      dark: '#93000A',
      contrastText: '#93000A',
    },

    info: {
      main: '#3C6471', // используем tertiary как info
      light: '#BFE9F9', // tertiaryContainer
      dark: '#224C59',  // onTertiaryContainer
      contrastText: '#FFFFFF', // onTertiary
    },

    success: {
      main: '#276A49',
      light: '#ADF2C7',
      dark: '#055232',
      contrastText: '#FFFFFF',
    },

    common: {
      black: '#000000',
      white: '#FFFFFF',
      background: '#F6FBF4',
      onBackground: '#171D19',
    },

    // Grey shades (can be expanded if necessary)
    grey: {
      100: '#DCE5DC', // surfaceVariant
      200: '#C0C9C0', // outlineVariant
      300: '#717972', // outline
      400: '#404942', // onSurfaceVariant
    },

    text: {
      primary: '#171D19', // onBackground
      secondary: '#404942', // onSurfaceVariant
      disabled: '#717972', // outline
    },

    action: {
      active: '#276A49', // primary
      hover: '#EAEFE9', // surfaceContainer
      hoverOpacity: 0.08,
      selected: '#ADF2C7', // primaryContainer
      selectedOpacity: 0.16,
      disabled: '#717972', // outline
      disabledOpacity: 0.38,
      disabledBackground: '#DCE5DC', // surfaceVariant
      focus: '#91D5AC', // inversePrimary
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },

    background: {
      default: '#F6FBF4', // background
      paper: '#F6FBF4',   // surface
    },

    divider: '#DCE5DC',
  }
} as const

const darkPalette: Readonly<ColorSystemOptions> = {
  palette: {
    mode: 'dark',

    primary: {
      main: '#91D5AC',
      light: '#ADF2C7', // primaryContainer
      dark: '#055232',  // onPrimaryContainer
      contrastText: '#003921', // onPrimary
    },

    secondary: {
      main: '#B5CCBB',
      light: '#D0E8D6', // secondaryContainer
      dark: '#374B3E',  // onSecondaryContainer
      contrastText: '#213528', // onSecondary
    },

    error: {
      main: '#FFB4AB',
      light: '#FFDAD6', // errorContainer
      dark: '#93000A',  // onErrorContainer
      contrastText: '#690005', // onError
    },

    warning: {
      main: '#FFDAD6', // errorContainer
      light: '#FFDAD6',
      dark: '#93000A',
      contrastText: '#93000A',
    },

    info: {
      main: '#A4CDDC', // используем tertiary как info
      light: '#BFE9F9', // tertiaryContainer
      dark: '#224C59',  // onTertiaryContainer
      contrastText: '#043541', // onTertiary
    },

    success: {
      main: '#91D5AC',
      light: '#ADF2C7',
      dark: '#055232',
      contrastText: '#003921',
    },

    common: {
      black: '#000000',
      white: '#FFFFFF',
      background: '#0F1511',
      onBackground: '#DFE4DD',
    },

    grey: {
      100: '#404942', // surfaceVariant
      200: '#C0C9C0', // outlineVariant
      300: '#8A938B', // outline
      400: '#C0C9C0', // onSurfaceVariant
    },

    text: {
      primary: '#DFE4DD', // onBackground
      secondary: '#C0C9C0', // onSurfaceVariant
      disabled: '#8A938B', // outline
    },

    action: {
      active: '#91D5AC', // primary
      hover: '#262B27', // surfaceContainer
      hoverOpacity: 0.08,
      selected: '#055232', // primaryContainer
      selectedOpacity: 0.16,
      disabled: '#8A938B', // outline
      disabledOpacity: 0.38,
      disabledBackground: '#404942', // surfaceVariant
      focus: '#276A49', // inversePrimary
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },

    background: {
      default: '#0F1511', // background
      paper: '#0F1511',   // surface
    },

    divider: '#404942', // surfaceVariant
  }
} as const

export const palettes = extendTheme({
  colorSchemes: {
    light: lightPalette,
    dark: darkPalette,
  },
  cssVarPrefix: 'mui',
})
