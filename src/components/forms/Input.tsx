import React from 'react';
import { injectStyle, cx } from '../../lib/ui';
import { Icon } from '../icon/Icon';

const CSS = `
.uc-field{ display:flex; flex-direction:column; gap:6px; }
.uc-label{ font-size:var(--text-sm); font-weight:var(--weight-medium); color:var(--color-text); display:flex; align-items:center; }
.uc-label__req{ color:var(--color-danger); margin-left:3px; }
.uc-hint{ font-size:var(--text-xs); color:var(--color-text-muted); }
.uc-hint--error{ color:var(--color-danger-fg); }

.uc-input-wrap{ position:relative; display:flex; align-items:center; }
.uc-input__icon{ position:absolute; left:11px; color:var(--color-text-muted); pointer-events:none; display:flex; }
.uc-input{
  width:100%; font-family:var(--font-sans); color:var(--color-text);
  background:var(--color-surface); border:1px solid var(--color-border-strong);
  border-radius:var(--radius-md);
  transition: border-color var(--dur-fast), box-shadow var(--dur-fast), background var(--dur-fast);
}
.uc-input::placeholder{ color:var(--color-text-muted); }
.uc-input:focus{ outline:none; border-color:var(--color-primary); box-shadow:var(--shadow-focus); }
.uc-input:disabled{ opacity:.55; cursor:not-allowed; background:var(--color-surface-2); }
.uc-input--sm{ height:var(--control-height-sm); padding:0 11px; font-size:var(--text-sm); border-radius:var(--radius-sm); }
.uc-input--md{ height:var(--control-height-md); padding:0 12px; font-size:var(--text-base); }
.uc-input--lg{ height:var(--control-height-lg); padding:0 14px; font-size:var(--text-md); }
.uc-input--has-icon{ padding-left:34px; }
.uc-input--mono{ font-family:var(--font-mono); }
.uc-input--invalid{ border-color:var(--color-danger); }
.uc-input--invalid:focus{ box-shadow:0 0 0 3px var(--color-danger-bg); }
`;

let _uid = 0;

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: string;
  size?: 'sm' | 'md' | 'lg';
  mono?: boolean;
}

export function Input({ label, hint, error, leftIcon, size = 'md', mono = false, required = false, id, className = '', style = {}, ...rest }: InputProps) {
  injectStyle('input', CSS);
  const autoId = React.useMemo(() => id || `uc-input-${++_uid}`, [id]);
  const invalid = !!error;
  const control = (
    <div className="uc-input-wrap">
      {leftIcon && <span className="uc-input__icon"><Icon name={leftIcon} size={size === 'sm' ? 15 : 16} /></span>}
      <input
        id={autoId}
        className={cx('uc-input', `uc-input--${size}`, leftIcon && 'uc-input--has-icon', mono && 'uc-input--mono', invalid && 'uc-input--invalid', className)}
        aria-invalid={invalid || undefined}
        required={required}
        style={style}
        {...rest}
      />
    </div>
  );
  if (!label && !hint && !error) return control;
  return (
    <div className="uc-field">
      {label && <label className="uc-label" htmlFor={autoId}>{label}{required && <span className="uc-label__req">*</span>}</label>}
      {control}
      {(error || hint) && <span className={cx('uc-hint', invalid && 'uc-hint--error')}>{error || hint}</span>}
    </div>
  );
}
