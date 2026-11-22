import Link from "next/link";
import { BookOpenText, Layers3, MessageCircle } from "lucide-react";
import Hero from "@/components/Hero";
import { Reveal } from "@/components/Motion";

const highlights = [
  { title: "CareFlow", text: "Outpatient microservices with Vietnamese voice drafting.", href: "/projects#careflow", icon: Layers3 },
  { title: "Kiro Chat", text: "Real-time messaging for web and Android.", href: "/projects#kiro-chat", icon: MessageCircle },
  { title: "Technical articles", text: "Implementation details and trade-offs from my projects.", href: "/articles", icon: BookOpenText },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section id="projects" className="shell home-highlights" aria-labelledby="highlights-title">
        <h2 id="highlights-title">Explore the work<span>.</span></h2>
        <div className="home-link-grid">
          {highlights.map(({ title, text, href, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.07}>
              <Link href={href}>
                <Icon size={23} aria-hidden="true" />
                <div><h3>{title}</h3><p>{text}</p></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
