import * as React from 'react';

export interface LogoProps {
  /** Which form to render. @default "lockup" */
  variant?: 'lockup' | 'mark' | 'wordmark';
  /** Height of the mark in px (wordmark scales with it). @default 28 */
  size?: number;
  /** Accessible label. @default "UniCode" */
  title?: string;
  style?: React.CSSProperties;
}

/**
 * The UniCode logo: coral squircle mark with a terminal-prompt glyph, plus a
 * two-tone wordmark. PLACEHOLDER — replace with the real brand mark when available.
 */
export declare function Logo(props: LogoProps): JSX.Element;
