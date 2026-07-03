import * as React from 'react';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "neutral" */
  variant?: 'neutral' | 'success' | 'danger' | 'warning' | 'info';
  title?: React.ReactNode;
  /** Lucide icon name; `null` hides it; omit for variant default. */
  icon?: string | null;
  /** Optional inline action button. */
  action?: { label: string; onClick: () => void };
  /** Show a dismiss button wired to this handler. */
  onClose?: () => void;
}

/**
 * A single transient notification. Presentational only — the consuming app
 * positions it (usually bottom-right), manages the queue and auto-dismiss.
 */
export declare function Toast(props: ToastProps): JSX.Element;
