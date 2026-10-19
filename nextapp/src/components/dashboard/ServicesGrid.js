import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAnswers } from "@/lib/answers";
import { SERVICE_DETAILS } from "@/lib/mock-data";

export default async function ServicesGrid() {
  const answers = await getAnswers();

  // No answers (dev bypass or skipped questionnaire): show every service
  const selected = answers?.services?.length
    ? answers.services
    : Object.keys(SERVICE_DETAILS);

  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold">Your services</h2>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {selected.map((key) => {
          const service = SERVICE_DETAILS[key];
          if (!service) return null;
          return (
            <Card key={key}>
              <CardContent className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <service.icon className="size-5" />
                  </div>
                  <Badge variant="secondary">Soon</Badge>
                </div>
                <div>
                  <h3 className="font-semibold">{service.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <Button variant="outline" size="sm" disabled>
                  Set up
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}