import { SiteFooter, SiteHeader } from "@/components/website/SiteChrome";
import { SITE } from "@/config/site";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | All-in-one platform for music businesses`, template: `%s | ${SITE.name}` },
  description: SITE.description,
};

export default function WebsiteLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}