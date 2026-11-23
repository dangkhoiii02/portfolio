import AnimatedArtwork from "@/components/AnimatedArtwork";
import { Reveal } from "@/components/Motion";
import { profile } from "@/content/profile";

const coursework = [
  "Distributed systems",
  "Distributed databases",
  "Software architecture",
  "Information security",
  "Embedded systems",
];

export default function Education() {
  return (
    <section id="education" className="shell inner-section" aria-labelledby="education-title">
      <h2 className="inner-title" id="education-title">Education<span>.</span></h2>
      <div className="profile-section-grid education-layout">
        <Reveal className="profile-card education-card">
          <p className="profile-meta">2022–2027 · Ho Chi Minh City</p>
          <h3>{profile.school}</h3>
          <p>{profile.program}</p>

          <dl className="education-stats" aria-label="Academic record as of November 2026">
            <div>
              <dt>Cumulative GPA</dt>
              <dd>{profile.gpa} / 4.00</dd>
            </div>
            <div>
              <dt>Credits earned</dt>
              <dd>{profile.credits}</dd>
            </div>
          </dl>

          <h4>Selected coursework</h4>
          <ul className="skill-tags">
            {coursework.map(subject => <li key={subject}>{subject}</li>)}
          </ul>
        </Reveal>

        <Reveal>
          <AnimatedArtwork asset="education" label="education" width={900} height={600} />
        </Reveal>
      </div>
    </section>
  );
}
