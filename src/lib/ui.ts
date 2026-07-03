const _injected = new Set<string>();

export function injectStyle(id: string, css: string): void {
  if (typeof document === 'undefined') return;
  if (_injected.has(id)) return;
  _injected.add(id);
  const el = document.createElement('style');
  el.setAttribute('data-uc', id);
  el.textContent = css;
  document.head.appendChild(el);
}

export function cx(...args: (string | false | null | undefined)[]): string {
  return args.filter(Boolean).join(' ');
}
