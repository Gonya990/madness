import React from 'react';

/**
 * UniCode logo. The coral squircle mark carries a terminal-prompt glyph
 * (`>` + cursor). The wordmark renders "Uni" in the current text color and
 * "Code" in coral, so it adapts to light/dark automatically.
 */
export function Logo({
  variant = 'lockup',
  size = 28,
  title = 'UniCode',
  style = {},
  ...rest
}) {
  const mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role={variant === 'mark' ? 'img' : undefined}
      aria-label={variant === 'mark' ? title : undefined}
      aria-hidden={variant === 'mark' ? undefined : true}
      style={{ display: 'block', flex: '0 0 auto' }}
    >
      <rect width="64" height="64" rx="15" fill="var(--coral-500, #F4522D)" />
      <path d="M18 22 L29 32 L18 42" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="32" y="37.5" width="14" height="5" rx="2.5" fill="#fff" />
    </svg>
  );

  if (variant === 'mark') {
    return <span style={{ display: 'inline-flex', ...style }} {...rest}>{mark}</span>;
  }

  const word = (
    <span
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: Math.round(size * 0.82),
        letterSpacing: '-0.02em',
        lineHeight: 1,
        color: 'var(--color-text)',
        whiteSpace: 'nowrap',
      }}
    >
      Uni<span style={{ color: 'var(--coral-500, #F4522D)' }}>Code</span>
    </span>
  );

  if (variant === 'wordmark') {
    return <span style={{ display: 'inline-flex', alignItems: 'center', ...style }} {...rest}>{word}</span>;
  }

  return (
    <span
      role="img"
      aria-label={title}
      style={{ display: 'inline-flex', alignItems: 'center', gap: Math.round(size * 0.34), ...style }}
      {...rest}
    >
      {mark}
      {word}
    </span>
  );
}
