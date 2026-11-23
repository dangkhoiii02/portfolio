import { BriefcaseBusiness, Network } from "lucide-react";
import AnimatedArtwork from "@/components/AnimatedArtwork";
import { Reveal, Timeline } from "@/components/Motion";
import { internship, profile } from "@/content/profile";

export default function Experience() {
  return (
    <section id="experience" className="shell inner-section" aria-labelledby="experience-title">
      <h2 className="inner-title" id="experience-title">Experience<span>.</span></h2>
      <div className="profile-section-grid">
        <Reveal className="profile-section-art">
          <AnimatedArtwork asset="experience" label="experience" width={840} height={840} />
        </Reveal>

        <Timeline>
          <li className="timeline-item">
            <BriefcaseBusiness className="timeline-marker" aria-hidden="true" />
            <Reveal className="profile-card">
              <p className="profile-meta">{internship.period} · {profile.location}</p>
              <h3>{internship.role}</h3>
              <p className="profile-organization">{internship.company}</p>
              <ul className="timeline-contributions">
                {internship.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
              </ul>
            </Reveal>
          </li>
          <li className="timeline-item">
            <Network className="timeline-marker" aria-hidden="true" />
            <Reveal className="profile-card">
              <p className="profile-meta">2024 · PTIT Ho Chi Minh City</p>
              <h3>Student research</h3>
              <p className="profile-organization">Graph databases</p>
              <p>Helped build an OrientDB course-registration prototype to model prerequisites and compare graph and relational queries.</p>
            </Reveal>
          </li>
        </Timeline>
      </div>
    </section>
  );
}
