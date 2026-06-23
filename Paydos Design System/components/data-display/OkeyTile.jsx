import React from 'react';

/**
 * Okey tile — the brand's signature game-piece motif (cf. 01 / 60
 * in the logo). Renders a chrome tile with a mono numeral; `color`
 * tints the number ('ink' | 'purple' | 'silver').
 */
export function OkeyTile({ value = '01', color = 'ink', size = 'md', style = {}, ...rest }) {
  const sizes = {
    sm: { w: 38, h: 52, f: 19 },
    md: { w: 52, h: 70, f: 26 },
    lg: { w: 68, h: 92, f: 34 },
  };
  const s = sizes[size] || sizes.md;
  const ink = {
    ink: 'var(--ink-900)',
    purple: 'var(--purple-600)',
    silver: 'var(--silver-600)',
  }[color] || 'var(--ink-900)';
  return (
    <div
      style={{
        width: s.w,
        height: s.h,
        borderRadius: 'var(--radius-sm)',
        background: 'linear-gradient(180deg, #F6F8FA, #D2D6DC)',
        boxShadow: color === 'purple'
          ? 'var(--shadow-sm), var(--glow-purple-soft), var(--inset-silver)'
          : 'var(--shadow-sm), var(--inset-silver)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
        fontSize: s.f,
        color: ink,
        ...style,
      }}
      {...rest}
    >
      {value}
      <span style={{
        position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)',
        width: s.f * 0.28, height: s.f * 0.28, borderRadius: '50%',
        border: '1.5px solid rgba(0,0,0,0.22)',
      }} />
    </div>
  );
}
