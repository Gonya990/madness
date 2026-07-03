import React from 'react';
import { injectStyle, cx } from '../lib/ui.js';
import { Icon } from '../icon/Icon.jsx';

const CSS = `
.uc-dialog__overlay{
  position:fixed; inset:0; background:var(--color-overlay); display:flex;
  align-items:center; justify-content:center; padding:24px; z-index:100;
  animation: uc-fade var(--dur-base) var(--ease-standard);
}
@keyframes uc-fade{ from{ opacity:0; } to{ opacity:1; } }
.uc-dialog{
  background:var(--color-surface); border:1px solid var(--color-border);
  border-radius:var(--radius-xl); box-shadow:var(--shadow-2xl); width:100%;
  max-height:calc(100vh - 48px); display:flex; flex-direction:column; overflow:hidden;
  animation: uc-dialog-in var(--dur-base) var(--ease-out);
}
@keyframes uc-dialog-in{ from{ opacity:0; transform:translateY(8px) scale(.985); } to{ opacity:1; transform:none; } }
.uc-dialog--sm{ max-width:400px; }
.uc-dialog--md{ max-width:524px; }
.uc-dialog--lg{ max-width:680px; }
.uc-dialog__head{ display:flex; align-items:flex-start; gap:12px; padding:18px 18px 0; }
.uc-dialog__htext{ flex:1 1 auto; min-width:0; display:flex; flex-direction:column; gap:3px; }
.uc-dialog__title{ font-family:var(--font-display); font-weight:var(--weight-bold); font-size:var(--text-xl); letter-spacing:-0.015em; color:var(--color-text); }
.uc-dialog__desc{ font-size:var(--text-sm); color:var(--color-text-secondary); line-height:var(--leading-normal); }
.uc-dialog__close{ flex:0 0 auto; background:transparent; border:none; cursor:pointer; color:var(--color-text-muted); border-radius:var(--radius-md); width:30px; height:30px; display:inline-flex; align-items:center; justify-content:center; margin:-4px -4px 0 0; transition:background var(--dur-fast), color var(--dur-fast); }
.uc-dialog__close:hover{ background:var(--color-surface-2); color:var(--color-text); }
.uc-dialog__body{ padding:16px 18px; overflow-y:auto; color:var(--color-text-secondary); font-size:var(--text-base); line-height:var(--leading-normal); }
.uc-dialog__foot{ display:flex; justify-content:flex-end; gap:8px; padding:14px 18px; border-top:1px solid var(--color-border); background:var(--color-bg-subtle); }
`;

/** Modal dialog with overlay, scroll-lock, Escape/overlay close. */
export function Dialog({
  open, onClose, title, description, children, footer, size = 'md',
  closeOnOverlay = true, closeOnEsc = true, className = '', style = {}, ...rest
}) {
  injectStyle('dialog', CSS);
  React.useEffect(() => {
    if (!open || !closeOnEsc) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose && onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, closeOnEsc, onClose]);
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;
  return (
    <div className="uc-dialog__overlay" onMouseDown={(e) => { if (closeOnOverlay && e.target === e.currentTarget) onClose && onClose(); }}>
      <div role="dialog" aria-modal="true" className={cx('uc-dialog', `uc-dialog--${size}`, className)} style={style} {...rest}>
        {(title || description || onClose) && (
          <div className="uc-dialog__head">
            <div className="uc-dialog__htext">
              {title && <div className="uc-dialog__title">{title}</div>}
              {description && <div className="uc-dialog__desc">{description}</div>}
            </div>
            {onClose && <button type="button" className="uc-dialog__close" aria-label="Закрыть" onClick={onClose}><Icon name="x" size={18} /></button>}
          </div>
        )}
        {children != null && <div className="uc-dialog__body">{children}</div>}
        {footer && <div className="uc-dialog__foot">{footer}</div>}
      </div>
    </div>
  );
}
