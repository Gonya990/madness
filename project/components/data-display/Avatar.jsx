import React from 'react';
import { injectStyle, cx } from '../lib/ui.js';

const CSS = `
.uc-avatar{
  position:relative; display:inline-flex; align-items:center; justify-content:center; flex:0 0 auto;
  background:var(--color-surface-2); color:var(--color-text-secondary);
  font-family:var(--font-display); font-weight:var(--weight-semibold); border-radius:50%; user-select:none;
}
.uc-avatar--square{ border-radius:var(--radius-md); }
.uc-avatar__img{ width:100%; height:100%; object-fit:cover; border-radius:inherit; display:block; }
.uc-avatar__status{ position:absolute; right:0; bottom:0; border-radius:50%; border:2px solid var(--color-surface); box-sizing:content-box; }
.uc-avatar__status--online{ background:var(--color-success); }
.uc-avatar__status--busy{ background:var(--color-danger); }
.uc-avatar__status--away{ background:var(--color-warning); }
.uc-avatar__status--offline{ background:var(--sand-400); }
`;

function initialsOf(name = '') {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/** User/avatar image with initials fallback and optional presence dot. */
export function Avatar({
  src, name = '', size = 36, shape = 'circle', status, color,
  className = '', style = {}, ...rest
}) {
  injectStyle('avatar', CSS);
  const [broken, setBroken] = React.useState(false);
  const showImg = src && !broken;
  const dot = Math.max(8, Math.round(size * 0.28));
  return (
    <span
      className={cx('uc-avatar', shape === 'square' && 'uc-avatar--square', className)}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.4), ...(color ? { background: color, color: '#fff' } : null), ...style }}
      title={name || undefined}
      {...rest}
    >
      {showImg
        ? <img className="uc-avatar__img" src={src} alt={name} onError={() => setBroken(true)} />
        : initialsOf(name)}
      {status && <span className={cx('uc-avatar__status', `uc-avatar__status--${status}`)} style={{ width: dot, height: dot }} />}
    </span>
  );
}
