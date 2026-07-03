import * as React from 'react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Diameter in px. @default 18 */
  size?: number;
  /** Ring thickness in px. @default 2 */
  thickness?: number;
  /** Active arc color. @default var(--color-primary) */
  color?: string;
  /** Accessible label. @default "Loading" */
  label?: string;
}

/** Indeterminate loading spinner. */
export declare function Spinner(props: SpinnerProps): JSX.Element;
