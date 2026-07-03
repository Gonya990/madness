import * as React from 'react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "info" */
  variant?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
  /** Bold first line. */
  title?: React.ReactNode;
  /** Lucide icon name. Pass `null` to hide; omit for the variant default. */
  icon?: string | null;
  /** Show a dismiss button wired to this handler. */
  onClose?: () => void;
}

/** Inline callout / banner for contextual messages (not transient — see Toast). */
export declare function Alert(props: AlertProps): JSX.Element;
