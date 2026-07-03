import React from 'react';
import { injectStyle, cx } from '../lib/ui.js';

const CSS = `
.uc-term{
  background:#15110C; border:1px solid #2a2018; border-radius:var(--radius-lg);
  overflow:hidden; box-shadow:var(--shadow-lg); font-family:var(--font-mono);
}
.uc-term__bar{ position:relative; display:flex; align-items:center; padding:9px 12px; background:#1d1710; border-bottom:1px solid #2a2018; }
.uc-term__dots{ display:flex; gap:7px; }
.uc-term__dot{ width:11px; height:11px; border-radius:50%; }
.uc-term__title{ position:absolute; left:0; right:0; text-align:center; font-family:var(--font-sans); font-size:var(--text-xs); color:#9b8e79; pointer-events:none; }
.uc-term__body{ padding:14px 16px; font-size:var(--text-sm); line-height:1.7; color:#e7dcc8; overflow-x:auto; }
.uc-term__line{ white-space:pre-wrap; word-break:break-word; }
.uc-term__prompt{ color:var(--coral-400); user-select:none; }
.uc-term__user{ color:var(--green-400); user-select:none; }
.uc-term__out{ color:#b1a288; }
.uc-term__ok{ color:var(--green-400); }
.uc-term__err{ color:var(--red-400); }
.uc-term__warn{ color:var(--amber-300); }
.uc-term__comment{ color:#6e6149; font-style:italic; }
.uc-term__cursor{ display:inline-block; width:8px; height:1.05em; background:var(--coral-400); vertical-align:text-bottom; margin-left:3px; animation: uc-blink 1.1s steps(1) infinite; }
@keyframes uc-blink{ 50%{ opacity:0; } }
`;

const OUT_CLASS = { output: 'uc-term__out', success: 'uc-term__ok', error: 'uc-term__err', warning: 'uc-term__warn', comment: 'uc-term__comment' };

/** A faux terminal window. Pass `lines` describing input/output rows. */
export function Terminal({
  lines = [], title = 'bash — unicode', prompt = '$', showCursor = true,
  promptLabel, className = '', style = {}, ...rest
}) {
  injectStyle('terminal', CSS);
  const lastInputIdx = showCursor ? lines.map((l) => l.type).lastIndexOf('input') : -1;
  return (
    <div className={cx('uc-term', className)} style={style} {...rest}>
      <div className="uc-term__bar">
        <div className="uc-term__dots">
          <span className="uc-term__dot" style={{ background: '#F4522D' }} />
          <span className="uc-term__dot" style={{ background: '#E8A23D' }} />
          <span className="uc-term__dot" style={{ background: '#1F9D55' }} />
        </div>
        {title && <div className="uc-term__title">{title}</div>}
      </div>
      <div className="uc-term__body">
        {lines.map((line, i) => {
          const isInput = !line.type || line.type === 'input';
          if (isInput) {
            return (
              <div key={i} className="uc-term__line">
                {promptLabel && <span className="uc-term__user">{promptLabel} </span>}
                <span className="uc-term__prompt">{prompt} </span>
                {line.text}
                {i === lastInputIdx && <span className="uc-term__cursor" />}
              </div>
            );
          }
          return <div key={i} className={cx('uc-term__line', OUT_CLASS[line.type] || 'uc-term__out')}>{line.text}</div>;
        })}
      </div>
    </div>
  );
}
