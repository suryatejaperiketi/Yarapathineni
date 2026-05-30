import React, { useEffect, useRef } from "react";
import img from "../../assests/allpics.jpg";
import "../../Styles/About.css";

const POLITICIAN = {
  name: "Yarapathineni Srinivasa Rao",
  initials: "YSR",
  party: "TDP",
  role: "MLA",
  constituency: "Gurazala",
  state: "Andhra Pradesh",
  photo: { img }, 
  heroStats: [
    { num: "4×", label: "Terms Elected" },
    { num: "1,28,201", label: "2024 Votes" },
    { num: "30+", label: "Years of Service" },
  ],
  meta: [
    { icon: "ti-map-pin", text: "Gurazala Constituency, Andhra Pradesh" },
    { icon: "ti-users", text: "Telugu Desam Party (TDP)" },
    { icon: "ti-calendar", text: "First elected: 1994" },
  ],
};

const TERMS = [
  { cls: "t1", ordinal: "1st", years: "1994 – 1999", votes: "62,943 Votes" },
  { cls: "t2", ordinal: "2nd", years: "2009 – 2014", votes: "72,250 Votes" },
  { cls: "t3", ordinal: "3rd", years: "2014 – 2019", votes: "94,827 Votes" },
  {
    cls: "t4",
    ordinal: "4th",
    years: "2024 – Present",
    votes: "1,28,201 Votes",
  },
];

const ELECTIONS = [
  {
    year: "2024",
    title: "Won · TDP",
    detail: "1,28,201 votes · Highest ever margin",
    bars: [
      { label: "TDP", pct: 67, color: "#FFD700"},
      { label: "YSRCP", pct: 33, color: "linear-gradient(135deg, #0266B4 0%, #FFFFFF 50%, #008E46 100%)" },
    ],
  },
  {
    year: "2014",
    title: "Won · TDP",
    detail: "94,827 votes · +14% margin",
    bars: [
      { label: "TDP", pct: 62, color: "#FFD700" },
      { label: "YSRCP", pct: 38, color: "linear-gradient(135deg, #0266B4 0%, #FFFFFF 50%, #008E46 100%)" },
    ],
  },
  {
    year: "2009",
    title: "Won · TDP",
    detail: "72,250 votes · +4.4% margin",
    bars: [
      { label: "TDP", pct: 54, color: "#FFD700" },
      { label: "INC", pct: 46, color: "linear-gradient(135deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)" },
    ],
  },
  {
    year: "1994",
    title: "First elected · TDP",
    detail: "62,943 votes · Inaugural win",
    bars: [
      { label: "TDP", pct: 40, color: "#FFD700" },
      { label: "INC", pct: 30, color: "linear-gradient(135deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)" },
    ],
  },
];

const HIGHLIGHTS = [
  {
    variant: "gold",
    icon: "ti-sparkles",
    title: "Sri Srinivasa Kalyana Mahotsavam",
    desc: "Under the leadership of Yarapathineni Srinivasa Rao Garu, the sacred Sri Srinivasa Kalyana Mahotsavam was organized in Piduguralla in association with TTD. Thousands of devotees gathered to seek the blessings of Lord Venkateswara Swamy for peace, prosperity, and the well-being of the region.",
    tag: "Organized with TTD · Piduguralla",
    tagIcon: "ti-building-temple",
  },
  {
    variant: "green",
    icon: "ti-building-hospital",
    title: "Raghupathi Venkata Ratnam Naidu Govt. Medical College",
    desc: "Yarapathineni Srinivasa Rao Garu personally took responsibility for establishing the Raghupathi Venkata Ratnam Naidu Government Medical College — bringing quality healthcare and medical education infrastructure to Gurazala constituency and the broader Palnadu region.",
    tag: "MLA's personal initiative · AP Government",
    tagIcon: "ti-stethoscope",
  },
];

const FOCUS_AREAS = [
  {
    icon: "ti-shield-check",
    title: "Honesty & Integrity",
    desc: "Transparent governance and corruption-free administration",
  },
  {
    icon: "ti-tractor",
    title: "Agriculture & Farmers",
    desc: "Crop welfare, irrigation support and farmer schemes",
  },
  {
    icon: "ti-building-community",
    title: "Grassroots Connect",
    desc: "Village-level outreach to every panchayat",
  },
  {
    icon: "ti-trending-up",
    title: "Constituency Growth",
    desc: "Roads, power and economic development",
  },
];

const ACHIEVEMENTS = [
  {
    icon: "ti-road",
    text: "Rural road development & connectivity",
    sub: "200+ villages covered · Panchayat roads",
  },
  {
    icon: "ti-droplet",
    text: "Drinking water & irrigation schemes",
    sub: "Agricultural welfare · 50+ mandals",
  },
  {
    icon: "ti-bolt",
    text: "Rural electrification",
    sub: "Power supply to remote villages",
  },
];

const ROLES = [
  {
    icon: "ti-star",
    name: "Telugu Desam Party (TDP)",
    sub: "Active member & MLA since 1994",
    pill: "Primary party",
  },
  {
    icon: "ti-building",
    name: "Andhra Pradesh Legislative Assembly",
    sub: "Gurazala constituency · 4 terms",
    pill: "MLA · 4 Terms",
  },
  {
    icon: "ti-om",
    name: "Sri Srinivasa Kalyana Mahotsavam",
    sub: "Organized in association with TTD · Piduguralla",
    pill: "Organiser",
  },
  {
    icon: "ti-building-hospital",
    name: "Raghupathi Venkata Ratnam Naidu Govt. Medical College",
    sub: "Personal initiative — MLA took full responsibility",
    pill: "Championed",
  },
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function VoteBar({ label, pct, color }) {
  const barRef = useRef(null);
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    // Animate on mount
    el.style.width = "0%";
    const raf = requestAnimationFrame(() => {
      el.style.transition = "width 1s cubic-bezier(0.22,1,0.36,1)";
      el.style.width = `${pct}%`;
    });
    return () => cancelAnimationFrame(raf);
  }, [pct]);

  return (
    <div className="vbar-row">
      <span className="vbar-lbl">{label}</span>
      <div className="vbar-out">
        <div className="vbar-in" ref={barRef} style={{ background: color }} />
      </div>
      <span className="vbar-pct">{pct}%</span>
    </div>
  );
}

function TimelineItem({ item, isLast }) {
  return (
    <div className="tl">
      <div className="tl-line">
        <div className="tl-dot" />
        {!isLast && <div className="tl-bar" />}
      </div>
      <div className="tl-content" style={isLast ? { paddingBottom: 0 } : {}}>
        <div className="tl-year">{item.year}</div>
        <div className="tl-title">{item.title}</div>
        <div className="tl-detail">{item.detail}</div>
        {item.bars.length > 0 && (
          <div className="vbar-wrap">
            {item.bars.map((b) => (
              <VoteBar key={b.label} {...b} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TermCard({ term }) {
  return (
    <div className={`term-card ${term.cls}`}>
      <div className="term-num">{term.ordinal}</div>
      <div className="term-years">{term.years}</div>
      <div className="term-votes">{term.votes}</div>
      <span className="won-badge">✓ Won</span>
    </div>
  );
}

function HighlightCard({ hl }) {
  return (
    <div className={`hl-card ${hl.variant}`}>
      <div className="hl-icon">
        <i className={`ti ${hl.icon}`} />
      </div>
      <div className="hl-title">{hl.title}</div>
      <div className="hl-desc">{hl.desc}</div>
      <span className="hl-tag">
        <i
          className={`ti ${hl.tagIcon}`}
          style={{ fontSize: 10, marginRight: 4 }}
        />
        {hl.tag}
      </span>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function PoliticianProfile() {
  return (
    <div className="pp-page">
      {/* TOPBAR */}
      <nav className="pp-topbar"></nav>

      {/* HERO */}
      <section className="pp-hero" id="about">
        <div className="pp-hero-img">
          {POLITICIAN.photo ? (
            <img src={img} alt={POLITICIAN.name} />
          ) : (
            <div className="pp-av-wrap">
              <div className="pp-av-circle">{POLITICIAN.initials}</div>
              <p className="pp-av-label">Replace with actual photo</p>
            </div>
          )}
        </div>
        <div className="pp-hero-right">
          <span className="pp-badge">
            <i className="ti ti-award" />
            {POLITICIAN.party} · {POLITICIAN.role} · {POLITICIAN.constituency}
          </span>
          <div>
            <h1 className="pp-hero-name">{POLITICIAN.name}</h1>
            <p className="pp-hero-sub">
              Member of Legislative Assembly — {POLITICIAN.constituency}{" "}
              Constituency
              <br />
              {POLITICIAN.state} · Telugu Desam Party
            </p>
          </div>
          <div className="pp-accent-line" />
          <div className="pp-hero-stats">
            {POLITICIAN.heroStats.map((s) => (
              <div key={s.label} className="pp-hstat">
                <div className="pp-hstat-num">{s.num}</div>
                <div className="pp-hstat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="pp-meta">
            {POLITICIAN.meta.map((m) => (
              <div key={m.text} className="pp-meta-row">
                <i className={`ti ${m.icon}`} />
                {m.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERM CARDS */}
      <section className="pp-card" id="achievements">
        <div className="pp-terms-header">4× Elected MLA for TDP — Gurazala</div>
        <div className="pp-terms-grid">
          {TERMS.map((t) => (
            <TermCard key={t.ordinal} term={t} />
          ))}
        </div>
      </section>

      {/* LANDMARK HIGHLIGHTS */}
      <div className="pp-two-col">
        {HIGHLIGHTS.map((hl) => (
          <HighlightCard key={hl.title} hl={hl} />
        ))}
      </div>

      {/* ELECTION HISTORY + FOCUS AREAS */}
      <div className="pp-two-col">
        <div className="pp-card">
          <div className="pp-section-label">Election History</div>
          {ELECTIONS.map((e, i) => (
            <TimelineItem
              key={e.year}
              item={e}
              isLast={i === ELECTIONS.length - 1}
            />
          ))}
        </div>

        <div className="pp-col-stack">
          <div className="pp-card">
            <div className="pp-section-label">Key Focus Areas</div>
            <div className="pp-focus-grid">
              {FOCUS_AREAS.map((f) => (
                <div key={f.title} className="pp-focus-item">
                  <div className="pp-fi-icon">
                    <i className={`ti ${f.icon}`} />
                  </div>
                  <div className="pp-fi-title">{f.title}</div>
                  <div className="pp-fi-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pp-card">
            <div className="pp-section-label">More Achievements</div>
            {ACHIEVEMENTS.map((a, i) => (
              <div
                key={a.text}
                className={`pp-ach-item${i === ACHIEVEMENTS.length - 1 ? " last" : ""}`}
              >
                <div className="pp-ach-icon-wrap">
                  <i className={`ti ${a.icon}`} />
                </div>
                <div>
                  <div className="pp-ach-text">{a.text}</div>
                  <div className="pp-ach-sub">{a.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PARTY ROLES */}
      <div className="pp-card" id="about-roles">
        <div className="pp-section-label">Party Affiliations &amp; Roles</div>
        {ROLES.map((r, i) => (
          <div
            key={r.name}
            className={`pp-role-row${i === ROLES.length - 1 ? " last" : ""}`}
          >
            <i className={`ti ${r.icon}`} />
            <div className="pp-role-info">
              <div className="pp-role-name">{r.name}</div>
              <div className="pp-role-sub">{r.sub}</div>
            </div>
            <span className="pp-role-pill">{r.pill}</span>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="pp-footer" id="contact">
        © Yarapathineni Srinivasa Rao · Gurazala Constituency · Telugu Desam
        Party
      </footer>
    </div>
  );
}
