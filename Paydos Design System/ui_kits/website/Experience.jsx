// Paydos lounge — Okey & events screen
const { Card, OkeyTile, Badge, SectionHeading, Button } = window.PaydosDesignSystem_45d525;

function Experience({ onNavigate }) {
  const PhotoFrame = window.PhotoFrame;
  const events = [
    { day: 'MI', date: 'Okey-Turnier', d: 'Offene Runde ab 20:00. Anmeldung am Tisch.', t: '20:00', badge: 'Wöchentlich' },
    { day: 'FR', date: 'Live DJ & Shisha', d: 'Deep & oriental house, bis 02:00.', t: '21:00', badge: 'Beliebt' },
    { day: 'SA', date: 'Private Lounge', d: 'Reservierter Bereich für Gruppen ab 8.', t: 'Auf Anfrage' },
  ];
  return (
    <div>
      {/* header band */}
      <section className="pd-grain" style={{
        position: 'relative', overflow: 'hidden', padding: '88px 40px 72px',
        background: 'radial-gradient(100% 80% at 50% -20%, rgba(183,188,196,0.06), rgba(6,6,8,0) 55%), radial-gradient(60% 90% at 92% 0%, rgba(139,83,217,0.10), rgba(10,10,12,0) 60%), var(--ink-950)',
        borderBottom: '1px solid var(--border-hairline)',
      }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '40ch' }}>
            <SectionHeading eyebrow="Das Erlebnis" title="Okey & Events"
              subtitle="Mehr als rauchen — Paydos ist ein Wohnzimmer. Steine klackern, Gläser klirren, der Abend zieht sich angenehm." />
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <OkeyTile value="01" size="lg" />
            <OkeyTile value="22" size="lg" color="silver" style={{ transform: 'translateY(-10px) rotate(-5deg)' }} />
            <OkeyTile value="60" size="lg" color="purple" style={{ transform: 'translateY(6px) rotate(7deg)' }} />
          </div>
        </div>
      </section>

      {/* events */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: '64px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
          {events.map((e) => (
            <Card key={e.date} interactive style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 30, fontWeight: 600, background: 'var(--gradient-silver)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{e.day}</span>
                {e.badge && <Badge tone="neutral">{e.badge}</Badge>}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--text-primary)' }}>{e.date}</div>
                <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55 }}>{e.d}</p>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: 8, fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Beginn · {e.t}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* gallery placeholders */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: '24px 40px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gridTemplateRows: '196px 196px', gap: 14 }}>
          {[
            { src: '../../assets/lounge-okey.jpg', s: { gridRow: 'span 2' }, c: 'Der Spielraum · Okey-Tische' },
            { src: '../../assets/lounge-bar.jpg', c: 'Die Bar' },
            { src: '../../assets/lounge-purple.jpg', c: 'Die Lounge' },
          ].map((p, i) => (
            <PhotoFrame key={i} label={p.c} src={p.src} style={p.s || {}} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
          <Button variant="primary" size="lg" onClick={() => onNavigate('reserve')}>Tisch sichern</Button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Experience });
