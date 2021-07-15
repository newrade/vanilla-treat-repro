import React, { ButtonHTMLAttributes, useRef } from 'react';
import * as styles from './button-vanilla.css';

type Props = any;

/**
 * General purpose button element, can be rendered using the AsElement={} prop.
 * @version 2
 */
export const ButtonVanilla = React.forwardRef<any, Props>(
  ({ id, style, className, children, ...props }, forwardedRef) => {
    return (
      <button
        id={id}
        style={style}
        className={`${className} ${styles.base}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
