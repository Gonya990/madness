import * as React from 'react';

export interface RadioOption {
  value: string | number;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps {
  /** Shared input name (auto-generated if omitted). */
  name?: string;
  /** Controlled selected value. */
  value?: string | number;
  /** Uncontrolled initial value. */
  defaultValue?: string | number;
  /** (value, event) => void */
  onChange?: (value: string | number, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Options as strings or `{ value, label, disabled }`. */
  options: Array<RadioOption | string | number>;
  /** @default "vertical" */
  orientation?: 'vertical' | 'horizontal';
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** A group of mutually-exclusive radio options. */
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
