import Image from "next/image";
import Link from "next/link";
import { impactStats, programmeCards } from "@/data/site";

const programmeMeta = [
  { className: "programme-card-education", marker: "ED" },
  { className: "programme-card-conference", marker: "NC" },
  { className: "programme-card-research", marker: "RS" },
  { className: "programme-card-opportunities", marker: "OP" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow light">BIDA Student Wing · 2026–27</span>
            <h1>
              Building the next generation
              <span>of medical leadership.</span>
            </h1>
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
            <div className="hero-trust-row" aria-label="Programme focus">
              <span>UK-wide</span>
              <i />
              <span>Student-led</span>
              <i />
              <span>Professionally supported</span>
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
              <div className="panel-heading">
                <span className="panel-kicker">The year ahead</span>
                <span className="panel-status">2026–27</span>
              </div>
              <h2>From national reach to lasting infrastructure.</h2>
              <div className="hero-panel-list">
                <Link href="/education"><span>01</span><p>National Teaching</p><b>↗</b></Link>
                <Link href="/conference"><span>02</span><p>National Conference</p><b>↗</b></Link>
                <Link href="/about"><span>03</span><p>Digital Presence</p><b>↗</b></Link>
                <Link href="/research"><span>04</span><p>Research</p><b>↗</b></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-strip" aria-label="BIDA Student Wing impact">
        <div className="shell stat-grid">
          {impactStats.map((stat, index) => (
            <div className="stat" key={stat.label}>
              <span className="stat-index">0{index + 1}</span>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell programmes-section">
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
            <Link
              className={`programme-card ${programmeMeta[index].className}`}
              href={card.href}
              key={card.title}
            >
              <div className="card-topline">
                <span>{card.eyebrow}</span>
                <span>0{index + 1}</span>
              </div>
              <div className="programme-symbol" aria-hidden="true">
                {programmeMeta[index].marker}
              </div>
              <div className="programme-card-copy">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <span className="text-link">Explore programme <b>→</b></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="programme-dashboard">
        <div className="shell">
          <div className="dashboard-header">
            <div>
              <span className="eyebrow light">National Teaching 2026–27</span>
              <h2>Three streams. One national pathway.</h2>
            </div>
            <p>
              Teaching connects foundational knowledge, UKMLA clinical learning
              and structured OSCE practice throughout the academic year.
            </p>
          </div>

          <div className="dashboard-grid">
            <article className="timeline-card">
              <div className="timeline-date">
                <span>Oct</span>
                <strong>2026</strong>
              </div>
              <div>
                <span className="timeline-label">Clinical UKMLA</span>
                <h3>Twice-weekly national clinical teaching</h3>
                <p>October 2026 – May 2027</p>
              </div>
              <span className="timeline-frequency">2× weekly</span>
            </article>

            <article className="timeline-card">
              <div className="timeline-date">
                <span>Oct</span>
                <strong>2026</strong>
              </div>
              <div>
                <span className="timeline-label">OSCE</span>
                <h3>Structured examination and communication practice</h3>
                <p>October 2026 – May 2027</p>
              </div>
              <span className="timeline-frequency">Weekly</span>
            </article>

            <article className="timeline-card">
              <div className="timeline-date">
                <span>Feb</span>
                <strong>2027</strong>
              </div>
              <div>
                <span className="timeline-label">Pre-clinical</span>
                <h3>Foundational science linked to clinical application</h3>
                <p>February 2027 – May 2027</p>
              </div>
              <span className="timeline-frequency">Weekly</span>
            </article>

            <Link className="calendar-card" href="/events">
              <span className="calendar-pulse"><i /></span>
              <div>
                <span className="timeline-label">Events hub</span>
                <h3>One calendar for every Student Wing programme.</h3>
                <p>
                  Teaching, conference, research and national opportunities will
                  appear here as dates are confirmed.
                </p>
              </div>
              <span className="calendar-link">Open events →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section shell platform-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">The platform</span>
            <h2>More than a website.</h2>
          </div>
          <p>
            This will become the Student Wing&apos;s central digital home for
            participation, programme information and institutional memory.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card large">
            <div className="feature-card-top">
              <span className="feature-tag">Events</span>
              <span className="feature-number">01</span>
            </div>
            <div>
              <h3>One live calendar.</h3>
              <p>
                Teaching, workshops and conference activity in a single reliable
                place, with registration links and clearly labelled updates.
              </p>
              <Link href="/events">Open events hub →</Link>
            </div>
          </article>

          <article className="feature-card feature-card-gold">
            <div className="feature-card-top">
              <span className="feature-tag">Conference</span>
              <span className="feature-number">02</span>
            </div>
            <h3>Register through BIDA.</h3>
            <p>
              Delegate registration and conference information will live
              together rather than across fragmented third-party pages.
            </p>
            <Link href="/conference">Conference hub →</Link>
          </article>

          <article className="feature-card feature-card-teal">
            <div className="feature-card-top">
              <span className="feature-tag">Research</span>
              <span className="feature-number">03</span>
            </div>
            <h3>Find a project.</h3>
            <p>
              A transparent route for project opportunities, eligibility,
              applications and research-skills support.
            </p>
            <Link href="/research">Research pathway →</Link>
          </article>
        </div>
      </section>

      <section className="section shell home-news-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Latest updates</span>
            <h2>What is moving across the Student Wing.</h2>
          </div>
          <p>
            Strategic milestones, teaching developments and conference updates
            are published here as the 2026–27 programme progresses.
          </p>
        </div>

        <div className="home-news-grid">
          <Link className="home-news-card home-news-featured" href="/news">
            <div><span>Strategy</span><time>17 SEP 2026</time></div>
            <h3>2026–27 Presidential Programme submitted</h3>
            <p>
              Four connected pillars set the direction for National Teaching,
              Conference, Digital Presence and Research.
            </p>
            <strong>Read updates →</strong>
          </Link>
          <Link className="home-news-card" href="/news">
            <div><span>Education</span><time>2026–27</time></div>
            <h3>National Teaching moves to three connected streams</h3>
            <p>
              Clinical UKMLA, weekly OSCE teaching and a new pre-clinical stream
              form one national learning pathway.
            </p>
            <strong>Teaching update →</strong>
          </Link>
          <Link className="home-news-card" href="/news">
            <div><span>Conference</span><time>JAN 2027</time></div>
            <h3>Sixth National Conference enters planning</h3>
            <p>
              Programme, speakers, abstracts and delegate registration will be
              published through the Student Wing hub.
            </p>
            <strong>Conference update →</strong>
          </Link>
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
