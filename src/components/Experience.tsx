import { BriefcaseBusiness, GraduationCap, Network } from "lucide-react";
import { Reveal, Timeline } from "@/components/Motion";
import { internship, profile } from "@/content/profile";

export default function Experience() {
  return (
    <div className="shell milestones">
      <section id="experience" className="inner-section" aria-labelledby="experience-title">
        <h2 className="inner-title" id="experience-title">Experience<span>.</span></h2>
        <Timeline>
          <li className="timeline-item">
            <BriefcaseBusiness className="timeline-marker" aria-hidden="true" />
            <Reveal>
              <p className="timeline-meta">{internship.period} · {profile.location}</p>
              <h3>{internship.role} <span>· {internship.company}</span></h3>
              <ul className="timeline-contributions">
                {internship.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
              </ul>
            </Reveal>
          </li>
          <li className="timeline-item">
            <Network className="timeline-marker" aria-hidden="true" />
            <Reveal>
              <p className="timeline-meta">2024 · PTIT Ho Chi Minh City</p>
              <h3>Student research <span>· Graph databases</span></h3>
              <p>Helped build an OrientDB course-registration prototype to model prerequisites and compare graph and relational queries.</p>
            </Reveal>
          </li>
        </Timeline>
      </section>

      <section id="education" className="inner-section" aria-labelledby="education-title">
        <h2 className="inner-title" id="education-title">Education<span>.</span></h2>
        <Timeline>
          <li className="timeline-item">
            <GraduationCap className="timeline-marker" aria-hidden="true" />
            <Reveal>
              <p className="timeline-meta">2022–2027 · Ho Chi Minh City</p>
              <h3>{profile.school}</h3>
              <p>{profile.program}</p>
              <p><strong>{profile.gpa} / 4.00</strong> cumulative GPA · {profile.credits} credits as of Nov 2026</p>
            </Reveal>
          </li>
        </Timeline>
      </section>
    </div>
  );
}
