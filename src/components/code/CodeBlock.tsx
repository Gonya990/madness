import React from 'react';
import { injectStyle, cx } from '../../lib/ui';
import { Icon } from '../icon/Icon';
import { highlightToLines, codeColors } from './highlight';

const CSS = `
.uc-code{
  background:var(--code-bg); border:1px solid var(--color-border);
  border-radius:var(--radius-lg); overflow:hidden; color:var(--code-fg);
  font-family:var(--font-mono);
}
.uc-code__bar{
  display:flex; align-items:center; gap:10px; padding:8px 10px 8px 14px;
  background:var(--color-surface-2); border-bottom:1px solid var(--color-border);
}
.uc-code.dark .uc-code__bar{ background:#1d1710; border-bottom-color:#2a2018; }
.uc-code__name{ font-family:var(--font-mono); font-size:var(--text-xs); color:var(--color-text-secondary); display:flex; align-items:center; gap:7px; min-width:0; }
.uc-code.dark .uc-code__name{ color:#b9ab92; }
.uc-code__name span{ overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.uc-code__lang{ margin-left:auto; font-size:var(--text-2xs); letter-spacing:var(--tracking-wider); text-transform:uppercase; color:var(--code-gutter); }
.uc-code__copy{
  display:inline-flex; align-items:center; gap:5px; background:transparent; border:none; cursor:pointer;
  font-family:var(--font-sans); font-size:var(--text-xs); color:var(--color-text-secondary);
  padding:4px 7px; border-radius:var(--radius-sm); transition:background var(--dur-fast), color var(--dur-fast);
}
.uc-code.dark .uc-code__copy{ color:#b9ab92; }
.uc-code__copy:hover{ background:rgba(127,127,127,.14); color:var(--color-text); }

.uc-code__scroll{ overflow-x:auto; padding:13px 0; }
.uc-code__pre{ margin:0; font-size:var(--text-sm); line-height:1.6; min-width:max-content; }
.uc-code__row{ display:block; padding:0 16px; }
.uc-code__row--hl{ background:var(--code-selection); box-shadow: inset 2px 0 0 var(--color-primary); }
.uc-code__ln{ display:inline-block; width:2.2em; margin-right:16px; text-align:right; color:var(--code-gutter); user-select:none; }
.uc-code__lc{ white-space:pre; }
`;

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code?: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  copy?: boolean;
  highlightLines?: number[];
  dark?: boolean;
  maxHeight?: string;
}

export function CodeBlock({ code, children, language = 'js', filename, showLineNumbers = false, copy = true, highlightLines = [], dark = false, maxHeight, className = '', style = {}, ...rest }: CodeBlockProps) {
  injectStyle('code', CSS);
  const src = String(code != null ? code : (children || '')).replace(/\n$/, '');
  const lines = React.useMemo(() => highlightToLines(src, language), [src, language]);
  const hl = new Set(highlightLines);
  const [copied, setCopied] = React.useState(false);

  const doCopy = () => {
    try { navigator.clipboard.writeText(src); } catch (_) { /* noop */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={cx('uc-code', dark && 'dark', className)} style={style} {...rest}>
      {(filename || copy) && (
        <div className="uc-code__bar">
          {filename && <div className="uc-code__name"><Icon name="file-code" size={14} /><span>{filename}</span></div>}
          {!filename && <span className="uc-code__lang">{language}</span>}
          {filename && <span className="uc-code__lang">{language}</span>}
          {copy && (
            <button type="button" className="uc-code__copy" onClick={doCopy} aria-label="Копировать код">
              <Icon name={copied ? 'check' : 'copy'} size={13} />{copied ? 'Скопировано' : 'Копировать'}
            </button>
          )}
        </div>
      )}
      <div className="uc-code__scroll" style={maxHeight ? { maxHeight, overflowY: 'auto' } : undefined}>
        <pre className="uc-code__pre"><code>
          {lines.map((frags, idx) => (
            <span key={idx} className={cx('uc-code__row', hl.has(idx + 1) && 'uc-code__row--hl')}>
              {showLineNumbers && <span className="uc-code__ln">{idx + 1}</span>}
              <span className="uc-code__lc">
                {frags.length === 0 ? '​' : frags.map(([type, value], i) => (
                  codeColors[type] ? <span key={i} style={{ color: `var(${codeColors[type]})` }}>{value}</span> : <React.Fragment key={i}>{value}</React.Fragment>
                ))}
              </span>
            </span>
          ))}
        </code></pre>
      </div>
    </div>
  );
}
