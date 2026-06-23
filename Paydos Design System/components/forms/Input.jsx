import React from 'react';

/**
 * Text input for dark surfaces — inset fill, hairline border that
 * lifts to a purple ring on focus. Pass `label` and optional
 * `hint`; supports any native input props.
 */
export function Input({ label, hint, id, style = {}, ...rest }) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', width: '100%' }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)',
        }}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        style={{
          height: 'var(--control-md)',
          padding: '0 14px',
          background: 'var(--surface-inset)',
          border: '1px solid var(--border-soft)',
          borderRadius: 'var(--radius-sm)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          outline: 'none',
          transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
          ...style,
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-accent)';
          e.currentTarget.style.boxShadow = 'var(--glow-purple-soft)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-soft)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        {...rest}
      />
      {hint && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)' }}>{hint}</span>
      )}
    </div>
  );
}
