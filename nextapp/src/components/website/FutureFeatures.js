import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { STATUS } from "@/config/roadmap";

export default function FutureFeatures({ features }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => {
        const status = STATUS[feature.status];
        return (
          <Card key={feature.title}>
            <CardContent className="grid gap-2">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <feature.icon className="size-5" />
                </div>
                <Badge variant={status.variant}>{status.label}</Badge>
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.text}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}