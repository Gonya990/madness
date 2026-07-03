import * as React from 'react';

export interface IconProps {
  /** Lucide icon name in kebab-case — e.g. "play", "git-branch", "terminal". See https://lucide.dev/icons */
  name: string;
  /** Width & height in px. @default 18 */
  size?: number;
  /** Stroke width. @default 2 */
  strokeWidth?: number;
  /** Color (any CSS color). @default "currentColor" */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * UniCode's icon. Renders a Lucide glyph inline. The page must load the
 * Lucide UMD script (CDN) — see the Iconography section of the README.
 */
export declare function Icon(props: IconProps): JSX.Element;
