"use client";

import { MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MESSAGES } from "@/lib/mock-user";

export default function MessagesMenu() {
  const unread = MESSAGES.filter((m) => m.unread).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label={`Messages, ${unread} unread`}
        >
          <MessageSquare />
          {unread > 0 && (
            <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-third text-[10px] font-medium text-white">
              {unread}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Messages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {MESSAGES.map((message) => (
          <DropdownMenuItem
            key={message.from}
            className="flex-col items-start gap-0.5"
          >
            <div className="flex w-full items-center justify-between">
              <span className={message.unread ? "font-semibold" : ""}>
                {message.from}
              </span>
              <span className="text-xs text-muted-foreground">
                {message.time}
              </span>
            </div>
            <span className="w-full truncate text-xs text-muted-foreground">
              {message.preview}
            </span>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Open inbox (coming soon)</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}