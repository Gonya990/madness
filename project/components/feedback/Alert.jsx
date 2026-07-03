import React from 'react';
import { injectStyle, cx } from '../lib/ui.js';
import { Icon } from '../icon/Icon.jsx';

const CSS = `
.uc-alert{ display:flex; gap:11px; padding:13px 14px; border-radius:var(--radius-lg); border:1px solid var(--color-border); background:var(--color-surface); }
.uc-alert__icon{ flex:0 0 auto; margin-top:1px; }
.uc-alert__body{ display:flex; flex-direction:column; gap:3px; min-width:0; flex:1 1 auto; }
.uc-alert__title{ font-weight:var(--weight-semibold); font-size:var(--text-sm); color:var(--color-text); }
.uc-alert__desc{ font-size:var(--text-sm); color:var(--color-text-secondary); line-height:var(--leading-normal); }
.uc-alert__desc a{ color:var(--color-link); font-weight:var(--weight-medium); }
.uc-alert__close{ flex:0 0 auto; background:transparent; border:none; cursor:pointer; color:var(--color-text-muted); border-radius:var(--radius-sm); width:24px; height:24px; display:inline-flex; align-items:center; justify-content:center; margin:-3px -3px 0 0; transition:background var(--dur-fast), color var(--dur-fast); }
.uc-alert__close:hover{ background:var(--color-surface-2); color:var(--color-text); }

.uc-alert--info{ background:var(--color-info-bg); border-color:transparent; }
.uc-alert--info .uc-alert__icon{ color:var(--color-info); }
.uc-alert--success{ background:var(--color-success-bg); border-color:transparent; }
.uc-alert--success .uc-alert__icon{ color:var(--color-success); }
.uc-alert--warning{ background:var(--color-warning-bg); border-color:transparent; }
.uc-alert--warning .uc-alert__icon{ color:var(--color-warning); }
.uc-alert--danger{ background:var(--color-danger-bg); border-color:transparent; }
.uc-alert--danger .uc-alert__icon{ color:var(--color-danger); }
.uc-alert--neutral .uc-alert__icon{ color:var(--color-text-secondary); }
`;

const DEFAULT_ICON = {
  info: 'info',
  success: 'circle-check',
  warning: 'triangle-alert',
  danger: 'octagon-alert',
  neutral: 'info',
};

/** Inline callout / banner for contextual messages. */
export function Alert({
  variant = 'info', title, children, icon, onClose,
  className = '', style = {}, ...rest
}) {
  injectStyle('alert', CSS);
  const iconName = icon === null ? null : (icon || DEFAULT_ICON[variant]);
  return (
    <div role="alert" className={cx('uc-alert', `uc-alert--${variant}`, className)} style={style} {...rest}>
      {iconName && <span className="uc-alert__icon"><Icon name={iconName} size={18} /></span>}
      <div className="uc-alert__body">
        {title && <div className="uc-alert__title">{title}</div>}
        {children && <div className="uc-alert__desc">{children}</div>}
      </div>
      {onClose && (
        <button type="button" className="uc-alert__close" aria-label="Закрыть" onClick={onClose}>
          <Icon name="x" size={15} />
        </button>
      )}
    </div>
  );
}
