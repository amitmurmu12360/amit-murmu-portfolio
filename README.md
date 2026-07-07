# Amit Murmu — Data Analyst Portfolio

Production-ready Next.js 15 (App Router) portfolio, built for data analyst
recruiting at analytics/finance/travel-tech employers.

Stack: Next.js · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. This sandbox environment cannot reach
`fonts.googleapis.com`, so the production build here was verified with the
font imports temporarily stubbed — the real `next/font/google` imports are
back in `app/layout.tsx` and will fetch normally on your machine or on Vercel,
which both have open internet access.

```bash
npm run build   # production build
npm run start   # run the production build locally
```

## 2. Replace the placeholder assets

All placeholder images and the placeholder resume were generated so the site
runs and looks structurally correct out of the box. Swap these before you
ship it:

| File | Replace with |
|---|---|
| `public/images/profile-placeholder.png` | Your professional headshot |
| `public/images/og-cover.png` | A 1200×630 social-share image |
| `public/images/projects/*-cover.png` | Real project cover screenshots |
| `public/images/projects/*-architecture.png` | Real architecture diagrams |
| `public/images/dashboards/*.png` | Real Power BI / dashboard screenshots |
| `public/resume-amit-murmu.pdf` | Your real resume PDF (same filename, or update `resumeUrl` in `data/site.ts`) |
| `app/favicon.ico` | Your real favicon |

## 3. Update content — without touching components

Every piece of copy on the site (name, tagline, metrics, work experience,
projects, skills, certifications, contact details, SEO copy) lives in a
single file:

```
data/site.ts
```

To add a new job, add an object to the `experience` array. To add a new
project, add an object to the `projects` array (a new page at
`/projects/<slug>` is generated automatically — you don't need to create a
new file). To update a metric, edit the `metrics` array. To add a skill,
push a string into the right category in `skills`. Nothing else in the
codebase needs to change for a content update.

The contact form posts to `app/api/contact/route.ts`, which currently logs
submissions server-side. To actually receive emails, sign up for an email
API provider (Resend, Postmark, SendGrid), add its API key as an environment
variable in Vercel, and call its send API inside that one route file — see
the `TODO` comment in that file.

## 4. Deploy — GitHub + Vercel

```bash
git init
git add .
git commit -m "Initial commit — data analyst portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then:

1. Go to https://vercel.com/new and import the GitHub repo.
2. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
3. Once live, go to the project's **Settings → Domains** to attach a custom
   domain if you have one.
4. Update `seo.siteUrl` in `data/site.ts` to your real production URL (this
   feeds the sitemap, robots.txt, and Open Graph tags), commit, and push —
   Vercel redeploys automatically on every push to `main`.

Every future content change is: edit `data/site.ts` (and/or swap an image in
`public/images`) → `git commit` → `git push`. Vercel redeploys automatically.

## 5. What's included

- Full homepage: Hero, animated metrics ticker, About, Experience, Featured
  Projects, Skills, Dashboard Gallery (with modal preview), Contact form,
  Footer.
- Dynamic project detail pages (`/projects/[slug]`) statically generated per
  project — includes business problem, objective, architecture, workflow,
  tech stack, features, impact, challenges, learnings, and screenshots.
- SEO: metadata API, Open Graph + Twitter cards, JSON-LD `Person` schema,
  auto-generated `sitemap.xml` and `robots.txt`.
- Accessibility floor: visible focus rings site-wide, semantic headings,
  `prefers-reduced-motion` respected, alt text on every image.
- Dark theme only, by design (matches the terminal/data aesthetic — see
  `PRD.md` for the full design rationale).

See `PRD.md` for the full product requirements document (recruiter
psychology, personas, IA, design system, performance/SEO strategy).
