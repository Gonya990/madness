import * as React from 'react';

export interface ProgressBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  /** Current value. @default 0 */
  value?: number;
  /** Maximum value. @default 100 */
  max?: number;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Fill color. @default var(--color-primary) */
  color?: string;
  /** Animate as unknown-duration. @default false */
  indeterminate?: boolean;
  /** Accessible label. */
  label?: string;
}

/** Determinate or indeterminate progress bar. */
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
