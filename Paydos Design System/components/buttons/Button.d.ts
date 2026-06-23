import * as React from 'react';

/**
 * Paydos call-to-action button — brushed chrome-silver primary,
 * frosted-glass secondary. Silver is the brand; buttons are never purple.
 * @startingPoint section="Buttons" subtitle="Silver primary, glass, outline & ghost" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'glass' | 'outline' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
