import React from 'react';
import { injectStyle, cx } from '../lib/ui.js';
import { Icon } from '../icon/Icon.jsx';

const CSS = `
.uc-cbx{ position:relative; display:inline-flex; flex:0 0 auto; }
.uc-cbx__input{ position:absolute; inset:0; width:100%; height:100%; opacity:0; margin:0; cursor:pointer; }
.uc-cbx__box{
  display:inline-flex; align-items:center; justify-content:center;
  width:18px; height:18px; border:1.5px solid var(--color-border-strong);
  border-radius:var(--radius-sm); background:var(--color-surface); color:transparent;
  transition: background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast), color var(--dur-fast);
}
.uc-cbx--sm .uc-cbx__box{ width:16px; height:16px; }
.uc-cbx.is-checked .uc-cbx__box{ background:var(--color-primary); border-color:var(--color-primary); color:#fff; }
.uc-cbx__input:focus-visible + .uc-cbx__box{ box-shadow:var(--shadow-focus); border-color:var(--color-primary); }
.uc-cbx.is-disabled{ opacity:.5; }

.uc-cbx-row{ display:inline-flex; align-items:center; gap:9px; cursor:pointer; font-size:var(--text-base); color:var(--color-text); }
.uc-cbx-row.is-disabled{ cursor:not-allowed; opacity:.6; }
.uc-cbx__label{ user-select:none; }
`;

/** Checkbox with custom box + Lucide check. Works controlled or uncontrolled. */
export function Checkbox({
  label, checked, defaultChecked, indeterminate = false, disabled = false,
  onChange, id, size = 'md', className = '', style = {}, ...rest
}) {
  injectStyle('checkbox', CSS);
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isChecked = isControlled ? !!checked : internal;
  const ref = React.useRef(null);
  React.useEffect(() => { if (ref.current) ref.current.indeterminate = indeterminate; }, [indeterminate, isChecked]);

  const handle = (e) => { if (!isControlled) setInternal(e.target.checked); onChange && onChange(e); };

  const box = (
    <span className={cx('uc-cbx', `uc-cbx--${size}`, (isChecked || indeterminate) && 'is-checked', disabled && 'is-disabled', className)} style={label ? undefined : style}>
      <input
        ref={ref} type="checkbox" className="uc-cbx__input"
        checked={isControlled ? !!checked : undefined}
        defaultChecked={isControlled ? undefined : defaultChecked}
        disabled={disabled} onChange={handle} id={id} {...rest}
      />
      <span className="uc-cbx__box"><Icon name={indeterminate ? 'minus' : 'check'} size={size === 'sm' ? 12 : 14} strokeWidth={3} /></span>
    </span>
  );
  if (!label) return box;
  return (
    <label className={cx('uc-cbx-row', disabled && 'is-disabled')} style={style}>
      {box}<span className="uc-cbx__label">{label}</span>
    </label>
  );
}
