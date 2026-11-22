import { MapPin } from "lucide-react";
import Image from "next/image";
import { CountUp, Reveal } from "@/components/Motion";
import { internship, profile } from "@/content/profile";

const facts = [
  { value: profile.gpa, decimals: 2, label: "Cumulative GPA out of 4.00" },
  { value: profile.credits, label: "Credits earned by Nov 2026" },
  { value: internship.months, label: "Months at SuperShip" },
];

export default function About() {
  return (
    <section id="about" className="shell about" aria-labelledby="biography-title">
      <div className="about-grid">
        <Reveal className="about-intro">
          <h2 id="biography-title">Biography</h2>
          <p>
            I’m <strong lang="vi">{profile.name}</strong>, a software engineering student at PTIT in Ho Chi Minh City.
            I’m interested in how backend systems keep data and workflows consistent across services.
          </p>
          <p>
            On CareFlow I worked from API contracts through integration testing, with a focus on
            authentication, queues, and event delivery.
          </p>
          <p>
            My applied AI work includes preparing Vietnamese training data, fine-tuning speech recognition
            models, and measuring errors on held-out audio.
          </p>
        </Reveal>

        <Reveal className="identity-frame" delay={0.07}>
          <figure className="identity-card">
            <Image
              className="identity-photo"
              src="/assets/avatar.webp"
              alt={`Portrait of ${profile.name}`}
              width={1080}
              height={1080}
              sizes="(max-width: 600px) calc(100vw - 60px), (max-width: 900px) 44vw, (max-width: 1320px) 30vw, 390px"
              preload
            />
            <figcaption className="identity-caption">
              <p lang="vi">{profile.name}</p>
              <span><MapPin size={15} aria-hidden="true" /> {profile.location}</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.14}>
          <dl className="profile-facts">
            {facts.map(({ value, decimals, label }) => (
              <div className="profile-fact" key={label}>
                <dt>{label}</dt>
                <dd>
                  <span className="sr-only">{value.toFixed(decimals)}</span>
                  <CountUp value={value} decimals={decimals} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
