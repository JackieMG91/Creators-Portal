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
| **Headless CMS** | Central content management published across sites, apps, and campaigns |
| **Multi-Outlet Sales Repository** | Central catalog for music, merch, and services sold through multiple channels |
| **Music Distribution** | Distribute releases to supported digital outlets and manage release info |
| **CRM** | Contacts, fan relationships, interactions, opportunities, and outreach |
| **Social Media Management** | Plan and manage social content and campaigns across platforms |

## Architecture

A modular architecture separating the application experience from the core API and marketing layers.

| Layer | Technology | Responsibility |
|---|---|---|
| Customer portal | **Next.js** | UI, server rendering, routing, auth flows, backend-for-frontend logic |
| API & business logic | **Laravel** | Core APIs, platform data, permissions, workflows, integrations |
| Marketing site | **Laravel** | Product info, campaign pages, lead capture |

The Next.js app consumes Laravel APIs through secure, versioned endpoints.

### Infrastructure

- **Database:** PostgreSQL (accounts, organizations, catalogs, CRM, releases, permissions, subscriptions)
- **Cache & queues:** Redis (caching, rate limiting, sessions, queues, background jobs)
- **Media storage:** S3-compatible object storage
- **CDN:** For public media and website assets
- **Search:** PostgreSQL search for MVP; dedicated search service later if needed

### Hosting & Deployment

- **Next.js:** Vercel or equivalent managed platform
- **Laravel:** Laravel Vapor, Laravel Forge on a major cloud provider, or a comparable container platform
- **Data:** Managed PostgreSQL and Redis with backups, monitoring, and encryption
- **Environments:** local, development, staging, production
- **Delivery:** Automated testing/deploy pipelines, centralized logs, error monitoring, uptime checks, protected secrets

> Favor managed services during the MVP to reduce operational overhead while preserving a path to scale.

## Authentication & Permissions

- Centralized authentication with secure, HTTP-only sessions for the web app and token-based access for approved integrations and future clients
- Email verification, password reset, session revocation, login throttling, optional MFA
- **Multi-tenant model:** users can belong to multiple workspaces (artist, band, label, retailer, or management company); all data is scoped to the active workspace with explicit invitations and membership controls

### Roles

| Role | Access |
|---|---|
| Owner | Full control, billing, ownership transfer, deletion |
| Administrator | Manage members, settings, services, most resources |
| Manager | Manage assigned artists, campaigns, CRM, releases, workflows |
| Editor | Create and publish approved website, CMS, catalog, and social content |
| Contributor | Create/update assigned content without publishing or admin rights |
| Viewer | Read-only access to permitted areas |

Authorization is enforced in Laravel via policies and role-based permissions. Sensitive actions (billing, member management, publishing, release submission, exports, destructive operations) require explicit permissions and generate audit records.

## Subscriptions & Billing

Subscriptions belong to **workspaces**, not individual users.

| Plan | Best For | Workspaces / Users | Illustrative MVP Limits |
|---|---|---|---|
| **Starter** | Independent creators, small teams | 1 / up to 2 | 1 website; 2,500 contacts; 25 GB |
| **Professional** | Growing artists, bands, producers, retailers | 1 / up to 10 | 3 websites; 25,000 contacts; 250 GB |
| **Organization** | Labels, management companies, multi-brand | Up to 10 / up to 50 | 20 websites; 250,000 contacts; 2 TB |
| **Enterprise** | Large orgs with specialized needs | Custom | Contract-based |

*Prices, allowances, and feature gates should be validated through customer research before launch.*

**Billing principles**

- PCI-compliant payment provider; never store raw card data
- Laravel is the authoritative source for entitlements, limits, add-ons, trials, and account status
- Idempotent usage metering (seats, workspaces, storage, contacts, websites, releases, scheduled posts, distribution activity)
- Signed webhooks processed through queued, retryable, idempotent handlers with an audit trail
- Lifecycle support: trials, upgrades/downgrades, prorations, renewals, failed-payment retries, grace periods, cancellation, reactivation, credits, refunds, manual adjustments

## MVP Roadmap

Indicative schedule: **~24–30 weeks**, subject to team size, integration approvals, and final scope.

| Phase | Weeks | Focus | Milestone |
|---|---|---|---|
| 1. Foundation & Architecture | 1–4 | Repos, environments, pipelines, workspace model, auth, roles, audit logging | Architecture baseline approved |
| 2. Core Platform | 5–9 | Onboarding, profiles, navigation, shared models, versioned APIs, notifications, subscription foundations | Internal platform alpha |
| 3. MVP Services | 10–19 | Website builder, CMS, sales repository, CRM, distribution, social | Feature-complete MVP |
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
| Performance | Critical API p95 response time | < 500 ms |
| Quality | Severity-one / severity-two defects | 0 unresolved / < 5 open |
| Support | First-response time | < 1 business day (standard plans) |

## Suggested Repository Layout

```
creators-portal/
├── apps/
│   ├── portal/        # Next.js customer portal + BFF
│   └── api/           # Laravel APIs, business logic, marketing site
├── docs/              # Architecture, ADRs, API conventions
├── infra/             # IaC, environment config, pipelines
└── README.md
```

*(Alternatively, split into separate repos per app.)*

## Getting Started

_Coming soon._ Setup instructions will be added as Phase 1 (Foundation & Architecture) progresses.

## Status

🚧 Pre-MVP planning.

## License

TBD
