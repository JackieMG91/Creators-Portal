"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AudioWaveform,
  CalendarDays,
  CreditCard,
  Globe,
  Inbox,
  LayoutDashboard,
  Mail,
  Newspaper,
  Package,
  Radio,
  Receipt,
  Settings,
  Share2,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Placeholder data until Laravel provides the real workspaces and user
const WORKSPACES = [
  { name: "My Workspace", plan: "Starter" },
  { name: "Example Records", plan: "Organization" },
];
const USER = { name: "Dev User", email: "dev@creatorsportal.com" };

// soon: true means the page doesn't exist yet, so it isn't a link
const NAV_GROUPS = [
  {
    label: "Platform",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
      { title: "Calendar", icon: CalendarDays, soon: true },
    ],
  },
  {
    label: "Services",
    items: [
      { title: "Blog Posts", icon: Newspaper, soon: true },
      { title: "Website Builder", icon: Globe, soon: true },
      { title: "Streaming Platforms", icon: Radio, soon: true },
      { title: "Contact Forms", icon: Inbox, soon: true },
      { title: "Payments", icon: Receipt, soon: true },
      { title: "Social Media", icon: Share2, soon: true },
      { title: "Newsletters", icon: Mail, soon: true },
      { title: "Inventory", icon: Package, soon: true },
    ],
  },
  {
    label: "Workspace",
    items: [
      { title: "Team", icon: Users, soon: true },
      { title: "Billing", icon: CreditCard, soon: true },
      { title: "Settings", icon: Settings, soon: true },
    ],
  },
];

function Brand() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <Link href="/dashboard">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <AudioWaveform className="size-4" />
            </div>
            <span className="truncate font-semibold">Creators Portal</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function NavGroup({ group, pathname }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
      <SidebarMenu>
        {group.items.map((item) => (
          <SidebarMenuItem key={item.title}>
            {item.soon ? (
              <>
                <SidebarMenuButton
                  tooltip={item.title}
                  aria-disabled="true"
                  className="cursor-not-allowed opacity-60"
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>Soon</SidebarMenuBadge>
              </>
            ) : (
              <SidebarMenuButton
                asChild
                isActive={pathname === item.url}
                tooltip={item.title}
              >
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Brand />
      </SidebarHeader>

      <SidebarContent>
        {NAV_GROUPS.map((group) => (
          <NavGroup key={group.label} group={group} pathname={pathname} />
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}