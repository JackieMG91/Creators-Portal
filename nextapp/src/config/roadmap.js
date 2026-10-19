import {
  CalendarDays,
  Disc3,
  Download,
  FileText,
  Gift,
  Heart,
  Inbox,
  Link2,
  Mail,
  Radio,
  Receipt,
  Send,
  Share2,
  Shirt,
  Sparkles,
  Ticket,
  Users,
  Webhook,
} from "lucide-react";

export const STATUS = {
  next: { label: "Next up", variant: "default", note: "What we're building first" },
  planned: { label: "Planned", variant: "secondary", note: "On our list" },
  exploring: { label: "Exploring", variant: "outline", note: "Researching, shaped by feedback" },
};

export const ROADMAP_GROUPS = [
  "Websites & fans",
  "Audience & marketing",
  "Business tools",
  "Music & releases",
  "For labels & teams",
];

// featured: true means it also appears on the landing page
export const FUTURE_FEATURES = [
  // Websites & fans
  { group: "Websites & fans", title: "Contact forms inbox", icon: Inbox, status: "next", featured: true, text: "See and reply to messages from every form on your sites in one place." },
  { group: "Websites & fans", title: "EPK & media kit pages", icon: FileText, status: "planned", featured: true, text: "Ready-made press kit pages you can share with venues, press, and partners." },
  { group: "Websites & fans", title: "Ticketing & tour dates", icon: Ticket, status: "planned", text: "Show upcoming dates and sell tickets right from your website." },
  { group: "Websites & fans", title: "Link-in-bio page", icon: Link2, status: "planned", text: "One simple page that connects fans to everything you do." },
  { group: "Websites & fans", title: "Fan memberships", icon: Heart, status: "exploring", text: "Offer subscriptions with exclusive content and perks." },
  { group: "Websites & fans", title: "Tip jar & donations", icon: Gift, status: "exploring", text: "Let fans support you directly with a one-time contribution." },

  // Audience & marketing
  { group: "Audience & marketing", title: "Newsletters & CRM", icon: Mail, status: "planned", featured: true, text: "Keep every contact in one place and send emails to the right people." },
  { group: "Audience & marketing", title: "Social scheduling & analytics", icon: Share2, status: "planned", featured: true, text: "Plan posts across platforms and see what's working." },
  { group: "Audience & marketing", title: "Release landing pages", icon: Disc3, status: "planned", text: "A shareable page for every release, created automatically." },
  { group: "Audience & marketing", title: "AI-assisted email campaigns", icon: Sparkles, status: "exploring", text: "Draft campaigns for releases, tours, and merch in a few clicks." },

  // Business tools
  { group: "Business tools", title: "Payments, invoices & receipts", icon: Receipt, status: "next", featured: true, text: "Get paid and send professional invoices and receipts." },
  { group: "Business tools", title: "Calendar", icon: CalendarDays, status: "planned", text: "Releases, posts, newsletters, shows, and due dates on one calendar." },
  { group: "Business tools", title: "Digital downloads & bundles", icon: Download, status: "planned", text: "Sell music, sample packs, and bundles directly to fans." },
  { group: "Business tools", title: "Print-on-demand merch", icon: Shirt, status: "exploring", text: "Sell merch without holding inventory." },

  // Music & releases
  { group: "Music & releases", title: "Streaming platform profiles", icon: Radio, status: "planned", featured: true, text: "Keep track of where your music lives and which profiles are connected." },
  { group: "Music & releases", title: "Music distribution", icon: Send, status: "exploring", text: "Send releases to major streaming services through a trusted partner." },

  // For labels & teams
  { group: "For labels & teams", title: "Catalog management", icon: Disc3, status: "exploring", text: "Keep release and track information organized for your whole roster." },
  { group: "For labels & teams", title: "Royalty splits & statements", icon: Receipt, status: "exploring", text: "Set up splits and share clear earnings statements with artists." },
  { group: "For labels & teams", title: "Artist dashboards", icon: Users, status: "exploring", text: "Give artists a view of their own releases and earnings." },
  { group: "For labels & teams", title: "Open API & webhooks", icon: Webhook, status: "exploring", text: "Connect Creators Portal to the other tools your team uses." },
];