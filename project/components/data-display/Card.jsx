import React from 'react';
import { injectStyle, cx } from '../lib/ui.js';

const CSS = `
.uc-card{
  background:var(--color-surface); border:1px solid var(--color-border);
  border-radius:var(--radius-lg); box-shadow:var(--shadow-xs);
  display:flex; flex-direction:column; min-width:0;
}
.uc-card--elevated{ box-shadow:var(--shadow-md); border-color:transparent; }
.uc-card--ghost{ background:transparent; box-shadow:none; }
.uc-card--interactive{ cursor:pointer; transition: box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base); }
.uc-card--interactive:hover{ box-shadow:var(--shadow-lg); transform:translateY(-2px); border-color:var(--color-border-strong); }
.uc-card--interactive:active{ transform:translateY(0); }

.uc-card__header{ display:flex; align-items:flex-start; gap:12px; padding:16px 16px 0; }
.uc-card__htext{ flex:1 1 auto; min-width:0; display:flex; flex-direction:column; gap:2px; }
.uc-card__title{ font-family:var(--font-display); font-weight:var(--weight-bold); font-size:var(--text-lg); letter-spacing:-0.01em; color:var(--color-text); }
.uc-card__subtitle{ font-size:var(--text-sm); color:var(--color-text-secondary); }
.uc-card__actions{ flex:0 0 auto; display:flex; gap:6px; }
.uc-card__body{ padding:16px; flex:1 1 auto; min-width:0; }
.uc-card__footer{ padding:0 16px 16px; display:flex; gap:8px; align-items:center; }

.uc-card--pad-sm .uc-card__body{ padding:12px; }
.uc-card--pad-lg .uc-card__body{ padding:22px; }
.uc-card--pad-none .uc-card__body{ padding:0; }
`;

/** Surface container with optional header (title/subtitle/actions), body and footer. */
export function Card({
  title, subtitle, actions, footer, children,
  variant = 'default', padding = 'md', interactive = false,
  as = 'div', className = '', style = {}, ...rest
}) {
  injectStyle('card', CSS);
  const Tag = as;
  const hasHeader = title || subtitle || actions;
  return (
    <Tag
      className={cx('uc-card', variant !== 'default' && `uc-card--${variant}`, interactive && 'uc-card--interactive', `uc-card--pad-${padding}`, className)}
      style={style}
      {...rest}
    >
      {hasHeader && (
        <div className="uc-card__header">
          <div className="uc-card__htext">
            {title && <div className="uc-card__title">{title}</div>}
            {subtitle && <div className="uc-card__subtitle">{subtitle}</div>}
          </div>
          {actions && <div className="uc-card__actions">{actions}</div>}
        </div>
      )}
      {children != null && <div className="uc-card__body">{children}</div>}
      {footer && <div className="uc-card__footer">{footer}</div>}
    </Tag>
  );
}
