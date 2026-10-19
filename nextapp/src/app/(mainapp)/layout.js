import AppSidebar from "@/components/layout/AppSidebar";
import TopNav from "@/components/layout/TopNav";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function MainAppLayout({ children }) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <TopNav />
          <div className="flex-1 p-6 md:p-10">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}