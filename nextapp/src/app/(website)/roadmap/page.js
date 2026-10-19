import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FutureFeatures from "@/components/website/FutureFeatures";
import { FUTURE_FEATURES, ROADMAP_GROUPS, STATUS } from "@/config/roadmap";

export const metadata = {
  title: "Roadmap",
  description: "See the features we're building next for music creators and the teams behind them.",
  alternates: { canonical: "/roadmap" },
};

export default function RoadmapPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Roadmap</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        What we&apos;re building for music creators and the teams behind them. Plans can change as we
        learn from the people using the platform.
      </p>

      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {Object.values(STATUS).map((s) => (
          <li key={s.label} className="flex items-center gap-2">
            <Badge variant={s.variant}>{s.label}</Badge>
            <span className="text-muted-foreground">{s.note}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-12">
        {ROADMAP_GROUPS.map((group) => (
          <div key={group}>
            <h2 className="mb-4 text-xl font-semibold">{group}</h2>
            <FutureFeatures features={FUTURE_FEATURES.filter((f) => f.group === group)} />
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-primary p-10 text-center text-primary-foreground">
        <h2 className="text-2xl font-semibold">Be there from the start</h2>
        <Button asChild variant="secondary" size="lg" className="mt-5">
          <Link href="/signup">Create your account</Link>
        </Button>
      </div>
    </section>
  );
}