import * as React from 'react';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Options as strings or `{ value, label, disabled }`. Omit to pass <option> children. */
  options?: Array<SelectOption | string | number>;
  /** Disabled first option shown when nothing is selected. */
  placeholder?: string;
}

/** Native select with UniCode chrome and a custom chevron. */
export declare function Select(props: SelectProps): JSX.Element;
