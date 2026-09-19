import type { Metadata } from "next";
import Link from "next/link";
import { getUpcomingEvents } from "@/lib/calendar";

export const metadata: Metadata = {
  title: "Events",
  description: "BIDA Student Wing teaching, conference, research and national programme milestones in one events hub.",
};

const milestones = [
  { date: "03 OCT 2026", type: "National Teaching", title: "Clinical programme begins", body: "The working UKMLA clinical schedule begins its Medicine phase." },
  { date: "OCT 2026", type: "OSCE", title: "Weekly OSCE teaching begins", body: "Structured practical sessions run alongside the active clinical programme." },
  { date: "JAN 2027", type: "National Conference", title: "6th National Conference", body: "Timing is planned for January 2027, subject to final approval and operational planning." },
  { date: "FEB 2027", type: "Pre-clinical", title: "Pre-clinical stream begins", body: "Weekly sessions for early-years students begin and continue through May." },
  { date: "06 MAY 2027", type: "National Teaching", title: "Clinical schedule concludes", body: "The adopted working schedule concludes with Acute & Emergency Medicine." },
];

function formatEventDate(value: string, allDay: boolean) {
  const date = new Date(allDay ? `${value}T12:00:00Z` : value);
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    day: "2-digit",
    month: "short",
    year: "numeric",
    ...(allDay ? {} : { hour: "2-digit", minute: "2-digit" }),
  }).format(date);
}

export default async function EventsPage() {
  const liveEvents = await getUpcomingEvents();

  return (
    <>
      <section className="programme-page-hero events-page-hero">
        <div className="shell programme-page-hero-grid">
          <div>
            <span className="eyebrow light">Events calendar</span>
            <h1>One reliable place for what is happening next.</h1>
            <p>
              Teaching, conference activity, research workshops and national
              opportunities will be published through one Student Wing events hub.
            </p>
          </div>
          <div className="calendar-status-card">
            <span className="status-dot"><i /></span>
            <div>
              <span>Calendar status</span>
              <strong>{liveEvents.length > 0 ? "Live shared calendar connected" : "Shared live calendar integration is next"}</strong>
              <p>
                {liveEvents.length > 0
                  ? "Upcoming events below are pulled from the configured BIDA Student Wing calendar."
                  : "The public interface is ready. The final shared calendar source will be connected once the team access route is confirmed."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {liveEvents.length > 0 && (
        <section className="section shell live-events-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Upcoming events</span>
              <h2>Live from the shared calendar.</h2>
            </div>
            <p>
              Calendar changes are reflected automatically after the short
              website cache refresh.
            </p>
          </div>
          <div className="live-event-grid">
            {liveEvents.map((event) => (
              <article key={event.id}>
                <time>{formatEventDate(event.start, event.allDay)}</time>
                <h3>{event.title}</h3>
                {event.location && <p>{event.location}</p>}
                {event.htmlLink && (
                  <a href={event.htmlLink} target="_blank" rel="noreferrer">
                    Event details ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="section shell">
        <div className="events-toolbar">
          <div>
            <span className="eyebrow">Working programme calendar</span>
            <h2>Key 2026–27 milestones.</h2>
          </div>
          <div className="event-filters" aria-label="Event categories">
            <span>All</span><span>Teaching</span><span>Conference</span><span>Research</span>
          </div>
        </div>

        <div className="milestone-list">
          {milestones.map((event, index) => (
            <article key={event.date + event.title}>
              <div className="milestone-number">0{index + 1}</div>
              <div className="milestone-date">{event.date}</div>
              <div className="milestone-copy">
                <span>{event.type}</span>
                <h3>{event.title}</h3>
                <p>{event.body}</p>
              </div>
              <span className="milestone-state">Working schedule</span>
            </article>
          ))}
        </div>
      </section>

      <section className="events-standard-section">
        <div className="shell standards-layout">
          <div>
            <span className="eyebrow light">Publishing standard</span>
            <h2>Every event page should answer the same questions.</h2>
            <p>
              The final calendar will keep event information consistent and make
              changes visible instead of relying on scattered social posts.
            </p>
          </div>
          <div className="event-standard-grid">
            {["Date & time", "Registration", "Speaker / faculty", "Access link or venue", "Programme stream", "Changes clearly labelled"].map((item, index) => (
              <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="cta-panel">
          <div>
            <span className="eyebrow light">National Teaching</span>
            <h2>Explore the programme behind the calendar.</h2>
            <p>
              See the three teaching streams, UKMLA specialty phases and the
              standards used to structure delivery.
            </p>
          </div>
          <Link className="button primary" href="/education">Open National Teaching</Link>
        </div>
      </section>
    </>
  );
}
