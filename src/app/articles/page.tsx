import type { Metadata } from "next";
import Link from "next/link";
import ArticleArtwork from "@/components/ArticleArtwork";
import { Reveal } from "@/components/Motion";
import PageHeading from "@/components/PageHeading";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Articles",
  description: "Technical notes on CareFlow, Vietnamese speech recognition, databases, and ESP32 audio.",
};

export default function ArticlesPage() {
  return (
    <>
      <PageHeading title="Technical" emphasis="articles." description="Implementation details and trade-offs from my projects." />
      <div className="shell articles-content">
        <section aria-labelledby="featured-articles-title">
          <h2 id="featured-articles-title" className="sr-only">Featured articles</h2>
          <div className="articles-grid">
            {articles.slice(0, 2).map(({ slug, topic, title, summary, visual }, index) => (
              <Reveal key={slug} delay={index * 0.09}>
                <article className="article-card">
                  <Link href={`/articles/${slug}`}>
                    <ArticleArtwork visual={visual} />
                    <div className="article-card-body">
                      <p className="eyebrow">{topic}</p>
                      <h3>{title}</h3>
                      <p>{summary}</p>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="article-list" aria-labelledby="more-articles-title">
          <h2 className="inner-title" id="more-articles-title">More articles<span>.</span></h2>
          <ul>
            {articles.slice(2).map(({ slug, topic, title, visual }) => (
              <li key={slug}>
                <Reveal>
                  <Link className="article-row" href={`/articles/${slug}`}>
                    <span className="article-row-title">{title}</span>
                    <span className="article-row-topic">{topic}</span>
                    <div className="article-preview" aria-hidden="true"><ArticleArtwork visual={visual} /></div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
