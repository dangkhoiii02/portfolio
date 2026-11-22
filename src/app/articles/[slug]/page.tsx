import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleArtwork from "@/components/ArticleArtwork";
import { articles } from "@/content/articles";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);
  return article ? { title: article.title, description: article.summary } : {};
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);
  if (!article) notFound();

  return (
    <article className="shell reading-page">
      <header>
        <Link className="text-link" href="/articles">All articles</Link>
        <p className="eyebrow">{article.topic}</p>
        <h1>{article.title}</h1>
        <p>{article.summary}</p>
      </header>
      <ArticleArtwork visual={article.visual} />
      <div className="reading-body">
        {article.sections.map(({ heading, body }) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{body}</p>
          </section>
        ))}
        <a className="text-link" href={article.href}>{article.linkLabel}</a>
      </div>
    </article>
  );
}
