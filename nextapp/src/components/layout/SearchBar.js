"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  function handleSubmit(event) {
    event.preventDefault();
    // TODO: run the search once there is data to search
  }

  return (
    <form role="search" onSubmit={handleSubmit} className="relative w-full">
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        aria-label="Search"
        placeholder="Search contacts, posts, products..."
        className="pl-9"
      />
    </form>
  );
}