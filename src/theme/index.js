import PropTypes from 'prop-types';
import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import { palette, _palette } from './palette';
import shadows from './shadows';
import typography from './typography';
import GlobalStyles from './global-styles';
import customShadows from './custom-shadows';
import componentsOverride from './overrides';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ mode, children }) {
  const themeOptions = useMemo(
    () => ({
      palette: _palette(mode),
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows({ palette }),
      customShadows: customShadows({ palette }),
    }),
    [mode]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
