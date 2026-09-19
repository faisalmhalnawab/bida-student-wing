import Image from "next/image";
import Link from "next/link";
import { impactStats, programmeCards } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow light">BIDA Student Wing · 2026–27</span>
            <h1>Building the next generation of medical leadership.</h1>
            <p>
              National teaching, research, professional development and
              opportunities connecting medical students across the United
              Kingdom.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/education">
                Explore our programmes
              </Link>
              <Link className="button ghost" href="/events">
                View upcoming events
              </Link>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-seal-lockup">
              <Image
                className="hero-seal"
                src="/bida-student-wing-logo.webp"
                alt="BIDA Student Wing"
                width={154}
                height={154}
                priority
              />
              <div>
                <span>British International Doctors&apos; Association</span>
                <strong>Student Wing</strong>
                <small>National · Student-led · UK-wide</small>
              </div>
            </div>

            <div className="hero-panel">
              <span className="panel-kicker">The year ahead</span>
              <h2>From national reach to lasting infrastructure.</h2>
              <div className="hero-panel-list">
                <div><span>01</span><p>National Teaching</p></div>
                <div><span>02</span><p>National Conference</p></div>
                <div><span>03</span><p>Digital Presence</p></div>
                <div><span>04</span><p>Research</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-strip" aria-label="BIDA Student Wing impact">
        <div className="shell stat-grid">
          {impactStats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">What we do</span>
            <h2>One Student Wing. Four connected priorities.</h2>
          </div>
          <p>
            Each programme is designed to be nationally accessible, clearly
            governed and useful beyond a single committee year.
          </p>
        </div>

        <div className="programme-grid">
          {programmeCards.map((card, index) => (
            <Link className="programme-card" href={card.href} key={card.title}>
              <div className="card-topline">
                <span>{card.eyebrow}</span>
                <span>0{index + 1}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <span className="text-link">Explore programme →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section schedule-section">
        <div className="shell split-grid">
          <div>
            <span className="eyebrow">National Teaching 2026–27</span>
            <h2>A continuous pathway from foundations to examination readiness.</h2>
            <p className="lead">
              Teaching is being structured across three connected streams so
              students can move from foundational science into clinical
              decision-making and structured OSCE performance.
            </p>
            <Link className="button dark" href="/education">
              View teaching programme
            </Link>
          </div>

          <div className="schedule-list">
            <article>
              <span>Clinical UKMLA</span>
              <strong>Twice weekly</strong>
              <p>October 2026 – May 2027</p>
            </article>
            <article>
              <span>OSCE teaching</span>
              <strong>Weekly</strong>
              <p>October 2026 – May 2027</p>
            </article>
            <article>
              <span>Pre-clinical</span>
              <strong>Weekly</strong>
              <p>February – May 2027</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Coming next</span>
            <h2>Your live Student Wing hub.</h2>
          </div>
          <p>
            The public calendar, conference registration, research applications
            and news publishing will be connected as the digital platform grows.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card large">
            <span className="feature-tag">Events</span>
            <h3>One live calendar.</h3>
            <p>
              Teaching, workshops and conference activity in a single reliable
              place, with registration links and clearly labelled updates.
            </p>
            <Link href="/events">Open events hub →</Link>
          </article>

          <article className="feature-card">
            <span className="feature-tag">Conference</span>
            <h3>Register through BIDA.</h3>
            <p>
              Delegate registration and conference information will live
              together rather than across fragmented third-party pages.
            </p>
            <Link href="/conference">Conference hub →</Link>
          </article>

          <article className="feature-card">
            <span className="feature-tag">Research</span>
            <h3>Find a project.</h3>
            <p>
              A transparent route for project opportunities, eligibility,
              applications and research-skills support.
            </p>
            <Link href="/research">Research pathway →</Link>
          </article>
        </div>
      </section>

      <section className="section shell">
        <div className="cta-panel">
          <div>
            <span className="eyebrow light">Get involved</span>
            <h2>Help build something national.</h2>
            <p>
              Join the representative network, contribute to teaching and
              research, or take part in Student Wing opportunities.
            </p>
          </div>
          <Link className="button primary" href="/opportunities">
            Explore opportunities
          </Link>
        </div>
      </section>
    </>
  );
}
