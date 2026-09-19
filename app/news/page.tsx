import Link from "next/link";

const updates = [
  {
    date: "17 SEP 2026",
    tag: "Strategy",
    title: "2026–27 Presidential Programme submitted",
    body: "The programme sets four strategic pillars: National Teaching, National Conference, Website & Digital Presence, and Research.",
  },
  {
    date: "SEP 2026",
    tag: "Digital",
    title: "BIDA Student Wing website hub enters development",
    body: "The new digital home is being built to bring programme information, events, opportunities, research and resources into one reliable place.",
  },
  {
    date: "2026–27",
    tag: "Education",
    title: "National Teaching structured across three connected streams",
    body: "Clinical UKMLA and OSCE teaching run through the active clinical period, with the new pre-clinical stream planned from February 2027.",
  },
  {
    date: "JAN 2027",
    tag: "Conference",
    title: "Sixth National Conference in planning",
    body: "The next national conference is planned for January 2027, subject to final Executive Committee approval and operational planning.",
  },
];

export default function NewsPage() {
  return (
    <>
      <section className="programme-page-hero news-page-hero">
        <div className="shell programme-page-hero-grid">
          <div>
            <span className="eyebrow light">News & updates</span>
            <h1>The latest from BIDA Student Wing.</h1>
            <p>
              Programme milestones, conference announcements, teaching updates
              and organisational news in one place.
            </p>
          </div>
          <div className="news-hero-card">
            <span>Official source</span>
            <strong>Updates should live here — not only on social media.</strong>
            <p>
              Social channels drive reach; the website preserves verified,
              accessible information.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="news-grid">
          {updates.map((item, index) => (
            <article className={index === 0 ? "news-card news-card-featured" : "news-card"} key={item.title}>
              <div className="news-meta"><span>{item.tag}</span><time>{item.date}</time></div>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <span className="news-read">Programme update</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="cta-panel">
          <div>
            <span className="eyebrow light">What&apos;s next?</span>
            <h2>Teaching and conference updates will feed the events hub.</h2>
            <p>
              Once confirmed dates and registration links are available, the
              corresponding event records will become the single source of truth.
            </p>
          </div>
          <Link className="button primary" href="/events">View events</Link>
        </div>
      </section>
    </>
  );
}
