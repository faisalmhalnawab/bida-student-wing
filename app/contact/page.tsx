const routes = [
  ["General enquiries", "Student Wing organisation, national programmes and general questions."],
  ["National Teaching", "Clinical UKMLA, OSCE, pre-clinical teaching and faculty enquiries."],
  ["National Conference", "Programme, speakers, abstracts, delegate and partnership enquiries."],
  ["Research", "Projects, supervision, research training and research-opportunity enquiries."],
];

export default function ContactPage() {
  return (
    <>
      <section className="programme-page-hero contact-page-hero">
        <div className="shell programme-page-hero-grid">
          <div>
            <span className="eyebrow light">Contact</span>
            <h1>Reach the right part of BIDA Student Wing.</h1>
            <p>
              Official BIDA-controlled contact routes will be published here so
              programmes do not depend on personal inboxes or individual accounts.
            </p>
          </div>
          <div className="contact-status-card">
            <span>Contact infrastructure</span>
            <strong>Official mailboxes / form routing to be confirmed</strong>
            <p>
              The page structure is ready. Public addresses will be added only
              after the organisational contact route is approved.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="contact-route-grid">
          {routes.map(([title, body], index) => (
            <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="contact-form-section">
        <div className="shell contact-form-layout">
          <div>
            <span className="eyebrow light">Online enquiries</span>
            <h2>One form, routed to the right team.</h2>
            <p>
              This interface is ready for the backend connection. Submission will
              be enabled once the approved mailbox and data-protection wording are
              confirmed.
            </p>
          </div>
          <form className="contact-form" aria-label="Contact form preview">
            <label>Name<input type="text" disabled placeholder="Your name" /></label>
            <label>Email<input type="email" disabled placeholder="you@example.com" /></label>
            <label>Enquiry type<select disabled defaultValue=""><option value="">Choose a programme</option></select></label>
            <label>Message<textarea disabled rows={5} placeholder="How can we help?" /></label>
            <button type="button" disabled>Form connection pending</button>
          </form>
        </div>
      </section>
    </>
  );
}
