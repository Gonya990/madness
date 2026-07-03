import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'subtle' | 'ghost' | 'danger';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name shown before the label. */
  leftIcon?: string;
  /** Lucide icon name shown after the label. */
  rightIcon?: string;
  /** Show a spinner and disable. @default false */
  loading?: boolean;
  /** Stretch to container width. @default false */
  fullWidth?: boolean;
  /** Render as an <a> with this href. */
  href?: string;
}

/**
 * The primary UniCode button.
 */
export declare function Button(props: ButtonProps): JSX.Element;
