import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AUTHORS } from "@/config/site";

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function Byline({ authorId, date }) {
  const author = AUTHORS[authorId];
  if (!author) return null;

  return (
    <div className="flex items-center gap-3">
      <Avatar className="size-8">
        <AvatarFallback className="text-xs">{initials(author.name)}</AvatarFallback>
      </Avatar>
      <div className="text-sm leading-tight">
        <p className="font-medium">{author.name}</p>
        <p className="text-muted-foreground">{formatDate(date)}</p>
      </div>
    </div>
  );
}