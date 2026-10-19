import Link from "next/link";
import Byline from "@/components/website/Byline";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { POSTS } from "@/config/site";

export const metadata = {
  title: "Blog",
  description: "Guides and updates for music creators and the teams behind them.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full transition hover:border-primary">
              <CardHeader className="gap-3">
                <Byline authorId={post.author} date={post.date} />
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}