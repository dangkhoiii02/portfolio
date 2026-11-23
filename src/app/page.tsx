import { AudioLines, BriefcaseBusiness, Database, Layers3, ListChecks, Network, Waypoints } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import HomeSectionNav from "@/components/HomeSectionNav";
import { Reveal } from "@/components/Motion";
import { internship, profile, studentResearch } from "@/content/profile";
import { projectArtwork } from "@/content/project-artwork";

const skills = [
  {
    title: "Backend engineering",
    icon: Layers3,
    detail: "Build REST APIs and backend workflows for outpatient queues, identity and access, and course enrollment.",
  },
  {
    title: "Distributed systems",
    icon: Waypoints,
    detail: "Design event-driven workflows with retryable delivery, idempotent event handling, and real-time updates.",
  },
  {
    title: "Data modeling & consistency",
    icon: Database,
    detail: "Model relational and graph data. Use transactions and locking to keep concurrent enrollment consistent.",
  },
  {
    title: "Applied AI & evaluation",
    icon: AudioLines,
    detail: "Prepare Vietnamese speech datasets, fine-tune speech recognition models, and evaluate transcription with word error rate.",
  },
  {
    title: "Testing & collaboration",
    icon: ListChecks,
    detail: "Test features and edge cases with teammates, fix issues based on feedback, and document API and event contracts.",
  },
];

function CareFlowFeature() {
  return (
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
        <dl className="home-skills-list">
          {skills.map(({ title, icon: Icon, detail }) => (
            <div key={title}>
              <dt><Icon className="home-entry-icon" size={20} aria-hidden="true" /> {title}</dt>
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
