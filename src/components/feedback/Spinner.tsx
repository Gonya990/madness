import React from 'react';
import { injectStyle, cx } from '../../lib/ui';

const CSS = `
.uc-spinner{
  display:inline-block; border-radius:50%;
  border:2px solid var(--color-border); border-top-color:var(--color-primary);
  animation: uc-spin .65s linear infinite;
}
@keyframes uc-spin{ to{ transform:rotate(360deg); } }
`;

interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number;
  thickness?: number;
  color?: string;
  label?: string;
}

export function Spinner({ size = 18, thickness = 2, color, label = 'Загрузка', className = '', style = {}, ...rest }: SpinnerProps) {
  injectStyle('spinner', CSS);
  return (
    <span
      role="status"
      aria-label={label}
      className={cx('uc-spinner', className)}
      style={{ width: size, height: size, borderWidth: thickness, borderTopColor: color || 'var(--color-primary)', ...style }}
      {...rest}
    />
  );
}
