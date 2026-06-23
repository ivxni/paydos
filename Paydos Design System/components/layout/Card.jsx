import React from 'react';

/**
 * Frosted-glass surface — the core Paydos container. Translucent dark
 * fill + backdrop blur + hairline border + top inner highlight.
 * `interactive` adds a hover lift and brightens the glass + border.
 * `feature` keeps a brighter silver-lit glass for highlighted items.
 */
export function Card({ children, interactive = false, feature = false, padding = 'var(--space-6)', style = {}, ...rest }) {
  const base = {
    background: feature ? 'var(--glass-fill-strong)' : 'var(--glass-fill)',
    WebkitBackdropFilter: 'blur(var(--blur-md)) saturate(120%)',
    backdropFilter: 'blur(var(--blur-md)) saturate(120%)',
    border: `1px solid ${feature ? 'var(--border-silver)' : 'var(--glass-border)'}`,
    borderRadius: 'var(--radius-lg)',
    padding,
    boxShadow: feature
      ? 'var(--glass-shadow), var(--glass-highlight), var(--glow-silver)'
      : 'var(--glass-shadow), var(--glass-highlight)',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
    position: 'relative',
  };
  return (
    <div
      style={{ ...base, ...style, cursor: interactive ? 'pointer' : 'default' }}
      onMouseEnter={(e) => {
        if (!interactive) return;
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.borderColor = 'var(--border-silver)';
        e.currentTarget.style.background = 'var(--glass-fill-strong)';
        e.currentTarget.style.boxShadow = 'var(--glass-shadow), var(--glass-highlight), var(--glow-silver)';
      }}
      onMouseLeave={(e) => {
        if (!interactive) return;
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = feature ? 'var(--border-silver)' : 'var(--glass-border)';
        e.currentTarget.style.background = feature ? 'var(--glass-fill-strong)' : 'var(--glass-fill)';
        e.currentTarget.style.boxShadow = feature
          ? 'var(--glass-shadow), var(--glass-highlight), var(--glow-silver)'
          : 'var(--glass-shadow), var(--glass-highlight)';
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
