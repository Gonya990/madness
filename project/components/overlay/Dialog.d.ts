import * as React from 'react';

export interface DialogProps {
  /** Whether the dialog is shown. */
  open: boolean;
  /** Called on Escape, overlay click, or close button. */
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Body content. */
  children?: React.ReactNode;
  /** Footer node — usually right-aligned buttons. */
  footer?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Close when the overlay is clicked. @default true */
  closeOnOverlay?: boolean;
  /** Close on Escape. @default true */
  closeOnEsc?: boolean;
  style?: React.CSSProperties;
}

/** Modal dialog (overlay + centered panel) with scroll-lock and dismissal. */
export declare function Dialog(props: DialogProps): JSX.Element;
