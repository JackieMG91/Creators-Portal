import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PLANS } from "@/config/site";

export const metadata = {
  title: "Pricing",
  description: "Plans for solo artists, growing teams, labels, and large organizations.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Pricing</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Plans that grow with you. Prices and final limits will be announced at launch.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {PLANS.map((plan) => (
          <Card key={plan.name} className={plan.featured ? "border-primary ring-1 ring-primary" : ""}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.for}</CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col gap-4">
              <ul className="grid gap-2 text-sm">
                {plan.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {p}
                  </li>
                ))}
              </ul>
              <Button asChild variant={plan.featured ? "default" : "outline"} className="mt-auto">
                <Link href={plan.enterprise ? "/contact" : "/signup"}>
                  {plan.enterprise ? "Contact us" : "Get started"}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}