import { AudioLines, BriefcaseBusiness, ClipboardCheck, Database, Network, Server, Waypoints } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import HomeSectionNav from "@/components/HomeSectionNav";
import { Reveal } from "@/components/Motion";
import { internship, profile, studentResearch } from "@/content/profile";
import { projectArtwork } from "@/content/project-artwork";

const skills = [
  {
    id: "backend",
    title: "Backend engineering",
    icon: Server,
    detail: "Build REST APIs and backend workflows for outpatient queues, identity and access, and course enrollment.",
  },
  {
    id: "distributed",
    title: "Distributed systems",
    icon: Waypoints,
    detail: "Design event-driven workflows with retryable delivery, idempotent event handling, and real-time updates.",
  },
  {
    id: "data",
    title: "Data modeling & consistency",
    icon: Database,
    detail: "Model relational and graph data. Use transactions and locking to keep concurrent enrollment consistent.",
  },
  {
    id: "ai",
    title: "Applied AI & evaluation",
    icon: AudioLines,
    detail: "Prepare Vietnamese speech datasets, fine-tune speech recognition models, and evaluate transcription with word error rate.",
  },
  {
    id: "quality",
    title: "Testing & collaboration",
    icon: ClipboardCheck,
    detail: "Test features and edge cases with teammates, fix issues based on feedback, and document API and event contracts.",
  },
];

function CareFlowFeature() {
  return (
    <section id="projects" className="shell inner-section" aria-labelledby="featured-careflow-title">
      <Reveal>
        <div className="feature-card feature-summary home-feature">
          <div className="feature-copy">
            <p className="eyebrow feature-label">Graduation project</p>
            <h2 id="featured-careflow-title">CareFlow</h2>
            <p className="feature-subtitle">Outpatient management platform designed for public hospitals</p>
            <p>
              I led core infrastructure development in a three-person team, including the API gateway,
              authentication, and real-time patient queues. I also built Voice Prescription, which turns
              Vietnamese dictation into draft prescriptions for clinicians to review.
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
              sizes="(max-width: 760px) calc(100vw - 70px), (max-width: 1079px) 43vw, (max-width: 1500px) 37vw, 550px"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function HomeExperience() {
  return (
    <section id="experience" className="shell inner-section home-credentials" aria-labelledby="home-experience-title">
      <h2 id="home-experience-title" className="inner-title">Experience<span>.</span></h2>
      <Reveal>
        <ol className="home-experience-list">
          <li>
            <BriefcaseBusiness className="home-experience-marker" size={20} aria-hidden="true" />
            <article className="profile-card home-experience-card">
              <header>
                <div>
                  <h3>{internship.role}</h3>
                  <p className="home-organization">{internship.company}</p>
                </div>
                <div className="home-experience-meta">
                  <p className="home-experience-date">{internship.period}</p>
                  <p>{profile.location}</p>
                </div>
              </header>
              <ul className="timeline-contributions">
                {internship.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}
              </ul>
            </article>
          </li>
          <li>
            <Network className="home-experience-marker" size={20} aria-hidden="true" />
            <article className="profile-card home-experience-card">
              <header>
                <div>
                  <h3>{studentResearch.title}</h3>
                  <p className="home-organization">{studentResearch.organization}</p>
                </div>
                <div className="home-experience-meta">
                  <p className="home-experience-date">{studentResearch.period}</p>
                </div>
              </header>
              <p>{studentResearch.contribution}</p>
            </article>
          </li>
        </ol>
      </Reveal>
      <Link className="text-link home-profile-link" href="/about#experience">More about my experience</Link>
    </section>
  );
}

function HomeSkills() {
  return (
    <section id="skills" className="shell inner-section home-credentials" aria-labelledby="home-skills-title">
      <h2 id="home-skills-title" className="inner-title">Skills<span>.</span></h2>
      <Reveal>
        <dl className="home-skills-grid">
          {skills.map(({ id, title, icon: Icon, detail }) => (
            <div key={id} className="home-skill-card" data-skill={id}>
              <dt>
                <span className="home-skill-icon" aria-hidden="true"><Icon size={25} strokeWidth={1.6} /></span>
                <span>{title}</span>
              </dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <div className="home-layout">
      <HomeSectionNav />
      <div className="home-content">
        <Hero />
        <CareFlowFeature />
        <HomeExperience />
        <HomeSkills />
      </div>
    </div>
  );
}
