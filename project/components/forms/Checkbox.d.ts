import * as React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Text label rendered to the right. Omit for a bare box. */
  label?: React.ReactNode;
  /** Mixed state (shows a dash). @default false */
  indeterminate?: boolean;
  /** @default "md" */
  size?: 'sm' | 'md';
}

/** Checkbox — controlled (`checked`) or uncontrolled (`defaultChecked`). */
export declare function Checkbox(props: CheckboxProps): JSX.Element;
