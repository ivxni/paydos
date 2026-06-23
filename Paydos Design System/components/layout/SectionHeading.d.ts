import * as React from 'react';

/**
 * Signature eyebrow + silver display-title lockup for section headers.
 * @startingPoint section="Layout" subtitle="Eyebrow + silver title" viewport="700x300"
 */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  /** @default 'left' */
  align?: 'left' | 'center';
  /** Tint eyebrow purple. @default false */
  accent?: boolean;
}

export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
