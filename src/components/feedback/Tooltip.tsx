import React from 'react';
import { injectStyle, cx } from '../../lib/ui';

const CSS = `
.uc-tip-wrap{ position:relative; display:inline-flex; }
.uc-tip{ position:absolute; z-index:60; pointer-events:none; }
.uc-tip__inner{
  display:block; background:var(--sand-900); color:var(--sand-50);
  font-family:var(--font-sans); font-size:var(--text-xs); font-weight:var(--weight-medium);
  line-height:1.35; padding:5px 8px; border-radius:var(--radius-sm); white-space:nowrap;
  box-shadow:var(--shadow-md); opacity:0; transform:translateY(3px);
  transition: opacity var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard);
}
.uc-tip-wrap.is-open .uc-tip__inner{ opacity:1; transform:none; }

.uc-tip--top{ bottom:100%; left:50%; transform:translateX(-50%); margin-bottom:7px; }
.uc-tip--bottom{ top:100%; left:50%; transform:translateX(-50%); margin-top:7px; }
.uc-tip--left{ right:100%; top:50%; transform:translateY(-50%); margin-right:7px; }
.uc-tip--right{ left:100%; top:50%; transform:translateY(-50%); margin-left:7px; }
`;

interface TooltipProps {
  label?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

export function Tooltip({ label, placement = 'top', delay = 120, children, className = '' }: TooltipProps) {
  injectStyle('tooltip', CSS);
  const [open, setOpen] = React.useState(false);
  const t = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const show = () => { if (t.current) clearTimeout(t.current); t.current = setTimeout(() => setOpen(true), delay); };
  const hide = () => { if (t.current) clearTimeout(t.current); setOpen(false); };
  React.useEffect(() => () => { if (t.current) clearTimeout(t.current); }, []);

  if (!label) return <>{children}</>;
  return (
    <span
      className={cx('uc-tip-wrap', open && 'is-open', className)}
      onMouseEnter={show} onMouseLeave={hide} onFocusCapture={show} onBlurCapture={hide}
    >
      {children}
      <span className={cx('uc-tip', `uc-tip--${placement}`)} role="tooltip">
        <span className="uc-tip__inner">{label}</span>
      </span>
    </span>
  );
}
