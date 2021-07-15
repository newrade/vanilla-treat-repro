import { style } from '@vanilla-extract/css';
import { themeVars } from '../theme/theme.css';

export const base = style({
  display: 'block',
  color: themeVars.textColor,
  backgroundColor: themeVars.brandColor,
  padding: 16,
});
