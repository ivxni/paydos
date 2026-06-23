import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'neutral' */
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger';
  /** Filled instead of outlined. @default false */
  solid?: boolean;
  children?: React.ReactNode;
}

/** Small upper-case status / category badge. */
export declare function Badge(props: BadgeProps): JSX.Element;
