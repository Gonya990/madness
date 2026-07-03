import * as React from 'react';

export interface TabItem {
  value: string | number;
  label: React.ReactNode;
  /** Lucide icon name. */
  icon?: string;
  /** Count/badge shown after the label. */
  badge?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  /** Tabs as strings or `{ value, label, icon, badge, disabled }`. */
  items: Array<TabItem | string>;
  /** Controlled active value. */
  value?: string | number;
  /** Uncontrolled initial value (defaults to the first tab). */
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
  /** @default "line" */
  variant?: 'line' | 'pill';
  style?: React.CSSProperties;
}

/** Horizontal tab navigation; you render the matching panel. */
export declare function Tabs(props: TabsProps): JSX.Element;
