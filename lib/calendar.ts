export type BIDAEvent = {
  id: string;
  title: string;
  start: string;
  end?: string;
  location?: string;
  description?: string;
  htmlLink?: string;
  allDay: boolean;
};

type GoogleCalendarEvent = {
  id?: string;
  summary?: string;
  description?: string;
  location?: string;
  htmlLink?: string;
  start?: { dateTime?: string; date?: string };
  end?: { dateTime?: string; date?: string };
};

export async function getUpcomingEvents(limit = 8): Promise<BIDAEvent[]> {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;

  if (!calendarId || !apiKey) return [];

  const params = new URLSearchParams({
    key: apiKey,
    timeMin: new Date().toISOString(),
    singleEvents: "true",
    orderBy: "startTime",
    maxResults: String(limit),
  });

  const endpoint =
    "https://www.googleapis.com/calendar/v3/calendars/" +
    encodeURIComponent(calendarId) +
    "/events?" +
    params.toString();

  try {
    const response = await fetch(endpoint, {
      next: { revalidate: 300 },
    });

    if (!response.ok) return [];

    const data = (await response.json()) as { items?: GoogleCalendarEvent[] };

    return (data.items ?? [])
      .filter((event) => Boolean(event.start?.dateTime || event.start?.date))
      .map((event, index) => {
        const start = event.start?.dateTime ?? event.start?.date ?? "";
        const end = event.end?.dateTime ?? event.end?.date;

        return {
          id: event.id ?? `event-${index}`,
          title: event.summary?.trim() || "BIDA Student Wing event",
          start,
          end,
          location: event.location,
          description: event.description,
          htmlLink: event.htmlLink,
          allDay: Boolean(event.start?.date && !event.start?.dateTime),
        };
      });
  } catch {
    return [];
  }
}
