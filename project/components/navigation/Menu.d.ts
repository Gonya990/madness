import * as React from 'react';

export interface MenuItem {
  /** Item kind. Omit for a normal action item. */
  type?: 'item' | 'separator' | 'heading';
  label?: React.ReactNode;
  /** Lucide icon name. */
  icon?: string;
  /** Right-aligned shortcut hint (e.g. "⌘K"). */
  shortcut?: string;
  /** Red, destructive styling. */
  danger?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface MenuProps {
  /** Trigger element, or a render fn receiving `{ open }`. */
  trigger: React.ReactNode | ((state: { open: boolean }) => React.ReactNode);
  items: MenuItem[];
  /** Horizontal anchor. @default "start" */
  align?: 'start' | 'end';
  /** Open upward instead of down. @default "down" */
  placement?: 'down' | 'up';
  style?: React.CSSProperties;
}

/** Dropdown menu — overflow actions, account menus, context actions. */
export declare function Menu(props: MenuProps): JSX.Element;
