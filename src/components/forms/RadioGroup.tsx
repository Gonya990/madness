import React from 'react';
import { injectStyle, cx } from '../../lib/ui';

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

interface RadioOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number, e: React.ChangeEvent<HTMLInputElement>) => void;
  options?: (RadioOption | string | number)[];
  orientation?: 'vertical' | 'horizontal';
  disabled?: boolean;
}

function normalize(opt: RadioOption | string | number): RadioOption {
  return typeof opt === 'string' || typeof opt === 'number' ? { value: opt, label: String(opt) } : opt;
}

let _grp = 0;

export function RadioGroup({ name, value, defaultValue, onChange, options = [], orientation = 'vertical', disabled = false, className = '', style = {}, ...rest }: RadioGroupProps) {
  injectStyle('radio', CSS);
  const groupName = React.useMemo(() => name || `uc-radio-${++_grp}`, [name]);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;

  const handle = (v: string | number) => (e: React.ChangeEvent<HTMLInputElement>) => { if (!isControlled) setInternal(v); onChange && onChange(v, e); };

  return (
    <div role="radiogroup" className={cx('uc-radios', `uc-radios--${orientation}`, className)} style={style} {...rest}>
      {options.map(normalize).map((o) => {
        const isDisabled = disabled || o.disabled;
        const isChecked = String(current) === String(o.value);
        return (
          <label key={o.value} className={cx('uc-radio', isChecked && 'is-checked', isDisabled && 'is-disabled')}>
            <input
              type="radio" className="uc-radio__input" name={groupName} value={o.value}
              checked={isChecked} disabled={isDisabled} onChange={handle(o.value)}
            />
            <span className="uc-radio__dot" />
            <span>{o.label}</span>
          </label>
        );
      })}
    </div>
  );
}
