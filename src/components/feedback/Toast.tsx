import React from 'react';
import { injectStyle, cx } from '../../lib/ui';
import { Icon } from '../icon/Icon';

const CSS = `
.uc-toast{
  display:flex; gap:11px; align-items:flex-start; width:340px; max-width:calc(100vw - 32px);
  background:var(--color-surface); border:1px solid var(--color-border);
  border-radius:var(--radius-lg); box-shadow:var(--shadow-lg); padding:13px 13px 13px 14px;
}
.uc-toast__icon{ flex:0 0 auto; margin-top:1px; }
.uc-toast__body{ flex:1 1 auto; min-width:0; display:flex; flex-direction:column; gap:2px; }
.uc-toast__title{ font-weight:var(--weight-semibold); font-size:var(--text-sm); color:var(--color-text); }
.uc-toast__desc{ font-size:var(--text-sm); color:var(--color-text-secondary); line-height:var(--leading-normal); }
.uc-toast__action{ align-self:flex-start; margin-top:7px; background:transparent; border:none; padding:0; cursor:pointer; font-family:var(--font-sans); font-weight:var(--weight-semibold); font-size:var(--text-sm); color:var(--color-primary); }
.uc-toast__action:hover{ color:var(--color-primary-hover); }
.uc-toast__close{ flex:0 0 auto; background:transparent; border:none; cursor:pointer; color:var(--color-text-muted); border-radius:var(--radius-sm); width:24px; height:24px; display:inline-flex; align-items:center; justify-content:center; margin:-2px -2px 0 0; transition:background var(--dur-fast), color var(--dur-fast); }
.uc-toast__close:hover{ background:var(--color-surface-2); color:var(--color-text); }

.uc-toast--success .uc-toast__icon{ color:var(--color-success); }
.uc-toast--danger .uc-toast__icon{ color:var(--color-danger); }
.uc-toast--warning .uc-toast__icon{ color:var(--color-warning); }
.uc-toast--info .uc-toast__icon{ color:var(--color-info); }
.uc-toast--neutral .uc-toast__icon{ color:var(--color-text-secondary); }
`;

const DEFAULT_ICON: Record<string, string> = {
  success: 'circle-check',
  danger: 'octagon-alert',
  warning: 'triangle-alert',
  info: 'info',
  neutral: 'bell',
};

interface ToastAction {
  label: string;
  onClick: () => void;
}

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'neutral' | 'success' | 'danger' | 'warning' | 'info';
  title?: string;
  icon?: string | null;
  action?: ToastAction;
  onClose?: () => void;
}

export function Toast({ variant = 'neutral', title, children, icon, action, onClose, className = '', style = {}, ...rest }: ToastProps) {
  injectStyle('toast', CSS);
  const iconName = icon === null ? null : (icon || DEFAULT_ICON[variant]);
  return (
    <div role="status" className={cx('uc-toast', `uc-toast--${variant}`, className)} style={style} {...rest}>
      {iconName && <span className="uc-toast__icon"><Icon name={iconName} size={18} /></span>}
      <div className="uc-toast__body">
        {title && <div className="uc-toast__title">{title}</div>}
        {children && <div className="uc-toast__desc">{children}</div>}
        {action && <button type="button" className="uc-toast__action" onClick={action.onClick}>{action.label}</button>}
      </div>
      {onClose && (
        <button type="button" className="uc-toast__close" aria-label="Закрыть" onClick={onClose}>
          <Icon name="x" size={15} />
        </button>
      )}
    </div>
  );
}
