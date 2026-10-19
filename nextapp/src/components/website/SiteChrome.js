import Link from "next/link";
import { AudioWaveform } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <AudioWaveform className="size-4" />
          </span>
          {SITE.name}
        </Link>
        <nav className="order-last flex w-full gap-5 text-sm md:order-none md:w-auto">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          <Button asChild variant="ghost"><Link href="/login">Log in</Link></Button>
          <Button asChild><Link href="/signup">Get started</Link></Button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground">
        <p>© 2026 {SITE.name}</p>
        <nav className="flex gap-5">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}