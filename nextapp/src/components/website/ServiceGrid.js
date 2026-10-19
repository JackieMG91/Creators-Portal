import { Card, CardContent } from "@/components/ui/card";

export default function ServiceGrid({ services }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <Card key={s.title}>
          <CardContent className="grid gap-2">
            <div className="w-fit rounded-lg bg-primary/10 p-2 text-primary">
              <s.icon className="size-5" />
            </div>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}