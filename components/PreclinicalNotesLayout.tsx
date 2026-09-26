"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export type NotesNavGroup = {
  title: string;
  items: { id: string; label: string }[];
};

type Props = {
  subject: string;
  subtitle: string;
  nav: NotesNavGroup[];
  children: React.ReactNode;
};

export function PreclinicalNotesLayout({ subject, subtitle, nav, children }: Props) {
  const sectionIds = useMemo(
    () => nav.flatMap((group) => group.items.map((item) => item.id)),
    [nav]
  );
  const [activeId, setActiveId] = useState(sectionIds[0] || "");
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);

      let current = sectionIds[0] || "";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 150) current = id;
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionIds]);

  return (
    <div className="online-notes-shell">
      <div className="online-notes-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <header className="online-notes-topbar">
        <div>
          <Link href="/pre-clinical-notes">← Pre-Clinical Notes</Link>
          <span>/</span>
          <strong>{subject}</strong>
        </div>
        <button
          className="online-notes-menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
        >
          Contents
        </button>
      </header>

      <div className="online-notes-grid">
        <aside className={`online-notes-sidebar ${menuOpen ? "is-open" : ""}`}>
          <div className="online-notes-sidebar-head">
            <span>Pre-Clinical Notes</span>
            <h2>{subject}</h2>
            <p>{subtitle}</p>
          </div>

          <nav aria-label={`${subject} contents`}>
            {nav.map((group, index) => (
              <details key={group.title} open={index < 2}>
                <summary>{group.title}</summary>
                <div>
                  {group.items.map((item) => (
                    <a
                      href={`#${item.id}`}
                      className={activeId === item.id ? "is-active" : ""}
                      key={item.id}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </details>
            ))}
          </nav>

          <div className="online-notes-sidebar-progress">
            <div>
              <span>Reading progress</span>
              <strong>{Math.round(progress)}%</strong>
            </div>
            <i><b style={{ width: `${progress}%` }} /></i>
          </div>
        </aside>

        <main className="online-notes-content">{children}</main>
      </div>
    </div>
  );
}
