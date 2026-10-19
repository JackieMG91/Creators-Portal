# Creators Portal

> Build your presence. Manage your business. Reach your audience from one portal.

Creators Portal is an all-in-one SaaS platform for building, managing, distributing, and growing music businesses. It brings website, content, sales, distribution, CRM, and social media management tools together in one connected platform so music professionals don't have to juggle disconnected systems.

## Who It's For

- Musicians, solo artists, and bands
- Music producers and recording engineers
- Music retailers and merchandise sellers
- Record labels
- Arts managers and artist management companies

## Core Services

| Service | Description |
|---|---|
| **Website Builder** | Professional, customizable online presence without advanced technical skills |
| **Contact Forms** | Manage forms and submissions for every site a workspace publishes |
| **Headless CMS** | Central content management published across sites, apps, and campaigns |
| **Multi-Outlet Sales Repository** | Central catalog for music, merch, and services sold through multiple channels |
| **Payments, Invoices & Receipts** | Get paid and send professional invoices and receipts |
| **Music Distribution** | Distribute releases to supported digital outlets and manage release info |
| **CRM & Newsletters** | Contacts, fan relationships, outreach, and email newsletters |
| **Social Media Management** | Plan and manage social content and campaigns across platforms |
| **Messaging** | In-app messages between workspace members and contacts |

## Tech Stack

Creators Portal is a **single Next.js application**: one language, one codebase, one deployment. Items marked *(proposed)* are recommendations that haven't been locked in yet.

| Concern | Choice |
|---|---|
| Framework | **Next.js** (App Router, JavaScript) |
| Styling | **Tailwind CSS 4** |
| UI components | **shadcn/ui** (Radix, Lucide icons) |
| Database | **PostgreSQL** on a managed host such as Neon or Supabase *(proposed)* |
| Database access | **Drizzle** or **Prisma** *(proposed)* |
| Authentication | **Better Auth** or **Auth.js** *(proposed)* |
| Payments & billing | **Stripe** *(proposed)* |
| Background jobs | **Inngest** or **Trigger.dev** *(proposed)* |
| File storage | S3-compatible storage such as Cloudflare R2 *(proposed)* |
| Transactional email | **Resend** *(proposed)* |
| Hosting | **Vercel** (or an equivalent managed platform) |

> Favor managed services during the MVP to reduce operational overhead while preserving a path to scale.

### Application Structure

The app uses Next.js **route groups** to give each area its own layout without changing URLs:

| Route group | URLs | Purpose |
|---|---|---|
| `(onboarding)` | `/login`, `/signup`, `/questionnaire` | Centered, no-sidebar layout for signing in and the post-signup questionnaire |
| `(mainapp)` | `/dashboard` and every service page | Logged-in app with the sidebar and top bar |
| `(marketing)` *(planned)* | `/`, pricing, product pages | Public marketing site, server-rendered for SEO |

A proxy (`src/proxy.js`) sends logged-out visitors to `/login` and logged-in users to `/dashboard`. In development, set `DEV_AUTH_BYPASS=true` to skip login entirely.

### Infrastructure

- **Database:** PostgreSQL for accounts, workspaces, catalogs, CRM records, releases, permissions, subscriptions, and other transactional data
- **Caching & rate limiting:** a managed Redis service (such as Upstash) once needed
- **Media storage:** S3-compatible object storage for artwork, audio, documents, exports, and uploads
- **CDN:** for public media and website assets
- **Search:** PostgreSQL search for the MVP; a dedicated search service later if needed
- **Environments:** local, development, staging, production
- **Delivery:** automated testing and deployment pipelines, centralized logs, error monitoring, uptime checks, protected secrets

## SEO & GEO

Search and AI-answer visibility matter in two places:

1. **The public marketing site** for Creators Portal itself
2. **The websites customers build** with the Website Builder

Both rely on the same foundations, all of which Next.js supports:

- **Server-rendered HTML**, so crawlers (including AI crawlers that don't run JavaScript) see the full content
- **Per-page metadata** (titles, descriptions, canonical URLs, Open Graph)
- **Structured data (JSON-LD)** such as `MusicGroup`, `MusicEvent`, and `MusicAlbum`
- **Sitemaps and `robots.txt`** generated per site
- **Fast load times** and image optimization
- **Clear, quotable content** that answers real questions

The logged-in app (dashboard, CRM, billing) is behind login and doesn't need SEO.

## Authentication & Permissions

- Secure, HTTP-only session cookies for the web app, with token-based access for approved integrations and future clients
- Email verification, password reset, session revocation, login throttling, optional MFA
- **Multi-tenant model:** users can belong to multiple workspaces (artist, band, label, retailer, or management company); all data is scoped to the active workspace with explicit invitations and membership controls

> **Current status:** login and signup use a placeholder session cookie. Real authentication replaces it in Phase 1.

### Roles

| Role | Access |
|---|---|
| Owner | Full control, billing, ownership transfer, deletion |
| Administrator | Manage members, settings, services, most resources |
| Manager | Manage assigned artists, campaigns, CRM, releases, workflows |
| Editor | Create and publish approved website, CMS, catalog, and social content |
| Contributor | Create/update assigned content without publishing or admin rights |
| Viewer | Read-only access to permitted areas |

Authorization is enforced **on the server** (Server Actions and route handlers) through a central permissions layer, never only in the UI. Sensitive actions (billing, member management, publishing, release submission, exports, destructive operations) require explicit permissions and generate audit records.

## Subscriptions & Billing

Subscriptions belong to **workspaces**, not individual users.

| Plan | Best For | Workspaces / Users | Illustrative MVP Limits |
|---|---|---|---|
| **Starter** | Independent creators, small teams | 1 / up to 2 | 1 website; 2,500 contacts; 25 GB |
| **Professional** | Growing artists, bands, producers, retailers | 1 / up to 10 | 3 websites; 25,000 contacts; 250 GB |
| **Organization** | Labels, management companies, multi-brand | Up to 10 / up to 50 | 20 websites; 250,000 contacts; 2 TB |
| **Enterprise** | Large orgs with specialized needs | Custom | Contract-based |

*Prices, allowances, and feature gates should be validated through customer research before launch.*

The onboarding questionnaire (account type, organization type, services wanted, and team size) is used to recommend a plan.

**Billing principles**

- PCI-compliant payment provider (Stripe); never store raw card data
- The application database is the authoritative source for entitlements, limits, add-ons, trials, and account status
- Idempotent usage metering (seats, workspaces, storage, contacts, websites, releases, scheduled posts, distribution activity)
- Signed webhooks processed through retryable, idempotent handlers with an audit trail
- Lifecycle support: trials, upgrades/downgrades, prorations, renewals, failed-payment retries, grace periods, cancellation, reactivation, credits, refunds, manual adjustments

## MVP Roadmap

The original schedule of **~24–30 weeks** assumed a team. Solo development will likely take longer, so treat these as phase ordering rather than dates.

| Phase | Weeks | Focus | Milestone |
|---|---|---|---|
| 1. Foundation & Architecture | 1–4 | Environments, pipelines, database, real authentication, workspace model, roles, audit logging | Architecture baseline approved |
| 2. Core Platform | 5–9 | Onboarding, profiles, navigation, shared data models, notifications, subscription foundations | Internal platform alpha |
| 3. MVP Services | 10–19 | Website builder, contact forms, CMS, sales repository, CRM, distribution, social | Feature-complete MVP |
| 4. Quality, Security & Beta | 20–25 | Testing, accessibility, performance, security review, recovery testing, private beta | Production release candidate |
| 5. Launch & Stabilization | 26–30 | Marketing site, rollout, support resources, monitoring, incident response | Public MVP launch |

### MVP Launch Criteria

- Users can securely create or join a workspace and receive correct permissions
- Core website, CMS, catalog, CRM, distribution, and social workflows work end to end within approved scope
- Workspace data is isolated, backed up, monitored, and recoverable
- Critical user journeys meet agreed accessibility, performance, reliability, and security standards
- Support, analytics, monitoring, and incident procedures are production-ready

## Launch KPIs (First 90 Days)

Proposed planning benchmarks, to be rebaselined after private beta and again after 90 days of production data. These are illustrative targets, not forecasts.

| Category | KPI | Target |
|---|---|---|
| Acquisition | Qualified workspace registrations | 500 in 90 days |
| Activation | Activated workspaces | ≥ 40% within 14 days |
| Time to value | Median time to first successful outcome | < 30 min of active use |
| Adoption | Multi-service adoption | ≥ 30% use 2+ core services monthly |
| Engagement | Monthly active workspace rate | ≥ 60% of activated workspaces |
| Retention | 90-day activated-workspace retention | ≥ 70% |
| Revenue | Trial-to-paid conversion | ≥ 15% |
| Revenue | Monthly recurring revenue | $10,000 by day 90 |
| Reliability | Production availability | ≥ 99.9% monthly |
| Performance | Critical response time (p95) | < 500 ms |
| Quality | Severity-one / severity-two defects | 0 unresolved / < 5 open |
| Support | First-response time | < 1 business day (standard plans) |

## Repository Layout

```
Creators-Portal/
├── creatorsportal/            # The Next.js application
│   ├── public/
│   └── src/
│       ├── app/
│       │   ├── (onboarding)/  # login, signup, questionnaire
│       │   ├── (mainapp)/     # dashboard and service pages
│       │   ├── actions.js     # Server Actions (placeholder auth)
│       │   └── globals.css    # Tailwind + brand color palette
│       ├── components/
│       │   ├── ui/            # shadcn components + shared form pieces
│       │   ├── auth/          # login and signup forms
│       │   ├── onboarding/    # questionnaire
│       │   ├── layout/        # sidebar, top nav, menus
│       │   └── dashboard/     # dashboard cards
│       ├── config/            # questionnaire options and other constants
│       ├── lib/               # helpers and mock data
│       └── proxy.js           # auth redirects
├── LICENSE
└── README.md
```

## Getting Started

From the `creatorsportal` folder:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Create a `.env.local` file in `creatorsportal/` for local settings:

```
DEV_AUTH_BYPASS=true
```

With the bypass on, you can open `/dashboard` without logging in. Set it to `false` (or remove it) to test the real login flow. The bypass is ignored in production builds.

## Status

🚧 Early development.

**Done**
- Login and signup pages with placeholder authentication
- Post-signup questionnaire (account type, services, team size)
- Dashboard shell with sidebar, top bar, workspace switcher, search, and messages menu (mock data)

**Next**
- Database and real authentication
- Workspaces, invitations, and roles
- First service: Website Builder with contact forms

## License

TBD