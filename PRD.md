# PRD — Amit Murmu Data Analyst Portfolio

## 1. Website Objective
Get a recruiter or hiring manager at a bank, airline, or consulting firm to
go from "resume in a pile" to "let's schedule a call" in under 90 seconds of
scanning. The site's single job is to prove three things fast: this person
has done real, quantified operational analytics work; they can communicate
that work the way a business stakeholder would want it explained (problem →
objective → impact, not just tool names); and they're polished enough to
represent the company in front of a client.

## 2. Recruiter Psychology
Recruiters and hiring managers at the target companies (Barclays, Amex, JPM,
United, EY, McKinsey, S&P Global, Deloitte, KPMG, PwC, Google, Microsoft,
Amazon, Flipkart, Myntra) skim resumes and portfolios in seconds, not
minutes. Design implications:
- **Numbers first.** Recruiters trust quantified impact over adjectives. The
  metrics ticker puts hard numbers (79,000+ requests, 3.2M+ records) above
  the fold, before any subjective self-description.
- **Business framing over tool framing.** "I used Python" is a commodity
  claim. "I cut anomaly detection time from days to hours" is not. Every
  project page leads with the business problem, not the tech stack.
- **Skimmability signals competence.** A cluttered, gradient-heavy portfolio
  reads as junior. A restrained, well-typeset one reads as someone who
  already thinks like the analyst they'd be hiring — clean data, clean
  presentation.
- **Proof of real ownership.** One real employer (EaseMyTrip) with specific,
  verifiable-sounding numbers reads stronger than a list of vague bullet
  points across many roles.

## 3. Target Audience & Personas
- **Primary: Campus/early-career technical recruiter** screening 200+
  profiles for a Data Analyst req. Wants: years of experience, tool stack,
  one clear headline number, resume download, 30-second scan.
- **Secondary: Hiring manager / analytics team lead** doing a second-pass
  review before an interview. Wants: how the candidate thinks about a
  problem end-to-end, whether they can explain impact to non-technical
  stakeholders, evidence of dashboards they'd actually maintain.
- **Tertiary: Candidate's own future self** — the site must be trivially
  updatable as new projects and roles accumulate, without needing a
  developer to touch it every time.

## 4. Information Architecture
Single-page primary flow (fast recruiter scan) with deep-link project
detail pages (for the hiring-manager second pass):

```
/                       → Hero → Metrics → About → Experience → Projects →
                          Skills → Dashboards → Contact → Footer
/projects/[slug]        → Full case study per project
/resume-amit-murmu.pdf  → Direct resume download (no gate)
/sitemap.xml, /robots.txt
```

## 5. Navigation Flow
Sticky top nav with in-page anchors (About / Experience / Projects / Skills
/ Dashboards / Contact) plus persistent GitHub, LinkedIn, and Resume actions
— so the two things a recruiter most wants (proof of work, a way to
download the resume) are never more than one click away, from any scroll
position.

## 6. UX Strategy
- Above the fold: name, title, tagline, resume CTA, projects CTA — no
  scrolling required to know who this is and what to do next.
- The metrics ticker is the first thing after the hero — it's the
  "headline number" a recruiter is scanning for, made impossible to miss.
- Each project card links to a full case study rather than cramming detail
  into the homepage, keeping the scan fast while giving depth to anyone who
  clicks through.
- Contact form as a low-friction alternative to email for recruiters who
  prefer not to open their mail client.

## 7. Design Philosophy
Corporate-premium, not consumer-flashy. The brief explicitly targets
finance, airline-ops, and Big-4/consulting recruiters — audiences that
associate restraint with seniority and gradients/glow with junior/template
work. Inspiration: Stripe's typographic discipline, Linear's information
density without clutter, Apple's whitespace confidence.

**Signature choice:** rather than a generic hero-with-gradient, the page's
one distinctive element is a **terminal-style scrolling metrics ticker** —
monospaced numbers in a marquee strip, evoking a trading/ops terminal. It's
a direct, literal expression of "this candidate works with high-volume
operational data," not a decorative flourish.

## 8. Color Palette
| Token | Hex | Use |
|---|---|---|
| `surface` | `#0A0B0D` | Primary background |
| `surface-raised` | `#111318` | Cards, panels |
| `surface-inset` | `#08090B` | Recessed image containers |
| `ink` | `#EDEEF0` | Primary text |
| `ink-dim` | `#9BA1AC` | Secondary text |
| `line` | `#1E2128` | Hairline borders |
| `accent` | `#C9A227` | The single accent — brass/amber, used sparingly (CTAs, numbers, bullet dots) |
| `signal-up` / `signal-down` | `#3FA772` / `#C2483F` | Form success/error states only |

Deliberately not the default AI-portfolio near-black-plus-neon-green/blue —
the warm, low-saturation amber reads as "finance terminal," not "SaaS
landing page."

## 9. Typography
- **Display:** Space Grotesk (medium/semibold/bold) — geometric but with
  enough personality to avoid reading as generic corporate sans.
- **Body:** Inter — maximum legibility at small sizes for dense bullet
  content (impact statements, feature lists).
- **Mono:** IBM Plex Mono — used specifically for every number, stat,
  category label, and tech-stack tag, reinforcing the "data terminal"
  signature throughout, not just in the hero.

## 10. Component Library
`Navbar`, `Hero`, `MetricsTicker`, `About`, `Experience`, `Projects` /
`ProjectCard`, project detail template, `Skills`, `DashboardGallery` (with
modal), `Contact` (form + details), `Footer`, `SectionHeading` (shared
eyebrow/title/description pattern). All built as small, single-responsibility,
reusable components — no page-specific one-off markup duplicated across
sections.

## 11. Animation Guidelines
Motion is used exactly twice, deliberately: a fade-up entrance on the hero
(orchestrated, once, on load) and the continuous ticker marquee (ambient,
not attention-grabbing). No scroll-triggered confetti, no hover-tilt cards,
no parallax — per the brief's explicit "no flashy effects." All motion
respects `prefers-reduced-motion`.

## 12. Mobile Experience
Single-column stacking throughout, hero image reflows above the text block
on small screens, nav collapses to essential icons (GitHub always visible;
full link list intentionally not hidden behind a hamburger — anchor links
still render, just without the desktop-only resume button clutter). Touch
targets sized for thumb use in the dashboard gallery and contact form.

## 13. Accessibility
AA color contrast on all text/background pairs, visible focus rings on
every interactive element (`:focus-visible` global rule), semantic heading
hierarchy (single `h1` in the hero, `h2` per section, `h3` per card),
descriptive alt text on every image, dialog role + aria-modal on the
dashboard preview, reduced-motion support.

## 14. Performance Strategy
Static generation for every route (homepage and both project pages are
fully static at build time — confirmed via `npm run build`), `next/image`
for automatic AVIF/WebP + responsive sizing, font subsetting via
`next/font` (no render-blocking font requests, no layout shift), minimal
client-side JavaScript (only the nav scroll listener, dashboard modal, and
contact form are client components — everything else is a server
component).

## 15. SEO Strategy
Metadata API with per-route titles/descriptions, Open Graph + Twitter Card
images, `Person` JSON-LD structured data, auto-generated `sitemap.xml`
(including every project slug) and `robots.txt`, semantic HTML throughout.

## 16. Folder Architecture
```
app/
  layout.tsx          # fonts, metadata, JSON-LD
  page.tsx            # homepage section assembly
  globals.css
  sitemap.ts
  robots.ts
  api/contact/route.ts
  projects/[slug]/page.tsx
components/           # one component per section, reusable
data/site.ts           # single content source of truth
lib/utils.ts           # cn() class-merge helper
public/images/         # all image assets
```

## 17. Deployment Strategy
GitHub → Vercel, auto-deploy on push to `main`. Zero-config: Vercel detects
Next.js automatically. See `README.md` for exact commands and the
content-update workflow.
