import { TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { STATS } from "@/lib/mock-data";

export default function StatCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {STATS.map((stat) => {
        const up = stat.change >= 0;
        const Trend = up ? TrendingUp : TrendingDown;
        return (
          <Card key={stat.label}>
            <CardContent className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
                <p
                  className={`mt-2 flex items-center gap-1 text-xs font-medium ${
                    up ? "text-emerald-600" : "text-third"
                  }`}
                >
                  <Trend className="size-3.5" />
                  {up ? "+" : ""}
                  {stat.change}%
                  <span className="font-normal text-muted-foreground">
                    vs last 30 days
                  </span>
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <stat.icon className="size-5" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}