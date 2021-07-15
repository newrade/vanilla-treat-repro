import React, { ButtonHTMLAttributes, useRef } from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from './button.treat';

type AsType = 'button' | 'a';

type Props = ButtonHTMLAttributes<any>;

export const ButtonTreat = React.forwardRef<any, Props>(
  ({ id, style, className, role, children, ...props }, forwardedRef) => {
    const styles = useStyles(stylesRef);
    const localRef = useRef<HTMLButtonElement>(null);
    const ref = forwardedRef
      ? (forwardedRef as React.RefObject<HTMLButtonElement>)
      : localRef;

    return (
      <button
        ref={ref}
        id={id}
        style={style}
        className={`${className} ${styles.base}`}
      >
        {children}
      </button>
    );
  }
);
