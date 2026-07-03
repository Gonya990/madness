import React from 'react';
import { injectStyle, cx } from '../lib/ui.js';
import { Icon } from '../icon/Icon.jsx';

const CSS = `
.uc-iconbtn{
  display:inline-flex; align-items:center; justify-content:center;
  border:1px solid transparent; border-radius:var(--radius-md);
  cursor:pointer; color:var(--color-text); background:transparent; padding:0;
  transition: background var(--dur-fast) var(--ease-standard), color var(--dur-fast),
              border-color var(--dur-fast), box-shadow var(--dur-fast), transform var(--dur-fast);
}
.uc-iconbtn:focus-visible{ outline:none; box-shadow:var(--shadow-focus); }
.uc-iconbtn:active{ transform: translateY(0.5px); }
.uc-iconbtn[disabled]{ opacity:.45; cursor:not-allowed; pointer-events:none; }
.uc-iconbtn--round{ border-radius:var(--radius-full); }

.uc-iconbtn--sm{ width:30px; height:30px; }
.uc-iconbtn--md{ width:38px; height:38px; }
.uc-iconbtn--lg{ width:46px; height:46px; }

.uc-iconbtn--ghost:hover{ background:var(--color-surface-2); }
.uc-iconbtn--subtle{ background:var(--color-surface-2); }
.uc-iconbtn--subtle:hover{ background:var(--color-border); }
.uc-iconbtn--outline{ border-color:var(--color-border-strong); background:var(--color-surface); box-shadow:var(--shadow-xs); }
.uc-iconbtn--outline:hover{ background:var(--color-bg-subtle); }
.uc-iconbtn--primary{ background:var(--color-primary); color:var(--color-primary-fg); }
.uc-iconbtn--primary:hover{ background:var(--color-primary-hover); }
`;

/** Square (or round) button containing a single icon. Always pass an accessible label. */
export function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  round = false,
  disabled = false,
  type = 'button',
  className = '',
  style = {},
  ...rest
}) {
  injectStyle('iconbtn', CSS);
  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 22 : 18;
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      disabled={disabled}
      className={cx('uc-iconbtn', `uc-iconbtn--${variant}`, `uc-iconbtn--${size}`, round && 'uc-iconbtn--round', className)}
      style={style}
      {...rest}
    >
      <Icon name={icon} size={iconSize} strokeWidth={2} />
    </button>
  );
}
