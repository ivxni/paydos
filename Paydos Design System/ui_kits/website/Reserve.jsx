// Paydos lounge — reservation screen (interactive, fake submit)
const { Input, Button, Tag, Card, OkeyTile } = window.PaydosDesignSystem_45d525;

function Reserve() {
  const [guests, setGuests] = React.useState(4);
  const [time, setTime] = React.useState('21:00');
  const [done, setDone] = React.useState(false);
  const times = ['18:00', '19:30', '21:00', '22:30', '00:00'];

  if (done) {
    return (
      <div style={{ maxWidth: 620, margin: '0 auto', padding: '120px 40px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 28 }}>
          <OkeyTile value="01" size="lg" />
          <OkeyTile value="60" size="lg" color="purple" />
        </div>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 44, letterSpacing: '-0.02em', background: 'var(--gradient-silver)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Bis gleich.</h2>
        <p style={{ margin: '16px auto 32px', maxWidth: '40ch', fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
          Dein Tisch für {guests} {guests === 1 ? 'Person' : 'Personen'} um {time} ist vorgemerkt.
          Wir schicken dir eine Bestätigung per SMS.
        </p>
        <Button variant="outline" onClick={() => setDone(false)}>Neue Reservierung</Button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '72px 40px 96px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'start' }}>
      {/* left: pitch */}
      <div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 16 }}>Reservierung</div>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(44px,5vw,64px)', lineHeight: 1.04, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
          Sichere dir<br /><span style={{ fontStyle: 'italic', background: 'var(--gradient-silver)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>deinen Abend.</span>
        </h1>
        <p style={{ margin: '24px 0 0', maxWidth: '40ch', fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
          Tische für bis zu 8 Personen buchst du direkt hier. Größere Runden und
          die Private Lounge gerne telefonisch.
        </p>
        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 18 }}>
          {[['Öffnungszeiten', 'Mo–So · 16:00 – 02:00'], ['Telefon', '+49 221 4242 600'], ['Adresse', 'Hauptstraße 42, 50676 Köln']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-hairline)', paddingBottom: 14 }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{k}</span>
              <span style={{ fontSize: 15, color: 'var(--text-primary)' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* right: form card */}
      <Card padding="var(--space-8)" style={{ boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Input label="Name" placeholder="Vor- & Nachname" defaultValue="Selin Demir" />
            <Input label="Telefon" placeholder="+49 …" defaultValue="" />
          </div>
          <Input label="Datum" type="date" defaultValue="2026-06-26" />

          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 10 }}>Personen</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[2, 3, 4, 5, 6, 8].map((g) => (
                <Tag key={g} active={guests === g} onClick={() => setGuests(g)}>{g}</Tag>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 10 }}>Uhrzeit</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {times.map((t) => (
                <Tag key={t} active={time === t} onClick={() => setTime(t)}>{t}</Tag>
              ))}
            </div>
          </div>

          <Button variant="primary" size="lg" fullWidth onClick={() => setDone(true)}>Reservierung bestätigen</Button>
          <p style={{ margin: 0, textAlign: 'center', fontSize: 12.5, color: 'var(--text-muted)' }}>Kostenlos stornierbar bis 2 Stunden vorher.</p>
        </div>
      </Card>
    </div>
  );
}

Object.assign(window, { Reserve });
