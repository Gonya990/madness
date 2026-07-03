import * as React from 'react';

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> {
  /** Lucide icon name. */
  icon: string;
  /** Accessible label (also the tooltip title). Required. */
  label: string;
  /** @default "ghost" */
  variant?: 'ghost' | 'subtle' | 'outline' | 'primary';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Fully rounded. @default false */
  round?: boolean;
}

/** A square/round button holding a single icon. Used heavily in toolbars and the editor. */
export declare function IconButton(props: IconButtonProps): JSX.Element;
