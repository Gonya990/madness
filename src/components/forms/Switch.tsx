import React from 'react';
import { injectStyle, cx } from '../../lib/ui';

const CSS = `
.uc-switch{ position:relative; display:inline-flex; flex:0 0 auto; }
.uc-switch__input{ position:absolute; inset:0; width:100%; height:100%; opacity:0; margin:0; cursor:pointer; }
.uc-switch__track{
  display:inline-flex; align-items:center; padding:2px; border-radius:999px;
  background:var(--color-border-strong);
  transition: background var(--dur-base) var(--ease-standard);
}
.uc-switch__thumb{
  border-radius:50%; background:#fff; box-shadow:var(--shadow-sm);
  transition: transform var(--dur-base) var(--ease-spring);
}
.uc-switch--md .uc-switch__track{ width:38px; height:22px; }
.uc-switch--md .uc-switch__thumb{ width:18px; height:18px; }
.uc-switch--md.is-on .uc-switch__thumb{ transform: translateX(16px); }
.uc-switch--sm .uc-switch__track{ width:32px; height:18px; }
.uc-switch--sm .uc-switch__thumb{ width:14px; height:14px; }
.uc-switch--sm.is-on .uc-switch__thumb{ transform: translateX(14px); }
.uc-switch.is-on .uc-switch__track{ background:var(--color-primary); }
.uc-switch__input:focus-visible + .uc-switch__track{ box-shadow:var(--shadow-focus); }
.uc-switch.is-disabled{ opacity:.5; }

.uc-switch-row{ display:inline-flex; align-items:center; gap:10px; cursor:pointer; font-size:var(--text-base); color:var(--color-text); }
.uc-switch-row.is-disabled{ cursor:not-allowed; opacity:.6; }
`;

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string;
  size?: 'sm' | 'md';
}

export function Switch({ label, checked, defaultChecked, disabled = false, onChange, id, size = 'md', className = '', style = {}, ...rest }: SwitchProps) {
  injectStyle('switch', CSS);
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = isControlled ? !!checked : internal;
  const handle = (e: React.ChangeEvent<HTMLInputElement>) => { if (!isControlled) setInternal(e.target.checked); onChange && onChange(e); };

  const control = (
    <span className={cx('uc-switch', `uc-switch--${size}`, isOn && 'is-on', disabled && 'is-disabled', className)} style={label ? undefined : style}>
      <input
        type="checkbox" role="switch" className="uc-switch__input"
        checked={isControlled ? !!checked : undefined}
        defaultChecked={isControlled ? undefined : defaultChecked}
        disabled={disabled} onChange={handle} id={id} {...rest}
      />
      <span className="uc-switch__track"><span className="uc-switch__thumb" /></span>
    </span>
  );
  if (!label) return control;
  return (
    <label className={cx('uc-switch-row', disabled && 'is-disabled')} style={style}>
      {control}<span>{label}</span>
    </label>
  );
}
