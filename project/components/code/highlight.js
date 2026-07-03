// UniCode — tiny, dependency-free syntax highlighter for CodeBlock.
// Not a component (no .d.ts). Returns lines -> token fragments so CodeBlock
// can render a gutter with aligned line numbers. Good enough for specimens
// and product mocks; not a substitute for a full grammar.

const RULES = {
  js: [
    ['comment', /\/\/[^\n]*|\/\*[\s\S]*?\*\//],
    ['string', /`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/],
    ['number', /\b0x[\da-fA-F]+|\b\d[\d_]*\.?\d*(?:[eE][+-]?\d+)?/],
    ['keyword', /\b(?:const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|new|class|extends|super|import|from|export|default|async|await|yield|try|catch|finally|throw|typeof|instanceof|delete|in|of|this|void|null|undefined|true|false|interface|type|enum|implements|public|private|protected|readonly|as|satisfies)\b/],
    ['func', /\b[A-Za-z_$][\w$]*(?=\s*\()/],
    ['punct', /[{}()[\];,.]/],
  ],
  python: [
    ['comment', /#[^\n]*/],
    ['string', /"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/],
    ['number', /\b\d[\d_]*\.?\d*(?:[eE][+-]?\d+)?/],
    ['keyword', /\b(?:def|return|if|elif|else|for|while|import|from|as|class|try|except|finally|with|lambda|yield|pass|break|continue|in|is|not|and|or|None|True|False|self|cls|async|await|raise|global|nonlocal|assert|del|print)\b/],
    ['func', /\b[A-Za-z_][\w]*(?=\s*\()/],
    ['punct', /[{}()[\]:;,.]/],
  ],
  bash: [
    ['comment', /#[^\n]*/],
    ['string', /"(?:\\.|[^"\\])*"|'(?:[^']*)'/],
    ['variable', /\$\w+|\$\{[^}]+\}/],
    ['attr', /(?<=\s)-{1,2}[\w-]+/],
    ['keyword', /\b(?:sudo|cd|ls|cat|echo|export|mkdir|rm|cp|mv|curl|wget|git|npm|npx|yarn|pnpm|node|deno|bun|python|pip|docker|kubectl|make|chmod|grep|sed|awk)\b/],
    ['number', /\b\d+\b/],
  ],
  json: [
    ['attr', /"(?:\\.|[^"\\])*"(?=\s*:)/],
    ['string', /"(?:\\.|[^"\\])*"/],
    ['keyword', /\b(?:true|false|null)\b/],
    ['number', /-?\b\d[\d_]*\.?\d*(?:[eE][+-]?\d+)?/],
    ['punct', /[{}[\]:,]/],
  ],
  html: [
    ['comment', /<!--[\s\S]*?-->/],
    ['string', /"(?:\\.|[^"\\])*"|'(?:[^']*)'/],
    ['tag', /<\/?[A-Za-z][\w-]*|\/?>/],
    ['attr', /\b[A-Za-z_:][\w:-]*(?=\s*=)/],
  ],
  css: [
    ['comment', /\/\*[\s\S]*?\*\//],
    ['string', /"(?:\\.|[^"\\])*"|'(?:[^']*)'/],
    ['keyword', /@[\w-]+|![a-z]+/],
    ['number', /#[0-9a-fA-F]{3,8}\b|\b\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw|s|ms|deg|fr|ch)?\b/],
    ['attr', /[\w-]+(?=\s*:)/],
    ['punct', /[{}();:,]/],
  ],
  plain: [],
};

const ALIAS = {
  ts: 'js', tsx: 'js', jsx: 'js', javascript: 'js', typescript: 'js', mjs: 'js', node: 'js',
  py: 'python',
  sh: 'bash', shell: 'bash', zsh: 'bash', console: 'bash',
  htm: 'html', xml: 'html', svg: 'html', vue: 'html',
  scss: 'css', less: 'css',
  yaml: 'plain', yml: 'plain', text: 'plain', txt: 'plain', diff: 'plain',
};

export const codeColors = {
  comment: '--code-comment', string: '--code-string', number: '--code-number',
  keyword: '--code-keyword', func: '--code-function', punct: '--code-punct',
  tag: '--code-tag', attr: '--code-attr', variable: '--code-keyword', text: null,
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
      if (m && m.index === i && m[0].length) { hit = [type, m[0]]; break; }
    }
    if (hit) { out.push(hit); i += hit[1].length; }
    else { out.push(['text', code[i]]); i += 1; }
  }
  // merge adjacent text fragments
  const merged = [];
  for (const frag of out) {
    const last = merged[merged.length - 1];
    if (last && last[0] === 'text' && frag[0] === 'text') last[1] += frag[1];
    else merged.push([frag[0], frag[1]]);
  }
  return merged;
}

/** Returns an array of lines; each line is an array of [type, text] fragments. */
export function highlightToLines(code, lang) {
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
