import * as React from 'react';

/**
 * Signature Okey game-tile motif — decorative brand accent.
 * @startingPoint section="Brand" subtitle="Okey tile motif" viewport="700x230"
 */
export interface OkeyTileProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tile face, e.g. '01' or '60'. @default '01' */
  value?: string;
  /** Numeral tint. @default 'ink' */
  color?: 'ink' | 'purple' | 'silver';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
}

export declare function OkeyTile(props: OkeyTileProps): JSX.Element;
