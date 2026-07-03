import React from 'react';

/**
 * UniCode icon. Thin wrapper over Lucide (loaded from CDN on the page).
 * Renders the SVG imperatively into a span so React never fights Lucide's
 * DOM replacement, and retries briefly if the Lucide script hasn't loaded yet.
 */
export function Icon({
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
    let raf, tries = 0;

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
      try { L.createIcons(); } catch (e) { /* noop */ }
      const svg = el.querySelector('svg');
      if (svg) {
        svg.setAttribute('width', String(size));
        svg.setAttribute('height', String(size));
        svg.setAttribute('stroke-width', String(strokeWidth));
        svg.style.display = 'block';
      }
    };

    paint();
    return () => { if (raf) cancelAnimationFrame(raf); };
  }, [name, size, strokeWidth]);

  return (
    <span
      ref={ref}
      className={className}
      aria-hidden="true"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto',
        width: size,
        height: size,
        color,
        ...style,
      }}
      {...rest}
    />
  );
}
