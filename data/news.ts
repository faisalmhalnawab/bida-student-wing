export type NewsSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type NewsArticle = {
  slug: string;
  date: string;
  dateISO: string;
  tag: string;
  title: string;
  summary: string;
  intro: string;
  sections: NewsSection[];
  relatedHref: string;
  relatedLabel: string;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "2026-27-presidential-programme",
    date: "17 SEP 2026",
    dateISO: "2026-09-17",
    tag: "Strategy",
    title: "2026–27 Presidential Programme submitted",
    summary:
      "Four connected pillars set the direction for National Teaching, the National Conference, Digital Presence and Research.",
    intro:
      "The 2026–27 programme is designed to turn successful Student Wing activity into durable national infrastructure with clearer ownership, measurement and handover.",
    sections: [
      {
        heading: "Four connected priorities",
        paragraphs: [
          "The programme is organised around National Teaching, the National Conference, Website & Digital Presence, and Research. These areas are intended to reinforce one another rather than operate as separate projects.",
        ],
        bullets: [
          "National Teaching across pre-clinical, Clinical UKMLA and OSCE streams",
          "The sixth BIDA Student Wing National Conference",
          "A single trusted digital front door for Student Wing activity",
          "A governed National Research Department and project pathway",
        ],
      },
      {
        heading: "How the programme is meant to be delivered",
        paragraphs: [
          "The delivery model emphasises national reach without unnecessary centralisation, accessibility, quality before volume, measurement rather than announcements, and infrastructure that can be handed over to future committees.",
          "That means public activity should have a clear owner, a defined purpose and evidence of delivery, while contacts, permissions, templates and lessons are retained for the next team.",
        ],
      },
      {
        heading: "What students should notice",
        paragraphs: [
          "For students, the practical aim is simpler: one place to find reliable information about teaching, events, opportunities, conference activity, research and approved resources.",
        ],
      },
    ],
    relatedHref: "/about",
    relatedLabel: "Explore how the Student Wing works",
  },
  {
    slug: "digital-hub-enters-development",
    date: "SEP 2026",
    dateISO: "2026-09-19",
    tag: "Digital",
    title: "BIDA Student Wing website hub enters development",
    summary:
      "The new digital home brings programme information, events, opportunities, research and resources into one reliable place.",
    intro:
      "The Student Wing website is being built as a national information and participation platform rather than a static brochure.",
    sections: [
      {
        heading: "One trusted digital front door",
        paragraphs: [
          "The website is structured so students can understand what BIDA Student Wing is, see what is happening next, and find clear routes into teaching, conference activity, research and national opportunities.",
          "The same platform also creates an institutional record that can continue beyond a single committee year.",
        ],
      },
      {
        heading: "Events should update once",
        paragraphs: [
          "The events system is prepared for a shared BIDA-controlled calendar. Once the final calendar credentials are approved, authorised teams will be able to maintain dates in one place and have the public website reflect those changes automatically.",
        ],
      },
      {
        heading: "Forms before accounts",
        paragraphs: [
          "The initial model deliberately avoids forcing students to create accounts. Conference registration, research applications and contact enquiries can be handled through structured forms, internal review and email communication first.",
          "A student dashboard can be considered later only if the volume and workflow genuinely justify it.",
        ],
      },
    ],
    relatedHref: "/events",
    relatedLabel: "Open the events hub",
  },
  {
    slug: "national-teaching-three-streams",
    date: "2026–27",
    dateISO: "2026-09-19",
    tag: "Education",
    title: "National Teaching structured across three connected streams",
    summary:
      "Clinical UKMLA, weekly OSCE teaching and a new pre-clinical stream form one national learning pathway.",
    intro:
      "National Teaching is being organised as three connected streams so students can move from foundational science into clinical reasoning and structured examination performance.",
    sections: [
      {
        heading: "Clinical UKMLA",
        paragraphs: [
          "The working clinical programme runs from October 2026 to May 2027 and is organised across 24 specialty blocks, moving from medicine through surgery and core specialties into community and specialist care.",
        ],
      },
      {
        heading: "OSCE",
        paragraphs: [
          "Weekly OSCE teaching runs alongside the active clinical programme and focuses on histories, examinations, communication, counselling, interpretation and acute management.",
        ],
      },
      {
        heading: "Pre-clinical",
        paragraphs: [
          "The pre-clinical stream is planned from February to May 2027, principally for Years 1 and 2, linking biomedical science to patients, systems and early clinical reasoning.",
        ],
      },
      {
        heading: "Quality standard",
        paragraphs: [
          "Teaching is intended to be documented through named faculty, written learning objectives, structured feedback, attendance records and clear delivery records rather than being counted as successful simply because a session was announced.",
        ],
      },
    ],
    relatedHref: "/education",
    relatedLabel: "Explore National Teaching",
  },
  {
    slug: "sixth-national-conference-planning",
    date: "JAN 2027",
    dateISO: "2026-09-19",
    tag: "Conference",
    title: "Sixth National Conference enters planning",
    summary:
      "Programme, speakers, abstracts and delegate registration will be published through the Student Wing hub as they are approved.",
    intro:
      "The sixth BIDA Student Wing National Conference is planned for January 2027, subject to final Executive Committee approval and operational planning.",
    sections: [
      {
        heading: "A national point of connection",
        paragraphs: [
          "The conference is being developed as a forum for professional formation, leadership, equity and academic development, bringing students together with doctors, educators, researchers and professional organisations.",
        ],
      },
      {
        heading: "Academic stream",
        paragraphs: [
          "An abstract and poster stream is planned subject to sufficient quality submissions. Detailed eligibility, deadlines, conflict declarations and review criteria will be published before submissions open.",
        ],
      },
      {
        heading: "Registration through BIDA",
        paragraphs: [
          "The website is designed to support delegate registration directly through the Student Wing platform, followed by confirmation and reminder emails once the final backend and approved data-protection wording are connected.",
        ],
      },
      {
        heading: "Confirmed information only",
        paragraphs: [
          "Speakers, dates, access details and registration status will be published as confirmed information rather than inferred from internal working plans.",
        ],
      },
    ],
    relatedHref: "/conference",
    relatedLabel: "Open the Conference hub",
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
