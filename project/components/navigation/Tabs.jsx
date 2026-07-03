import React from 'react';
import { injectStyle, cx } from '../lib/ui.js';
import { Icon } from '../icon/Icon.jsx';

const CSS = `
.uc-tabs{ display:flex; }
.uc-tabs--line{ border-bottom:1px solid var(--color-border); gap:4px; }
.uc-tabs--pill{ background:var(--color-surface-2); padding:3px; border-radius:var(--radius-lg); gap:2px; display:inline-flex; }

.uc-tab{
  position:relative; display:inline-flex; align-items:center; gap:7px;
  font-family:var(--font-sans); font-weight:var(--weight-medium); font-size:var(--text-sm);
  color:var(--color-text-secondary); background:transparent; border:none; cursor:pointer;
  padding:9px 12px; border-radius:var(--radius-md); white-space:nowrap;
  transition: color var(--dur-fast), background var(--dur-fast);
}
.uc-tab:hover{ color:var(--color-text); }
.uc-tab:focus-visible{ outline:none; box-shadow:var(--shadow-focus); }
.uc-tab:disabled{ opacity:.45; cursor:not-allowed; }

.uc-tabs--line .uc-tab{ border-radius:0; padding:10px 4px; margin-bottom:-1px; }
.uc-tabs--line .uc-tab::after{ content:""; position:absolute; left:0; right:0; bottom:0; height:2px; background:var(--color-primary); border-radius:2px 2px 0 0; transform:scaleX(0); transition:transform var(--dur-base) var(--ease-standard); }
.uc-tabs--line .uc-tab.is-active::after{ transform:scaleX(1); }
.uc-tabs--line .uc-tab.is-active{ color:var(--color-text); }

.uc-tabs--pill .uc-tab{ padding:6px 12px; }
.uc-tabs--pill .uc-tab.is-active{ background:var(--color-surface); color:var(--color-text); box-shadow:var(--shadow-xs); }

.uc-tab__badge{ font-size:var(--text-2xs); font-weight:var(--weight-semibold); background:var(--color-surface-2); color:var(--color-text-secondary); border-radius:var(--radius-full); padding:1px 6px; line-height:1.4; }
.uc-tab.is-active .uc-tab__badge{ background:var(--color-primary-subtle); color:var(--color-primary); }
`;

function normalize(it) {
  return typeof it === 'string' ? { value: it, label: it } : it;
}

/** Horizontal tab navigation. Presentational — render your own panels off the active value. */
export function Tabs({
  items = [], value, defaultValue, onChange, variant = 'line',
  className = '', style = {}, ...rest
}) {
  injectStyle('tabs', CSS);
  const norm = items.map(normalize);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? norm[0]?.value);
  const current = isControlled ? value : internal;
  const handle = (v) => { if (!isControlled) setInternal(v); onChange && onChange(v); };

  return (
    <div role="tablist" className={cx('uc-tabs', `uc-tabs--${variant}`, className)} style={style} {...rest}>
      {norm.map((it) => {
        const active = String(current) === String(it.value);
        return (
          <button
            key={it.value} role="tab" aria-selected={active} disabled={it.disabled}
            className={cx('uc-tab', active && 'is-active')} onClick={() => handle(it.value)}
          >
            {it.icon && <Icon name={it.icon} size={16} />}
            {it.label}
            {it.badge != null && <span className="uc-tab__badge">{it.badge}</span>}
          </button>
        );
      })}
    </div>
  );
}
