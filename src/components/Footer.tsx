import { Mail, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer id="contact" className="site-footer" aria-labelledby="contact-title">
      <div className="shell footer-inner">
        <div className="footer-intro">
          <h2 id="contact-title">Let’s talk<span>.</span></h2>
          <p>Open to internships and full-time roles in backend engineering, distributed systems, and applied AI.</p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}><Mail size={19} aria-hidden="true" /> {profile.email}</a>
          <a href={`tel:${profile.phoneHref}`}><Phone size={19} aria-hidden="true" /> {profile.phone}</a>
          <a href={profile.github}><FaGithub size={19} aria-hidden="true" /> github.com/dangkhoiii02</a>
        </div>
      </div>
    </footer>
  );
}
