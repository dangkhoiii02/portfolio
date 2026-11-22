import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import { internship, profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Résumé for Phạm Đăng Khôi, focused on backend engineering and applied AI.",
};

export default function ResumePage() {
  return (
    <div className="shell resume-page">
      <div className="resume-actions"><PrintButton /></div>
      <article className="resume-sheet">
        <header>
          <h1 lang="vi">{profile.name}</h1>
          <p>Backend Engineering · Distributed Systems · Applied AI</p>
          <div className="resume-contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
            <a href={profile.github}>github.com/dangkhoiii02</a>
            <span>{profile.location}</span>
          </div>
        </header>
        <section>
          <h2>Experience</h2>
          <h3>{internship.role} · {internship.company}</h3>
          <p>{internship.period}</p>
          <ul>{internship.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
        </section>
        <section>
          <h2>Featured project</h2>
          <h3>CareFlow</h3>
          <ul>
            <li>Built core infrastructure for an outpatient management platform in a three-person team, including authentication, the API gateway, patient queues, and notifications.</li>
            <li>For Voice Prescription in CareFlow’s AI Service, built a synthetic Vietnamese speech dataset, fine-tuned Qwen3-ASR, and integrated a local worker for clinician-reviewed drafts.</li>
          </ul>
          <p>Java, Spring Boot, RabbitMQ, PostgreSQL, Docker, Python, Qwen3-ASR, MLX</p>
        </section>
        <section>
          <h2>Education</h2>
          <h3>{profile.school}</h3>
          <p>{profile.program} · 2022–2027</p>
          <p>GPA {profile.gpa} / 4.00 · {profile.credits} credits as of Nov 2026</p>
        </section>
      </article>
    </div>
  );
}
