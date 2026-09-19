import type { Metadata } from "next";
import Link from "next/link";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Programme milestones, conference announcements, teaching updates and organisational news from BIDA Student Wing.",
};

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
          {newsArticles.map((item, index) => (
            <Link
              className={index === 0 ? "news-card news-card-featured" : "news-card"}
              key={item.slug}
              href={`/news/${item.slug}`}
            >
              <div className="news-meta">
                <span>{item.tag}</span>
                <time dateTime={item.dateISO}>{item.date}</time>
              </div>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <span className="news-read">Read update →</span>
            </Link>
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
