import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceGrid from "@/components/website/ServiceGrid";
import { SERVICES, SITE } from "@/config/site";

export const metadata = { alternates: { canonical: "/" } };

const AUDIENCES = ["Artists and bands", "Producers and engineers", "Music retailers", "Record labels", "Management companies"];

export default function LandingPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-20 text-center md:py-28">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          {SITE.tagline}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{SITE.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg"><Link href="/signup">Get started <ArrowRight /></Link></Button>
          <Button asChild size="lg" variant="outline"><Link href="/services">Explore services</Link></Button>
        </div>
      </section>

      <section className="border-y bg-muted/30 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-medium text-muted-foreground">Built for</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {AUDIENCES.map((a) => (
              <span key={a} className="rounded-full border bg-background px-4 py-1.5 text-sm">{a}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Everything in one portal</h2>
        <div className="mt-6"><ServiceGrid services={SERVICES.slice(0, 6)} /></div>
        <Button asChild variant="link" className="mt-4 px-0"><Link href="/services">See all services</Link></Button>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl bg-primary p-10 text-center text-primary-foreground">
          <h2 className="text-2xl font-semibold">Ready to build your presence?</h2>
          <Button asChild variant="secondary" size="lg" className="mt-5"><Link href="/signup">Create your account</Link></Button>
        </div>
      </section>
    </>
  );
}