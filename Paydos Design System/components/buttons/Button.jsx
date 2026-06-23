import React from 'react';

/**
 * Paydos button. Silver is the brand — the primary action is chrome,
 * never purple. Variants:
 *  - 'primary'  brushed chrome-silver, dark ink label (key CTAs)
 *  - 'glass'    frosted glass — translucent, backdrop blur, light label
 *  - 'outline'  hairline border, transparent fill
 *  - 'ghost'    text-only, hover lifts a faint surface
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  fullWidth = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { height: 'var(--control-sm)', padding: '0 18px', font: '12.5px' },
    md: { height: 'var(--control-md)', padding: '0 24px', font: '13px' },
    lg: { height: 'var(--control-lg)', padding: '0 32px', font: '14px' },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontSize: s.font,
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    backdropFilter: variant === 'glass' ? 'blur(var(--blur-md))' : undefined,
    WebkitBackdropFilter: variant === 'glass' ? 'blur(var(--blur-md))' : undefined,
  };

  const variants = {
    primary: {
      background: 'var(--gradient-silver-soft)',
      color: 'var(--ink-900)',
      fontWeight: 600,
      borderColor: 'transparent',
      boxShadow: 'var(--inset-silver)',
    },
    glass: {
      background: 'var(--glass-fill-light)',
      color: 'var(--text-primary)',
      borderColor: 'var(--glass-border-lit)',
      boxShadow: 'var(--glass-highlight)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
    },
  };

  return (
    <button
      type="button"
      disabled={disabled}
      style={{ ...base, ...(variants[variant] || variants.primary), ...style }}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = 'translateY(-1px)';
        if (variant === 'primary') { e.currentTarget.style.boxShadow = 'var(--inset-silver), var(--glow-silver)'; }
        if (variant === 'glass') { e.currentTarget.style.background = 'rgba(255,255,255,0.10)'; e.currentTarget.style.borderColor = 'var(--border-silver)'; }
        if (variant === 'outline') e.currentTarget.style.borderColor = 'var(--border-silver)';
        if (variant === 'ghost') { e.currentTarget.style.color = 'var(--text-primary)'; }
      }}
      onMouseLeave={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = 'translateY(0)';
        const v = variants[variant] || variants.primary;
        e.currentTarget.style.boxShadow = v.boxShadow || 'none';
        e.currentTarget.style.background = v.background;
        e.currentTarget.style.borderColor = v.borderColor || 'transparent';
        if (variant === 'ghost') e.currentTarget.style.color = 'var(--text-secondary)';
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
