import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** Initial visible rows. @default 4 */
  rows?: number;
  /** Monospace font (for code / config). @default false */
  mono?: boolean;
}

/** Multi-line text input. */
export declare function Textarea(props: TextareaProps): JSX.Element;
