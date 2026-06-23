// Paydos lounge — menu screen
const { Card, Tag, Badge, SectionHeading } = window.PaydosDesignSystem_45d525;

const PD_SHISHA = [
  { n: 'Doppelapfel', p: '€14,50', d: 'Der Klassiker — doppelter Apfel, langsam.', cat: 'Klassiker' },
  { n: 'Purple Haze', p: '€16,00', d: 'Blaubeere, Minze, ein Hauch Traube.', cat: 'Signature', badge: 'Signature' },
  { n: 'Silver Mint', p: '€15,00', d: 'Eiskalte Minze, glasklarer Abgang.', cat: 'Minzig' },
  { n: 'Love 66', p: '€15,50', d: 'Grapefruit, Beere, Zitrus.', cat: 'Fruchtig' },
  { n: 'Geisha', p: '€16,00', d: 'Grüne Melone, Sahne, Minze.', cat: 'Signature', badge: 'Beliebt' },
  { n: 'Cala Cao', p: '€15,00', d: 'Schoko, Vanille, warm & rund.', cat: 'Klassiker' },
  { n: 'Wassermelone', p: '€14,50', d: 'Frische Melone, sommerlich.', cat: 'Fruchtig' },
  { n: 'Pure Mint', p: '€14,00', d: 'Nur Minze. Klar und kühl.', cat: 'Minzig' },
];

const PD_DRINKS = [
  { n: 'Türkischer Çay', p: '€3,00', d: 'Im Tulpenglas, klassisch.' },
  { n: 'Espresso Martini', p: '€11,00', d: 'Wodka, Kaffee, ein Hauch Zucker.' },
  { n: 'Ayran', p: '€3,50', d: 'Hausgemacht, salzig-frisch.' },
  { n: 'Purple Spritz', p: '€10,50', d: 'Veilchen, Prosecco, Limette.' },
];

function Menu() {
  const cats = ['Alle', 'Signature', 'Klassiker', 'Fruchtig', 'Minzig'];
  const [active, setActive] = React.useState('Alle');
  const list = active === 'Alle' ? PD_SHISHA : PD_SHISHA.filter((s) => s.cat === active);

  return (
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '72px 40px 96px' }}>
      <SectionHeading eyebrow="Die Karte" title="Shisha & Spirituosen"
        subtitle="Handgestopfte Köpfe und eine kurze, durchdachte Bar. Jeder Kopf wird frisch für deinen Tisch vorbereitet." />

      {/* filters */}
      <div style={{ display: 'flex', gap: 10, margin: '36px 0 28px', flexWrap: 'wrap' }}>
        {cats.map((c) => (
          <Tag key={c} active={active === c} onClick={() => setActive(c)}>{c}</Tag>
        ))}
      </div>

      {/* shisha grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {list.map((s) => (
          <Card key={s.n} interactive style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--text-primary)' }}>{s.n}</span>
                {s.badge && <Badge tone="neutral">{s.badge}</Badge>}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 18, color: 'var(--text-primary)' }}>{s.p}</span>
            </div>
            <p style={{ margin: 0, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55 }}>{s.d}</p>
          </Card>
        ))}
      </div>

      {/* drinks */}
      <div style={{ marginTop: 72 }}>
        <SectionHeading eyebrow="Von der Bar" title="Drinks" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginTop: 28 }}>
          {PD_DRINKS.map((d) => (
            <div key={d.n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, padding: '18px 4px', borderBottom: '1px solid var(--border-hairline)' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 500, color: 'var(--text-primary)' }}>{d.n}</div>
                <div style={{ fontSize: 13.5, color: 'var(--text-muted)', marginTop: 3 }}>{d.d}</div>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{d.p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Menu });
