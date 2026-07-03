// UniCode design-system — shared internal helpers for components.
// Not a component (no .d.ts) — imported by siblings via relative path.

const _injected = new Set();

/** Inject a <style> block once per id (idempotent). Lets components own
 *  real :hover / :focus-visible / :active / :disabled states without a
 *  CSS-in-JS library. */
export function injectStyle(id, css) {
  if (typeof document === 'undefined') return;
  if (_injected.has(id)) return;
  _injected.add(id);
  const el = document.createElement('style');
  el.setAttribute('data-uc', id);
  el.textContent = css;
  document.head.appendChild(el);
}

/** Tiny classnames joiner. */
export function cx(...args) {
  return args.filter(Boolean).join(' ');
}
