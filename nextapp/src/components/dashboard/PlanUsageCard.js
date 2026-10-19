import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PLAN } from "@/lib/mock-data";

export default function PlanUsageCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{PLAN.name} plan</CardTitle>
        <CardDescription>Your usage this billing period.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {PLAN.usage.map((item) => {
          const percent = Math.round((item.used / item.limit) * 100);
          return (
            <div key={item.label} className="grid gap-1.5">
              <div className="flex justify-between text-sm">
                <span>{item.label}</span>
                <span className="text-muted-foreground">
                  {item.used.toLocaleString()} / {item.limit.toLocaleString()}
                </span>
              </div>
              <Progress value={percent} />
            </div>
          );
        })}
        <Button variant="outline" className="mt-2">
          Compare plans
        </Button>
      </CardContent>
    </Card>
  );
}