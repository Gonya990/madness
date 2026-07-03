import React from 'react';
import { injectStyle, cx } from '../lib/ui.js';

const CSS = `
.uc-progress{ width:100%; background:var(--color-surface-2); border-radius:var(--radius-full); overflow:hidden; }
.uc-progress__bar{ height:100%; background:var(--color-primary); border-radius:inherit; transition: width var(--dur-slow) var(--ease-standard); }
.uc-progress--indeterminate .uc-progress__bar{ width:40%; animation: uc-progress-slide 1.15s var(--ease-in-out) infinite; }
@keyframes uc-progress-slide{ 0%{ transform:translateX(-120%);} 100%{ transform:translateX(320%);} }
`;

/** Horizontal progress bar; determinate by value/max, or indeterminate. */
export function ProgressBar({
  value = 0, max = 100, size = 'md', color, indeterminate = false,
  label = 'Прогресс', className = '', style = {}, ...rest
}) {
  injectStyle('progress', CSS);
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const h = size === 'sm' ? 4 : size === 'lg' ? 10 : 6;
  return (
    <div
      className={cx('uc-progress', indeterminate && 'uc-progress--indeterminate', className)}
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label}
      style={{ height: h, ...style }}
      {...rest}
    >
      <div className="uc-progress__bar" style={{ width: indeterminate ? undefined : `${pct}%`, background: color || 'var(--color-primary)' }} />
    </div>
  );
}
