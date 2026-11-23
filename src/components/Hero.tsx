import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <section id="home" className="shell hero" aria-labelledby="home-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">PTIT · Software engineering</p>
        <h1 id="home-title" lang="vi">{profile.name}</h1>
        <p className="hero-focus">Backend systems &amp; applied AI</p>
        <p className="hero-intro">
          I’m a student building APIs and event-driven services. My work spans infrastructure monitoring,
          real-time messaging, and fine-tuning Vietnamese speech recognition models.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/about">About me</Link>
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
      </figure>
    </section>
  );
}
