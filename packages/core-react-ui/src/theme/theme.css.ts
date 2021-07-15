import { createTheme } from '@vanilla-extract/css';
import { Theme } from '@newrade/core-design-system';

const theme: Theme = {
  brandColor: 'blue',
  textColor: 'white',
};

export const [themeClass, themeVars] = createTheme(theme);
