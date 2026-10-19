import Link from "next/link";
import { notFound } from "next/navigation";
import Byline from "@/components/website/Byline";
import { AUTHORS, POSTS, SITE } from "@/config/site";
import RichText from "@/components/website/RichText";

export const instant = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  const author = AUTHORS[post.author];
  return {
    title: post.title,
    description: post.excerpt,
    authors: author ? [{ name: author.name }] : undefined,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const author = AUTHORS[post.author];

  // Structured data so search engines and AI systems can attribute the article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: author ? { "@type": "Person", name: author.name } : undefined,
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
        ← All posts
      </Link>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">{post.title}</h1>
      <div className="mt-4">
        <Byline authorId={post.author} date={post.date} />
      </div>

      <div className="mt-8 grid gap-4 text-lg">
        {post.body.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
      </div>

      {author && (
        <aside className="mt-12 rounded-xl border bg-muted/30 p-5">
          <p className="font-semibold">{author.name}</p>
          <p className="text-sm text-muted-foreground">{author.role}</p>
          <p className="mt-2 text-sm">{author.bio}</p>
        </aside>
      )}
    </article>
  );
}