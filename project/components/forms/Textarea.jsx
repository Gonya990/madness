import React from 'react';
import { injectStyle, cx } from '../lib/ui.js';

const CSS = `
.uc-textarea{
  width:100%; font-family:var(--font-sans); color:var(--color-text);
  background:var(--color-surface); border:1px solid var(--color-border-strong);
  border-radius:var(--radius-md); padding:10px 12px; font-size:var(--text-base);
  line-height:var(--leading-normal); resize:vertical; min-height:84px;
  transition: border-color var(--dur-fast), box-shadow var(--dur-fast);
}
.uc-textarea::placeholder{ color:var(--color-text-muted); }
.uc-textarea:focus{ outline:none; border-color:var(--color-primary); box-shadow:var(--shadow-focus); }
.uc-textarea:disabled{ opacity:.55; cursor:not-allowed; background:var(--color-surface-2); }
.uc-textarea--mono{ font-family:var(--font-mono); font-size:var(--text-sm); }
.uc-textarea--invalid{ border-color:var(--color-danger); }
`;

let _uid = 0;

/** Multi-line text input. Shares the field chrome (label / hint / error) with Input. */
export function Textarea({
  label, hint, error, rows = 4, mono = false, required = false,
  id, className = '', style = {}, ...rest
}) {
  injectStyle('textarea', CSS);
  const autoId = React.useMemo(() => id || `uc-textarea-${++_uid}`, [id]);
  const invalid = !!error;
  const control = (
    <textarea
      id={autoId}
      rows={rows}
      className={cx('uc-textarea', mono && 'uc-textarea--mono', invalid && 'uc-textarea--invalid', className)}
      aria-invalid={invalid || undefined}
      required={required}
      style={style}
      {...rest}
    />
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
