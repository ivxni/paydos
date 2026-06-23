import React from 'react';

/**
 * Selectable category chip / tag — used for menu filters
 * (flavours, sessions). Pass `active` for the selected state.
 */
export function Tag({ children, active = false, onClick, style = {}, ...rest }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        height: '32px',
        padding: '0 16px',
        fontFamily: 'var(--font-sans)',
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '0.02em',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        color: active ? 'var(--ink-900)' : 'var(--text-secondary)',
        background: active ? 'var(--gradient-silver-soft)' : 'var(--glass-fill-light)',
        WebkitBackdropFilter: 'blur(var(--blur-sm))',
        backdropFilter: 'blur(var(--blur-sm))',
        fontWeight: active ? 600 : 500,
        border: `1px solid ${active ? 'transparent' : 'var(--glass-border)'}`,
        boxShadow: active ? 'var(--inset-silver)' : 'none',
        transition: 'all var(--dur-base) var(--ease-out)',
        ...style,
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.borderColor = 'var(--border-silver)'; }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.borderColor = 'var(--glass-border)'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
