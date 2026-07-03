import * as React from 'react';

export interface TooltipProps {
  /** Tooltip text. If empty, children render without a tooltip. */
  label: React.ReactNode;
  /** @default "top" */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Hover open delay (ms). @default 120 */
  delay?: number;
  /** The single trigger element. */
  children: React.ReactNode;
  className?: string;
}

/** Lightweight hover/focus tooltip. Wrap a single interactive element. */
export declare function Tooltip(props: TooltipProps): JSX.Element;
