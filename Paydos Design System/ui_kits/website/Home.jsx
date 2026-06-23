// Paydos lounge — home / hero screen
const { Button, OkeyTile, Card } = window.PaydosDesignSystem_45d525;

function PhotoFrame({ label, children, style = {}, tint = 'warm', src = null }) {
  const tints = {
    warm: 'radial-gradient(120% 90% at 70% 20%, rgba(216,180,90,0.16), rgba(8,8,10,0.0) 60%)',
    smoke: 'radial-gradient(110% 90% at 30% 10%, rgba(161,114,226,0.16), rgba(8,8,10,0.0) 58%)',
    silver: 'linear-gradient(160deg, rgba(183,188,196,0.12), rgba(8,8,10,0.0) 60%)',
  };
  return (
    <div className="pd-grain" style={{
      position: 'relative', overflow: 'hidden',
      borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)',
      background: src ? 'var(--ink-850)' : `${tints[tint]}, var(--ink-850)`,
      boxShadow: 'var(--glass-shadow), var(--glass-highlight)',
      ...style,
    }}>
      {src ? (
        <React.Fragment>
          <img src={src} alt={label || ''} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,6,8,0.10) 0%, rgba(6,6,8,0.05) 45%, rgba(6,6,8,0.72) 100%)' }} />
        </React.Fragment>
      ) : (
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '16px 16px' }} />
      )}
      {label && (
        <span style={{ position: 'absolute', left: 16, bottom: 14, fontFamily: 'var(--font-sans)', fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: src ? 'var(--text-secondary)' : 'var(--text-muted)', zIndex: 2 }}>{label}</span>
      )}
      {children}
    </div>
  );
}

function Home({ onNavigate }) {
  return (
    <div>
      {/* HERO */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(100% 70% at 50% -20%, rgba(183,188,196,0.06) 0%, rgba(6,6,8,0) 55%), var(--ink-950)',
        borderBottom: '1px solid var(--border-hairline)',
      }}>
        {/* single faint purple smoke wisp, far + low */}
        <div style={{
          position: 'absolute', top: '-6%', right: '-4%', width: 460, height: 560,
          background: 'radial-gradient(46% 40% at 50% 35%, rgba(139,83,217,0.14), transparent 72%)',
          filter: 'blur(50px)', pointerEvents: 'none',
        }} />
        <div style={{
          maxWidth: 1320, margin: '0 auto', padding: '0 40px',
          display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 64, alignItems: 'center',
          minHeight: 'calc(100vh - 84px)',
        }}>
          <div style={{ padding: '64px 0' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 28,
              fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500,
              letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--text-secondary)', whiteSpace: 'nowrap',
            }}>
              <span style={{ width: 34, height: 1, background: 'var(--silver-400)' }} />
              Shisha &amp; Okey Lounge
            </div>
            <h1 style={{
              margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: 'clamp(52px, 6.4vw, 92px)', lineHeight: 1.0, letterSpacing: '-0.025em',
            }}>
              <span style={{
                background: 'var(--gradient-silver)', WebkitBackgroundClip: 'text',
                backgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Wo der Abend</span><br />
              <span style={{ color: 'var(--text-primary)', fontStyle: 'italic', fontWeight: 500 }}>ausatmet.</span>
            </h1>
            <p style={{
              margin: '26px 0 0', maxWidth: '44ch',
              fontFamily: 'var(--font-sans)', fontSize: 16.5, lineHeight: 1.75, color: 'var(--text-secondary)',
            }}>
              Gedämpftes Licht, handgestopfte Köpfe und ein langer Tisch voller Okey.
              Paydos ist die Pause am Ende des Tages — ohne Eile.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 36, alignItems: 'center' }}>
              <Button variant="primary" size="lg" onClick={() => onNavigate('reserve')}>Tisch reservieren</Button>
              <Button variant="glass" size="lg" onClick={() => onNavigate('menu')}>Zur Karte</Button>
            </div>
            <div style={{ display: 'flex', gap: 44, marginTop: 56, flexWrap: 'wrap' }}>
              {[['Geöffnet', 'Mo–So · 16 – 02 Uhr'], ['Standort', 'Hauptstraße 42, Köln'], ['Okey-Abende', 'Mi & Fr']].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 7 }}>{k}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--text-primary)' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* hero photo */}
          <div style={{ position: 'relative', height: 'min(76vh, 620px)', padding: '40px 0' }}>
            <PhotoFrame label="Die Bar · Paydos" src="../../assets/lounge-bar.jpg" style={{ height: '100%' }}>
              {/* floating glass chip */}
              <div className="pd-glass" style={{
                position: 'absolute', top: 18, left: 18, display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '8px 14px', borderRadius: 'var(--radius-pill)', zIndex: 2,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 8px rgba(95,181,138,0.7)' }} />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>Heute geöffnet</span>
              </div>
              {/* okey tiles, lower right */}
              <div style={{ position: 'absolute', right: 22, bottom: 38, display: 'flex', gap: 12, zIndex: 2 }}>
                <OkeyTile value="01" size="md" />
                <OkeyTile value="60" size="md" color="purple" style={{ transform: 'rotate(7deg) translateY(6px)' }} />
              </div>
            </PhotoFrame>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ padding: '96px 40px', maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36, gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 14 }}>Heute Abend</div>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 44, letterSpacing: '-0.02em', background: 'var(--gradient-silver)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Empfohlen aus der Karte</h2>
          </div>
          <Button variant="ghost" onClick={() => onNavigate('menu')}>Alle ansehen →</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            { n: 'Purple Haze', p: '€16,00', d: 'Blaubeere, Minze, ein Hauch Traube.', cat: 'Signature', feature: true },
            { n: 'Doppelapfel', p: '€14,50', d: 'Der Klassiker. Langsam, rund, warm.', cat: 'Klassiker' },
            { n: 'Silver Mint', p: '€15,00', d: 'Eiskalte Minze, klarer Abgang.', cat: 'Minzig' },
          ].map((b) => (
            <Card key={b.n} interactive feature={b.feature} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10.5, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{b.cat}</span>
                {b.feature && (
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-900)', background: 'var(--gradient-silver-soft)', padding: '4px 10px', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--inset-silver)' }}>Signature</span>
                )}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600, color: 'var(--text-primary)', margin: '18px 0 0', letterSpacing: '-0.01em' }}>{b.n}</div>
              <p style={{ margin: '8px 0 20px', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55 }}>{b.d}</p>
              <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Premium Bowl</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 19, color: 'var(--text-primary)' }}>{b.p}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* OKEY BANNER */}
      <section style={{ padding: '0 40px 96px' }}>
        <div className="pd-grain" style={{
          position: 'relative', overflow: 'hidden', maxWidth: 1320, margin: '0 auto',
          borderRadius: 'var(--radius-xl)', border: '1px solid var(--glass-border)',
          background: 'linear-gradient(120deg, rgba(26,26,31,0.7), rgba(14,14,17,0.4)), radial-gradient(90% 140% at 100% 0%, rgba(139,83,217,0.12), rgba(14,14,17,0) 58%), var(--ink-850)',
          WebkitBackdropFilter: 'blur(var(--blur-md))', backdropFilter: 'blur(var(--blur-md))',
          boxShadow: 'var(--glass-highlight)',
          padding: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap',
        }}>
          <div style={{ maxWidth: '46ch', position: 'relative' }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 16 }}>Okey-Abende</div>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 40, lineHeight: 1.1, color: 'var(--text-primary)' }}>Leg eine Partie ein.</h2>
            <p style={{ margin: '14px 0 28px', fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Mittwochs und freitags liegen die Steine bereit. Sammel deine Crew,
              wir kümmern uns um Kohle und Karte.
            </p>
            <Button variant="primary" onClick={() => onNavigate('experience')}>Mehr erfahren</Button>
          </div>
          <div style={{ display: 'flex', gap: 14, position: 'relative' }}>
            <OkeyTile value="01" size="lg" />
            <OkeyTile value="60" size="lg" color="purple" style={{ transform: 'rotate(6deg) translateY(8px)' }} />
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Home, PhotoFrame });
