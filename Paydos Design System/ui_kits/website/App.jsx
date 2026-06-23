// Paydos lounge — app shell: routing + footer

function Footer({ onNavigate }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border-hairline)', background: 'var(--ink-950)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '56px 40px 40px', display: 'flex', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 320 }}>
          <img src="../../assets/paydos-logo-trim.png" alt="Paydos" style={{ height: 44, marginBottom: 18 }} />
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)' }}>
            Shisha &amp; Okey Lounge · Hauptstraße 42, Köln. Wo der Abend ausatmet.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
          {[
            ['Besuch', [['Karte', 'menu'], ['Okey & Events', 'experience'], ['Reservieren', 'reserve']]],
            ['Kontakt', [['+49 221 4242 600', null], ['contact@paydos.lounge', null], ['Instagram', null]]],
          ].map(([title, items]) => (
            <div key={title}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 16 }}>{title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {items.map(([label, route]) => (
                  <button key={label} onClick={() => route && onNavigate(route)}
                    style={{ background: 'none', border: 0, padding: 0, textAlign: 'left', cursor: route ? 'pointer' : 'default', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-muted)' }}>{label}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '20px 40px 40px', borderTop: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>© 2026 Paydos Lounge</span>
        <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>Impressum · Datenschutz</span>
      </div>
    </footer>
  );
}

function App() {
  const [route, setRoute] = React.useState('home');
  const go = (r) => { setRoute(r); window.scrollTo({ top: 0 }); };
  // Resolve screen components at render time (not parse time) to avoid
  // the async <script> load-order race.
  const Nav = window.Nav, Home = window.Home, Menu = window.Menu,
        Experience = window.Experience, Reserve = window.Reserve;
  return (
    <div>
      <Nav route={route} onNavigate={go} />
      {route === 'home' && <Home onNavigate={go} />}
      {route === 'menu' && <Menu />}
      {route === 'experience' && <Experience onNavigate={go} />}
      {route === 'reserve' && <Reserve />}
      <Footer onNavigate={go} />
    </div>
  );
}

// Mount EXACTLY once. A synchronous boot flag prevents a double module
// evaluation from creating a second root; the poll waits out the async
// <script type="text/babel"> load order before the first render.
if (!window.__paydosBooted) {
  window.__paydosBooted = true;
  (function mountApp() {
    const deps = ['Nav', 'Home', 'Menu', 'Experience', 'Reserve', 'PhotoFrame'];
    const ready = deps.every((k) => typeof window[k] === 'function') && window.PaydosDesignSystem_45d525;
    if (!ready) { setTimeout(mountApp, 30); return; }
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  })();
}
