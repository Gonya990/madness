import React from 'react';
import { injectStyle, cx } from '../lib/ui.js';

const CSS = `
.uc-radios{ display:flex; gap:12px; }
.uc-radios--vertical{ flex-direction:column; }
.uc-radios--horizontal{ flex-direction:row; flex-wrap:wrap; }
.uc-radio{ display:inline-flex; align-items:center; gap:9px; cursor:pointer; font-size:var(--text-base); color:var(--color-text); }
.uc-radio.is-disabled{ cursor:not-allowed; opacity:.55; }
.uc-radio__input{ position:absolute; opacity:0; width:0; height:0; }
.uc-radio__dot{
  position:relative; display:inline-flex; flex:0 0 auto; width:18px; height:18px; border-radius:50%;
  border:1.5px solid var(--color-border-strong); background:var(--color-surface);
  transition: border-color var(--dur-fast) var(--ease-standard);
}
.uc-radio__dot::after{
  content:""; position:absolute; inset:0; margin:auto; width:8px; height:8px; border-radius:50%;
  background:var(--color-primary); transform:scale(0); transition: transform var(--dur-fast) var(--ease-spring);
}
.uc-radio.is-checked .uc-radio__dot{ border-color:var(--color-primary); }
.uc-radio.is-checked .uc-radio__dot::after{ transform:scale(1); }
.uc-radio__input:focus-visible + .uc-radio__dot{ box-shadow:var(--shadow-focus); }
`;

function normalize(opt) {
  return typeof opt === 'string' || typeof opt === 'number'
    ? { value: opt, label: String(opt) }
    : opt;
}

let _grp = 0;

/** A set of mutually-exclusive radio options. Controlled or uncontrolled. */
export function RadioGroup({
  name, value, defaultValue, onChange, options = [],
  orientation = 'vertical', disabled = false, className = '', style = {}, ...rest
}) {
  injectStyle('radio', CSS);
  const groupName = React.useMemo(() => name || `uc-radio-${++_grp}`, [name]);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;

  const handle = (v) => (e) => { if (!isControlled) setInternal(v); onChange && onChange(v, e); };

  return (
    <div role="radiogroup" className={cx('uc-radios', `uc-radios--${orientation}`, className)} style={style} {...rest}>
      {options.map(normalize).map((o) => {
        const isDisabled = disabled || o.disabled;
        const checked = String(current) === String(o.value);
        return (
          <label key={o.value} className={cx('uc-radio', checked && 'is-checked', isDisabled && 'is-disabled')}>
            <input
              type="radio" className="uc-radio__input" name={groupName} value={o.value}
              checked={checked} disabled={isDisabled} onChange={handle(o.value)}
            />
            <span className="uc-radio__dot" />
            <span>{o.label}</span>
          </label>
        );
      })}
    </div>
  );
}
