import { AudioLines, Boxes, Database, Monitor, Network, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Motion";
import ToolkitArtwork from "@/components/ToolkitArtwork";

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
      <Reveal>
        <ToolkitArtwork />
      </Reveal>
      <div className="skills-grid">
        {categories.map(({ title, icon: Icon, skills }) => (
          <article className="skill-group" key={title}>
            <Icon size={22} aria-hidden="true" />
            <div>
              <h3>{title}</h3>
              <p>{skills.join(" · ")}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
