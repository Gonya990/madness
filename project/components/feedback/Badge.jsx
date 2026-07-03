import React from 'react';
import { injectStyle, cx } from '../lib/ui.js';
import { Icon } from '../icon/Icon.jsx';

const CSS = `
.uc-badge{
  display:inline-flex; align-items:center; gap:5px; font-family:var(--font-sans);
  font-weight:var(--weight-semibold); border-radius:var(--radius-full); white-space:nowrap;
  line-height:1; border:1px solid transparent; letter-spacing:0.01em;
}
.uc-badge--sm{ height:18px; padding:0 7px; font-size:var(--text-2xs); }
.uc-badge--md{ height:22px; padding:0 9px; font-size:var(--text-xs); }
.uc-badge__dot{ width:6px; height:6px; border-radius:50%; background:currentColor; }

.uc-badge--neutral{ background:var(--color-surface-2); color:var(--color-text-secondary); border-color:var(--color-border); }
.uc-badge--primary{ background:var(--color-primary-subtle); color:var(--color-primary); }
.uc-badge--success{ background:var(--color-success-bg); color:var(--color-success-fg); }
.uc-badge--warning{ background:var(--color-warning-bg); color:var(--color-warning-fg); }
.uc-badge--danger{ background:var(--color-danger-bg); color:var(--color-danger-fg); }
.uc-badge--info{ background:var(--color-info-bg); color:var(--color-info-fg); }

.uc-badge--solid{ border-color:transparent; color:#fff; }
.uc-badge--solid.uc-badge--neutral{ background:var(--sand-700); color:#fff; }
.uc-badge--solid.uc-badge--primary{ background:var(--color-primary); }
.uc-badge--solid.uc-badge--success{ background:var(--color-success); }
.uc-badge--solid.uc-badge--warning{ background:var(--color-warning); color:var(--sand-900); }
.uc-badge--solid.uc-badge--danger{ background:var(--color-danger); }
.uc-badge--solid.uc-badge--info{ background:var(--color-info); }
`;

/** Small status pill. Use to label state, counts, or categories. */
export function Badge({
  children, variant = 'neutral', size = 'md', dot = false, leftIcon,
  solid = false, className = '', style = {}, ...rest
}) {
  injectStyle('badge', CSS);
  return (
    <span className={cx('uc-badge', `uc-badge--${variant}`, `uc-badge--${size}`, solid && 'uc-badge--solid', className)} style={style} {...rest}>
      {dot && <span className="uc-badge__dot" />}
      {leftIcon && <Icon name={leftIcon} size={size === 'sm' ? 11 : 12} strokeWidth={2.5} />}
      {children}
    </span>
  );
}
