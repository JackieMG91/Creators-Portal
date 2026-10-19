import { Globe, Inbox, Mail, Package, Radio, Receipt, Share2, Users } from "lucide-react";

export const SITE = {
  name: "Creators Portal",
  tagline: "Build your presence. Manage your business. Reach your audience.",
  description:
    "Creators Portal is an all-in-one platform for building, managing, distributing, and growing music businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const SERVICES = [
  { title: "Website builder", icon: Globe, text: "Launch a professional site without technical skills." },
  { title: "Contact forms", icon: Inbox, text: "Collect and manage messages from every site you publish." },
  { title: "Streaming platforms", icon: Radio, text: "Keep track of where your music lives and distribute new releases." },
  { title: "Payments & invoices", icon: Receipt, text: "Get paid and send professional invoices and receipts." },
  { title: "Inventory & sales", icon: Package, text: "Sell music, merch, and services through multiple channels." },
  { title: "Newsletters & CRM", icon: Mail, text: "Organize your contacts and keep your fans in the loop." },
  { title: "Social media", icon: Share2, text: "Plan and schedule content across platforms." },
  { title: "Teams & workspaces", icon: Users, text: "Manage artists, brands, and collaborators with the right permissions." },
];

// Limits are illustrative until pricing is validated
export const PLANS = [
  { name: "Starter", for: "Independent creators and small teams", points: ["1 workspace, up to 2 users", "1 website", "2,500 contacts", "25 GB storage"] },
  { name: "Professional", for: "Growing artists, bands, producers, and retailers", featured: true, points: ["1 workspace, up to 10 users", "3 websites", "25,000 contacts", "250 GB storage", "Automation and distribution"] },
  { name: "Organization", for: "Labels and management companies", points: ["Up to 10 workspaces, 50 users", "20 websites", "250,000 contacts", "2 TB storage", "Advanced permissions and reporting"] },
  { name: "Enterprise", for: "Large organizations with custom needs", enterprise: true, points: ["Custom workspaces and users", "Custom integrations and security", "Contracted support"] },
];

export const AUTHORS = {
  "Jacqueline McGough": {
    name: "Jacqueline McGough",
    role: "Company founder and product lead",
    bio: "Jacqueline is a musician and software engineer who has built products for artists, labels, and music retailers. She founded Creators Portal to help music professionals manage their business in one place.",
  },
  // Add real people here:
  // "jackie-smith": { name: "Jackie Smith", role: "Founder", bio: "..." },
};

// Sample posts: replace with real ones
export const POSTS = [
  {
    slug: "welcome-to-creators-portal",
    title: "Welcome to Creators Portal",
    author: "Jacqueline McGough",
    date: "2026-10-18",
    excerpt: "Why we're building one home for the business side of music.",
    body: [
      "Most music professionals run their careers across a dozen disconnected tools. Creators Portal brings your website, sales, audience, and releases into one place.",
      "We'll use this blog to share product updates and practical guides for artists, labels, and the teams behind them.",
    ],
  },
  {
    slug: "your-home-base-online",
    title: "Why every artist needs a home base online",
    author: "Jacqueline McGough",
    date: "2026-10-18",
    excerpt: "Social platforms change. Your own website doesn't.",
    body: [
      "Streaming and social profiles are rented space. A website you control is where fans can always find your music, your dates, and your store.",
      "Start with the basics: a clear bio, your latest release, a way to join your mailing list, and a way to contact you.",
    ],
  },
    {
    slug: "why-i-am-building-creators-portal",
    title: "Why I'm building Creators Portal",
    author: "Jacqueline McGough",
    date: "2026-10-18",
    excerpt:
      "AI is reshaping software. Here's why I believe SaaS needs to offer more, and why it should be built for creators by creators.",
    body: [
      "AI is changing the software-as-a-service industry as a whole. When almost anyone can generate a simple tool in an afternoon, a product that only does one narrow thing is easy to copy. I believe SaaS services need to offer more: more depth, more connection between the tools people rely on, and a real understanding of the work the software is meant to support.",
      "I also believe the change has to come from within the industry. Too much software for creative work is designed by people who have never released a record, booked a show, or run a merch table. Creators Portal is a SaaS service built for creators, by creators, so the people shaping the product understand the problems because they have lived them.",
      "There's a third shift. SaaS has traditionally been sold to teams, one department at a time, with each tool built for a general business. Now it needs to serve entire industries by targeting the organizations within them. In music, that means labels, management companies, studios, retailers, and bands, each running a real business with its own workflows, catalogs, and partners. Software built around how those organizations actually operate will serve them better than a generic tool adapted to fit.",
      "My biggest interest in creating Creators Portal is to provide a dedicated space for music creators to manage their online presence and business operations. I'm a big fan of the YouTube creator [Rick Beato](https://www.youtube.com/@RickBeato). Several years ago he released a video called [A Warning On the Future of Music: with Author Ted Gioia](https://youtu.be/qM4sEl8avug). In it, Ted talked about institutional disconnection: the way big tech companies lose touch with the industries they serve, and why that disconnection is a problem.",
      "I think the same is true of SaaS. Too many products are created for teams, not for industries. That approach has some merit, but as a result it has created a gap, and AI has exploited it. The only problem with building your own tools is that it takes time, and AI is not perfect. That's why I developed Creators Portal: to give creators more time back to create the things they love. It's my attempt to build a service that understands the music industry because it was built by people who have lived in it.",
      "The idea is simple: one portal to build your presence, manage your business, and reach your audience. It's early, and I'll share what I learn along the way.",
    ],
  },
];