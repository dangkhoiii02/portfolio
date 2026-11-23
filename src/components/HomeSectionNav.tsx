"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Intro" },
  { id: "projects", label: "CareFlow" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
] as const;
type SectionId = (typeof sections)[number]["id"];

export default function HomeSectionNav() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const targets = sections.map(({ id }) => ({ id, element: document.getElementById(id) }));
    const root = document.documentElement;
    let frame = 0;

    function update() {
      frame = 0;
      const scrollPadding = Number.parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
      let current: SectionId = "home";

      for (const { id, element } of targets) {
        if (!element) continue;
        const scrollMargin = Number.parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
        if (element.getBoundingClientRect().top <= scrollPadding + scrollMargin + 24) current = id;
      }

      if (window.scrollY > 0 && root.scrollHeight - (window.scrollY + window.innerHeight) <= 2) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    }

    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className="home-section-nav" aria-label="On this page">
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={active === id ? "location" : undefined}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
