import { Bell, ListOrdered, Route, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Reveal } from "@/components/Motion";
import ProjectGallery, { type Project } from "@/components/ProjectGallery";
import { projectArtwork } from "@/content/project-artwork";

const projects: Project[] = [
  {
    id: "kiro-chat",
    title: "Kiro Chat",
    category: "Software",
    description: "Built a real-time messaging app for web and Android with group chat, delivery and read receipts, media sharing, and voice and video calls.",
    tags: ["Spring Boot", "Angular", "RabbitMQ", "LiveKit"],
    github: "https://github.com/dangkhoiii02/Kiro-Chat---Real-time-Messaging-App",
  },
  {
    id: "course-registration",
    title: "Course Registration System",
    category: "Software",
    description: "Built the REST API for course enrollment and used PostgreSQL transactions and locks to keep available places consistent under concurrent requests.",
    tags: ["C#", "ASP.NET Core", "PostgreSQL"],
    github: "https://github.com/dangkhoiii02/CourseRegistrationSystem_KTVTKPM",
  },
  {
    id: "masking-denoiser",
    title: "Masking Denoiser",
    category: "AI & Embedded",
    description: "Built ESP32-S3 firmware that streams microphone audio over WebSocket to a Python application that runs TensorFlow Lite denoising.",
    tags: ["ESP32-S3", "C++", "FreeRTOS", "TensorFlow Lite"],
    github: "https://github.com/dangkhoiii02/masking_denoiser",
  },
  {
    id: "grapfity",
    title: "Grapfity",
    category: "Software",
    description: "Contributed to a team-built music web app with a REST backend, a listening interface, and an administration dashboard.",
    tags: ["Express", "React", "SQL Server"],
    github: "https://github.com/ntkhai268/grapfity",
  },
  {
    id: "legal-extraction",
    title: "Vietnamese Legal Document Extraction",
    category: "AI & Embedded",
    description: "Collaborated on a pipeline that extracts metadata and chapter–article structure from Vietnamese legal documents and validates the results against a JSON schema.",
    tags: ["Python", "PhoBERT", "Qwen2.5", "Pydantic"],
    github: "https://github.com/dangkhoiii02/Agent_VBPL",
  },
  {
    id: "facial-liveness",
    title: "Facial Liveness Detection",
    category: "AI & Embedded",
    description: "Developed a computer vision pipeline to distinguish a live face from a printed photo or a replayed video.",
    tags: ["Python", "OpenCV", "Computer vision"],
    github: "https://github.com/dangkhoiii02/LivenessDetection",
  },
  {
    id: "astroparty",
    title: "AstroParty",
    category: "Software",
    description: "A team-built Python desktop game with object-oriented modules for game logic and state.",
    tags: ["Python", "OOP"],
    github: "https://github.com/ntkhai268/AstroParty",
  },
];

const coreServices = [
  { name: "API Gateway", icon: Route },
  { name: "Identity & sessions", icon: ShieldCheck },
  { name: "Queue management", icon: ListOrdered },
  { name: "Notifications", icon: Bell },
];

function VoicePrescription() {
  return (
    <section id="voice-prescription" className="careflow-service" aria-labelledby="voice-prescription-title">
      <div className="feature-copy">
        <p className="eyebrow feature-label">CareFlow AI Service</p>
        <h3 id="voice-prescription-title">Voice Prescription</h3>
        <p className="feature-subtitle">Vietnamese speech recognition for prescription drafts</p>
        <p>
          I built a synthetic speech dataset, fine-tuned Qwen3-ASR on Apple Silicon, and integrated
          a local worker into CareFlow’s AI Service. The worker processes recorded dictation and returns
          a prescription draft for the doctor to review.
        </p>
        <p className="feature-note">The benchmark measures transcription only. The drafting workflow remains a local prototype.</p>
        <ul className="tags" aria-label="Technologies">
          {["Python", "Qwen3-ASR", "MLX", "LoRA", "FFmpeg"].map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <Link className="text-link" href="/articles/vietnamese-asr-evaluation">Read the ASR article</Link>
      </div>
      <figure className="benchmark-visual">
        <figcaption>Word error rate</figcaption>
        <div className="benchmark-row">
          <div><span>First adapter</span><strong>20.36%</strong></div>
          <meter min={0} max={25} value={20.36} aria-label="First adapter word error rate, 20.36 percent" />
        </div>
        <div className="benchmark-row">
          <div><span>Second adapter</span><strong>13.73%</strong></div>
          <meter min={0} max={25} value={13.73} aria-label="Second adapter word error rate, 13.73 percent" />
        </div>
        <p>Both adapters were evaluated on the same 2,383 held-out clips of synthetic Vietnamese speech.</p>
      </figure>
    </section>
  );
}

export default function Projects() {
  return (
    <div id="projects" className="shell project-content">
      <Reveal className="featured-project">
        <article id="careflow" className="feature-card" aria-labelledby="careflow-title">
          <div className="feature-summary">
            <div className="careflow-cover">
              <Image
                src={projectArtwork.careflow.src}
                alt={projectArtwork.careflow.alt}
                fill
                preload
                sizes="(max-width: 760px) calc(100vw - 70px), (max-width: 1320px) 43vw, 550px"
              />
            </div>
            <div className="feature-copy">
              <p className="eyebrow feature-label">Graduation internship project</p>
              <h2 id="careflow-title">CareFlow</h2>
              <p className="feature-subtitle">Outpatient management microservices</p>
              <p>I worked on CareFlow’s core infrastructure as a backend developer on a three-person team.</p>
              <ul className="service-grid" aria-label="Core services">
                {coreServices.map(({ name, icon: Icon }) => (
                  <li key={name}><Icon size={16} aria-hidden="true" /> {name}</li>
                ))}
              </ul>
              <ul className="tags" aria-label="Technologies">
                {["Java", "Spring Boot", "RabbitMQ", "PostgreSQL", "Docker"].map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <div className="feature-links">
                <a className="repo-link" href="https://github.com/ntkhai268/careflow">
                  <FaGithub size={19} aria-hidden="true" /> GitHub
                </a>
                <Link className="text-link" href="/articles/careflow-event-delivery">Read about event delivery</Link>
              </div>
            </div>
          </div>
          <VoicePrescription />
        </article>
      </Reveal>

      <ProjectGallery projects={projects} />
    </div>
  );
}
