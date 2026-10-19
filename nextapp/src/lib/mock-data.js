import {
  DollarSign,
  Eye,
  Mail,
  Share2,
  Users,
  Package,
  Globe,
} from "lucide-react";

export const STATS = [
  { label: "Website visits", value: "12,480", change: 12.4, icon: Eye },
  { label: "Revenue", value: "$4,260", change: 8.1, icon: DollarSign },
  { label: "Newsletter subscribers", value: "3,214", change: 5.2, icon: Mail },
  { label: "Social reach", value: "48.9K", change: -2.3, icon: Share2 },
];

export const ACTIVITY = [
  { icon: Users, text: "New subscriber: maya@example.com", time: "5 min ago" },
  { icon: DollarSign, text: "Invoice #1042 was paid ($320.00)", time: "1 hour ago" },
  { icon: Package, text: "Low stock: Tour Tee (Black, M)", time: "3 hours ago" },
  { icon: Globe, text: "Website published: Summer Tour page", time: "Yesterday" },
  { icon: Mail, text: "Newsletter sent to 3,180 subscribers", time: "2 days ago" },
];

export const UPCOMING_POSTS = [
  { title: "New single teaser", platform: "Instagram", when: "Today, 6:00 PM" },
  { title: "Tour dates announcement", platform: "X", when: "Tomorrow, 10:00 AM" },
  { title: "Behind the scenes clip", platform: "TikTok", when: "Fri, 2:30 PM" },
];

// Limits come from the Starter plan in the product plan
export const PLAN = {
  name: "Starter",
  usage: [
    { label: "Contacts", used: 1820, limit: 2500 },
    { label: "Storage (GB)", used: 9.4, limit: 25 },
    { label: "Users", used: 1, limit: 2 },
    { label: "Websites", used: 1, limit: 1 },
  ],
};

export const SERVICE_DETAILS = {
  website: {
    label: "Website builder",
    description: "Build a professional site for your music.",
    icon: Globe,
  },
  payments: {
    label: "Payments & invoices",
    description: "Get paid and send professional invoices.",
    icon: DollarSign,
  },
  social: {
    label: "Social media",
    description: "Plan and schedule posts across platforms.",
    icon: Share2,
  },
  newsletters: {
    label: "Newsletters",
    description: "Email your fans and customers directly.",
    icon: Mail,
  },
  inventory: {
    label: "Inventory",
    description: "Sell and manage music, merch, and more.",
    icon: Package,
  },
};