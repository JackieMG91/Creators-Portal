import { Suspense } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import StatCards from "@/components/dashboard/StatCards";
import ActivityCard from "@/components/dashboard/ActivityCard";
import UpcomingCard from "@/components/dashboard/UpcomingCard";
import PlanUsageCard from "@/components/dashboard/PlanUsageCard";
import GettingStartedCard from "@/components/dashboard/GettingStartedCard";
import ServicesGrid from "@/components/dashboard/ServicesGrid";

export const metadata = { title: "Dashboard | Creators Portal" };

function Skeleton({ className }) {
  return <div className={`animate-pulse rounded-xl bg-muted ${className}`} />;
}

export default function DashboardPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Here is how your music business is doing.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Plus /> New post
          </Button>
          <Button>
            <Plus /> Create invoice
          </Button>
        </div>
      </div>

      <StatCards />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="grid gap-6 lg:col-span-2">
          <ActivityCard />
          <UpcomingCard />
        </div>
        <div className="grid content-start gap-6">
          <PlanUsageCard />
          <Suspense fallback={<Skeleton className="h-56" />}>
            <GettingStartedCard />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={<Skeleton className="h-48" />}>
        <ServicesGrid />
      </Suspense>
    </div>
  );
}