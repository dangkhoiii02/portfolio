import { AudioLines, Boxes, Database, Monitor, Network, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Motion";
import AnimatedArtwork from "@/components/AnimatedArtwork";

const categories = [
  { title: "Backend & APIs", icon: Boxes, skills: ["Java", "Spring Boot", "Node.js", "Fastify", "ASP.NET Core", "REST"] },
  { title: "Distributed systems", icon: Network, skills: ["RabbitMQ", "WebSocket / STOMP", "Transactional Outbox", "Docker Compose"] },
  { title: "Identity & access", icon: ShieldCheck, skills: ["Spring Security", "JWT", "WebAuthn", "DPoP", "Keycloak"] },
  { title: "Data & storage", icon: Database, skills: ["PostgreSQL", "Redis", "SQL Server", "SQLite", "OrientDB"] },
  { title: "Applied AI", icon: AudioLines, skills: ["Python", "Qwen3-ASR", "MLX", "LoRA", "PyTorch", "FFmpeg"] },
  { title: "Web, mobile & embedded", icon: Monitor, skills: ["TypeScript", "Next.js", "React", "Angular", "Flutter", "C++ / ESP32-S3"] },
];

export default function Skills() {
  return (
    <section id="skills" className="shell inner-section skills" aria-labelledby="skills-title">
      <h2 className="inner-title" id="skills-title">Technical toolkit<span>.</span></h2>
      <Reveal className="skills-artwork">
        <AnimatedArtwork asset="technical-toolkit" label="toolkit" width={960} height={384} />
      </Reveal>
      <div className="skills-grid">
        {categories.map(({ title, icon: Icon, skills }) => (
          <article className="skill-group" key={title}>
            <div className="skill-heading">
              <Icon size={20} aria-hidden="true" />
              <h3>{title}</h3>
            </div>
            <ul className="skill-tags">
              {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
