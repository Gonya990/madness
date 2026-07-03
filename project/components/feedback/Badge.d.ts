import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  /** Lucide icon name shown before the label. */
  leftIcon?: string;
  /** Filled (high-contrast) style instead of the default soft tint. @default false */
  solid?: boolean;
}

/** Small status pill / label. */
export declare function Badge(props: BadgeProps): JSX.Element;
