import React from 'react';

/**
 * Section header — the brand's signature eyebrow + display title
 * lockup. The title uses the chrome silver gradient; pass `accent`
 * to tint the eyebrow purple. `align` centers the lockup.
 */
export function SectionHeading({ eyebrow, title, subtitle, align = 'left', accent = false, style = {}, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        textAlign: align,
        alignItems: align === 'center' ? 'center' : 'flex-start',
        ...style,
      }}
      {...rest}
    >
      {eyebrow && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          fontFamily: 'var(--font-sans)', fontSize: '11.5px', fontWeight: 500,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: accent ? 'var(--purple-300)' : 'var(--text-secondary)',
        }}>
          <span style={{ width: '24px', height: '1px', background: 'currentColor', opacity: 0.6 }} />
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: '40px',
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          background: 'var(--gradient-silver)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p style={{
          margin: 0, maxWidth: '54ch',
          fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.6,
          color: 'var(--text-secondary)',
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
