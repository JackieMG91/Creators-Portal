"use client";

import { ChevronDown, LogOut } from "lucide-react";

import { logout } from "@/app/actions";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { USER } from "@/lib/mock-user";

export default function UserMenu() {
  const initials = USER.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-10 gap-2 px-2">
          <Avatar className="size-8">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="hidden text-left leading-tight lg:grid">
            <span className="text-sm font-semibold">{USER.name}</span>
            <span className="text-xs font-normal text-muted-foreground">
              {USER.email}
            </span>
          </div>
          <ChevronDown className="hidden size-4 text-muted-foreground lg:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-56">
        <DropdownMenuLabel className="font-normal">
          <p className="text-sm font-medium">{USER.name}</p>
          <p className="text-xs text-muted-foreground">{USER.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <form action={logout}>
          <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
            <button type="submit" className="w-full cursor-pointer">
              <LogOut /> Log out
            </button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}