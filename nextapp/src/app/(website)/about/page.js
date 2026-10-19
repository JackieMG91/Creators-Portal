export const metadata = {
  title: "About",
  description: "Why we're building one portal for the business side of music.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">About Creators Portal</h1>
      <p className="mt-5 text-lg text-muted-foreground">
        Music professionals shouldn&apos;t have to stitch together a dozen disconnected tools to run
        their business. Creators Portal brings your website, sales, audience, and releases into one
        connected platform.
      </p>
      <h2 className="mt-10 text-2xl font-semibold">Who we serve</h2>
      <p className="mt-3 text-muted-foreground">
        Artists and bands, producers and engineers, music retailers, record labels, and management
        companies.
      </p>
      <h2 className="mt-10 text-2xl font-semibold">Where we are</h2>
      <p className="mt-3 text-muted-foreground">
        We&apos;re in early development and shaping the platform with the people who will use it.
        Replace this section with your own story.
      </p>
    </article>
  );
}