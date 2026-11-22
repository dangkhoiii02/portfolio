import Image from "next/image";
import Link from "next/link";
import { FileText, Mail, MapPin } from "lucide-react";
import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <section id="home" className="shell hero" aria-labelledby="home-title">
      <div className="hero-stage">
        <div className="hero-art">
          <Image
            src="/assets/systems-hero.webp"
            alt=""
            fill
            preload
            sizes="(max-width: 850px) calc(100vw - 72px), (max-width: 1280px) 42vw, 550px"
          />
        </div>
        <a className="orbit-contact" href="#contact"><Mail size={18} aria-hidden="true" /> Contact</a>
      </div>

      <div className="hero-copy">
        <p className="eyebrow hero-name"><span lang="vi">{profile.name}</span></p>
        <h1 id="home-title"><span>Reliable systems.</span> <em>Practical AI.</em></h1>
        <p className="hero-intro">
          I’m a software engineering student at PTIT. I build backend services and fine-tune Vietnamese
          speech recognition models.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/resume"><FileText size={18} aria-hidden="true" /> View résumé</Link>
          <Link className="text-link" href="/projects">Explore projects</Link>
        </div>
        <p className="hero-location"><MapPin size={17} aria-hidden="true" /> {profile.location}</p>
      </div>
    </section>
  );
}
