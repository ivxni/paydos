import React from 'react';

/**
 * Small status / category badge. Tones: 'neutral' (silver hairline),
 * 'accent' (purple), 'success', 'warning', 'danger'. 'solid' fills.
 */
export function Badge({ children, tone = 'neutral', solid = false, style = {}, ...rest }) {
  const tones = {
    neutral: { fg: 'var(--text-secondary)', line: 'var(--border-strong)', fill: 'rgba(255,255,255,0.04)' },
    accent:  { fg: 'var(--purple-200)', line: 'var(--accent-line)', fill: 'var(--accent-soft)' },
    success: { fg: '#9FD9BE', line: 'rgba(95,181,138,0.45)', fill: 'rgba(95,181,138,0.12)' },
    warning: { fg: '#E6CE8E', line: 'rgba(216,180,90,0.45)', fill: 'rgba(216,180,90,0.12)' },
    danger:  { fg: '#E6A2A2', line: 'rgba(217,106,106,0.45)', fill: 'rgba(217,106,106,0.12)' },
  };
  const t = tones[tone] || tones.neutral;
  const solidBg = {
    neutral: 'var(--silver-300)', accent: 'var(--purple-500)',
    success: 'var(--success)', warning: 'var(--warning)', danger: 'var(--danger)',
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        height: '22px',
        padding: '0 10px',
        fontFamily: 'var(--font-sans)',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-pill)',
        color: solid ? (tone === 'neutral' ? 'var(--ink-900)' : 'var(--text-on-accent)') : t.fg,
        background: solid ? solidBg[tone] : t.fill,
        border: solid ? '1px solid transparent' : `1px solid ${t.line}`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
