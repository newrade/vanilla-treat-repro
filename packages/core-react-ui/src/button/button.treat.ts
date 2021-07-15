import { Theme } from '@newrade/core-design-system';
import { style } from 'treat';

/**
 * Base
 */
export const base = style((theme: Theme) => ({
  display: 'block',
  color: theme.textColor,
  backgroundColor: theme.brandColor,
  padding: 16,
}));
