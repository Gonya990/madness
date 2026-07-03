import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label rendered above the input. */
  label?: React.ReactNode;
  /** Helper text below the input. */
  hint?: React.ReactNode;
  /** Error message — also flips the input into the invalid style. */
  error?: React.ReactNode;
  /** Lucide icon name shown inside the input, on the left. */
  leftIcon?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Use the monospace font (for paths, tokens, code-ish values). @default false */
  mono?: boolean;
}

/** Text input — the workhorse form control. */
export declare function Input(props: InputProps): JSX.Element;
