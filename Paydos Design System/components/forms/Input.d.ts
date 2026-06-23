import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
}

/** Dark-surface text input with a purple focus ring. */
export declare function Input(props: InputProps): JSX.Element;
