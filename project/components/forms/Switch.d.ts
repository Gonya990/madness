import * as React from 'react';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md';
}

/** On/off toggle — for immediate settings (no Save needed). */
export declare function Switch(props: SwitchProps): JSX.Element;
