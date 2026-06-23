import * as React from 'react';

/**
 * Frosted-glass surface container — translucent fill, backdrop blur,
 * hairline border and top inner highlight. The core Paydos surface.
 * @startingPoint section="Layout" subtitle="Frosted glass surface" viewport="700x300"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Hover lift + brighter glass. @default false */
  interactive?: boolean;
  /** Brighter silver-lit glass for highlighted items. @default false */
  feature?: boolean;
  /** CSS padding. @default 'var(--space-6)' */
  padding?: string;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
