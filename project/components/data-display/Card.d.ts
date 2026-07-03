import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Header title. */
  title?: React.ReactNode;
  /** Header subtitle below the title. */
  subtitle?: React.ReactNode;
  /** Node(s) rendered at the top-right of the header (buttons, menu). */
  actions?: React.ReactNode;
  /** Footer content. */
  footer?: React.ReactNode;
  /** @default "default" */
  variant?: 'default' | 'elevated' | 'ghost';
  /** Body padding. @default "md" */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Hover-lift + pointer for clickable cards. @default false */
  interactive?: boolean;
  /** Element/tag to render as. @default "div" */
  as?: any;
}

/**
 * The standard surface container — projects, settings panels, list items, etc.
 */
export declare function Card(props: CardProps): JSX.Element;
