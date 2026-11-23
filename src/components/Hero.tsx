import Image from "next/image";
import Link from "next/link";
import { AudioLines, Layers3, Mail, MapPin } from "lucide-react";
import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <section id="home" className="shell hero" aria-labelledby="home-title">
      <div className="hero-copy">
        <p className="eyebrow hero-name"><span lang="vi">{profile.name}</span></p>
        <h1 id="home-title"><span>Backend systems.</span> <em>Applied AI.</em></h1>
        <p className="hero-intro">
          I’m a software engineering student at PTIT. On CareFlow, I built services for outpatient care
          and fine-tuned Vietnamese speech recognition for voice-assisted prescription drafts.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/projects">Explore projects</Link>
          <Link className="text-link" href="/resume">View résumé</Link>
        </div>
        <div className="hero-details">
          <p><MapPin size={16} aria-hidden="true" /> {profile.location}</p>
          <a href="#contact"><Mail size={16} aria-hidden="true" /> Contact</a>
        </div>
      </div>

      <figure className="hero-stage">
        <div className="hero-art">
          <Image
            src="/assets/khoi-engineering-portrait.webp"
            alt={`Edited portrait of ${profile.name} with engineering and speech waveform imagery`}
            fill
            preload
            sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1320px) 44vw, 590px"
          />
        </div>
        <figcaption className="hero-caption">
          <Link href="/projects#careflow"><Layers3 size={16} aria-hidden="true" /> CareFlow infrastructure</Link>
          <Link href="/projects#voice-prescription"><AudioLines size={16} aria-hidden="true" /> Vietnamese speech recognition</Link>
        </figcaption>
      </figure>
    </section>
  );
}
