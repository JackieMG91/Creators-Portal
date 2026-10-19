"use client";

import { useState } from "react";
import { ChevronsUpDown, Music, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WORKSPACES } from "@/lib/mock-user";

export default function WorkspaceSwitcher() {
  const [active, setActive] = useState(WORKSPACES[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-10 gap-2 px-2">
          <div className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Music className="size-4" />
          </div>
          <div className="hidden text-left leading-tight sm:grid">
            <span className="text-sm font-semibold">{active.name}</span>
            <span className="text-xs font-normal text-muted-foreground">
              {active.plan}
            </span>
          </div>
          <ChevronsUpDown className="size-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-56">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Workspaces
        </DropdownMenuLabel>
        {WORKSPACES.map((workspace) => (
          <DropdownMenuItem
            key={workspace.name}
            onClick={() => setActive(workspace)}
          >
            {workspace.name}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          <Plus /> Add workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}