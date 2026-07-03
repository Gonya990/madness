/* @ds-bundle: {"format":3,"namespace":"UniCodeDesignSystem_7662ea","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"CodeBlock","sourcePath":"components/code/CodeBlock.jsx"},{"name":"Terminal","sourcePath":"components/code/Terminal.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Kbd","sourcePath":"components/data-display/Kbd.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"c7435a14f2ea","components/actions/IconButton.jsx":"b9f59b3c5f28","components/brand/Logo.jsx":"688bf4222354","components/code/CodeBlock.jsx":"ba0a9cb7404c","components/code/Terminal.jsx":"dbf27ab57767","components/code/highlight.js":"f74d3bb5c6c9","components/data-display/Avatar.jsx":"c6c2063c35d7","components/data-display/Card.jsx":"7e1556da3152","components/data-display/Kbd.jsx":"a12d485872a0","components/feedback/Alert.jsx":"e64ac0c69dd4","components/feedback/Badge.jsx":"dba25508b983","components/feedback/ProgressBar.jsx":"b3f4deb6cf05","components/feedback/Spinner.jsx":"ff04cbce7412","components/feedback/Toast.jsx":"524ff4249aa7","components/feedback/Tooltip.jsx":"15fe796af414","components/forms/Checkbox.jsx":"682ab389b839","components/forms/Input.jsx":"9b6d30e74485","components/forms/RadioGroup.jsx":"e3d29963f7d7","components/forms/Select.jsx":"18837488dcfb","components/forms/Switch.jsx":"58c318a3232d","components/forms/Textarea.jsx":"cfb24780f4dc","components/icon/Icon.jsx":"8fd582afcba5","components/lib/ui.js":"63ef647b7ce8","components/navigation/Breadcrumbs.jsx":"7c1d820e55b0","components/navigation/Menu.jsx":"72afbfa21941","components/navigation/Tabs.jsx":"a1ba5f6e77a8","components/overlay/Dialog.jsx":"68beb89260cd","slides/deck-stage.js":"0cc26af2402a","ui_kits/dashboard/DashboardApp.jsx":"58184a6acb2e","ui_kits/docs/DocsApp.jsx":"e7a749a4e1c9","ui_kits/editor/EditorApp.jsx":"deefb0218ff4","ui_kits/marketing/MarketingApp.jsx":"b3677a751976","ui_kits/mobile/MobileApp.jsx":"06249f970648","ui_kits/mobile/ios-frame.jsx":"be3343be4b51"},"inlinedExternals":[],"unexposedExports":[{"name":"codeColors","sourcePath":"components/code/highlight.js"},{"name":"cx","sourcePath":"components/lib/ui.js"},{"name":"highlightToLines","sourcePath":"components/code/highlight.js"},{"name":"injectStyle","sourcePath":"components/lib/ui.js"}]} */

(() => {

const __ds_ns = (window.UniCodeDesignSystem_7662ea = window.UniCodeDesignSystem_7662ea || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UniCode logo. The coral squircle mark carries a terminal-prompt glyph
 * (`>` + cursor). The wordmark renders "Uni" in the current text color and
 * "Code" in coral, so it adapts to light/dark automatically.
 */
function Logo({
  variant = 'lockup',
  size = 28,
  title = 'UniCode',
  style = {},
  ...rest
}) {
  const mark = /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    fill: "none",
    role: variant === 'mark' ? 'img' : undefined,
    "aria-label": variant === 'mark' ? title : undefined,
    "aria-hidden": variant === 'mark' ? undefined : true,
    style: {
      display: 'block',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "64",
    height: "64",
    rx: "15",
    fill: "var(--coral-500, #F4522D)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 22 L29 32 L18 42",
    stroke: "#fff",
    strokeWidth: "5.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "32",
    y: "37.5",
    width: "14",
    height: "5",
    rx: "2.5",
    fill: "#fff"
  }));
  if (variant === 'mark') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        ...style
      }
    }, rest), mark);
  }
  const word = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: Math.round(size * 0.82),
      letterSpacing: '-0.02em',
      lineHeight: 1,
      color: 'var(--color-text)',
      whiteSpace: 'nowrap'
    }
  }, "Uni", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--coral-500, #F4522D)'
    }
  }, "Code"));
  if (variant === 'wordmark') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        ...style
      }
    }, rest), word);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": title,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: Math.round(size * 0.34),
      ...style
    }
  }, rest), mark, word);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/code/highlight.js
try { (() => {
// UniCode — tiny, dependency-free syntax highlighter for CodeBlock.
// Not a component (no .d.ts). Returns lines -> token fragments so CodeBlock
// can render a gutter with aligned line numbers. Good enough for specimens
// and product mocks; not a substitute for a full grammar.

const RULES = {
  js: [['comment', /\/\/[^\n]*|\/\*[\s\S]*?\*\//], ['string', /`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/], ['number', /\b0x[\da-fA-F]+|\b\d[\d_]*\.?\d*(?:[eE][+-]?\d+)?/], ['keyword', /\b(?:const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|new|class|extends|super|import|from|export|default|async|await|yield|try|catch|finally|throw|typeof|instanceof|delete|in|of|this|void|null|undefined|true|false|interface|type|enum|implements|public|private|protected|readonly|as|satisfies)\b/], ['func', /\b[A-Za-z_$][\w$]*(?=\s*\()/], ['punct', /[{}()[\];,.]/]],
  python: [['comment', /#[^\n]*/], ['string', /"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/], ['number', /\b\d[\d_]*\.?\d*(?:[eE][+-]?\d+)?/], ['keyword', /\b(?:def|return|if|elif|else|for|while|import|from|as|class|try|except|finally|with|lambda|yield|pass|break|continue|in|is|not|and|or|None|True|False|self|cls|async|await|raise|global|nonlocal|assert|del|print)\b/], ['func', /\b[A-Za-z_][\w]*(?=\s*\()/], ['punct', /[{}()[\]:;,.]/]],
  bash: [['comment', /#[^\n]*/], ['string', /"(?:\\.|[^"\\])*"|'(?:[^']*)'/], ['variable', /\$\w+|\$\{[^}]+\}/], ['attr', /(?<=\s)-{1,2}[\w-]+/], ['keyword', /\b(?:sudo|cd|ls|cat|echo|export|mkdir|rm|cp|mv|curl|wget|git|npm|npx|yarn|pnpm|node|deno|bun|python|pip|docker|kubectl|make|chmod|grep|sed|awk)\b/], ['number', /\b\d+\b/]],
  json: [['attr', /"(?:\\.|[^"\\])*"(?=\s*:)/], ['string', /"(?:\\.|[^"\\])*"/], ['keyword', /\b(?:true|false|null)\b/], ['number', /-?\b\d[\d_]*\.?\d*(?:[eE][+-]?\d+)?/], ['punct', /[{}[\]:,]/]],
  html: [['comment', /<!--[\s\S]*?-->/], ['string', /"(?:\\.|[^"\\])*"|'(?:[^']*)'/], ['tag', /<\/?[A-Za-z][\w-]*|\/?>/], ['attr', /\b[A-Za-z_:][\w:-]*(?=\s*=)/]],
  css: [['comment', /\/\*[\s\S]*?\*\//], ['string', /"(?:\\.|[^"\\])*"|'(?:[^']*)'/], ['keyword', /@[\w-]+|![a-z]+/], ['number', /#[0-9a-fA-F]{3,8}\b|\b\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw|s|ms|deg|fr|ch)?\b/], ['attr', /[\w-]+(?=\s*:)/], ['punct', /[{}();:,]/]],
  plain: []
};
const ALIAS = {
  ts: 'js',
  tsx: 'js',
  jsx: 'js',
  javascript: 'js',
  typescript: 'js',
  mjs: 'js',
  node: 'js',
  py: 'python',
  sh: 'bash',
  shell: 'bash',
  zsh: 'bash',
  console: 'bash',
  htm: 'html',
  xml: 'html',
  svg: 'html',
  vue: 'html',
  scss: 'css',
  less: 'css',
  yaml: 'plain',
  yml: 'plain',
  text: 'plain',
  txt: 'plain',
  diff: 'plain'
};
const codeColors = {
  comment: '--code-comment',
  string: '--code-string',
  number: '--code-number',
  keyword: '--code-keyword',
  func: '--code-function',
  punct: '--code-punct',
  tag: '--code-tag',
  attr: '--code-attr',
  variable: '--code-keyword',
  text: null
};
function tokenize(code, lang) {
  const key = ALIAS[lang] || (RULES[lang] ? lang : 'js');
  const rules = RULES[key] || [];
  if (!rules.length) return [['text', code]];
  const sticky = rules.map(([t, re]) => [t, new RegExp(re.source, re.flags.includes('i') ? 'iy' : 'y')]);
  const out = [];
  let i = 0;
  while (i < code.length) {
    let hit = null;
    for (const [type, re] of sticky) {
      re.lastIndex = i;
      const m = re.exec(code);
      if (m && m.index === i && m[0].length) {
        hit = [type, m[0]];
        break;
      }
    }
    if (hit) {
      out.push(hit);
      i += hit[1].length;
    } else {
      out.push(['text', code[i]]);
      i += 1;
    }
  }
  // merge adjacent text fragments
  const merged = [];
  for (const frag of out) {
    const last = merged[merged.length - 1];
    if (last && last[0] === 'text' && frag[0] === 'text') last[1] += frag[1];else merged.push([frag[0], frag[1]]);
  }
  return merged;
}

/** Returns an array of lines; each line is an array of [type, text] fragments. */
function highlightToLines(code, lang) {
  const tokens = tokenize(code.replace(/\n$/, ''), lang);
  const lines = [[]];
  for (const [type, value] of tokens) {
    const parts = value.split('\n');
    parts.forEach((part, idx) => {
      if (idx > 0) lines.push([]);
      if (part) lines[lines.length - 1].push([type, part]);
    });
  }
  return lines;
}
Object.assign(__ds_scope, { codeColors, highlightToLines });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/code/highlight.js", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UniCode icon. Thin wrapper over Lucide (loaded from CDN on the page).
 * Renders the SVG imperatively into a span so React never fights Lucide's
 * DOM replacement, and retries briefly if the Lucide script hasn't loaded yet.
 */
function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf,
      tries = 0;
    const paint = () => {
      const L = window.lucide;
      if (!L || !L.createIcons) {
        if (tries++ < 40) raf = requestAnimationFrame(paint);
        return;
      }
      el.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      el.appendChild(i);
      try {
        L.createIcons();
      } catch (e) {/* noop */}
      const svg = el.querySelector('svg');
      if (svg) {
        svg.setAttribute('width', String(size));
        svg.setAttribute('height', String(size));
        svg.setAttribute('stroke-width', String(strokeWidth));
        svg.style.display = 'block';
      }
    };
    paint();
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: className,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      width: size,
      height: size,
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/lib/ui.js
try { (() => {
// UniCode design-system — shared internal helpers for components.
// Not a component (no .d.ts) — imported by siblings via relative path.

const _injected = new Set();

/** Inject a <style> block once per id (idempotent). Lets components own
 *  real :hover / :focus-visible / :active / :disabled states without a
 *  CSS-in-JS library. */
function injectStyle(id, css) {
  if (typeof document === 'undefined') return;
  if (_injected.has(id)) return;
  _injected.add(id);
  const el = document.createElement('style');
  el.setAttribute('data-uc', id);
  el.textContent = css;
  document.head.appendChild(el);
}

/** Tiny classnames joiner. */
function cx(...args) {
  return args.filter(Boolean).join(' ');
}
Object.assign(__ds_scope, { injectStyle, cx });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lib/ui.js", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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

/** UniCode button. Primary action by default; supports icons, loading and link mode. */
function Button({
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
}) {
  __ds_scope.injectStyle('btn', CSS);
  const Tag = href ? 'a' : 'button';
  const iconSize = size === 'sm' ? 15 : size === 'lg' ? 19 : 17;
  const isDisabled = disabled || loading;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: __ds_scope.cx('uc-btn', `uc-btn--${variant}`, `uc-btn--${size}`, fullWidth && 'uc-btn--block', className),
    href: href,
    type: href ? undefined : type,
    disabled: Tag === 'button' ? isDisabled : undefined,
    "aria-disabled": href && isDisabled ? true : undefined,
    "aria-busy": loading || undefined,
    style: style
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "uc-btn__spin",
    "aria-hidden": "true"
  }), !loading && leftIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leftIcon,
    size: iconSize,
    strokeWidth: 2.1
  }), children != null && /*#__PURE__*/React.createElement("span", null, children), !loading && rightIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: rightIcon,
    size: iconSize,
    strokeWidth: 2.1
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function IconButton({
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
  __ds_scope.injectStyle('iconbtn', CSS);
  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 22 : 18;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    "aria-label": label,
    title: label,
    disabled: disabled,
    className: __ds_scope.cx('uc-iconbtn', `uc-iconbtn--${variant}`, `uc-iconbtn--${size}`, round && 'uc-iconbtn--round', className),
    style: style
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize,
    strokeWidth: 2
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/code/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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

/** Syntax-highlighted code block with optional filename bar, line numbers and copy. */
function CodeBlock({
  code,
  children,
  language = 'js',
  filename,
  showLineNumbers = false,
  copy = true,
  highlightLines = [],
  dark = false,
  maxHeight,
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('code', CSS);
  const src = String(code != null ? code : children || '').replace(/\n$/, '');
  const lines = React.useMemo(() => __ds_scope.highlightToLines(src, language), [src, language]);
  const hl = new Set(highlightLines);
  const [copied, setCopied] = React.useState(false);
  const doCopy = () => {
    try {
      navigator.clipboard.writeText(src);
    } catch (e) {/* noop */}
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('uc-code', dark && 'dark', className),
    style: style
  }, rest), (filename || copy) && /*#__PURE__*/React.createElement("div", {
    className: "uc-code__bar"
  }, filename && /*#__PURE__*/React.createElement("div", {
    className: "uc-code__name"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "file-code",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, filename)), !filename && /*#__PURE__*/React.createElement("span", {
    className: "uc-code__lang"
  }, language), filename && /*#__PURE__*/React.createElement("span", {
    className: "uc-code__lang"
  }, language), copy && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uc-code__copy",
    onClick: doCopy,
    "aria-label": "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u0434"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: copied ? 'check' : 'copy',
    size: 13
  }), copied ? 'Скопировано' : 'Копировать')), /*#__PURE__*/React.createElement("div", {
    className: "uc-code__scroll",
    style: maxHeight ? {
      maxHeight,
      overflowY: 'auto'
    } : undefined
  }, /*#__PURE__*/React.createElement("pre", {
    className: "uc-code__pre"
  }, /*#__PURE__*/React.createElement("code", null, lines.map((frags, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    className: __ds_scope.cx('uc-code__row', hl.has(idx + 1) && 'uc-code__row--hl')
  }, showLineNumbers && /*#__PURE__*/React.createElement("span", {
    className: "uc-code__ln"
  }, idx + 1), /*#__PURE__*/React.createElement("span", {
    className: "uc-code__lc"
  }, frags.length === 0 ? '\u200b' : frags.map(([type, value], i) => __ds_scope.codeColors[type] ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: `var(${__ds_scope.codeColors[type]})`
    }
  }, value) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, value)))))))));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/code/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/code/Terminal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const OUT_CLASS = {
  output: 'uc-term__out',
  success: 'uc-term__ok',
  error: 'uc-term__err',
  warning: 'uc-term__warn',
  comment: 'uc-term__comment'
};

/** A faux terminal window. Pass `lines` describing input/output rows. */
function Terminal({
  lines = [],
  title = 'bash — unicode',
  prompt = '$',
  showCursor = true,
  promptLabel,
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('terminal', CSS);
  const lastInputIdx = showCursor ? lines.map(l => l.type).lastIndexOf('input') : -1;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('uc-term', className),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "uc-term__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uc-term__dots"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uc-term__dot",
    style: {
      background: '#F4522D'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "uc-term__dot",
    style: {
      background: '#E8A23D'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "uc-term__dot",
    style: {
      background: '#1F9D55'
    }
  })), title && /*#__PURE__*/React.createElement("div", {
    className: "uc-term__title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "uc-term__body"
  }, lines.map((line, i) => {
    const isInput = !line.type || line.type === 'input';
    if (isInput) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "uc-term__line"
      }, promptLabel && /*#__PURE__*/React.createElement("span", {
        className: "uc-term__user"
      }, promptLabel, " "), /*#__PURE__*/React.createElement("span", {
        className: "uc-term__prompt"
      }, prompt, " "), line.text, i === lastInputIdx && /*#__PURE__*/React.createElement("span", {
        className: "uc-term__cursor"
      }));
    }
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: __ds_scope.cx('uc-term__line', OUT_CLASS[line.type] || 'uc-term__out')
    }, line.text);
  })));
}
Object.assign(__ds_scope, { Terminal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/code/Terminal.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Avatar({
  src,
  name = '',
  size = 36,
  shape = 'circle',
  status,
  color,
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('avatar', CSS);
  const [broken, setBroken] = React.useState(false);
  const showImg = src && !broken;
  const dot = Math.max(8, Math.round(size * 0.28));
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx('uc-avatar', shape === 'square' && 'uc-avatar--square', className),
    style: {
      width: size,
      height: size,
      fontSize: Math.round(size * 0.4),
      ...(color ? {
        background: color,
        color: '#fff'
      } : null),
      ...style
    },
    title: name || undefined
  }, rest), showImg ? /*#__PURE__*/React.createElement("img", {
    className: "uc-avatar__img",
    src: src,
    alt: name,
    onError: () => setBroken(true)
  }) : initialsOf(name), status && /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx('uc-avatar__status', `uc-avatar__status--${status}`),
    style: {
      width: dot,
      height: dot
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
  title,
  subtitle,
  actions,
  footer,
  children,
  variant = 'default',
  padding = 'md',
  interactive = false,
  as = 'div',
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('card', CSS);
  const Tag = as;
  const hasHeader = title || subtitle || actions;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: __ds_scope.cx('uc-card', variant !== 'default' && `uc-card--${variant}`, interactive && 'uc-card--interactive', `uc-card--pad-${padding}`, className),
    style: style
  }, rest), hasHeader && /*#__PURE__*/React.createElement("div", {
    className: "uc-card__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uc-card__htext"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "uc-card__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "uc-card__subtitle"
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    className: "uc-card__actions"
  }, actions)), children != null && /*#__PURE__*/React.createElement("div", {
    className: "uc-card__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "uc-card__footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Kbd.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.uc-kbd{
  display:inline-flex; align-items:center; justify-content:center; min-width:20px; height:20px;
  padding:0 5px; font-family:var(--font-mono); font-size:var(--text-xs); font-weight:var(--weight-semibold);
  color:var(--color-text-secondary); background:var(--color-surface);
  border:1px solid var(--color-border-strong); border-bottom-width:2px;
  border-radius:var(--radius-sm); line-height:1; white-space:nowrap;
}
`;

/** Keyboard key cap, for documenting shortcuts. */
function Kbd({
  children,
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('kbd', CSS);
  return /*#__PURE__*/React.createElement("kbd", _extends({
    className: __ds_scope.cx('uc-kbd', className),
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  neutral: 'info'
};

/** Inline callout / banner for contextual messages. */
function Alert({
  variant = 'info',
  title,
  children,
  icon,
  onClose,
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('alert', CSS);
  const iconName = icon === null ? null : icon || DEFAULT_ICON[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    className: __ds_scope.cx('uc-alert', `uc-alert--${variant}`, className),
    style: style
  }, rest), iconName && /*#__PURE__*/React.createElement("span", {
    className: "uc-alert__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "uc-alert__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "uc-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "uc-alert__desc"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uc-alert__close",
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 15
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  leftIcon,
  solid = false,
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('badge', CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx('uc-badge', `uc-badge--${variant}`, `uc-badge--${size}`, solid && 'uc-badge--solid', className),
    style: style
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "uc-badge__dot"
  }), leftIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leftIcon,
    size: size === 'sm' ? 11 : 12,
    strokeWidth: 2.5
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.uc-progress{ width:100%; background:var(--color-surface-2); border-radius:var(--radius-full); overflow:hidden; }
.uc-progress__bar{ height:100%; background:var(--color-primary); border-radius:inherit; transition: width var(--dur-slow) var(--ease-standard); }
.uc-progress--indeterminate .uc-progress__bar{ width:40%; animation: uc-progress-slide 1.15s var(--ease-in-out) infinite; }
@keyframes uc-progress-slide{ 0%{ transform:translateX(-120%);} 100%{ transform:translateX(320%);} }
`;

/** Horizontal progress bar; determinate by value/max, or indeterminate. */
function ProgressBar({
  value = 0,
  max = 100,
  size = 'md',
  color,
  indeterminate = false,
  label = 'Прогресс',
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('progress', CSS);
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const h = size === 'sm' ? 4 : size === 'lg' ? 10 : 6;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('uc-progress', indeterminate && 'uc-progress--indeterminate', className),
    role: "progressbar",
    "aria-valuenow": indeterminate ? undefined : value,
    "aria-valuemin": 0,
    "aria-valuemax": max,
    "aria-label": label,
    style: {
      height: h,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "uc-progress__bar",
    style: {
      width: indeterminate ? undefined : `${pct}%`,
      background: color || 'var(--color-primary)'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.uc-spinner{
  display:inline-block; border-radius:50%;
  border:2px solid var(--color-border); border-top-color:var(--color-primary);
  animation: uc-spin .65s linear infinite;
}
@keyframes uc-spin{ to{ transform:rotate(360deg); } }
`;

/** Indeterminate loading spinner. */
function Spinner({
  size = 18,
  thickness = 2,
  color,
  label = 'Загрузка',
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('spinner', CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": label,
    className: __ds_scope.cx('uc-spinner', className),
    style: {
      width: size,
      height: size,
      borderWidth: thickness,
      borderTopColor: color || 'var(--color-primary)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const DEFAULT_ICON = {
  success: 'circle-check',
  danger: 'octagon-alert',
  warning: 'triangle-alert',
  info: 'info',
  neutral: 'bell'
};

/** A single toast notification (presentational). App owns placement, queue and auto-dismiss. */
function Toast({
  variant = 'neutral',
  title,
  children,
  icon,
  action,
  onClose,
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('toast', CSS);
  const iconName = icon === null ? null : icon || DEFAULT_ICON[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    className: __ds_scope.cx('uc-toast', `uc-toast--${variant}`, className),
    style: style
  }, rest), iconName && /*#__PURE__*/React.createElement("span", {
    className: "uc-toast__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "uc-toast__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "uc-toast__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "uc-toast__desc"
  }, children), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uc-toast__action",
    onClick: action.onClick
  }, action.label)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uc-toast__close",
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 15
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
.dark .uc-tip__inner, [data-theme="dark"] .uc-tip__inner{ background:var(--sand-800); color:var(--sand-50); border:1px solid var(--color-border); }
.uc-tip-wrap.is-open .uc-tip__inner{ opacity:1; transform:none; }

.uc-tip--top{ bottom:100%; left:50%; transform:translateX(-50%); margin-bottom:7px; }
.uc-tip--bottom{ top:100%; left:50%; transform:translateX(-50%); margin-top:7px; }
.uc-tip--left{ right:100%; top:50%; transform:translateY(-50%); margin-right:7px; }
.uc-tip--right{ left:100%; top:50%; transform:translateY(-50%); margin-left:7px; }
`;

/** Hover/focus tooltip wrapping a single trigger element. */
function Tooltip({
  label,
  placement = 'top',
  delay = 120,
  children,
  className = '',
  ...rest
}) {
  __ds_scope.injectStyle('tooltip', CSS);
  const [open, setOpen] = React.useState(false);
  const t = React.useRef(null);
  const show = () => {
    clearTimeout(t.current);
    t.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    clearTimeout(t.current);
    setOpen(false);
  };
  React.useEffect(() => () => clearTimeout(t.current), []);
  if (!label) return children;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx('uc-tip-wrap', open && 'is-open', className),
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocusCapture: show,
    onBlurCapture: hide
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx('uc-tip', `uc-tip--${placement}`),
    role: "tooltip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uc-tip__inner"
  }, label)));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.uc-cbx{ position:relative; display:inline-flex; flex:0 0 auto; }
.uc-cbx__input{ position:absolute; inset:0; width:100%; height:100%; opacity:0; margin:0; cursor:pointer; }
.uc-cbx__box{
  display:inline-flex; align-items:center; justify-content:center;
  width:18px; height:18px; border:1.5px solid var(--color-border-strong);
  border-radius:var(--radius-sm); background:var(--color-surface); color:transparent;
  transition: background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast), color var(--dur-fast);
}
.uc-cbx--sm .uc-cbx__box{ width:16px; height:16px; }
.uc-cbx.is-checked .uc-cbx__box{ background:var(--color-primary); border-color:var(--color-primary); color:#fff; }
.uc-cbx__input:focus-visible + .uc-cbx__box{ box-shadow:var(--shadow-focus); border-color:var(--color-primary); }
.uc-cbx.is-disabled{ opacity:.5; }

.uc-cbx-row{ display:inline-flex; align-items:center; gap:9px; cursor:pointer; font-size:var(--text-base); color:var(--color-text); }
.uc-cbx-row.is-disabled{ cursor:not-allowed; opacity:.6; }
.uc-cbx__label{ user-select:none; }
`;

/** Checkbox with custom box + Lucide check. Works controlled or uncontrolled. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  onChange,
  id,
  size = 'md',
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('checkbox', CSS);
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isChecked = isControlled ? !!checked : internal;
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate, isChecked]);
  const handle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const box = /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx('uc-cbx', `uc-cbx--${size}`, (isChecked || indeterminate) && 'is-checked', disabled && 'is-disabled', className),
    style: label ? undefined : style
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox",
    className: "uc-cbx__input",
    checked: isControlled ? !!checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    disabled: disabled,
    onChange: handle,
    id: id
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "uc-cbx__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: indeterminate ? 'minus' : 'check',
    size: size === 'sm' ? 12 : 14,
    strokeWidth: 3
  })));
  if (!label) return box;
  return /*#__PURE__*/React.createElement("label", {
    className: __ds_scope.cx('uc-cbx-row', disabled && 'is-disabled'),
    style: style
  }, box, /*#__PURE__*/React.createElement("span", {
    className: "uc-cbx__label"
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.uc-field{ display:flex; flex-direction:column; gap:6px; }
.uc-label{ font-size:var(--text-sm); font-weight:var(--weight-medium); color:var(--color-text); display:flex; align-items:center; }
.uc-label__req{ color:var(--color-danger); margin-left:3px; }
.uc-hint{ font-size:var(--text-xs); color:var(--color-text-muted); }
.uc-hint--error{ color:var(--color-danger-fg); }

.uc-input-wrap{ position:relative; display:flex; align-items:center; }
.uc-input__icon{ position:absolute; left:11px; color:var(--color-text-muted); pointer-events:none; display:flex; }
.uc-input{
  width:100%; font-family:var(--font-sans); color:var(--color-text);
  background:var(--color-surface); border:1px solid var(--color-border-strong);
  border-radius:var(--radius-md);
  transition: border-color var(--dur-fast), box-shadow var(--dur-fast), background var(--dur-fast);
}
.uc-input::placeholder{ color:var(--color-text-muted); }
.uc-input:focus{ outline:none; border-color:var(--color-primary); box-shadow:var(--shadow-focus); }
.uc-input:disabled{ opacity:.55; cursor:not-allowed; background:var(--color-surface-2); }
.uc-input--sm{ height:var(--control-height-sm); padding:0 11px; font-size:var(--text-sm); border-radius:var(--radius-sm); }
.uc-input--md{ height:var(--control-height-md); padding:0 12px; font-size:var(--text-base); }
.uc-input--lg{ height:var(--control-height-lg); padding:0 14px; font-size:var(--text-md); }
.uc-input--has-icon{ padding-left:34px; }
.uc-input--mono{ font-family:var(--font-mono); }
.uc-input--invalid{ border-color:var(--color-danger); }
.uc-input--invalid:focus{ box-shadow:0 0 0 3px var(--color-danger-bg); }
`;
let _uid = 0;

/** Text input with optional label, hint, error state and leading icon. */
function Input({
  label,
  hint,
  error,
  leftIcon,
  size = 'md',
  mono = false,
  required = false,
  id,
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('input', CSS);
  const autoId = React.useMemo(() => id || `uc-input-${++_uid}`, [id]);
  const invalid = !!error;
  const control = /*#__PURE__*/React.createElement("div", {
    className: "uc-input-wrap"
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    className: "uc-input__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leftIcon,
    size: size === 'sm' ? 15 : 16
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: autoId,
    className: __ds_scope.cx('uc-input', `uc-input--${size}`, leftIcon && 'uc-input--has-icon', mono && 'uc-input--mono', invalid && 'uc-input--invalid', className),
    "aria-invalid": invalid || undefined,
    required: required,
    style: style
  }, rest)));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement("div", {
    className: "uc-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "uc-label",
    htmlFor: autoId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "uc-label__req"
  }, "*")), control, (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx('uc-hint', invalid && 'uc-hint--error')
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.uc-radios{ display:flex; gap:12px; }
.uc-radios--vertical{ flex-direction:column; }
.uc-radios--horizontal{ flex-direction:row; flex-wrap:wrap; }
.uc-radio{ display:inline-flex; align-items:center; gap:9px; cursor:pointer; font-size:var(--text-base); color:var(--color-text); }
.uc-radio.is-disabled{ cursor:not-allowed; opacity:.55; }
.uc-radio__input{ position:absolute; opacity:0; width:0; height:0; }
.uc-radio__dot{
  position:relative; display:inline-flex; flex:0 0 auto; width:18px; height:18px; border-radius:50%;
  border:1.5px solid var(--color-border-strong); background:var(--color-surface);
  transition: border-color var(--dur-fast) var(--ease-standard);
}
.uc-radio__dot::after{
  content:""; position:absolute; inset:0; margin:auto; width:8px; height:8px; border-radius:50%;
  background:var(--color-primary); transform:scale(0); transition: transform var(--dur-fast) var(--ease-spring);
}
.uc-radio.is-checked .uc-radio__dot{ border-color:var(--color-primary); }
.uc-radio.is-checked .uc-radio__dot::after{ transform:scale(1); }
.uc-radio__input:focus-visible + .uc-radio__dot{ box-shadow:var(--shadow-focus); }
`;
function normalize(opt) {
  return typeof opt === 'string' || typeof opt === 'number' ? {
    value: opt,
    label: String(opt)
  } : opt;
}
let _grp = 0;

/** A set of mutually-exclusive radio options. Controlled or uncontrolled. */
function RadioGroup({
  name,
  value,
  defaultValue,
  onChange,
  options = [],
  orientation = 'vertical',
  disabled = false,
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('radio', CSS);
  const groupName = React.useMemo(() => name || `uc-radio-${++_grp}`, [name]);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const handle = v => e => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v, e);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    className: __ds_scope.cx('uc-radios', `uc-radios--${orientation}`, className),
    style: style
  }, rest), options.map(normalize).map(o => {
    const isDisabled = disabled || o.disabled;
    const checked = String(current) === String(o.value);
    return /*#__PURE__*/React.createElement("label", {
      key: o.value,
      className: __ds_scope.cx('uc-radio', checked && 'is-checked', isDisabled && 'is-disabled')
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      className: "uc-radio__input",
      name: groupName,
      value: o.value,
      checked: checked,
      disabled: isDisabled,
      onChange: handle(o.value)
    }), /*#__PURE__*/React.createElement("span", {
      className: "uc-radio__dot"
    }), /*#__PURE__*/React.createElement("span", null, o.label));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.uc-select-wrap{ position:relative; display:flex; align-items:center; }
.uc-select{
  width:100%; appearance:none; -webkit-appearance:none; font-family:var(--font-sans);
  color:var(--color-text); background:var(--color-surface);
  border:1px solid var(--color-border-strong); border-radius:var(--radius-md);
  padding-right:34px; cursor:pointer;
  transition: border-color var(--dur-fast), box-shadow var(--dur-fast);
}
.uc-select:focus{ outline:none; border-color:var(--color-primary); box-shadow:var(--shadow-focus); }
.uc-select:disabled{ opacity:.55; cursor:not-allowed; }
.uc-select--sm{ height:var(--control-height-sm); padding-left:11px; font-size:var(--text-sm); border-radius:var(--radius-sm); }
.uc-select--md{ height:var(--control-height-md); padding-left:12px; font-size:var(--text-base); }
.uc-select--lg{ height:var(--control-height-lg); padding-left:14px; font-size:var(--text-md); }
.uc-select__chev{ position:absolute; right:10px; color:var(--color-text-muted); pointer-events:none; display:flex; }
`;
let _uid = 0;
function normalize(opt) {
  return typeof opt === 'string' || typeof opt === 'number' ? {
    value: opt,
    label: String(opt)
  } : opt;
}

/** Native select, styled to match the form family. Pass `options` or `<option>` children. */
function Select({
  label,
  hint,
  error,
  size = 'md',
  options,
  placeholder,
  required = false,
  id,
  children,
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('select', CSS);
  const autoId = React.useMemo(() => id || `uc-select-${++_uid}`, [id]);
  const invalid = !!error;
  const control = /*#__PURE__*/React.createElement("div", {
    className: "uc-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: autoId,
    className: __ds_scope.cx('uc-select', `uc-select--${size}`, className),
    "aria-invalid": invalid || undefined,
    required: required,
    style: {
      ...(invalid ? {
        borderColor: 'var(--color-danger)'
      } : null),
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options ? options.map(normalize).map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    disabled: o.disabled
  }, o.label)) : children), /*#__PURE__*/React.createElement("span", {
    className: "uc-select__chev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement("div", {
    className: "uc-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "uc-label",
    htmlFor: autoId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "uc-label__req"
  }, "*")), control, (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx('uc-hint', invalid && 'uc-hint--error')
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.uc-switch{ position:relative; display:inline-flex; flex:0 0 auto; }
.uc-switch__input{ position:absolute; inset:0; width:100%; height:100%; opacity:0; margin:0; cursor:pointer; }
.uc-switch__track{
  display:inline-flex; align-items:center; padding:2px; border-radius:999px;
  background:var(--color-border-strong);
  transition: background var(--dur-base) var(--ease-standard);
}
.uc-switch__thumb{
  border-radius:50%; background:#fff; box-shadow:var(--shadow-sm);
  transition: transform var(--dur-base) var(--ease-spring);
}
.uc-switch--md .uc-switch__track{ width:38px; height:22px; }
.uc-switch--md .uc-switch__thumb{ width:18px; height:18px; }
.uc-switch--md.is-on .uc-switch__thumb{ transform: translateX(16px); }
.uc-switch--sm .uc-switch__track{ width:32px; height:18px; }
.uc-switch--sm .uc-switch__thumb{ width:14px; height:14px; }
.uc-switch--sm.is-on .uc-switch__thumb{ transform: translateX(14px); }
.uc-switch.is-on .uc-switch__track{ background:var(--color-primary); }
.uc-switch__input:focus-visible + .uc-switch__track{ box-shadow:var(--shadow-focus); }
.uc-switch.is-disabled{ opacity:.5; }

.uc-switch-row{ display:inline-flex; align-items:center; gap:10px; cursor:pointer; font-size:var(--text-base); color:var(--color-text); }
.uc-switch-row.is-disabled{ cursor:not-allowed; opacity:.6; }
`;

/** On/off toggle. Controlled (`checked`) or uncontrolled (`defaultChecked`). */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  size = 'md',
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('switch', CSS);
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = isControlled ? !!checked : internal;
  const handle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const control = /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx('uc-switch', `uc-switch--${size}`, isOn && 'is-on', disabled && 'is-disabled', className),
    style: label ? undefined : style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    className: "uc-switch__input",
    checked: isControlled ? !!checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    disabled: disabled,
    onChange: handle,
    id: id
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "uc-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uc-switch__thumb"
  })));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    className: __ds_scope.cx('uc-switch-row', disabled && 'is-disabled'),
    style: style
  }, control, /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.uc-textarea{
  width:100%; font-family:var(--font-sans); color:var(--color-text);
  background:var(--color-surface); border:1px solid var(--color-border-strong);
  border-radius:var(--radius-md); padding:10px 12px; font-size:var(--text-base);
  line-height:var(--leading-normal); resize:vertical; min-height:84px;
  transition: border-color var(--dur-fast), box-shadow var(--dur-fast);
}
.uc-textarea::placeholder{ color:var(--color-text-muted); }
.uc-textarea:focus{ outline:none; border-color:var(--color-primary); box-shadow:var(--shadow-focus); }
.uc-textarea:disabled{ opacity:.55; cursor:not-allowed; background:var(--color-surface-2); }
.uc-textarea--mono{ font-family:var(--font-mono); font-size:var(--text-sm); }
.uc-textarea--invalid{ border-color:var(--color-danger); }
`;
let _uid = 0;

/** Multi-line text input. Shares the field chrome (label / hint / error) with Input. */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  mono = false,
  required = false,
  id,
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('textarea', CSS);
  const autoId = React.useMemo(() => id || `uc-textarea-${++_uid}`, [id]);
  const invalid = !!error;
  const control = /*#__PURE__*/React.createElement("textarea", _extends({
    id: autoId,
    rows: rows,
    className: __ds_scope.cx('uc-textarea', mono && 'uc-textarea--mono', invalid && 'uc-textarea--invalid', className),
    "aria-invalid": invalid || undefined,
    required: required,
    style: style
  }, rest));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement("div", {
    className: "uc-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "uc-label",
    htmlFor: autoId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "uc-label__req"
  }, "*")), control, (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx('uc-hint', invalid && 'uc-hint--error')
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.uc-crumbs{ display:flex; align-items:center; gap:6px; font-size:var(--text-sm); color:var(--color-text-secondary); flex-wrap:wrap; }
.uc-crumbs__item{ display:inline-flex; align-items:center; gap:6px; color:var(--color-text-secondary); text-decoration:none; transition:color var(--dur-fast); }
.uc-crumbs__item:hover{ color:var(--color-text); }
.uc-crumbs__item--current{ color:var(--color-text); font-weight:var(--weight-medium); }
.uc-crumbs__sep{ color:var(--color-text-muted); display:inline-flex; }
`;

/** Hierarchical breadcrumb trail. The last item is treated as the current page. */
function Breadcrumbs({
  items = [],
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('crumbs', CSS);
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    className: __ds_scope.cx('uc-crumbs', className),
    style: style
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    const inner = /*#__PURE__*/React.createElement(React.Fragment, null, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 15
    }), it.label);
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, it.href && !last ? /*#__PURE__*/React.createElement("a", {
      className: "uc-crumbs__item",
      href: it.href
    }, inner) : /*#__PURE__*/React.createElement("span", {
      className: __ds_scope.cx('uc-crumbs__item', last && 'uc-crumbs__item--current'),
      "aria-current": last ? 'page' : undefined
    }, inner), !last && /*#__PURE__*/React.createElement("span", {
      className: "uc-crumbs__sep"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 15
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.uc-menu{ position:relative; display:inline-flex; }
.uc-menu__pop{
  position:absolute; z-index:70; min-width:204px; background:var(--color-surface);
  border:1px solid var(--color-border); border-radius:var(--radius-lg);
  box-shadow:var(--shadow-lg); padding:5px; top:100%; margin-top:6px;
  animation: uc-menu-in var(--dur-fast) var(--ease-out);
}
@keyframes uc-menu-in{ from{ opacity:0; transform:translateY(-4px); } to{ opacity:1; transform:none; } }
.uc-menu__pop--start{ left:0; } .uc-menu__pop--end{ right:0; }
.uc-menu__pop--up{ top:auto; bottom:100%; margin-top:0; margin-bottom:6px; }
.uc-menu__item{
  display:flex; align-items:center; gap:10px; width:100%; text-align:left; background:transparent;
  border:none; cursor:pointer; font-family:var(--font-sans); font-size:var(--text-sm);
  color:var(--color-text); padding:7px 9px; border-radius:var(--radius-sm); transition:background var(--dur-fast);
}
.uc-menu__item:hover{ background:var(--color-surface-2); }
.uc-menu__item:disabled{ opacity:.5; cursor:not-allowed; }
.uc-menu__item--danger{ color:var(--color-danger); }
.uc-menu__item--danger:hover{ background:var(--color-danger-bg); }
.uc-menu__label{ flex:1 1 auto; }
.uc-menu__sc{ margin-left:auto; font-family:var(--font-mono); font-size:var(--text-2xs); color:var(--color-text-muted); }
.uc-menu__sep{ height:1px; background:var(--color-border); margin:5px 4px; }
.uc-menu__heading{ padding:6px 9px 3px; font-size:var(--text-2xs); font-weight:var(--weight-bold); letter-spacing:var(--tracking-widest); text-transform:uppercase; color:var(--color-text-muted); }
`;

/** Click-to-open dropdown menu anchored to a trigger element. */
function Menu({
  trigger,
  items = [],
  align = 'start',
  placement = 'down',
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('menu', CSS);
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx('uc-menu', className),
    ref: ref,
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o),
    style: {
      display: 'inline-flex'
    }
  }, typeof trigger === 'function' ? trigger({
    open
  }) : trigger), open && /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx('uc-menu__pop', `uc-menu__pop--${align === 'end' ? 'end' : 'start'}`, placement === 'up' && 'uc-menu__pop--up'),
    role: "menu"
  }, items.map((it, i) => {
    if (it.type === 'separator') return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "uc-menu__sep"
    });
    if (it.type === 'heading') return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "uc-menu__heading"
    }, it.label);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "menuitem",
      disabled: it.disabled,
      className: __ds_scope.cx('uc-menu__item', it.danger && 'uc-menu__item--danger'),
      onClick: () => {
        setOpen(false);
        it.onClick && it.onClick();
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16
    }), /*#__PURE__*/React.createElement("span", {
      className: "uc-menu__label"
    }, it.label), it.shortcut && /*#__PURE__*/React.createElement("span", {
      className: "uc-menu__sc"
    }, it.shortcut));
  })));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.uc-tabs{ display:flex; }
.uc-tabs--line{ border-bottom:1px solid var(--color-border); gap:4px; }
.uc-tabs--pill{ background:var(--color-surface-2); padding:3px; border-radius:var(--radius-lg); gap:2px; display:inline-flex; }

.uc-tab{
  position:relative; display:inline-flex; align-items:center; gap:7px;
  font-family:var(--font-sans); font-weight:var(--weight-medium); font-size:var(--text-sm);
  color:var(--color-text-secondary); background:transparent; border:none; cursor:pointer;
  padding:9px 12px; border-radius:var(--radius-md); white-space:nowrap;
  transition: color var(--dur-fast), background var(--dur-fast);
}
.uc-tab:hover{ color:var(--color-text); }
.uc-tab:focus-visible{ outline:none; box-shadow:var(--shadow-focus); }
.uc-tab:disabled{ opacity:.45; cursor:not-allowed; }

.uc-tabs--line .uc-tab{ border-radius:0; padding:10px 4px; margin-bottom:-1px; }
.uc-tabs--line .uc-tab::after{ content:""; position:absolute; left:0; right:0; bottom:0; height:2px; background:var(--color-primary); border-radius:2px 2px 0 0; transform:scaleX(0); transition:transform var(--dur-base) var(--ease-standard); }
.uc-tabs--line .uc-tab.is-active::after{ transform:scaleX(1); }
.uc-tabs--line .uc-tab.is-active{ color:var(--color-text); }

.uc-tabs--pill .uc-tab{ padding:6px 12px; }
.uc-tabs--pill .uc-tab.is-active{ background:var(--color-surface); color:var(--color-text); box-shadow:var(--shadow-xs); }

.uc-tab__badge{ font-size:var(--text-2xs); font-weight:var(--weight-semibold); background:var(--color-surface-2); color:var(--color-text-secondary); border-radius:var(--radius-full); padding:1px 6px; line-height:1.4; }
.uc-tab.is-active .uc-tab__badge{ background:var(--color-primary-subtle); color:var(--color-primary); }
`;
function normalize(it) {
  return typeof it === 'string' ? {
    value: it,
    label: it
  } : it;
}

/** Horizontal tab navigation. Presentational — render your own panels off the active value. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'line',
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('tabs', CSS);
  const norm = items.map(normalize);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? norm[0]?.value);
  const current = isControlled ? value : internal;
  const handle = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: __ds_scope.cx('uc-tabs', `uc-tabs--${variant}`, className),
    style: style
  }, rest), norm.map(it => {
    const active = String(current) === String(it.value);
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      disabled: it.disabled,
      className: __ds_scope.cx('uc-tab', active && 'is-active'),
      onClick: () => handle(it.value)
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16
    }), it.label, it.badge != null && /*#__PURE__*/React.createElement("span", {
      className: "uc-tab__badge"
    }, it.badge));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.uc-dialog__overlay{
  position:fixed; inset:0; background:var(--color-overlay); display:flex;
  align-items:center; justify-content:center; padding:24px; z-index:100;
  animation: uc-fade var(--dur-base) var(--ease-standard);
}
@keyframes uc-fade{ from{ opacity:0; } to{ opacity:1; } }
.uc-dialog{
  background:var(--color-surface); border:1px solid var(--color-border);
  border-radius:var(--radius-xl); box-shadow:var(--shadow-2xl); width:100%;
  max-height:calc(100vh - 48px); display:flex; flex-direction:column; overflow:hidden;
  animation: uc-dialog-in var(--dur-base) var(--ease-out);
}
@keyframes uc-dialog-in{ from{ opacity:0; transform:translateY(8px) scale(.985); } to{ opacity:1; transform:none; } }
.uc-dialog--sm{ max-width:400px; }
.uc-dialog--md{ max-width:524px; }
.uc-dialog--lg{ max-width:680px; }
.uc-dialog__head{ display:flex; align-items:flex-start; gap:12px; padding:18px 18px 0; }
.uc-dialog__htext{ flex:1 1 auto; min-width:0; display:flex; flex-direction:column; gap:3px; }
.uc-dialog__title{ font-family:var(--font-display); font-weight:var(--weight-bold); font-size:var(--text-xl); letter-spacing:-0.015em; color:var(--color-text); }
.uc-dialog__desc{ font-size:var(--text-sm); color:var(--color-text-secondary); line-height:var(--leading-normal); }
.uc-dialog__close{ flex:0 0 auto; background:transparent; border:none; cursor:pointer; color:var(--color-text-muted); border-radius:var(--radius-md); width:30px; height:30px; display:inline-flex; align-items:center; justify-content:center; margin:-4px -4px 0 0; transition:background var(--dur-fast), color var(--dur-fast); }
.uc-dialog__close:hover{ background:var(--color-surface-2); color:var(--color-text); }
.uc-dialog__body{ padding:16px 18px; overflow-y:auto; color:var(--color-text-secondary); font-size:var(--text-base); line-height:var(--leading-normal); }
.uc-dialog__foot{ display:flex; justify-content:flex-end; gap:8px; padding:14px 18px; border-top:1px solid var(--color-border); background:var(--color-bg-subtle); }
`;

/** Modal dialog with overlay, scroll-lock, Escape/overlay close. */
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  closeOnOverlay = true,
  closeOnEsc = true,
  className = '',
  style = {},
  ...rest
}) {
  __ds_scope.injectStyle('dialog', CSS);
  React.useEffect(() => {
    if (!open || !closeOnEsc) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose && onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, closeOnEsc, onClose]);
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "uc-dialog__overlay",
    onMouseDown: e => {
      if (closeOnOverlay && e.target === e.currentTarget) onClose && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    className: __ds_scope.cx('uc-dialog', `uc-dialog--${size}`, className),
    style: style
  }, rest), (title || description || onClose) && /*#__PURE__*/React.createElement("div", {
    className: "uc-dialog__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uc-dialog__htext"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "uc-dialog__title"
  }, title), description && /*#__PURE__*/React.createElement("div", {
    className: "uc-dialog__desc"
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uc-dialog__close",
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), children != null && /*#__PURE__*/React.createElement("div", {
    className: "uc-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "uc-dialog__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// slides/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Duplicate / Delete (Delete opens a
 *      Cancel/Delete confirm dialog). Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that _syncPrintPageRule appends
       to the document (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        this._syncPrintPageRule();
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // Unconditional cap — rAF can be suspended in a hidden iframe, which
      // would strand the one inside the rAF callback.
      setTimeout(reveal, 2000);
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. (Re-)append so any author @page landing later in
     *  source order can't reintroduce a margin and push each slide onto
     *  two sheets; called again from beforeprint. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      (document.body || document.head).appendChild(tag);
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    _emitDcOp(op, slide, lock, newIndex) {
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      if (this._emitDcOp({
        op: 'duplicate'
      }, slide, true, i + 1)) return;
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      copy.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashboardApp.jsx
try { (() => {
/* UniCode — UI-кит: Веб-приложение / Дашборд
   Главная проектов: статистика, список проектов, деплои. */
const {
  useState
} = React;
const NS = window.UniCodeDesignSystem_7662ea;
const {
  Icon,
  IconButton,
  Button,
  Badge,
  Avatar,
  Card,
  Tabs,
  Tooltip,
  Menu,
  Input,
  ProgressBar,
  Dialog
} = NS;
const NAV = [{
  id: 'projects',
  icon: 'folder',
  label: 'Проекты'
}, {
  id: 'deploys',
  icon: 'rocket',
  label: 'Деплои'
}, {
  id: 'templates',
  icon: 'layout-template',
  label: 'Шаблоны'
}, {
  id: 'team',
  icon: 'users',
  label: 'Команда'
}, {
  id: 'usage',
  icon: 'activity',
  label: 'Использование'
}, {
  id: 'billing',
  icon: 'credit-card',
  label: 'Оплата'
}];
const STATS = [{
  label: 'Активные проекты',
  value: '12',
  delta: '+2 за неделю',
  icon: 'folder',
  tone: 'primary'
}, {
  label: 'Деплои сегодня',
  value: '34',
  delta: '+8 к вчера',
  icon: 'rocket',
  tone: 'success'
}, {
  label: 'Время сборки',
  value: '4.2с',
  delta: '−0.6с',
  icon: 'zap',
  tone: 'amber'
}, {
  label: 'Участники',
  value: '6',
  delta: '2 онлайн',
  icon: 'users',
  tone: 'blue'
}];
const PROJECTS = [{
  name: 'acme-api',
  desc: 'Боевой REST API для платформы Acme',
  lang: 'TypeScript',
  langColor: '#2C6FCB',
  status: 'running',
  branch: 'main',
  updated: '2 ч назад',
  members: ['Ада Лавлейс', 'Грейс Хоппер']
}, {
  name: 'web-dashboard',
  desc: 'Клиентская панель и аналитика',
  lang: 'React',
  langColor: '#4A86D6',
  status: 'building',
  branch: 'feat/charts',
  updated: '15 мин назад',
  members: ['Линус Т']
}, {
  name: 'ml-pipeline',
  desc: 'Обучение моделей и инференс',
  lang: 'Python',
  langColor: '#1F9D55',
  status: 'running',
  branch: 'main',
  updated: 'вчера',
  members: ['Маргарет Х', 'Ада Лавлейс']
}, {
  name: 'docs-site',
  desc: 'Публичная документация и гайды',
  lang: 'MDX',
  langColor: '#E8A23D',
  status: 'stopped',
  branch: 'main',
  updated: '3 дня назад',
  members: ['Грейс Хоппер']
}, {
  name: 'edge-cache',
  desc: 'Слой кеширования на воркерах',
  lang: 'Rust',
  langColor: '#B5351C',
  status: 'running',
  branch: 'main',
  updated: '5 ч назад',
  members: ['Линус Т', 'Маргарет Х']
}, {
  name: 'mobile-app',
  desc: 'Клиент на React Native',
  lang: 'TypeScript',
  langColor: '#2C6FCB',
  status: 'building',
  branch: 'release/2.1',
  updated: '1 ч назад',
  members: ['Ада Лавлейс']
}];
const STATUS = {
  running: {
    variant: 'success',
    dot: true,
    label: 'Работает'
  },
  building: {
    variant: 'warning',
    dot: true,
    label: 'Сборка'
  },
  stopped: {
    variant: 'neutral',
    dot: true,
    label: 'Остановлен'
  }
};
function Sidebar({
  active,
  setActive
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "db-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "28",
    height: "28",
    alt: "UniCode"
  }), /*#__PURE__*/React.createElement("span", {
    className: "db-brand__word"
  }, "Uni", /*#__PURE__*/React.createElement("i", null, "Code"))), /*#__PURE__*/React.createElement("div", {
    className: "db-team"
  }, /*#__PURE__*/React.createElement(Menu, {
    trigger: /*#__PURE__*/React.createElement("button", {
      className: "db-team__btn"
    }, /*#__PURE__*/React.createElement("span", {
      className: "db-team__ava"
    }, "A"), /*#__PURE__*/React.createElement("span", {
      className: "db-team__name"
    }, "Acme Inc"), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 15
    })),
    items: [{
      type: 'heading',
      label: 'Команды'
    }, {
      label: 'Acme Inc',
      icon: 'check'
    }, {
      label: 'Личное',
      icon: 'user'
    }, {
      type: 'separator'
    }, {
      label: 'Создать команду',
      icon: 'plus'
    }]
  })), /*#__PURE__*/React.createElement("nav", {
    className: "db-nav"
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    className: 'db-nav__item' + (active === n.id ? ' is-active' : ''),
    onClick: () => setActive(n.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n.icon,
    size: 18,
    strokeWidth: 1.9
  }), /*#__PURE__*/React.createElement("span", null, n.label), n.id === 'deploys' && /*#__PURE__*/React.createElement(Badge, {
    size: "sm",
    variant: "primary",
    style: {
      marginLeft: 'auto'
    }
  }, "3")))), /*#__PURE__*/React.createElement("div", {
    className: "db-side__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "db-nav__item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 18,
    strokeWidth: 1.9
  }), /*#__PURE__*/React.createElement("span", null, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")), /*#__PURE__*/React.createElement("div", {
    className: "db-user"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0410\u0434\u0430 \u041B\u0430\u0432\u043B\u0435\u0439\u0441",
    size: 32,
    status: "online",
    color: "var(--coral-500)"
  }), /*#__PURE__*/React.createElement("div", {
    className: "db-user__meta"
  }, /*#__PURE__*/React.createElement("strong", null, "\u0410\u0434\u0430 \u041B\u0430\u0432\u043B\u0435\u0439\u0441"), /*#__PURE__*/React.createElement("span", null, "ada@acme.dev")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "log-out",
    label: "\u0412\u044B\u0439\u0442\u0438",
    size: "sm"
  }))));
}
function StatCard({
  s
}) {
  const toneVar = {
    primary: 'var(--coral-500)',
    success: 'var(--green-500)',
    amber: 'var(--amber-500)',
    blue: 'var(--blue-500)'
  }[s.tone];
  const toneBg = {
    primary: 'var(--coral-50)',
    success: 'var(--green-50)',
    amber: 'var(--amber-50)',
    blue: 'var(--blue-50)'
  }[s.tone];
  return /*#__PURE__*/React.createElement("div", {
    className: "db-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-stat__icon",
    style: {
      background: toneBg,
      color: toneVar
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "db-stat__num"
  }, s.value), /*#__PURE__*/React.createElement("div", {
    className: "db-stat__label"
  }, s.label), /*#__PURE__*/React.createElement("div", {
    className: "db-stat__delta"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trending-up",
    size: 13
  }), " ", s.delta));
}
function ProjectCard({
  p,
  onOpen
}) {
  const st = STATUS[p.status];
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    className: "db-proj",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-proj__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-proj__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-proj__dot",
    style: {
      background: p.langColor
    }
  }), /*#__PURE__*/React.createElement("strong", null, p.name)), /*#__PURE__*/React.createElement(Menu, {
    align: "end",
    trigger: /*#__PURE__*/React.createElement(IconButton, {
      icon: "more-horizontal",
      label: "\u0415\u0449\u0451",
      size: "sm"
    }),
    items: [{
      label: 'Открыть в редакторе',
      icon: 'code'
    }, {
      label: 'Развернуть',
      icon: 'rocket'
    }, {
      label: 'Дублировать',
      icon: 'copy'
    }, {
      type: 'separator'
    }, {
      label: 'Удалить',
      icon: 'trash-2',
      danger: true
    }]
  })), /*#__PURE__*/React.createElement("p", {
    className: "db-proj__desc"
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    className: "db-proj__meta"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: st.variant,
    dot: st.dot
  }, st.label), /*#__PURE__*/React.createElement("span", {
    className: "db-proj__lang"
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-proj__dot",
    style: {
      background: p.langColor
    }
  }), p.lang), /*#__PURE__*/React.createElement("span", {
    className: "db-proj__branch"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "git-branch",
    size: 13
  }), p.branch)), /*#__PURE__*/React.createElement("div", {
    className: "db-proj__foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-collab"
  }, p.members.map((m, i) => /*#__PURE__*/React.createElement(Avatar, {
    key: i,
    name: m,
    size: 24,
    color: i % 2 ? 'var(--blue-500)' : 'var(--coral-500)'
  }))), /*#__PURE__*/React.createElement("span", {
    className: "db-proj__time"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 13
  }), " ", p.updated)));
}
function DashboardApp() {
  const [active, setActive] = useState('projects');
  const [view, setView] = useState('grid');
  const [dialog, setDialog] = useState(false);
  const [query, setQuery] = useState('');
  const filtered = PROJECTS.filter(p => p.name.includes(query) || p.desc.toLowerCase().includes(query.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    className: "db-root"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    setActive: setActive
  }), /*#__PURE__*/React.createElement("main", {
    className: "db-main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "db-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "db-title"
  }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("p", {
    className: "db-sub"
  }, "12 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \xB7 6 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \xB7 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 Acme Inc")), /*#__PURE__*/React.createElement("div", {
    className: "db-head__actions"
  }, /*#__PURE__*/React.createElement(Input, {
    leftIcon: "search",
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432\u2026",
    size: "md",
    value: query,
    onChange: e => setQuery(e.target.value),
    style: {
      width: 240
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",
    variant: "outline"
  })), /*#__PURE__*/React.createElement(Button, {
    leftIcon: "plus",
    onClick: () => setDialog(true)
  }, "\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442"))), /*#__PURE__*/React.createElement("div", {
    className: "db-scroll"
  }, /*#__PURE__*/React.createElement("section", {
    className: "db-stats"
  }, STATS.map(s => /*#__PURE__*/React.createElement(StatCard, {
    key: s.label,
    s: s
  }))), /*#__PURE__*/React.createElement("section", {
    className: "db-toolbar"
  }, /*#__PURE__*/React.createElement(Tabs, {
    defaultValue: "all",
    items: [{
      value: 'all',
      label: 'Все',
      badge: 12
    }, {
      value: 'mine',
      label: 'Мои'
    }, {
      value: 'archived',
      label: 'Архив'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "db-toolbar__right"
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: view,
    onChange: setView,
    items: [{
      value: 'grid',
      label: '',
      icon: 'layout-grid'
    }, {
      value: 'list',
      label: '',
      icon: 'list'
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    rightIcon: "chevron-down",
    leftIcon: "arrow-down-up"
  }, "\u041E\u0431\u043D\u043E\u0432\u043B\u0451\u043D"))), /*#__PURE__*/React.createElement("section", {
    className: view === 'grid' ? 'db-grid' : 'db-list'
  }, filtered.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.name,
    p: p,
    onOpen: () => setDialog(false)
  }))))), /*#__PURE__*/React.createElement(Dialog, {
    open: dialog,
    onClose: () => setDialog(false),
    title: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442",
    description: "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0441\u0432\u0435\u0436\u0443\u044E \u043F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0443 \u0441 \u043D\u0443\u0436\u043D\u043E\u0439 \u0441\u0440\u0435\u0434\u043E\u0439 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setDialog(false)
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement(Button, {
      leftIcon: "rocket",
      onClick: () => setDialog(false)
    }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430",
    placeholder: "my-app",
    defaultValue: "\u043D\u043E\u0432\u044B\u0439-\u0441\u0435\u0440\u0432\u0438\u0441"
  }), /*#__PURE__*/React.createElement("div", {
    className: "db-runtimes"
  }, ['Node 20', 'Python 3.12', 'Go 1.22', 'Rust', 'Bun 1.1', 'Deno'].map((r, i) => /*#__PURE__*/React.createElement("button", {
    key: r,
    className: 'db-runtime' + (i === 0 ? ' is-active' : '')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "box",
    size: 16
  }), r))))));
}
window.DashboardApp = DashboardApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashboardApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/DocsApp.jsx
try { (() => {
/* UniCode — UI-кит: Документация */
const {
  useState
} = React;
const NS = window.UniCodeDesignSystem_7662ea;
const {
  Icon,
  IconButton,
  Button,
  Badge,
  Alert,
  CodeBlock,
  Kbd,
  Input
} = NS;
const SIDEBAR = [{
  group: 'Начало',
  items: [{
    id: 'intro',
    label: 'Введение'
  }, {
    id: 'quickstart',
    label: 'Быстрый старт'
  }, {
    id: 'concepts',
    label: 'Ключевые понятия'
  }]
}, {
  group: 'Руководства',
  items: [{
    id: 'projects',
    label: 'Проекты и песочницы'
  }, {
    id: 'deploy',
    label: 'Деплой'
  }, {
    id: 'collab',
    label: 'Совместная работа'
  }, {
    id: 'env',
    label: 'Переменные окружения'
  }]
}, {
  group: 'Справочник',
  items: [{
    id: 'cli',
    label: 'CLI'
  }, {
    id: 'sdk',
    label: 'SDK'
  }, {
    id: 'api',
    label: 'REST API'
  }]
}];
const TOC = [{
  id: 'install',
  label: 'Установка',
  lvl: 1
}, {
  id: 'first',
  label: 'Первый проект',
  lvl: 1
}, {
  id: 'run',
  label: 'Запуск локально',
  lvl: 2
}, {
  id: 'deploy',
  label: 'Деплой',
  lvl: 1
}, {
  id: 'next',
  label: 'Что дальше',
  lvl: 1
}];
function Topbar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "dc-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-top__left"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dc-brand",
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "26",
    height: "26",
    alt: "UniCode"
  }), /*#__PURE__*/React.createElement("span", null, "Uni", /*#__PURE__*/React.createElement("i", null, "Code")), /*#__PURE__*/React.createElement("span", {
    className: "dc-docs-tag"
  }, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F"))), /*#__PURE__*/React.createElement("div", {
    className: "dc-top__search"
  }, /*#__PURE__*/React.createElement(Input, {
    leftIcon: "search",
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438\u2026",
    size: "sm",
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "dc-kbd"
  }, /*#__PURE__*/React.createElement(Kbd, null, "\u2318"), /*#__PURE__*/React.createElement(Kbd, null, "K"))), /*#__PURE__*/React.createElement("div", {
    className: "dc-top__right"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dc-ver",
    defaultValue: "v2.1"
  }, /*#__PURE__*/React.createElement("option", null, "v2.1"), /*#__PURE__*/React.createElement("option", null, "v2.0"), /*#__PURE__*/React.createElement("option", null, "v1.9")), /*#__PURE__*/React.createElement("a", {
    className: "dc-top__link",
    href: "#"
  }, "\u0413\u0430\u0439\u0434\u044B"), /*#__PURE__*/React.createElement("a", {
    className: "dc-top__link",
    href: "#"
  }, "API"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "github",
    label: "GitHub",
    variant: "ghost"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    rightIcon: "arrow-up-right"
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440")));
}
function Sidebar({
  active,
  setActive
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "dc-side"
  }, SIDEBAR.map(g => /*#__PURE__*/React.createElement("div", {
    className: "dc-side__group",
    key: g.group
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-side__h"
  }, g.group), g.items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: 'dc-side__item' + (active === it.id ? ' is-active' : ''),
    onClick: () => setActive(it.id)
  }, it.label)))));
}
function Toc() {
  return /*#__PURE__*/React.createElement("aside", {
    className: "dc-toc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-toc__h"
  }, "\u041D\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435"), TOC.map(t => /*#__PURE__*/React.createElement("a", {
    key: t.id,
    href: '#' + t.id,
    className: 'dc-toc__item' + (t.lvl === 2 ? ' is-sub' : '') + (t.id === 'install' ? ' is-active' : '')
  }, t.label)), /*#__PURE__*/React.createElement("div", {
    className: "dc-toc__foot"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: 13
  }), " \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-square",
    size: 13
  }), " \u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432")));
}
function Content() {
  return /*#__PURE__*/React.createElement("article", {
    className: "dc-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F"), " ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 13
  }), " ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u041D\u0430\u0447\u0430\u043B\u043E"), " ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 13
  }), " ", /*#__PURE__*/React.createElement("span", null, "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0441\u0442\u0430\u0440\u0442")), /*#__PURE__*/React.createElement("h1", null, "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0441\u0442\u0430\u0440\u0442"), /*#__PURE__*/React.createElement("p", {
    className: "dc-lead"
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 CLI, \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u0438 \u0432\u044B\u043A\u0430\u0442\u0438\u0442\u0435 \u0435\u0433\u043E \u0432 \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D \u2014 \u0437\u0430 \u043F\u044F\u0442\u044C \u043C\u0438\u043D\u0443\u0442, \u043D\u0435 \u0432\u044B\u0445\u043E\u0434\u044F \u0438\u0437 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."), /*#__PURE__*/React.createElement(Alert, {
    variant: "info",
    title: "\u041D\u0443\u0436\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440"
  }, "UniCode \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0432 \u043E\u0431\u043B\u0430\u043A\u0435. \u041B\u043E\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 CLI \u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430 \u2014 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0434\u0435\u043F\u043B\u043E\u0438\u0442\u044C \u0438\u0437 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B\u0430."), /*#__PURE__*/React.createElement("h2", {
    id: "install"
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430"), /*#__PURE__*/React.createElement("p", null, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 CLI ", /*#__PURE__*/React.createElement("code", null, "uni"), " \u0447\u0435\u0440\u0435\u0437 npm. \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F macOS, Linux \u0438 Windows."), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "bash",
    filename: "\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B",
    dark: true,
    code: `npm install -g @unicode/cli

# проверьте установку
uni --version`
  }), /*#__PURE__*/React.createElement("h2", {
    id: "first"
  }, "\u041F\u0435\u0440\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442"), /*#__PURE__*/React.createElement("p", null, "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u0438\u0437 \u0448\u0430\u0431\u043B\u043E\u043D\u0430. UniCode \u043F\u043E\u0434\u043D\u0438\u043C\u0435\u0442 \u043F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0443 \u0441 \u043D\u0443\u0436\u043D\u043E\u0439 \u0441\u0440\u0435\u0434\u043E\u0439 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u044B."), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "bash",
    filename: "\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B",
    dark: true,
    code: `uni init acme-api --template node-ts
cd acme-api`
  }), /*#__PURE__*/React.createElement("h3", {
    id: "run"
  }, "\u0417\u0430\u043F\u0443\u0441\u043A \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E"), /*#__PURE__*/React.createElement("p", null, "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 dev-\u0441\u0435\u0440\u0432\u0435\u0440 \u0441 \u0433\u043E\u0440\u044F\u0447\u0435\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439. \u041B\u044E\u0431\u0430\u044F \u043F\u0440\u0430\u0432\u043A\u0430 \u0432 ", /*#__PURE__*/React.createElement("code", null, "src/"), " \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E."), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "ts",
    filename: "src/index.ts",
    showLineNumbers: true,
    highlightLines: [4],
    code: `import { serve } from '@unicode/sdk';

serve({ port: 8080 }, async (req) => {
  // правьте этот обработчик и сохраняйте — сервер перезагрузится
  return Response.json({ ok: true });
});`
  }), /*#__PURE__*/React.createElement(Alert, {
    variant: "warning",
    title: "\u041F\u043E\u0440\u0442 \u0437\u0430\u043D\u044F\u0442?"
  }, "\u0415\u0441\u043B\u0438 \u043F\u043E\u0440\u0442 8080 \u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F, \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u0439 \u0447\u0435\u0440\u0435\u0437 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044F ", /*#__PURE__*/React.createElement("code", null, "PORT"), " \u0438\u043B\u0438 \u0444\u043B\u0430\u0433 ", /*#__PURE__*/React.createElement("code", null, "--port"), "."), /*#__PURE__*/React.createElement("h2", {
    id: "deploy"
  }, "\u0414\u0435\u043F\u043B\u043E\u0439"), /*#__PURE__*/React.createElement("p", null, "\u041E\u0434\u043D\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0432\u044B\u043A\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0435\u043A\u0442 \u0432 \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D \u0441 \u043F\u0440\u0435\u0432\u044C\u044E-URL. \u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u0443\u0448 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435."), /*#__PURE__*/React.createElement(CodeBlock, {
    language: "bash",
    filename: "\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B",
    dark: true,
    code: `uni deploy --prod
# ✓ Развёрнуто на https://uni.dev/acme за 4.2с`
  }), /*#__PURE__*/React.createElement("h2", {
    id: "next"
  }, "\u0427\u0442\u043E \u0434\u0430\u043B\u044C\u0448\u0435"), /*#__PURE__*/React.createElement("div", {
    className: "dc-cards"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dc-next",
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 20
  }), /*#__PURE__*/React.createElement("strong", null, "\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430"), /*#__PURE__*/React.createElement("span", null, "\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438.")), /*#__PURE__*/React.createElement("a", {
    className: "dc-next",
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "box",
    size: 20
  }), /*#__PURE__*/React.createElement("strong", null, "\u0421\u0440\u0435\u0434\u044B \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("span", null, "Node, Python, Go, Rust \u0438 \u0434\u0440\u0443\u0433\u0438\u0435.")), /*#__PURE__*/React.createElement("a", {
    className: "dc-next",
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "terminal",
    size: 20
  }), /*#__PURE__*/React.createElement("strong", null, "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A CLI"), /*#__PURE__*/React.createElement("span", null, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u043C\u0430\u043D\u0434 ", /*#__PURE__*/React.createElement("code", null, "uni"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "dc-pager"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dc-pager__btn",
    href: "#"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 15
  }), " \u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/React.createElement("strong", null, "\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435")), /*#__PURE__*/React.createElement("a", {
    className: "dc-pager__btn dc-pager__btn--next",
    href: "#"
  }, /*#__PURE__*/React.createElement("span", null, "\u0414\u0430\u043B\u0435\u0435 ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15
  })), /*#__PURE__*/React.createElement("strong", null, "\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u043F\u043E\u043D\u044F\u0442\u0438\u044F"))));
}
function DocsApp() {
  const [active, setActive] = useState('quickstart');
  return /*#__PURE__*/React.createElement("div", {
    className: "dc-root"
  }, /*#__PURE__*/React.createElement(Topbar, null), /*#__PURE__*/React.createElement("div", {
    className: "dc-body"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    setActive: setActive
  }), /*#__PURE__*/React.createElement(Content, null), /*#__PURE__*/React.createElement(Toc, null)));
}
window.DocsApp = DocsApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/DocsApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/EditorApp.jsx
try { (() => {
/* UniCode — UI-кит: Редактор / Плейграунд
   Флагманская браузерная IDE. Компонует примитивы дизайн-системы. */
const {
  useState,
  useEffect,
  useRef
} = React;
const NS = window.UniCodeDesignSystem_7662ea;
const {
  Icon,
  IconButton,
  Button,
  Badge,
  Avatar,
  Tabs,
  Tooltip,
  CodeBlock,
  Terminal,
  Menu
} = NS;

/* ---------- Данные проекта ---------- */
const FILES = {
  'src/index.ts': {
    lang: 'ts',
    body: `import { serve } from '@unicode/sdk';
import { router } from './routes';

// Точка входа боевого API
const PORT = Number(process.env.PORT ?? 8080);

serve({ port: PORT }, async (req) => {
  const res = await router.handle(req);
  res.headers.set('x-powered-by', 'unicode');
  return res;
});

console.log(\`API слушает :\${PORT}\`);`
  },
  'src/routes.ts': {
    lang: 'ts',
    body: `import { Router } from '@unicode/sdk';

export const router = new Router();

router.get('/health', () => Response.json({ ok: true }));

router.get('/users/:id', async (req) => {
  const user = await db.users.find(req.params.id);
  if (!user) return new Response('Не найдено', { status: 404 });
  return Response.json(user);
});`
  },
  'package.json': {
    lang: 'json',
    body: `{
  "name": "acme-api",
  "version": "2.1.0",
  "type": "module",
  "scripts": {
    "dev": "uni dev",
    "deploy": "uni deploy --prod"
  },
  "dependencies": {
    "@unicode/sdk": "^2.4.0"
  }
}`
  },
  'README.md': {
    lang: 'text',
    body: `# acme-api

Боевой REST API для платформы Acme.

## Запуск
    uni dev

## Деплой
    uni deploy --prod`
  }
};
const TREE = [{
  type: 'folder',
  name: 'src',
  open: true,
  children: [{
    type: 'file',
    name: 'index.ts',
    path: 'src/index.ts',
    icon: 'file-code'
  }, {
    type: 'file',
    name: 'routes.ts',
    path: 'src/routes.ts',
    icon: 'file-code'
  }]
}, {
  type: 'file',
  name: 'package.json',
  path: 'package.json',
  icon: 'package'
}, {
  type: 'file',
  name: 'README.md',
  path: 'README.md',
  icon: 'book-open'
}];
const ACTIVITY = [{
  id: 'files',
  icon: 'files',
  label: 'Проводник'
}, {
  id: 'search',
  icon: 'search',
  label: 'Поиск'
}, {
  id: 'git',
  icon: 'git-branch',
  label: 'Контроль версий'
}, {
  id: 'run',
  icon: 'play',
  label: 'Запуск и отладка'
}, {
  id: 'ext',
  icon: 'package',
  label: 'Расширения'
}];

/* ---------- Боковая активность ---------- */
function ActivityBar({
  active,
  setActive
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ed-activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ed-activity__top"
  }, ACTIVITY.map(a => /*#__PURE__*/React.createElement(Tooltip, {
    key: a.id,
    label: a.label,
    placement: "right"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'ed-act' + (active === a.id ? ' is-active' : ''),
    onClick: () => setActive(a.id),
    "aria-label": a.label
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 22,
    strokeWidth: 1.8
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "ed-activity__bot"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "\u0410\u043A\u043A\u0430\u0443\u043D\u0442",
    placement: "right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ed-act",
    "aria-label": "\u0410\u043A\u043A\u0430\u0443\u043D\u0442"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 22,
    strokeWidth: 1.8
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    label: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    placement: "right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ed-act",
    "aria-label": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 22,
    strokeWidth: 1.8
  })))));
}

/* ---------- Дерево файлов ---------- */
function FileTree({
  openPath,
  onOpen
}) {
  const [folders, setFolders] = useState({
    src: true
  });
  const renderNode = (node, depth) => {
    if (node.type === 'folder') {
      const isOpen = folders[node.name];
      return /*#__PURE__*/React.createElement("div", {
        key: node.name
      }, /*#__PURE__*/React.createElement("button", {
        className: "ed-row",
        style: {
          paddingLeft: 8 + depth * 14
        },
        onClick: () => setFolders(f => ({
          ...f,
          [node.name]: !f[node.name]
        }))
      }, /*#__PURE__*/React.createElement(Icon, {
        name: isOpen ? 'chevron-down' : 'chevron-right',
        size: 14
      }), /*#__PURE__*/React.createElement(Icon, {
        name: isOpen ? 'folder-open' : 'folder',
        size: 15
      }), /*#__PURE__*/React.createElement("span", null, node.name)), isOpen && node.children.map(c => renderNode(c, depth + 1)));
    }
    return /*#__PURE__*/React.createElement("button", {
      key: node.path,
      className: 'ed-row ed-row--file' + (openPath === node.path ? ' is-active' : ''),
      style: {
        paddingLeft: 12 + depth * 14
      },
      onClick: () => onOpen(node.path)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: node.icon,
      size: 15
    }), /*#__PURE__*/React.createElement("span", null, node.name));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ed-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ed-sidebar__head"
  }, /*#__PURE__*/React.createElement("span", null, "\u041F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "file-plus",
    label: "\u041D\u043E\u0432\u044B\u0439 \u0444\u0430\u0439\u043B",
    size: "sm"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "refresh-cw",
    label: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ed-sidebar__project"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  }), /*#__PURE__*/React.createElement("strong", null, "ACME-API")), /*#__PURE__*/React.createElement("div", {
    className: "ed-tree"
  }, TREE.map(n => renderNode(n, 0))));
}

/* ---------- Редактор ---------- */
function EditorPane({
  tabs,
  openPath,
  onOpen,
  onClose
}) {
  const file = FILES[openPath];
  return /*#__PURE__*/React.createElement("div", {
    className: "ed-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ed-tabs"
  }, tabs.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    className: 'ed-tab' + (openPath === p ? ' is-active' : ''),
    onClick: () => onOpen(p)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.endsWith('.json') ? 'package' : p.endsWith('.md') ? 'book-open' : 'file-code',
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, p.split('/').pop()), /*#__PURE__*/React.createElement("button", {
    className: "ed-tab__x",
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    onClick: e => {
      e.stopPropagation();
      onClose(p);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 13
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ed-tabs__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ed-tabs__actions"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "columns-2",
    label: "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C",
    size: "sm"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ed-breadcrumb"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder",
    size: 13
  }), /*#__PURE__*/React.createElement("span", null, "acme-api"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 13
  }), openPath.includes('/') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "src"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 13
  })), /*#__PURE__*/React.createElement("span", {
    className: "is-file"
  }, openPath.split('/').pop())), /*#__PURE__*/React.createElement("div", {
    className: "ed-code"
  }, /*#__PURE__*/React.createElement(CodeBlock, {
    key: openPath,
    code: file.body,
    language: file.lang,
    showLineNumbers: true,
    copy: false,
    dark: true
  })));
}

/* ---------- Правая панель: Консоль / Превью ---------- */
function RightPanel({
  running,
  runLog
}) {
  const [tab, setTab] = useState('console');
  return /*#__PURE__*/React.createElement("div", {
    className: "ed-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ed-right__head"
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: tab,
    onChange: setTab,
    items: [{
      value: 'console',
      label: 'Консоль',
      icon: 'terminal'
    }, {
      value: 'preview',
      label: 'Превью',
      icon: 'globe'
    }]
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "maximize-2",
    label: "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ed-right__body"
  }, tab === 'console' ? /*#__PURE__*/React.createElement(Terminal, {
    title: "\u043A\u043E\u043D\u0441\u043E\u043B\u044C \u2014 acme-api",
    promptLabel: "ada@unicode",
    lines: runLog
  }) : /*#__PURE__*/React.createElement("div", {
    className: "ed-preview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ed-preview__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ed-preview__url"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 12
  }), " uni.dev/acme"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "rotate-cw",
    label: "\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ed-preview__page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ed-preview__badge"
  }, running ? '● Работает' : '○ Остановлено'), /*#__PURE__*/React.createElement("pre", {
    className: "ed-preview__json"
  }, `{
  "ok": true,
  "service": "acme-api",
  "version": "2.1.0",
  "uptime": "${running ? '0.4с' : '—'}"
}`)))));
}

/* ---------- Главное приложение ---------- */
function EditorApp() {
  const [active, setActive] = useState('files');
  const [tabs, setTabs] = useState(['src/index.ts', 'src/routes.ts', 'package.json']);
  const [openPath, setOpenPath] = useState('src/index.ts');
  const [running, setRunning] = useState(false);
  const [runLog, setRunLog] = useState([{
    type: 'comment',
    text: '# нажмите «Запустить», чтобы стартовать dev-сервер'
  }]);
  const open = p => {
    setOpenPath(p);
    if (!tabs.includes(p)) setTabs(t => [...t, p]);
  };
  const close = p => {
    const next = tabs.filter(x => x !== p);
    setTabs(next);
    if (openPath === p && next.length) setOpenPath(next[next.length - 1]);
  };
  const run = () => {
    setRunning(true);
    setRunLog([{
      type: 'input',
      text: 'uni dev'
    }]);
    const steps = [{
      delay: 350,
      line: {
        type: 'output',
        text: '> uni dev — сборка acme-api…'
      }
    }, {
      delay: 750,
      line: {
        type: 'output',
        text: '  ✓ типы проверены (412мс)'
      }
    }, {
      delay: 1100,
      line: {
        type: 'success',
        text: '✓ API слушает http://localhost:8080'
      }
    }, {
      delay: 1450,
      line: {
        type: 'comment',
        text: '# горячая перезагрузка включена — правьте src/ и сохраняйте'
      }
    }];
    steps.forEach(s => setTimeout(() => setRunLog(l => [...l, s.line]), s.delay));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ed-root"
  }, /*#__PURE__*/React.createElement("header", {
    className: "ed-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ed-topbar__left"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "24",
    height: "24",
    alt: "UniCode"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ed-proj"
  }, /*#__PURE__*/React.createElement(Menu, {
    trigger: /*#__PURE__*/React.createElement("button", {
      className: "ed-proj__btn"
    }, "acme-api ", /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 14
    })),
    items: [{
      type: 'heading',
      label: 'Проект'
    }, {
      label: 'Переименовать',
      icon: 'pencil'
    }, {
      label: 'Настройки проекта',
      icon: 'settings'
    }, {
      type: 'separator'
    }, {
      label: 'Удалить проект',
      icon: 'trash-2',
      danger: true
    }]
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: "\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u0435\u0442\u043A\u0430"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral",
    leftIcon: "git-branch"
  }, "main")))), /*#__PURE__*/React.createElement("div", {
    className: "ed-topbar__center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ed-omni"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14
  }), " acme-api ", /*#__PURE__*/React.createElement("span", {
    className: "ed-omni__hint"
  }, "\u2318K"))), /*#__PURE__*/React.createElement("div", {
    className: "ed-topbar__right"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    leftIcon: "git-commit-horizontal"
  }, "\u041A\u043E\u043C\u043C\u0438\u0442"), /*#__PURE__*/React.createElement(Button, {
    variant: running ? 'secondary' : 'primary',
    size: "sm",
    leftIcon: running ? 'rotate-cw' : 'play',
    onClick: run
  }, running ? 'Перезапустить' : 'Запустить'), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    leftIcon: "rocket"
  }, "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C"), /*#__PURE__*/React.createElement("div", {
    className: "ed-share"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ed-collab"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0410\u0434\u0430 \u041B\u0430\u0432\u043B\u0435\u0439\u0441",
    size: 26,
    status: "online",
    color: "var(--coral-500)"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0413\u0440\u0435\u0439\u0441 \u0425\u043E\u043F\u043F\u0435\u0440",
    size: 26,
    status: "busy",
    color: "var(--blue-500)"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    leftIcon: "user-plus",
    variant: "subtle"
  }, "\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u044C")))), /*#__PURE__*/React.createElement("div", {
    className: "ed-body"
  }, /*#__PURE__*/React.createElement(ActivityBar, {
    active: active,
    setActive: setActive
  }), /*#__PURE__*/React.createElement(FileTree, {
    openPath: openPath,
    onOpen: open
  }), /*#__PURE__*/React.createElement(EditorPane, {
    tabs: tabs,
    openPath: openPath,
    onOpen: setOpenPath,
    onClose: close
  }), /*#__PURE__*/React.createElement(RightPanel, {
    running: running,
    runLog: runLog
  })), /*#__PURE__*/React.createElement("footer", {
    className: "ed-status"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ed-status__left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ed-status__item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "git-branch",
    size: 13
  }), " main"), /*#__PURE__*/React.createElement("span", {
    className: "ed-status__item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: running ? 'circle-check' : 'circle',
    size: 13
  }), " ", running ? 'готово' : 'простой'), /*#__PURE__*/React.createElement("span", {
    className: "ed-status__item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cloud",
    size: 13
  }), " \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043E")), /*#__PURE__*/React.createElement("div", {
    className: "ed-status__right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ed-status__item"
  }, "TypeScript"), /*#__PURE__*/React.createElement("span", {
    className: "ed-status__item"
  }, "UTF-8"), /*#__PURE__*/React.createElement("span", {
    className: "ed-status__item"
  }, "\u0421\u0442\u0440 6, \u041A\u043E\u043B 12"), /*#__PURE__*/React.createElement("span", {
    className: "ed-status__item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 13
  })))));
}
window.EditorApp = EditorApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/EditorApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketingApp.jsx
try { (() => {
/* UniCode — UI-кит: Маркетинговый сайт (лендинг) */
const {
  useState
} = React;
const NS = window.UniCodeDesignSystem_7662ea;
const {
  Icon,
  Button,
  Badge,
  CodeBlock,
  Avatar
} = NS;
const NAVLINKS = ['Продукт', 'Решения', 'Цены', 'Документация', 'Блог'];
const SAMPLES = {
  ts: {
    label: 'TypeScript',
    lang: 'ts',
    code: `import { serve } from '@unicode/sdk';

serve({ port: 8080 }, async (req) => {
  const { id } = req.params;
  const user = await db.users.find(id);
  return Response.json(user);
});`
  },
  py: {
    label: 'Python',
    lang: 'python',
    code: `from unicode import serve

@serve(port=8080)
async def handler(req):
    user = await db.users.find(req.params["id"])
    return json(user)`
  },
  go: {
    label: 'Go',
    lang: 'js',
    code: `package main

import "unicode/sdk"

func main() {
  sdk.Serve(8080, func(r *sdk.Req) any {
    return db.Users.Find(r.Param("id"))
  })
}`
  }
};
const FEATURES = [{
  icon: 'mouse-pointer-click',
  title: 'Редактор в один клик',
  desc: 'Открывайте полноценную IDE в браузере — без установки. Дерево файлов, терминал, live-превью.'
}, {
  icon: 'users',
  title: 'Совместная работа',
  desc: 'Пишите код вместе в реальном времени. Курсоры, комментарии и ревью — встроены.'
}, {
  icon: 'rocket',
  title: 'Деплой в один шаг',
  desc: 'Из редактора в продакшен за секунды. Превью-окружения на каждый пуш.'
}, {
  icon: 'box',
  title: 'Любая среда',
  desc: 'Node, Python, Go, Rust, Bun и десятки других. Песочница стартует мгновенно.'
}, {
  icon: 'sparkles',
  title: 'AI-ассистент',
  desc: 'Подсказки, объяснения и рефакторинг прямо в потоке письма кода.'
}, {
  icon: 'book-open',
  title: 'Учись на практике',
  desc: 'Интерактивные курсы и задачи в той же среде, где вы пишете боевой код.'
}];
const STATS = [{
  num: '2 млн+',
  label: 'разработчиков'
}, {
  num: '40+',
  label: 'сред выполнения'
}, {
  num: '4.2с',
  label: 'среднее время сборки'
}, {
  num: '99.98%',
  label: 'аптайм'
}];
const LOGOS = ['acme', 'globex', 'initech', 'umbrella', 'hooli', 'piedpiper'];
function Nav() {
  return /*#__PURE__*/React.createElement("header", {
    className: "mk-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-nav__in"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mk-brand",
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "30",
    height: "30",
    alt: "UniCode"
  }), /*#__PURE__*/React.createElement("span", null, "Uni", /*#__PURE__*/React.createElement("i", null, "Code"))), /*#__PURE__*/React.createElement("nav", {
    className: "mk-links"
  }, NAVLINKS.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#"
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "mk-nav__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "\u0412\u043E\u0439\u0442\u0438"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    rightIcon: "arrow-right"
  }, "\u041D\u0430\u0447\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E"))));
}
function Hero() {
  const [tab, setTab] = useState('ts');
  const s = SAMPLES[tab];
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-eyebrow"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "primary",
    leftIcon: "sparkles"
  }, "\u041D\u043E\u0432\u043E\u0435 \u2014 AI-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442")), /*#__PURE__*/React.createElement("h1", {
    className: "mk-h1"
  }, "\u041F\u0438\u0448\u0438, \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0439 \u0438 ", /*#__PURE__*/React.createElement("em", null, "\u0434\u0435\u043F\u043B\u043E\u0439"), " \u043A\u043E\u0434 \u2014 \u043E\u0442\u043A\u0443\u0434\u0430 \u0443\u0433\u043E\u0434\u043D\u043E"), /*#__PURE__*/React.createElement("p", {
    className: "mk-lead"
  }, "UniCode \u2014 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043D\u0430\u044F \u0441\u0440\u0435\u0434\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438. \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0432 \u043E\u0434\u0438\u043D \u043A\u043B\u0438\u043A, \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043B\u044E\u0431\u043E\u0439 \u0441\u0442\u0435\u043A \u0438 \u0432\u044B\u043A\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0432 \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439."), /*#__PURE__*/React.createElement("div", {
    className: "mk-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    leftIcon: "play"
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    leftIcon: "github"
  }, "\u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 GitHub")), /*#__PURE__*/React.createElement("div", {
    className: "mk-trust-inline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-faces"
  }, ['Ада', 'Грейс', 'Линус', 'Маргарет'].map((n, i) => /*#__PURE__*/React.createElement(Avatar, {
    key: n,
    name: n,
    size: 30,
    color: ['var(--coral-500)', 'var(--blue-500)', 'var(--amber-500)', 'var(--green-500)'][i]
  }))), /*#__PURE__*/React.createElement("span", null, "2 \u043C\u043B\u043D+ \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 \u0443\u0436\u0435 \u0441 \u043D\u0430\u043C\u0438"))), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-win"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-win__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-dot",
    style: {
      background: '#F4522D'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mk-dot",
    style: {
      background: '#E8A23D'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mk-dot",
    style: {
      background: '#1F9D55'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mk-win__tabs"
  }, Object.entries(SAMPLES).map(([k, v]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: 'mk-win__tab' + (tab === k ? ' is-active' : ''),
    onClick: () => setTab(k)
  }, v.label)))), /*#__PURE__*/React.createElement(CodeBlock, {
    key: tab,
    language: s.lang,
    copy: false,
    dark: true,
    code: s.code
  }), /*#__PURE__*/React.createElement("div", {
    className: "mk-win__run"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-run-ok"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 14
  }), " \u0420\u0430\u0437\u0432\u0451\u0440\u043D\u0443\u0442\u043E \u0437\u0430 4.2\u0441"), /*#__PURE__*/React.createElement("span", {
    className: "mk-run-url"
  }, "uni.dev/acme")))));
}
function Trust() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-trust"
  }, /*#__PURE__*/React.createElement("p", null, "\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u043C\u0438\u0440\u0443 \u0441\u0442\u0440\u043E\u044F\u0442 \u043D\u0430 UniCode"), /*#__PURE__*/React.createElement("div", {
    className: "mk-logos"
  }, LOGOS.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    className: "mk-logo"
  }, l))));
}
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-sec-head"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438"), /*#__PURE__*/React.createElement("h2", null, "\u0412\u0441\u0451 \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u2014 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435"), /*#__PURE__*/React.createElement("p", null, "\u041E\u0442 \u043F\u0435\u0440\u0432\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0438 \u043A\u043E\u0434\u0430 \u0434\u043E \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0430. \u0411\u0435\u0437 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.")), /*#__PURE__*/React.createElement("div", {
    className: "mk-feat-grid"
  }, FEATURES.map(f => /*#__PURE__*/React.createElement("div", {
    className: "mk-feat",
    key: f.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-feat__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", null, f.title), /*#__PURE__*/React.createElement("p", null, f.desc)))));
}
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-stats"
  }, STATS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "mk-stat",
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-stat__num"
  }, s.num), /*#__PURE__*/React.createElement("div", {
    className: "mk-stat__label"
  }, s.label))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-cta-band__in"
  }, /*#__PURE__*/React.createElement("h2", null, "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440. \u041F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441."), /*#__PURE__*/React.createElement("p", null, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0442\u0430\u0440\u0438\u0444 \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430. \u041A\u0430\u0440\u0442\u0430 \u043D\u0435 \u043D\u0443\u0436\u043D\u0430."), /*#__PURE__*/React.createElement("div", {
    className: "mk-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    leftIcon: "play"
  }, "\u041D\u0430\u0447\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    rightIcon: "arrow-up-right"
  }, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C\u0438"))));
}
function Footer() {
  const cols = [['Продукт', ['Редактор', 'Деплои', 'Команды', 'Цены', 'Что нового']], ['Разработчикам', ['Документация', 'API-справочник', 'SDK', 'Статус', 'Шаблоны']], ['Компания', ['О нас', 'Блог', 'Вакансии', 'Контакты']]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "mk-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-foot__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-foot__brand"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mk-brand",
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "28",
    height: "28",
    alt: "UniCode"
  }), /*#__PURE__*/React.createElement("span", null, "Uni", /*#__PURE__*/React.createElement("i", null, "Code"))), /*#__PURE__*/React.createElement("p", null, "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u043A\u043E\u0434\u0430. \u041F\u0438\u0448\u0438. \u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0439. \u0414\u0435\u043F\u043B\u043E\u0439."), /*#__PURE__*/React.createElement("div", {
    className: "mk-foot__social"
  }, ['github', 'twitter', 'linkedin'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s,
    size: 18
  }))))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    className: "mk-foot__col",
    key: h
  }, /*#__PURE__*/React.createElement("h4", null, h), items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#"
  }, it))))), /*#__PURE__*/React.createElement("div", {
    className: "mk-foot__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 UniCode. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."), /*#__PURE__*/React.createElement("span", null, "\u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \xB7 \u0423\u0441\u043B\u043E\u0432\u0438\u044F \xB7 Cookie")));
}
function MarketingApp() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mk-root"
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Trust, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.MarketingApp = MarketingApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketingApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/MobileApp.jsx
try { (() => {
/* UniCode — UI-кит: Мобильное приложение
   Два экрана в iOS-фрейме: список проектов (светлый) и мобильный редактор (тёмный). */
const {
  useState
} = React;
const NS = window.UniCodeDesignSystem_7662ea;
const {
  Icon,
  Badge,
  Avatar,
  CodeBlock
} = NS;
const PROJECTS = [{
  name: 'acme-api',
  lang: 'TypeScript',
  color: '#2C6FCB',
  status: 'running',
  time: '2 ч'
}, {
  name: 'web-dashboard',
  lang: 'React',
  color: '#4A86D6',
  status: 'building',
  time: '15 мин'
}, {
  name: 'ml-pipeline',
  lang: 'Python',
  color: '#1F9D55',
  status: 'running',
  time: 'вчера'
}, {
  name: 'edge-cache',
  lang: 'Rust',
  color: '#B5351C',
  status: 'running',
  time: '5 ч'
}, {
  name: 'docs-site',
  lang: 'MDX',
  color: '#E8A23D',
  status: 'stopped',
  time: '3 дня'
}];
const STATUS = {
  running: {
    variant: 'success',
    label: 'Работает'
  },
  building: {
    variant: 'warning',
    label: 'Сборка'
  },
  stopped: {
    variant: 'neutral',
    label: 'Стоп'
  }
};
const FEED = [{
  who: 'Грейс Хоппер',
  act: 'развернула',
  what: 'acme-api',
  when: '4 мин назад',
  icon: 'rocket',
  tone: 'var(--green-500)'
}, {
  who: 'Линус Т',
  act: 'закоммитил в',
  what: 'web-dashboard',
  when: '22 мин назад',
  icon: 'git-commit-horizontal',
  tone: 'var(--blue-500)'
}, {
  who: 'Маргарет Х',
  act: 'оставила ревью в',
  what: 'ml-pipeline',
  when: '1 ч назад',
  icon: 'message-square',
  tone: 'var(--coral-500)'
}, {
  who: 'CI Бот',
  act: 'собрал',
  what: 'edge-cache',
  when: '3 ч назад',
  icon: 'check',
  tone: 'var(--green-500)'
}];
const TABS = [{
  id: 'projects',
  icon: 'folder',
  label: 'Проекты'
}, {
  id: 'activity',
  icon: 'activity',
  label: 'Активность'
}, {
  id: 'learn',
  icon: 'book-open',
  label: 'Учиться'
}, {
  id: 'profile',
  icon: 'user',
  label: 'Профиль'
}];
function AppHeader({
  title,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "m-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-head__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "24",
    height: "24",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "Uni", /*#__PURE__*/React.createElement("i", null, "Code"))), action), /*#__PURE__*/React.createElement("h1", {
    className: "m-title"
  }, title));
}
function ProjectsScreen() {
  const [seg, setSeg] = useState('all');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B",
    action: /*#__PURE__*/React.createElement("button", {
      className: "m-iconbtn",
      "aria-label": "\u041F\u043E\u0438\u0441\u043A"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 20
    }))
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-seg"
  }, [['all', 'Все'], ['mine', 'Мои'], ['fav', 'Избранное']].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    className: 'm-seg__btn' + (seg === v ? ' is-active' : ''),
    onClick: () => setSeg(v)
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "m-list"
  }, PROJECTS.map(p => {
    const st = STATUS[p.status];
    return /*#__PURE__*/React.createElement("div", {
      className: "m-proj",
      key: p.name
    }, /*#__PURE__*/React.createElement("span", {
      className: "m-proj__dot",
      style: {
        background: p.color
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "m-proj__body"
    }, /*#__PURE__*/React.createElement("strong", null, p.name), /*#__PURE__*/React.createElement("span", {
      className: "m-proj__meta"
    }, p.lang, " \xB7 \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D ", p.time, " \u043D\u0430\u0437\u0430\u0434")), /*#__PURE__*/React.createElement(Badge, {
      variant: st.variant,
      dot: true,
      size: "sm"
    }, st.label));
  })), /*#__PURE__*/React.createElement("button", {
    className: "m-fab",
    "aria-label": "\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 24,
    strokeWidth: 2.4
  })));
}
function ActivityScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C",
    action: /*#__PURE__*/React.createElement("button", {
      className: "m-iconbtn",
      "aria-label": "\u0424\u0438\u043B\u044C\u0442\u0440"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sliders-horizontal",
      size: 20
    }))
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-feed"
  }, FEED.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "m-feed__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "m-feed__icon",
    style: {
      color: f.tone,
      background: 'color-mix(in srgb, ' + f.tone + ' 14%, transparent)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "m-feed__body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, f.who), " ", f.act, " ", /*#__PURE__*/React.createElement("span", {
    className: "m-feed__what"
  }, f.what)), /*#__PURE__*/React.createElement("span", {
    className: "m-feed__when"
  }, f.when))))));
}
function ProfileScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    action: /*#__PURE__*/React.createElement("button", {
      className: "m-iconbtn",
      "aria-label": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "settings",
      size: 20
    }))
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-profile"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0410\u0434\u0430 \u041B\u0430\u0432\u043B\u0435\u0439\u0441",
    size: 72,
    color: "var(--coral-500)",
    status: "online"
  }), /*#__PURE__*/React.createElement("h2", null, "\u0410\u0434\u0430 \u041B\u0430\u0432\u043B\u0435\u0439\u0441"), /*#__PURE__*/React.createElement("span", {
    className: "m-profile__handle"
  }, "@ada \xB7 ada@acme.dev"), /*#__PURE__*/React.createElement("div", {
    className: "m-profile__stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "128"), /*#__PURE__*/React.createElement("span", null, "\u043A\u043E\u043C\u043C\u0438\u0442\u043E\u0432")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "12"), /*#__PURE__*/React.createElement("span", null, "\u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "34"), /*#__PURE__*/React.createElement("span", null, "\u0434\u0435\u043F\u043B\u043E\u044F")))), /*#__PURE__*/React.createElement("div", {
    className: "m-rows"
  }, [['credit-card', 'Тариф', 'Pro'], ['users', 'Команда', 'Acme Inc'], ['bell', 'Уведомления', ''], ['moon', 'Тёмная тема', '']].map(([ic, l, d]) => /*#__PURE__*/React.createElement("div", {
    className: "m-row",
    key: l
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "m-row__label"
  }, l), d && /*#__PURE__*/React.createElement("span", {
    className: "m-row__detail"
  }, d), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16
  })))));
}
function TabBar({
  tab,
  setTab
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "m-tabbar"
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: 'm-tab' + (tab === t.id ? ' is-active' : ''),
    onClick: () => setTab(t.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    size: 22,
    strokeWidth: tab === t.id ? 2.2 : 1.8
  }), /*#__PURE__*/React.createElement("span", null, t.label))));
}
function PhoneApp() {
  const [tab, setTab] = useState('projects');
  return /*#__PURE__*/React.createElement("div", {
    className: "m-app"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-screen"
  }, tab === 'projects' && /*#__PURE__*/React.createElement(ProjectsScreen, null), tab === 'activity' && /*#__PURE__*/React.createElement(ActivityScreen, null), tab === 'learn' && /*#__PURE__*/React.createElement(ActivityScreen, null), tab === 'profile' && /*#__PURE__*/React.createElement(ProfileScreen, null)), /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    setTab: setTab
  }));
}
function PhoneEditor() {
  return /*#__PURE__*/React.createElement("div", {
    className: "m-app m-app--dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-ehead"
  }, /*#__PURE__*/React.createElement("button", {
    className: "m-iconbtn m-iconbtn--d",
    "aria-label": "\u041D\u0430\u0437\u0430\u0434"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "m-ehead__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "m-proj__dot",
    style: {
      background: '#2C6FCB'
    }
  }), "index.ts"), /*#__PURE__*/React.createElement("button", {
    className: "m-runbtn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 15,
    strokeWidth: 2.4
  }), " \u0417\u0430\u043F\u0443\u0441\u043A")), /*#__PURE__*/React.createElement("div", {
    className: "m-ecode"
  }, /*#__PURE__*/React.createElement(CodeBlock, {
    language: "ts",
    copy: false,
    showLineNumbers: true,
    dark: true,
    code: `import { serve } from '@unicode/sdk';

serve({ port: 8080 }, async (req) => {
  const { id } = req.params;
  const user = await db.find(id);
  return Response.json(user);
});`
  })), /*#__PURE__*/React.createElement("div", {
    className: "m-console"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-console__bar"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "terminal",
    size: 14
  }), " \u041A\u043E\u043D\u0441\u043E\u043B\u044C"), /*#__PURE__*/React.createElement("div", {
    className: "m-console__line m-c-out"
  }, "> uni dev \u2014 \u0441\u0431\u043E\u0440\u043A\u0430\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "m-console__line m-c-ok"
  }, "\u2713 API \u0441\u043B\u0443\u0448\u0430\u0435\u0442 :8080"), /*#__PURE__*/React.createElement("div", {
    className: "m-console__line m-c-mut"
  }, "# \u0433\u043E\u0440\u044F\u0447\u0430\u044F \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430")));
}
function MobileApp() {
  return /*#__PURE__*/React.createElement("div", {
    className: "m-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-device"
  }, /*#__PURE__*/React.createElement(window.IOSDevice, null, /*#__PURE__*/React.createElement(PhoneApp, null)), /*#__PURE__*/React.createElement("div", {
    className: "m-caption"
  }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B \xB7 \u0441\u0432\u0435\u0442\u043B\u0430\u044F")), /*#__PURE__*/React.createElement("div", {
    className: "m-device"
  }, /*#__PURE__*/React.createElement(window.IOSDevice, {
    dark: true
  }, /*#__PURE__*/React.createElement(PhoneEditor, null)), /*#__PURE__*/React.createElement("div", {
    className: "m-caption"
  }, "\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \xB7 \u0442\u0451\u043C\u043D\u0430\u044F")));
}
window.MobileApp = MobileApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/ios-frame.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.Terminal = __ds_scope.Terminal;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
