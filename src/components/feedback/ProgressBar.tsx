import React from 'react';
import { injectStyle, cx } from '../../lib/ui';

const CSS = `
.uc-progress{ display:flex; flex-direction:column; gap:6px; }
.uc-progress__label{ display:flex; justify-content:space-between; font-size:var(--text-sm); }
.uc-progress__label span:first-child{ font-weight:var(--weight-medium); color:var(--color-text); }
.uc-progress__label span:last-child{ color:var(--color-text-muted); }
.uc-progress__track{ width:100%; border-radius:var(--radius-full); overflow:hidden; background:var(--color-surface-2); }
.uc-progress__bar{ border-radius:var(--radius-full); transition:width var(--dur-slow) var(--ease-standard); }

.uc-progress--xs .uc-progress__track{ height:4px; }
.uc-progress--sm .uc-progress__track{ height:6px; }
.uc-progress--md .uc-progress__track{ height:8px; }
.uc-progress--lg .uc-progress__track{ height:12px; }

.uc-progress--primary .uc-progress__bar{ background:var(--color-primary); }
.uc-progress--success .uc-progress__bar{ background:var(--color-success); }
.uc-progress--warning .uc-progress__bar{ background:var(--color-warning); }
.uc-progress--danger .uc-progress__bar{ background:var(--color-danger); }
.uc-progress--info .uc-progress__bar{ background:var(--color-info); }
`;

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
}

export function ProgressBar({ value, max = 100, label, showValue = false, size = 'md', variant = 'primary', className = '' }: ProgressBarProps) {
  injectStyle('progress', CSS);
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={cx('uc-progress', `uc-progress--${size}`, `uc-progress--${variant}`, className)}>
      {(label || showValue) && (
        <div className="uc-progress__label">
          {label && <span>{label}</span>}
          {showValue && <span>{Math.round(pct)}%</span>}
        </div>
      )}
      <div className="uc-progress__track" role="progressbar" aria-valuenow={value} aria-valuemax={max}>
        <div className="uc-progress__bar" style={{ width: `${pct}%`, height: '100%' }} />
      </div>
    </div>
  );
}
