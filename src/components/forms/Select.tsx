import React from 'react';
import { injectStyle, cx } from '../../lib/ui';
import { Icon } from '../icon/Icon';

const CSS = `
.uc-select-wrap{ position:relative; display:flex; align-items:center; }
.uc-select{
  width:100%; appearance:none; -webkit-appearance:none; font-family:var(--font-sans);
  color:var(--color-text); background:var(--color-surface);
  border:1px solid var(--color-border-strong); border-radius:var(--radius-md);
  padding-right:34px; cursor:pointer;
  transition: border-color var(--dur-fast), box-shadow var(--dur-fast);
}
.uc-select:focus{ outline:none; border-color:var(--color-primary); box-shadow:var(--shadow-focus); }
.uc-select:disabled{ opacity:.55; cursor:not-allowed; }
.uc-select--sm{ height:var(--control-height-sm); padding-left:11px; font-size:var(--text-sm); border-radius:var(--radius-sm); }
.uc-select--md{ height:var(--control-height-md); padding-left:12px; font-size:var(--text-base); }
.uc-select--lg{ height:var(--control-height-lg); padding-left:14px; font-size:var(--text-md); }
.uc-select__chev{ position:absolute; right:10px; color:var(--color-text-muted); pointer-events:none; display:flex; }
`;

let _uid = 0;

interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  options?: (SelectOption | string | number)[];
  placeholder?: string;
}

function normalize(opt: SelectOption | string | number): SelectOption {
  return typeof opt === 'string' || typeof opt === 'number' ? { value: opt, label: String(opt) } : opt;
}

export function Select({ label, hint, error, size = 'md', options, placeholder, required = false, id, children, className = '', style = {}, ...rest }: SelectProps) {
  injectStyle('select', CSS);
  const autoId = React.useMemo(() => id || `uc-select-${++_uid}`, [id]);
  const invalid = !!error;
  const control = (
    <div className="uc-select-wrap">
      <select
        id={autoId}
        className={cx('uc-select', `uc-select--${size}`, className)}
        aria-invalid={invalid || undefined}
        required={required}
        style={{ ...(invalid ? { borderColor: 'var(--color-danger)' } : null), ...style }}
        {...rest}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options ? options.map(normalize).map((o) => (
          <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>
        )) : children}
      </select>
      <span className="uc-select__chev"><Icon name="chevron-down" size={16} /></span>
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
