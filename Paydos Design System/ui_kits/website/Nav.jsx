// Paydos lounge — top navigation (frosted glass, chrome wordmark)
const { Button } = window.PaydosDesignSystem_45d525;

function Wordmark({ onClick }) {
  return (
    <button onClick={onClick} aria-label="Paydos — Home"
      style={{ background: 'none', border: 0, cursor: 'pointer', padding: 0, display: 'flex', flexDirection: 'column', gap: 3, lineHeight: 1 }}>
      <span style={{
        fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 23,
        letterSpacing: '0.30em', paddingLeft: '0.30em',
        background: 'var(--gradient-silver)', WebkitBackgroundClip: 'text',
        backgroundClip: 'text', WebkitTextFillColor: 'transparent',
      }}>PAYDOS</span>
      <span style={{
        fontFamily: 'var(--font-sans)', fontSize: 8.5, fontWeight: 500,
        letterSpacing: '0.42em', paddingLeft: '0.42em', textTransform: 'uppercase',
        color: 'var(--text-muted)', whiteSpace: 'nowrap',
      }}>Shisha · Okey Lounge</span>
    </button>
  );
}

function Nav({ route, onNavigate }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Karte' },
    { id: 'experience', label: 'Events' },
    { id: 'reserve', label: 'Reservieren' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(8,8,10,0.55)',
      backdropFilter: 'blur(var(--blur-lg)) saturate(125%)',
      WebkitBackdropFilter: 'blur(var(--blur-lg)) saturate(125%)',
      borderBottom: '1px solid var(--glass-border)',
      boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset',
    }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
        padding: '18px 40px',
      }}>
        <div style={{ justifySelf: 'start' }}>
          <Wordmark onClick={() => onNavigate('home')} />
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, justifySelf: 'center' }}>
          {links.map((l) => {
            const on = route === l.id;
            return (
              <button key={l.id} onClick={() => onNavigate(l.id)}
                style={{
                  background: 'none', border: 0, cursor: 'pointer',
                  fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  padding: '10px 18px', position: 'relative',
                  color: on ? 'var(--text-primary)' : 'var(--text-secondary)',
                  transition: 'color var(--dur-base) var(--ease-out)',
                }}
                onMouseEnter={(e) => { if (!on) e.currentTarget.style.color = 'var(--text-primary)'; }}
                onMouseLeave={(e) => { if (!on) e.currentTarget.style.color = 'var(--text-secondary)'; }}>
                {l.label}
                <span style={{
                  position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)',
                  width: on ? 18 : 0, height: 1.5, borderRadius: 2,
                  background: 'var(--gradient-silver)',
                  transition: 'width var(--dur-base) var(--ease-out)',
                }} />
              </button>
            );
          })}
        </nav>

        <div style={{ justifySelf: 'end' }}>
          <Button size="sm" variant="primary" onClick={() => onNavigate('reserve')}>Tisch buchen</Button>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Nav });
