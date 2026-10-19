import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ACTIVITY } from "@/lib/mock-data";

export default function ActivityCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent activity</CardTitle>
        <CardDescription>What is happening across your workspace.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-4">
          {ACTIVITY.map((item) => (
            <li key={item.text} className="flex items-center gap-3">
              <div className="rounded-full bg-muted p-2">
                <item.icon className="size-4 text-muted-foreground" />
              </div>
              <p className="flex-1 text-sm">{item.text}</p>
              <span className="text-xs text-muted-foreground">{item.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}