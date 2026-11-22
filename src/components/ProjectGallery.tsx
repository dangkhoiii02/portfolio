"use client";

import Image from "next/image";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { projectArtwork, type ProjectArtworkId } from "@/content/project-artwork";

const filters = ["All", "Software", "AI & Embedded"] as const;
type Category = (typeof filters)[number];

export type Project = {
  id: ProjectArtworkId;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  tags: string[];
  github: string;
};

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<Category>("All");
  const visible = category === "All" ? projects : projects.filter((project) => project.category === category);

  return (
    <section className="project-gallery" aria-labelledby="gallery-title">
      <div className="gallery-header">
        <h2 id="gallery-title">More projects</h2>
        <div className="project-filters" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button key={filter} type="button" aria-pressed={category === filter} onClick={() => setCategory(filter)}>
              {filter}
            </button>
          ))}
        </div>
      </div>
      <p className="sr-only" role="status">{visible.length} projects shown.</p>
      <div className="project-grid">
        {visible.map(({ id, title, description, tags, github }) => (
          <article id={id} key={id} className="project-card">
            <div className="project-image">
              <Image
                src={projectArtwork[id].src}
                alt={projectArtwork[id].alt}
                fill
                sizes="(max-width: 600px) calc(100vw - 60px), (max-width: 1320px) 44vw, 560px"
              />
            </div>
            <div className="project-card-body">
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="tags" aria-label="Technologies">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <a className="repo-link" href={github} aria-label={`${title} on GitHub`}>
                <FaGithub size={17} aria-hidden="true" /> GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
