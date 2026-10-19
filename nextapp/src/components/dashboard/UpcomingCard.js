import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UPCOMING_POSTS } from "@/lib/mock-data";

export default function UpcomingCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Scheduled posts</CardTitle>
        <CardDescription>Going out in the next few days.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-3">
          {UPCOMING_POSTS.map((post) => (
            <li
              key={post.title}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div>
                <p className="text-sm font-medium">{post.title}</p>
                <p className="text-xs text-muted-foreground">{post.when}</p>
              </div>
              <Badge variant="secondary">{post.platform}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}