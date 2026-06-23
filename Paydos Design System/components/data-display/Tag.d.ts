import * as React from 'react';

export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Selected state. @default false */
  active?: boolean;
  children?: React.ReactNode;
}

/** Selectable pill chip for menu / session filters. */
export declare function Tag(props: TagProps): JSX.Element;
