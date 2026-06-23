/* @ds-bundle: {"format":3,"namespace":"PaydosDesignSystem_45d525","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"OkeyTile","sourcePath":"components/data-display/OkeyTile.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"SectionHeading","sourcePath":"components/layout/SectionHeading.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"c0457727802a","components/data-display/Badge.jsx":"3bacdf6fcf78","components/data-display/OkeyTile.jsx":"9f9be3cbda2c","components/data-display/Tag.jsx":"42c37c336d7f","components/forms/Input.jsx":"57211befbbcc","components/layout/Card.jsx":"d27e397668e6","components/layout/SectionHeading.jsx":"3aabb3c06fa5","ui_kits/website/App.jsx":"feeacde53f77","ui_kits/website/Experience.jsx":"6507796c17b7","ui_kits/website/Home.jsx":"22f7c66fee75","ui_kits/website/Menu.jsx":"e58ef0a9dd01","ui_kits/website/Nav.jsx":"9a2d93aa6710","ui_kits/website/Reserve.jsx":"3dc44711a9ff"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PaydosDesignSystem_45d525 = window.PaydosDesignSystem_45d525 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Paydos button. Silver is the brand — the primary action is chrome,
 * never purple. Variants:
 *  - 'primary'  brushed chrome-silver, dark ink label (key CTAs)
 *  - 'glass'    frosted glass — translucent, backdrop blur, light label
 *  - 'outline'  hairline border, transparent fill
 *  - 'ghost'    text-only, hover lifts a faint surface
 */
function Button({
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
    sm: {
      height: 'var(--control-sm)',
      padding: '0 18px',
      font: '12.5px'
    },
    md: {
      height: 'var(--control-md)',
      padding: '0 24px',
      font: '13px'
    },
    lg: {
      height: 'var(--control-lg)',
      padding: '0 32px',
      font: '14px'
    }
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
    WebkitBackdropFilter: variant === 'glass' ? 'blur(var(--blur-md))' : undefined
  };
  const variants = {
    primary: {
      background: 'var(--gradient-silver-soft)',
      color: 'var(--ink-900)',
      fontWeight: 600,
      borderColor: 'transparent',
      boxShadow: 'var(--inset-silver)'
    },
    glass: {
      background: 'var(--glass-fill-light)',
      color: 'var(--text-primary)',
      borderColor: 'var(--glass-border-lit)',
      boxShadow: 'var(--glass-highlight)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      e.currentTarget.style.transform = 'translateY(-1px)';
      if (variant === 'primary') {
        e.currentTarget.style.boxShadow = 'var(--inset-silver), var(--glow-silver)';
      }
      if (variant === 'glass') {
        e.currentTarget.style.background = 'rgba(255,255,255,0.10)';
        e.currentTarget.style.borderColor = 'var(--border-silver)';
      }
      if (variant === 'outline') e.currentTarget.style.borderColor = 'var(--border-silver)';
      if (variant === 'ghost') {
        e.currentTarget.style.color = 'var(--text-primary)';
      }
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.transform = 'translateY(0)';
      const v = variants[variant] || variants.primary;
      e.currentTarget.style.boxShadow = v.boxShadow || 'none';
      e.currentTarget.style.background = v.background;
      e.currentTarget.style.borderColor = v.borderColor || 'transparent';
      if (variant === 'ghost') e.currentTarget.style.color = 'var(--text-secondary)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / category badge. Tones: 'neutral' (silver hairline),
 * 'accent' (purple), 'success', 'warning', 'danger'. 'solid' fills.
 */
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      fg: 'var(--text-secondary)',
      line: 'var(--border-strong)',
      fill: 'rgba(255,255,255,0.04)'
    },
    accent: {
      fg: 'var(--purple-200)',
      line: 'var(--accent-line)',
      fill: 'var(--accent-soft)'
    },
    success: {
      fg: '#9FD9BE',
      line: 'rgba(95,181,138,0.45)',
      fill: 'rgba(95,181,138,0.12)'
    },
    warning: {
      fg: '#E6CE8E',
      line: 'rgba(216,180,90,0.45)',
      fill: 'rgba(216,180,90,0.12)'
    },
    danger: {
      fg: '#E6A2A2',
      line: 'rgba(217,106,106,0.45)',
      fill: 'rgba(217,106,106,0.12)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const solidBg = {
    neutral: 'var(--silver-300)',
    accent: 'var(--purple-500)',
    success: 'var(--success)',
    warning: 'var(--warning)',
    danger: 'var(--danger)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      color: solid ? tone === 'neutral' ? 'var(--ink-900)' : 'var(--text-on-accent)' : t.fg,
      background: solid ? solidBg[tone] : t.fill,
      border: solid ? '1px solid transparent' : `1px solid ${t.line}`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/OkeyTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Okey tile — the brand's signature game-piece motif (cf. 01 / 60
 * in the logo). Renders a chrome tile with a mono numeral; `color`
 * tints the number ('ink' | 'purple' | 'silver').
 */
function OkeyTile({
  value = '01',
  color = 'ink',
  size = 'md',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      w: 38,
      h: 52,
      f: 19
    },
    md: {
      w: 52,
      h: 70,
      f: 26
    },
    lg: {
      w: 68,
      h: 92,
      f: 34
    }
  };
  const s = sizes[size] || sizes.md;
  const ink = {
    ink: 'var(--ink-900)',
    purple: 'var(--purple-600)',
    silver: 'var(--silver-600)'
  }[color] || 'var(--ink-900)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: s.w,
      height: s.h,
      borderRadius: 'var(--radius-sm)',
      background: 'linear-gradient(180deg, #F6F8FA, #D2D6DC)',
      boxShadow: color === 'purple' ? 'var(--shadow-sm), var(--glow-purple-soft), var(--inset-silver)' : 'var(--shadow-sm), var(--inset-silver)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: s.f,
      color: ink,
      ...style
    }
  }, rest), value, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '10%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: s.f * 0.28,
      height: s.f * 0.28,
      borderRadius: '50%',
      border: '1.5px solid rgba(0,0,0,0.22)'
    }
  }));
}
Object.assign(__ds_scope, { OkeyTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/OkeyTile.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selectable category chip / tag — used for menu filters
 * (flavours, sessions). Pass `active` for the selected state.
 */
function Tag({
  children,
  active = false,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
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
      ...style
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.borderColor = 'var(--border-silver)';
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.borderColor = 'var(--glass-border)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input for dark surfaces — inset fill, hairline border that
 * lifts to a purple ring on focus. Pass `label` and optional
 * `hint`; supports any native input props.
 */
function Input({
  label,
  hint,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
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
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--border-accent)';
      e.currentTarget.style.boxShadow = 'var(--glow-purple-soft)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--border-soft)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Frosted-glass surface — the core Paydos container. Translucent dark
 * fill + backdrop blur + hairline border + top inner highlight.
 * `interactive` adds a hover lift and brightens the glass + border.
 * `feature` keeps a brighter silver-lit glass for highlighted items.
 */
function Card({
  children,
  interactive = false,
  feature = false,
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const base = {
    background: feature ? 'var(--glass-fill-strong)' : 'var(--glass-fill)',
    WebkitBackdropFilter: 'blur(var(--blur-md)) saturate(120%)',
    backdropFilter: 'blur(var(--blur-md)) saturate(120%)',
    border: `1px solid ${feature ? 'var(--border-silver)' : 'var(--glass-border)'}`,
    borderRadius: 'var(--radius-lg)',
    padding,
    boxShadow: feature ? 'var(--glass-shadow), var(--glass-highlight), var(--glow-silver)' : 'var(--glass-shadow), var(--glass-highlight)',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
    position: 'relative'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...style,
      cursor: interactive ? 'pointer' : 'default'
    },
    onMouseEnter: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.borderColor = 'var(--border-silver)';
      e.currentTarget.style.background = 'var(--glass-fill-strong)';
      e.currentTarget.style.boxShadow = 'var(--glass-shadow), var(--glass-highlight), var(--glow-silver)';
    },
    onMouseLeave: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = feature ? 'var(--border-silver)' : 'var(--glass-border)';
      e.currentTarget.style.background = feature ? 'var(--glass-fill-strong)' : 'var(--glass-fill)';
      e.currentTarget.style.boxShadow = feature ? 'var(--glass-shadow), var(--glass-highlight), var(--glow-silver)' : 'var(--glass-shadow), var(--glass-highlight)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section header — the brand's signature eyebrow + display title
 * lockup. The title uses the chrome silver gradient; pass `accent`
 * to tint the eyebrow purple. `align` centers the lockup.
 */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  accent = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-sans)',
      fontSize: '11.5px',
      fontWeight: 500,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: accent ? 'var(--purple-300)' : 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '24px',
      height: '1px',
      background: 'currentColor',
      opacity: 0.6
    }
  }), eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '40px',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      background: 'var(--gradient-silver)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '54ch',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// Paydos lounge — app shell: routing + footer

function Footer({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--ink-950)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '56px 40px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/paydos-logo-trim.png",
    alt: "Paydos",
    style: {
      height: 44,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-muted)'
    }
  }, "Shisha & Okey Lounge \xB7 Hauptstra\xDFe 42, K\xF6ln. Wo der Abend ausatmet.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      flexWrap: 'wrap'
    }
  }, [['Besuch', [['Karte', 'menu'], ['Okey & Events', 'experience'], ['Reservieren', 'reserve']]], ['Kontakt', [['+49 221 4242 600', null], ['hallo@paydos.lounge', null], ['Instagram', null]]]].map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, items.map(([label, route]) => /*#__PURE__*/React.createElement("button", {
    key: label,
    onClick: () => route && onNavigate(route),
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      textAlign: 'left',
      cursor: route ? 'pointer' : 'default',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, label))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '20px 40px 40px',
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, "\xA9 2026 Paydos Lounge"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, "Impressum \xB7 Datenschutz")));
}
function App() {
  const [route, setRoute] = React.useState('home');
  const go = r => {
    setRoute(r);
    window.scrollTo({
      top: 0
    });
  };
  // Resolve screen components at render time (not parse time) to avoid
  // the async <script> load-order race.
  const Nav = window.Nav,
    Home = window.Home,
    Menu = window.Menu,
    Experience = window.Experience,
    Reserve = window.Reserve;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, {
    route: route,
    onNavigate: go
  }), route === 'home' && /*#__PURE__*/React.createElement(Home, {
    onNavigate: go
  }), route === 'menu' && /*#__PURE__*/React.createElement(Menu, null), route === 'experience' && /*#__PURE__*/React.createElement(Experience, {
    onNavigate: go
  }), route === 'reserve' && /*#__PURE__*/React.createElement(Reserve, null), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: go
  }));
}

// Mount EXACTLY once. A synchronous boot flag prevents a double module
// evaluation from creating a second root; the poll waits out the async
// <script type="text/babel"> load order before the first render.
if (!window.__paydosBooted) {
  window.__paydosBooted = true;
  (function mountApp() {
    const deps = ['Nav', 'Home', 'Menu', 'Experience', 'Reserve', 'PhotoFrame'];
    const ready = deps.every(k => typeof window[k] === 'function') && window.PaydosDesignSystem_45d525;
    if (!ready) {
      setTimeout(mountApp, 30);
      return;
    }
    ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
  })();
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Experience.jsx
try { (() => {
// Paydos lounge — Okey & events screen
const {
  Card,
  OkeyTile,
  Badge,
  SectionHeading,
  Button
} = window.PaydosDesignSystem_45d525;
function Experience({
  onNavigate
}) {
  const PhotoFrame = window.PhotoFrame;
  const events = [{
    day: 'MI',
    date: 'Okey-Turnier',
    d: 'Offene Runde ab 20:00. Anmeldung am Tisch.',
    t: '20:00',
    badge: 'Wöchentlich'
  }, {
    day: 'FR',
    date: 'Live DJ & Shisha',
    d: 'Deep & oriental house, bis 02:00.',
    t: '21:00',
    badge: 'Beliebt'
  }, {
    day: 'SA',
    date: 'Private Lounge',
    d: 'Reservierter Bereich für Gruppen ab 8.',
    t: 'Auf Anfrage'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "pd-grain",
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '88px 40px 72px',
      background: 'radial-gradient(100% 80% at 50% -20%, rgba(183,188,196,0.06), rgba(6,6,8,0) 55%), radial-gradient(60% 90% at 92% 0%, rgba(139,83,217,0.10), rgba(10,10,12,0) 60%), var(--ink-950)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '40ch'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Das Erlebnis",
    title: "Okey & Events",
    subtitle: "Mehr als rauchen \u2014 Paydos ist ein Wohnzimmer. Steine klackern, Gl\xE4ser klirren, der Abend zieht sich angenehm."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(OkeyTile, {
    value: "01",
    size: "lg"
  }), /*#__PURE__*/React.createElement(OkeyTile, {
    value: "22",
    size: "lg",
    color: "silver",
    style: {
      transform: 'translateY(-10px) rotate(-5deg)'
    }
  }), /*#__PURE__*/React.createElement(OkeyTile, {
    value: "60",
    size: "lg",
    color: "purple",
    style: {
      transform: 'translateY(6px) rotate(7deg)'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '64px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18
    }
  }, events.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.date,
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 30,
      fontWeight: 600,
      background: 'var(--gradient-silver)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, e.day), e.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, e.badge)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, e.date), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.55
    }
  }, e.d)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Beginn \xB7 ", e.t))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '24px 40px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gridTemplateRows: '196px 196px',
      gap: 14
    }
  }, [{
    src: '../../assets/lounge-okey.jpg',
    s: {
      gridRow: 'span 2'
    },
    c: 'Der Spielraum · Okey-Tische'
  }, {
    src: '../../assets/lounge-bar.jpg',
    c: 'Die Bar'
  }, {
    src: '../../assets/lounge-purple.jpg',
    c: 'Die Lounge'
  }].map((p, i) => /*#__PURE__*/React.createElement(PhotoFrame, {
    key: i,
    label: p.c,
    src: p.src,
    style: p.s || {}
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('reserve')
  }, "Tisch sichern"))));
}
Object.assign(window, {
  Experience
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Experience.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
// Paydos lounge — home / hero screen
const {
  Button,
  OkeyTile,
  Card
} = window.PaydosDesignSystem_45d525;
function PhotoFrame({
  label,
  children,
  style = {},
  tint = 'warm',
  src = null
}) {
  const tints = {
    warm: 'radial-gradient(120% 90% at 70% 20%, rgba(216,180,90,0.16), rgba(8,8,10,0.0) 60%)',
    smoke: 'radial-gradient(110% 90% at 30% 10%, rgba(161,114,226,0.16), rgba(8,8,10,0.0) 58%)',
    silver: 'linear-gradient(160deg, rgba(183,188,196,0.12), rgba(8,8,10,0.0) 60%)'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pd-grain",
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--glass-border)',
      background: src ? 'var(--ink-850)' : `${tints[tint]}, var(--ink-850)`,
      boxShadow: 'var(--glass-shadow), var(--glass-highlight)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label || '',
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(6,6,8,0.10) 0%, rgba(6,6,8,0.05) 45%, rgba(6,6,8,0.72) 100%)'
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
      backgroundSize: '16px 16px'
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 14,
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: src ? 'var(--text-secondary)' : 'var(--text-muted)',
      zIndex: 2
    }
  }, label), children);
}
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(100% 70% at 50% -20%, rgba(183,188,196,0.06) 0%, rgba(6,6,8,0) 55%), var(--ink-950)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-6%',
      right: '-4%',
      width: 460,
      height: 560,
      background: 'radial-gradient(46% 40% at 50% 35%, rgba(139,83,217,0.14), transparent 72%)',
      filter: 'blur(50px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '0 40px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 64,
      alignItems: 'center',
      minHeight: 'calc(100vh - 84px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 28,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 1,
      background: 'var(--silver-400)'
    }
  }), "Shisha & Okey Lounge"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(52px, 6.4vw, 92px)',
      lineHeight: 1.0,
      letterSpacing: '-0.025em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--gradient-silver)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "Wo der Abend"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)',
      fontStyle: 'italic',
      fontWeight: 500
    }
  }, "ausatmet.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      maxWidth: '44ch',
      fontFamily: 'var(--font-sans)',
      fontSize: 16.5,
      lineHeight: 1.75,
      color: 'var(--text-secondary)'
    }
  }, "Ged\xE4mpftes Licht, handgestopfte K\xF6pfe und ein langer Tisch voller Okey. Paydos ist die Pause am Ende des Tages \u2014 ohne Eile."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 36,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('reserve')
  }, "Tisch reservieren"), /*#__PURE__*/React.createElement(Button, {
    variant: "glass",
    size: "lg",
    onClick: () => onNavigate('menu')
  }, "Zur Karte")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 44,
      marginTop: 56,
      flexWrap: 'wrap'
    }
  }, [['Geöffnet', 'Mo–So · 16 – 02 Uhr'], ['Standort', 'Hauptstraße 42, Köln'], ['Okey-Abende', 'Mi & Fr']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 7
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      color: 'var(--text-primary)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 'min(76vh, 620px)',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    label: "Die Bar \xB7 Paydos",
    src: "../../assets/lounge-bar.jpg",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-glass",
    style: {
      position: 'absolute',
      top: 18,
      left: 18,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--success)',
      boxShadow: '0 0 8px rgba(95,181,138,0.7)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, "Heute ge\xF6ffnet")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 22,
      bottom: 38,
      display: 'flex',
      gap: 12,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(OkeyTile, {
    value: "01",
    size: "md"
  }), /*#__PURE__*/React.createElement(OkeyTile, {
    value: "60",
    size: "md",
    color: "purple",
    style: {
      transform: 'rotate(7deg) translateY(6px)'
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 40px',
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 36,
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 14
    }
  }, "Heute Abend"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 44,
      letterSpacing: '-0.02em',
      background: 'var(--gradient-silver)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "Empfohlen aus der Karte")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNavigate('menu')
  }, "Alle ansehen \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, [{
    n: 'Purple Haze',
    p: '€16,00',
    d: 'Blaubeere, Minze, ein Hauch Traube.',
    cat: 'Signature',
    feature: true
  }, {
    n: 'Doppelapfel',
    p: '€14,50',
    d: 'Der Klassiker. Langsam, rund, warm.',
    cat: 'Klassiker'
  }, {
    n: 'Silver Mint',
    p: '€15,00',
    d: 'Eiskalte Minze, klarer Abgang.',
    cat: 'Minzig'
  }].map(b => /*#__PURE__*/React.createElement(Card, {
    key: b.n,
    interactive: true,
    feature: b.feature,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, b.cat), b.feature && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      background: 'var(--gradient-silver-soft)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--inset-silver)'
    }
  }, "Signature")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--text-primary)',
      margin: '18px 0 0',
      letterSpacing: '-0.01em'
    }
  }, b.n), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 20px',
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.55
    }
  }, b.d), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 16,
      borderTop: '1px solid var(--glass-border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Premium Bowl"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 19,
      color: 'var(--text-primary)'
    }
  }, b.p)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 40px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-grain",
    style: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 1320,
      margin: '0 auto',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--glass-border)',
      background: 'linear-gradient(120deg, rgba(26,26,31,0.7), rgba(14,14,17,0.4)), radial-gradient(90% 140% at 100% 0%, rgba(139,83,217,0.12), rgba(14,14,17,0) 58%), var(--ink-850)',
      WebkitBackdropFilter: 'blur(var(--blur-md))',
      backdropFilter: 'blur(var(--blur-md))',
      boxShadow: 'var(--glass-highlight)',
      padding: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '46ch',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 16
    }
  }, "Okey-Abende"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 40,
      lineHeight: 1.1,
      color: 'var(--text-primary)'
    }
  }, "Leg eine Partie ein."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 28px',
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, "Mittwochs und freitags liegen die Steine bereit. Sammel deine Crew, wir k\xFCmmern uns um Kohle und Karte."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate('experience')
  }, "Mehr erfahren")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(OkeyTile, {
    value: "01",
    size: "lg"
  }), /*#__PURE__*/React.createElement(OkeyTile, {
    value: "60",
    size: "lg",
    color: "purple",
    style: {
      transform: 'rotate(6deg) translateY(8px)'
    }
  })))));
}
Object.assign(window, {
  Home,
  PhotoFrame
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Menu.jsx
try { (() => {
// Paydos lounge — menu screen
const {
  Card,
  Tag,
  Badge,
  SectionHeading
} = window.PaydosDesignSystem_45d525;
const PD_SHISHA = [{
  n: 'Doppelapfel',
  p: '€14,50',
  d: 'Der Klassiker — doppelter Apfel, langsam.',
  cat: 'Klassiker'
}, {
  n: 'Purple Haze',
  p: '€16,00',
  d: 'Blaubeere, Minze, ein Hauch Traube.',
  cat: 'Signature',
  badge: 'Signature'
}, {
  n: 'Silver Mint',
  p: '€15,00',
  d: 'Eiskalte Minze, glasklarer Abgang.',
  cat: 'Minzig'
}, {
  n: 'Love 66',
  p: '€15,50',
  d: 'Grapefruit, Beere, Zitrus.',
  cat: 'Fruchtig'
}, {
  n: 'Geisha',
  p: '€16,00',
  d: 'Grüne Melone, Sahne, Minze.',
  cat: 'Signature',
  badge: 'Beliebt'
}, {
  n: 'Cala Cao',
  p: '€15,00',
  d: 'Schoko, Vanille, warm & rund.',
  cat: 'Klassiker'
}, {
  n: 'Wassermelone',
  p: '€14,50',
  d: 'Frische Melone, sommerlich.',
  cat: 'Fruchtig'
}, {
  n: 'Pure Mint',
  p: '€14,00',
  d: 'Nur Minze. Klar und kühl.',
  cat: 'Minzig'
}];
const PD_DRINKS = [{
  n: 'Türkischer Çay',
  p: '€3,00',
  d: 'Im Tulpenglas, klassisch.'
}, {
  n: 'Espresso Martini',
  p: '€11,00',
  d: 'Wodka, Kaffee, ein Hauch Zucker.'
}, {
  n: 'Ayran',
  p: '€3,50',
  d: 'Hausgemacht, salzig-frisch.'
}, {
  n: 'Purple Spritz',
  p: '€10,50',
  d: 'Veilchen, Prosecco, Limette.'
}];
function Menu() {
  const cats = ['Alle', 'Signature', 'Klassiker', 'Fruchtig', 'Minzig'];
  const [active, setActive] = React.useState('Alle');
  const list = active === 'Alle' ? PD_SHISHA : PD_SHISHA.filter(s => s.cat === active);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '72px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Die Karte",
    title: "Shisha & Spirituosen",
    subtitle: "Handgestopfte K\xF6pfe und eine kurze, durchdachte Bar. Jeder Kopf wird frisch f\xFCr deinen Tisch vorbereitet."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      margin: '36px 0 28px',
      flexWrap: 'wrap'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    active: active === c,
    onClick: () => setActive(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 16
    }
  }, list.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, s.n), s.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, s.badge)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 18,
      color: 'var(--text-primary)'
    }
  }, s.p)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.55
    }
  }, s.d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Von der Bar",
    title: "Drinks"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 16,
      marginTop: 28
    }
  }, PD_DRINKS.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.n,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 16,
      padding: '18px 4px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, d.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, d.d)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, d.p))))));
}
Object.assign(window, {
  Menu
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Menu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Paydos lounge — top navigation (frosted glass, chrome wordmark)
const {
  Button
} = window.PaydosDesignSystem_45d525;
function Wordmark({
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": "Paydos \u2014 Home",
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 23,
      letterSpacing: '0.30em',
      paddingLeft: '0.30em',
      background: 'var(--gradient-silver)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "PAYDOS"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 8.5,
      fontWeight: 500,
      letterSpacing: '0.42em',
      paddingLeft: '0.42em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, "Shisha \xB7 Okey Lounge"));
}
function Nav({
  route,
  onNavigate
}) {
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'menu',
    label: 'Karte'
  }, {
    id: 'experience',
    label: 'Events'
  }, {
    id: 'reserve',
    label: 'Reservieren'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(8,8,10,0.55)',
      backdropFilter: 'blur(var(--blur-lg)) saturate(125%)',
      WebkitBackdropFilter: 'blur(var(--blur-lg)) saturate(125%)',
      borderBottom: '1px solid var(--glass-border)',
      boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      padding: '18px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    onClick: () => onNavigate('home')
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      justifySelf: 'center'
    }
  }, links.map(l => {
    const on = route === l.id;
    return /*#__PURE__*/React.createElement("button", {
      key: l.id,
      onClick: () => onNavigate(l.id),
      style: {
        background: 'none',
        border: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        padding: '10px 18px',
        position: 'relative',
        color: on ? 'var(--text-primary)' : 'var(--text-secondary)',
        transition: 'color var(--dur-base) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-primary)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-secondary)';
      }
    }, l.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        bottom: 2,
        left: '50%',
        transform: 'translateX(-50%)',
        width: on ? 18 : 0,
        height: 1.5,
        borderRadius: 2,
        background: 'var(--gradient-silver)',
        transition: 'width var(--dur-base) var(--ease-out)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: () => onNavigate('reserve')
  }, "Tisch buchen"))));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Reserve.jsx
try { (() => {
// Paydos lounge — reservation screen (interactive, fake submit)
const {
  Input,
  Button,
  Tag,
  Card,
  OkeyTile
} = window.PaydosDesignSystem_45d525;
function Reserve() {
  const [guests, setGuests] = React.useState(4);
  const [time, setTime] = React.useState('21:00');
  const [done, setDone] = React.useState(false);
  const times = ['18:00', '19:30', '21:00', '22:30', '00:00'];
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 620,
        margin: '0 auto',
        padding: '120px 40px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 12,
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement(OkeyTile, {
      value: "01",
      size: "lg"
    }), /*#__PURE__*/React.createElement(OkeyTile, {
      value: "60",
      size: "lg",
      color: "purple"
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 44,
        letterSpacing: '-0.02em',
        background: 'var(--gradient-silver)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }
    }, "Bis gleich."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '16px auto 32px',
        maxWidth: '40ch',
        fontSize: 16,
        lineHeight: 1.7,
        color: 'var(--text-secondary)'
      }
    }, "Dein Tisch f\xFCr ", guests, " ", guests === 1 ? 'Person' : 'Personen', " um ", time, " ist vorgemerkt. Wir schicken dir eine Best\xE4tigung per SMS."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setDone(false)
    }, "Neue Reservierung"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '72px 40px 96px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 16
    }
  }, "Reservierung"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(44px,5vw,64px)',
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)'
    }
  }, "Sichere dir", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      background: 'var(--gradient-silver)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "deinen Abend.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth: '40ch',
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, "Tische f\xFCr bis zu 8 Personen buchst du direkt hier. Gr\xF6\xDFere Runden und die Private Lounge gerne telefonisch."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, [['Öffnungszeiten', 'Mo–So · 16:00 – 02:00'], ['Telefon', '+49 221 4242 600'], ['Adresse', 'Hauptstraße 42, 50676 Köln']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px solid var(--border-hairline)',
      paddingBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)",
    style: {
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Vor- & Nachname",
    defaultValue: "Selin Demir"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    placeholder: "+49 \u2026",
    defaultValue: ""
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Datum",
    type: "date",
    defaultValue: "2026-06-26"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 10
    }
  }, "Personen"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, [2, 3, 4, 5, 6, 8].map(g => /*#__PURE__*/React.createElement(Tag, {
    key: g,
    active: guests === g,
    onClick: () => setGuests(g)
  }, g)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 10
    }
  }, "Uhrzeit"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, times.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    active: time === t,
    onClick: () => setTime(t)
  }, t)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setDone(true)
  }, "Reservierung best\xE4tigen"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      textAlign: 'center',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, "Kostenlos stornierbar bis 2 Stunden vorher."))));
}
Object.assign(window, {
  Reserve
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Reserve.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.OkeyTile = __ds_scope.OkeyTile;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
