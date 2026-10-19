import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import MessagesMenu from "@/components/layout/MessagesMenu";
import SearchBar from "@/components/layout/SearchBar";
import UserMenu from "@/components/layout/UserMenu";
import WorkspaceSwitcher from "@/components/layout/WorkspaceSwitcher";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-10 grid h-14 shrink-0 grid-cols-[auto_1fr_auto] items-center gap-2 border-b bg-background px-4 md:grid-cols-[1fr_minmax(0,36rem)_1fr]">
      <div className="flex items-center gap-1">
        <SidebarTrigger />
        <Separator
          orientation="vertical"
          className="mx-1 data-[orientation=vertical]:h-4"
        />
        <WorkspaceSwitcher />
      </div>

      <SearchBar />

      <div className="flex items-center justify-end gap-1">
        <MessagesMenu />
        <UserMenu />
      </div>
    </header>
  );
}