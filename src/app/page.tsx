import { BriefcaseBusiness, Network } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { Reveal } from "@/components/Motion";
import { skillCategories } from "@/components/Skills";
import { internship, studentResearch } from "@/content/profile";
import { projectArtwork } from "@/content/project-artwork";

const homeSkills = skillCategories.filter(({ id }) => ["backend", "distributed", "data", "ai"].includes(id));

export default function Home() {
  return (
    <>
      <Hero />

      <section id="projects" className="shell inner-section" aria-labelledby="featured-careflow-title">
        <Reveal>
          <div className="feature-card feature-summary home-feature">
            <div className="feature-copy">
              <p className="eyebrow feature-label">Featured project</p>
              <h2 id="featured-careflow-title">CareFlow</h2>
              <p className="feature-subtitle">Outpatient management microservices</p>
              <p>
                I led core infrastructure development in a team of three. CareFlow brings together
                real-time patient queues and a Voice Prescription service that turns Vietnamese
                dictation into drafts for clinicians to review.
              </p>
              <ul className="tags" aria-label="CareFlow technologies">
                {["Spring Boot", "RabbitMQ", "PostgreSQL", "Qwen3-ASR"].map(tag => <li key={tag}>{tag}</li>)}
              </ul>
              <div className="feature-links">
                <Link className="button button-primary" href="/projects#careflow">Explore CareFlow</Link>
                <Link className="text-link" href="/projects">All projects</Link>
              </div>
            </div>
            <div className="careflow-cover">
              <Image
                src={projectArtwork.careflow.src}
                alt={projectArtwork.careflow.alt}
                fill
                sizes="(max-width: 760px) calc(100vw - 70px), (max-width: 1320px) 43vw, 550px"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <div className="shell inner-section">
        <Reveal className="home-profile-grid">
          <section id="experience" className="home-profile-section" aria-labelledby="home-experience-title">
            <h2 id="home-experience-title" className="inner-title">Experience<span>.</span></h2>
            <ol className="profile-card home-experience-list">
              <li>
                <BriefcaseBusiness className="home-experience-icon" size={20} aria-hidden="true" />
                <div>
                  <p className="profile-meta">{internship.period} · {internship.company}</p>
                  <h3>{internship.role}</h3>
                  <p>Built infrastructure monitoring and incident alerts and worked on Vietnamese delivery-address search.</p>
                </div>
              </li>
              <li>
                <Network className="home-experience-icon" size={20} aria-hidden="true" />
                <div>
                  <p className="profile-meta">{studentResearch.period} · {studentResearch.organization}</p>
                  <h3>{studentResearch.title}</h3>
                  <p>{studentResearch.contribution}</p>
                </div>
              </li>
            </ol>
            <Link className="text-link home-profile-link" href="/about#experience">More about my experience</Link>
          </section>

          <section id="skills" className="home-profile-section" aria-labelledby="home-skills-title">
            <h2 id="home-skills-title" className="inner-title">Technical toolkit<span>.</span></h2>
            <div className="skill-group home-skill-grid">
              {homeSkills.map(({ id, title, icon: Icon, skills }) => (
                <div key={id}>
                  <div className="skill-heading">
                    <Icon size={20} aria-hidden="true" />
                    <h3>{title}</h3>
                  </div>
                  <ul className="skill-tags">
                    {skills.slice(0, 4).map(skill => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <Link className="text-link home-profile-link" href="/about#skills">View full toolkit</Link>
          </section>
        </Reveal>
      </div>
    </>
  );
}
