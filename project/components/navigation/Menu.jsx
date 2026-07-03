import React from 'react';
import { injectStyle, cx } from '../lib/ui.js';
import { Icon } from '../icon/Icon.jsx';

const CSS = `
.uc-menu{ position:relative; display:inline-flex; }
.uc-menu__pop{
  position:absolute; z-index:70; min-width:204px; background:var(--color-surface);
  border:1px solid var(--color-border); border-radius:var(--radius-lg);
  box-shadow:var(--shadow-lg); padding:5px; top:100%; margin-top:6px;
  animation: uc-menu-in var(--dur-fast) var(--ease-out);
}
@keyframes uc-menu-in{ from{ opacity:0; transform:translateY(-4px); } to{ opacity:1; transform:none; } }
.uc-menu__pop--start{ left:0; } .uc-menu__pop--end{ right:0; }
.uc-menu__pop--up{ top:auto; bottom:100%; margin-top:0; margin-bottom:6px; }
.uc-menu__item{
  display:flex; align-items:center; gap:10px; width:100%; text-align:left; background:transparent;
  border:none; cursor:pointer; font-family:var(--font-sans); font-size:var(--text-sm);
  color:var(--color-text); padding:7px 9px; border-radius:var(--radius-sm); transition:background var(--dur-fast);
}
.uc-menu__item:hover{ background:var(--color-surface-2); }
.uc-menu__item:disabled{ opacity:.5; cursor:not-allowed; }
.uc-menu__item--danger{ color:var(--color-danger); }
.uc-menu__item--danger:hover{ background:var(--color-danger-bg); }
.uc-menu__label{ flex:1 1 auto; }
.uc-menu__sc{ margin-left:auto; font-family:var(--font-mono); font-size:var(--text-2xs); color:var(--color-text-muted); }
.uc-menu__sep{ height:1px; background:var(--color-border); margin:5px 4px; }
.uc-menu__heading{ padding:6px 9px 3px; font-size:var(--text-2xs); font-weight:var(--weight-bold); letter-spacing:var(--tracking-widest); text-transform:uppercase; color:var(--color-text-muted); }
`;

/** Click-to-open dropdown menu anchored to a trigger element. */
export function Menu({ trigger, items = [], align = 'start', placement = 'down', className = '', style = {}, ...rest }) {
  injectStyle('menu', CSS);
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);

  return (
    <span className={cx('uc-menu', className)} ref={ref} style={style} {...rest}>
      <span onClick={() => setOpen((o) => !o)} style={{ display: 'inline-flex' }}>
        {typeof trigger === 'function' ? trigger({ open }) : trigger}
      </span>
      {open && (
        <div className={cx('uc-menu__pop', `uc-menu__pop--${align === 'end' ? 'end' : 'start'}`, placement === 'up' && 'uc-menu__pop--up')} role="menu">
          {items.map((it, i) => {
            if (it.type === 'separator') return <div key={i} className="uc-menu__sep" />;
            if (it.type === 'heading') return <div key={i} className="uc-menu__heading">{it.label}</div>;
            return (
              <button
                key={i} role="menuitem" disabled={it.disabled}
                className={cx('uc-menu__item', it.danger && 'uc-menu__item--danger')}
                onClick={() => { setOpen(false); it.onClick && it.onClick(); }}
              >
                {it.icon && <Icon name={it.icon} size={16} />}
                <span className="uc-menu__label">{it.label}</span>
                {it.shortcut && <span className="uc-menu__sc">{it.shortcut}</span>}
              </button>
            );
          })}
        </div>
      )}
    </span>
  );
}
