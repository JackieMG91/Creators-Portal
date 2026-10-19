import ServiceGrid from "@/components/website/ServiceGrid";
import { SERVICES } from "@/config/site";

export const metadata = {
  title: "Services",
  description: "Websites, payments, streaming platforms, inventory, newsletters, and more in one portal.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        The tools music professionals need, connected in one place.
      </p>
      <div className="mt-8"><ServiceGrid services={SERVICES} /></div>
    </section>
  );
}