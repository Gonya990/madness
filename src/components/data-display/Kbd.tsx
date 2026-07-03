import React from 'react';
import { injectStyle, cx } from '../../lib/ui';

const CSS = `
.uc-kbd{
  display:inline-flex; align-items:center; justify-content:center; min-width:20px; height:20px;
  padding:0 5px; font-family:var(--font-mono); font-size:var(--text-xs); font-weight:var(--weight-semibold);
  color:var(--color-text-secondary); background:var(--color-surface);
  border:1px solid var(--color-border-strong); border-bottom-width:2px;
  border-radius:var(--radius-sm); line-height:1; white-space:nowrap;
}
`;

interface KbdProps extends React.HTMLAttributes<HTMLElement> {}

export function Kbd({ children, className = '', style = {}, ...rest }: KbdProps) {
  injectStyle('kbd', CSS);
  return <kbd className={cx('uc-kbd', className)} style={style} {...rest}>{children}</kbd>;
}
