import React from 'react';
import { injectStyle, cx } from '../../lib/ui';
import { Icon } from '../icon/Icon';

const CSS = `
.uc-btn{
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  font-family:var(--font-sans); font-weight:var(--weight-semibold);
  border:1px solid transparent; border-radius:var(--radius-md);
  cursor:pointer; white-space:nowrap; text-decoration:none; user-select:none;
  transition: background var(--dur-fast) var(--ease-standard),
              border-color var(--dur-fast) var(--ease-standard),
              color var(--dur-fast), box-shadow var(--dur-fast), transform var(--dur-fast);
}
.uc-btn:focus-visible{ outline:none; box-shadow: var(--shadow-focus); }
.uc-btn:active{ transform: translateY(0.5px); }
.uc-btn[disabled], .uc-btn[aria-disabled="true"]{ opacity:.5; cursor:not-allowed; pointer-events:none; }
.uc-btn--block{ width:100%; }

.uc-btn--sm{ height:var(--control-height-sm); padding:0 12px; font-size:var(--text-sm); border-radius:var(--radius-sm); }
.uc-btn--md{ height:var(--control-height-md); padding:0 16px; font-size:var(--text-base); }
.uc-btn--lg{ height:var(--control-height-lg); padding:0 22px; font-size:var(--text-md); border-radius:var(--radius-lg); }

.uc-btn--primary{ background:var(--color-primary); color:var(--color-primary-fg); box-shadow:var(--shadow-xs); }
.uc-btn--primary:hover{ background:var(--color-primary-hover); }
.uc-btn--primary:active{ background:var(--color-primary-active); }

.uc-btn--secondary{ background:var(--color-surface); color:var(--color-text); border-color:var(--color-border-strong); box-shadow:var(--shadow-xs); }
.uc-btn--secondary:hover{ background:var(--color-bg-subtle); }

.uc-btn--subtle{ background:var(--color-surface-2); color:var(--color-text); }
.uc-btn--subtle:hover{ background:var(--color-border); }

.uc-btn--ghost{ background:transparent; color:var(--color-text); }
.uc-btn--ghost:hover{ background:var(--color-surface-2); }

.uc-btn--danger{ background:var(--color-danger); color:#fff; box-shadow:var(--shadow-xs); }
.uc-btn--danger:hover{ background:var(--color-danger-hover); }

.uc-btn__spin{ width:1.05em; height:1.05em; border-radius:50%; border:2px solid currentColor; border-right-color:transparent; animation: uc-spin .6s linear infinite; }
@keyframes uc-spin{ to{ transform: rotate(360deg); } }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'subtle' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: string;
  rightIcon?: string;
  loading?: boolean;
  fullWidth?: boolean;
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  loading = false,
  fullWidth = false,
  disabled = false,
  type = 'button',
  href,
  children,
  className = '',
  style = {},
  ...rest
}: ButtonProps) {
  injectStyle('btn', CSS);
  const Tag = href ? 'a' : 'button';
  const iconSize = size === 'sm' ? 15 : size === 'lg' ? 19 : 17;
  const isDisabled = disabled || loading;
  return React.createElement(
    Tag,
    {
      className: cx('uc-btn', `uc-btn--${variant}`, `uc-btn--${size}`, fullWidth && 'uc-btn--block', className),
      href,
      type: href ? undefined : type,
      disabled: Tag === 'button' ? isDisabled : undefined,
      'aria-disabled': href && isDisabled ? true : undefined,
      'aria-busy': loading || undefined,
      style,
      ...(rest as object),
    },
    loading && React.createElement('span', { className: 'uc-btn__spin', 'aria-hidden': 'true' }),
    !loading && leftIcon && React.createElement(Icon, { name: leftIcon, size: iconSize, strokeWidth: 2.1 }),
    children != null && React.createElement('span', null, children),
    !loading && rightIcon && React.createElement(Icon, { name: rightIcon, size: iconSize, strokeWidth: 2.1 }),
  );
}
