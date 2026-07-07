/**
 * SITE CONTENT — SINGLE SOURCE OF TRUTH
 * ---------------------------------------------------------------
 * Every piece of copy on the site (name, bio, experience, projects,
 * skills, metrics, contact info) lives in this one file.
 *
 * To update the site — new job, new project, new skill, new resume —
 * edit the values below and redeploy. You never need to open or
 * understand any component file in /components to make a content change.
 *
 * Images referenced by `image` fields should be placed in /public/images
 * and referenced with a leading slash, e.g. "/images/projects/neurasight-cover.png".
 */

export const profile = {
  name: "Amit Murmu",
  title: "Data Analyst",
  tagline:
    "I turn high-volume operational data into dashboards and decisions leadership actually acts on.",
  location: "Gurgaon, India",
  email: "amitmurmu12360@gmail.com",
  phone: "+91 7470126490",
  social: {
    github: "https://github.com/amitmurmu12360",
    linkedin: "https://www.linkedin.com/in/insightsbyamit07",
  },
  resumeUrl: "/resume-amit-murmu.pdf",
  avatarUrl: "/images/real/avatar.jpeg",
  shortBio:
    "I'm a data analyst who works at the intersection of operations and analytics — building the dashboards, pipelines, and reporting automation that let business teams catch problems before customers do. My professional background is in flight-operations analytics at EaseMyTrip, where I processed hundreds of thousands of records a month across SQL, Python, and Power BI. Outside that, I build independent analytics products end-to-end — from data pipeline to executive-facing dashboard — to keep pushing on problems a single reporting job doesn't cover.",
};

export const metrics = [
  { label: "Flight Requests Monitored", value: "79,000", suffix: "+" },
  { label: "Flight Schedules Processed (CO₂)", value: "324,000", suffix: "+" },
  { label: "Records Processed via TIM API", value: "3.2M", suffix: "+" },
  { label: "Campaign Efficiency Improvement", value: "15", suffix: "%" },
  { label: "Off-Peak Revenue Increase", value: "10", suffix: "%" },
] as const;

export const experience = [
  {
    company: "EaseMyTrip",
    role: "Data Analyst",
    period: "Sept 2024 — May 2025",
    location: "Gurgaon, India",
    summary:
      "Business context: EaseMyTrip's operations, marketing, and finance teams needed a single reliable view of booking trends, campaign performance, and flight-schedule health — instead of stitching together manual exports. I owned the dashboards, root-cause analysis, and automation pipelines that gave them that view.",
    impact: [
      "Problem → Approach: Campaign performance and off-peak demand patterns were hard to explain after the fact. I ran deep-dive and root cause analysis on campaign and customer-demand data using SQL and Python, which improved campaign efficiency by 15% and increased off-peak revenue by 10%.",
      "Problem → Approach: There was no automated way to catch flight-request API failures before they became support tickets. I built an automated API health-monitoring solution in Python and MongoDB that processes 79,000+ flight requests with real-time alerting.",
      "Problem → Approach: Flight scheduling data wasn't standardized enough to track on-time performance reliably. I analyzed scheduling datasets in Python and MongoDB to build OTP (on-time performance) metrics and support data-standardization work across teams.",
      "Problem → Approach: The business needed per-passenger CO₂ figures for sustainability reporting but had no pipeline to produce them. I integrated the Google Travel Impact Model (TIM) API to calculate emissions for 324,000+ flight schedules, processing 3.2M+ records in Python with IATA validation before it went to production.",
      "Tools → Impact: Across all of this, I designed and maintained the Power BI dashboards and KPI reporting stakeholders used to monitor booking trends, revenue, and operational health, and translated the analysis into recommendations product and ops teams could act on directly.",
    ],
    stack: [
      "SQL",
      "Python",
      "Power BI",
      "MongoDB",
      "REST APIs",
      "Operational Analytics",
      "Root Cause Analysis",
      "KPI Reporting",
    ],
  },
] as const;

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  cover: string;
  businessProblem: string;
  businessObjective: string;
  architectureImage: string;
  workflow: string[];
  techStack: string[];
  features: string[];
  businessImpact: string[];
  challenges: string[];
  learning: string;
  future: string[];
  github: string;
  liveDemo: string | null;
  screenshots: string[];
};

export const projects: Project[] = [
  {
    slug: "neurasight-ai",
    name: "NeuraSight AI",
    tagline:
      "A 12-agent business intelligence system that reads a company's raw metrics and hands back a boardroom-ready strategic report.",
    cover: "/images/real/neurasight-cover.png",
    businessProblem:
      "Executives get a lot of dashboards and very little judgment. Someone still has to sit down, read the numbers, spot what's actually wrong, and write it up in language a CEO or CMO can act on — and that translation step is slow, manual, and inconsistent from one analyst to the next.",
    businessObjective:
      "Build a platform that ingests a company's real operating data (CSV, Google Sheets, REST APIs), runs it through a hierarchical swarm of specialist agents, and produces persona-specific executive reporting — a CEO view, a CMO view, a VP Ops view — automatically, with the underlying numbers still auditable.",
    architectureImage: "/images/real/neurasight-architecture-diagram.png",
    workflow: [
      "Ingest business data through CSV upload, live Google Sheets sync, or REST APIs into a Supabase-backed store.",
      "Route the data through an Agent Orchestration Engine to a 12-node hierarchical multi-agent swarm.",
      "Run domain-specialist agents (data validation, anomaly/outlier detection via IQR, policy auditing, forensic analysis by vertical — fintech, SaaS, retail, e-commerce) in parallel, with a Sentinel agent continuously scanning for data-quality and threat signals.",
      "Synthesize agent output through an Executive Synthesis Layer into persona-specific views (CEO, CMO, VP Ops), each with its own decision-confidence score, SWOT-style risk alerts, and a prioritized action list.",
      "Generate a downloadable C-suite strategic report (PDF / Notion export) and push alerts via WhatsApp or email.",
    ],
    techStack: [
      "Next.js",
      "FastAPI",
      "Python",
      "SQL (SQLite)",
      "Supabase",
      "Google Sheets API",
      "REST APIs",
      "Multi-agent orchestration",
    ],
    features: [
      "12-node agent swarm with a dedicated Sentinel agent for continuous anomaly and policy-violation scanning",
      "Persona-based executive lenses (CEO / CMO / VP Ops) with a live decision-confidence score",
      "Live Google Sheets sync alongside CSV and REST API ingestion, so the dashboard reflects real, current data — not a static demo",
      "\"Future Sight\" forecasting view that projects KPIs forward and lets you simulate a strategic pivot",
      "One-click executive action center: risk alerts, SWOT call-outs, and a PDF/Notion-exportable strategic report",
    ],
    businessImpact: [
      "Replaces a manual analyst write-up with a repeatable pipeline: the same raw metrics that used to need a person to interpret now produce a structured, persona-specific report on demand.",
      "Built and validated end-to-end against a 90,000+ record ingestion pipeline spanning SaaS, fintech, and e-commerce datasets, covering trend analysis, anomaly detection, and forecasting in one system rather than three separate tools.",
    ],
    challenges: [
      "Coordinating 12 agents without them contradicting each other required an explicit conflict-resolution step (the Sentinel/Policy Auditor debate flow) rather than just running them independently and hoping outputs agreed.",
      "Balancing how much the system should recompute live from Google Sheets versus how much it should cache, so the dashboard stays fast without going stale.",
    ],
    learning:
      "Building a system where multiple agents can legitimately disagree taught me that the hard part of agentic BI isn't generating an answer — it's designing the arbitration step that decides which agent's read on the data wins, and making that decision auditable rather than a black box.",
    future: [
      "Add more industry-specific forensic agents beyond fintech, SaaS, retail, and e-commerce.",
      "Persist agent decision history so persona reports can reference how a metric's interpretation changed over time.",
      "Expand live-source connectors beyond Google Sheets to direct warehouse connections.",
    ],
    github: "https://github.com/amitmurmu12360/neurasight-ai-core",
    liveDemo: null,
    screenshots: [
      "/images/real/neurasight-hero.png",
      "/images/real/neurasight-arr-metrics.png",
      "/images/real/neurasight-additional-metrics.png",
      "/images/real/neurasight-ceo-insight.png",
    ],
  },
  {
    slug: "airguard-legal",
    name: "AirGuardLegal",
    tagline:
      "An AI-assisted platform that tells a delayed passenger whether they're owed compensation — and files the legal notice for them over WhatsApp.",
    cover: "/images/real/airguard-hero.png",
    businessProblem:
      "Flight delays and cancellations happen constantly, but most passengers never claim the compensation they're entitled to under DGCA and EC261 rules, simply because figuring out eligibility and drafting a legal notice is confusing and time-consuming.",
    businessObjective:
      "Build a self-serve platform that ingests live flight data, determines compensation eligibility against DGCA/EC261 regulations, and generates a professional legal notice a passenger can send to the airline in under a minute — no app install, no legal knowledge required.",
    architectureImage: "/images/real/airguard-architecture-diagram.png",
    workflow: [
      "Pull live flight status and delay/cancellation telemetry from the Aviationstack API.",
      "Run the event through a Compensation Decision Engine (FastAPI backend) that checks it against DGCA and EC261 eligibility rules.",
      "Store the claim and its status in Supabase, and surface it in a claims dashboard (Notices Filed, Success Rate, Pending Resolution).",
      "Generate a ready-to-send legal notice and deliver it to the passenger via WhatsApp, with email as a secondary channel.",
    ],
    techStack: [
      "Next.js",
      "FastAPI",
      "SQL (SQLite)",
      "Supabase",
      "Aviationstack API",
      "WhatsApp API",
      "Python",
    ],
    features: [
      "Flight-disruption ingestion pipeline achieving ~98% accuracy in disruption classification against Aviationstack data",
      "Automated DGCA/EC261 eligibility check with a plain-language legal notice generated in under 30 seconds",
      "Claims dashboard tracking notices filed, resolution status, and success rate per case",
      "WhatsApp-first delivery — no app install required, works on any device",
    ],
    businessImpact: [
      "Turns a claim process most passengers never bother starting into a WhatsApp conversation, removing the two biggest blockers: knowing you're eligible, and knowing how to write the notice.",
      "The disruption-classification pipeline hits ~98% accuracy, which is the difference between a tool passengers trust and one that generates false claims.",
    ],
    challenges: [
      "DGCA and EC261 eligibility rules don't map 1:1 — building a rules layer that could evaluate a single event against both without hardcoding country-specific branching logic everywhere.",
      "Live flight-status data from third-party APIs is noisy (delayed updates, inconsistent status codes), which had to be handled before it ever reached the decision engine.",
    ],
    learning:
      "Regulatory eligibility logic is genuinely data, not code — modeling DGCA/EC261 rules as structured, queryable rule sets rather than nested if/else made the classification pipeline far easier to validate and extend.",
    future: [
      "Extend regulatory coverage beyond DGCA and EC261 to more international frameworks.",
      "Add case-outcome tracking so success-rate figures reflect real airline responses over time.",
      "Support batch claims for group bookings and travel agencies.",
    ],
    github: "https://github.com/amitmurmu12360/AirGuardLegal",
    liveDemo: null,
    screenshots: [
      "/images/real/airguard-overview-data.png",
      "/images/real/airguard-overview-empty.png",
    ],
  },
];

export const skills = {
  "Programming & Databases": ["SQL (MySQL, PostgreSQL, SQLite)", "Python (Pandas, NumPy, Matplotlib)", "Google BigQuery"],
  Visualization: ["Power BI (DAX, Power Query)", "Excel (Pivot Tables, XLOOKUP)", "Dashboard Development", "Google Analytics"],
  Analytics: [
    "Business Analytics",
    "Operational Analytics",
    "KPI Reporting",
    "Root Cause Analysis",
    "Trend Analysis",
    "Statistical Analysis",
  ],
  "Data Processing & Automation": ["ETL Pipelines", "Workflow Automation", "REST APIs", "Python Automation"],
  "Data Exploration & Quality": ["EDA", "Data Cleaning", "Data Validation", "Outlier Detection"],
} as const;

export const certifications = [
  { name: "IBM Data Analyst Professional Certificate", issuer: "IBM (via Coursera) — 9 courses", year: "2022" },
  { name: "Power BI Virtual Internship", issuer: "PwC (via Forage)", year: "2024" },
] as const;

export const dashboards = [
  { title: "Loyalty Program Overview (Power BI)", image: "/images/real/pbi-loyalty-overview.png" },
  { title: "Customer Lifetime Value Analysis (Power BI)", image: "/images/real/pbi-clv-analysis.png" },
  { title: "NeuraSight — CEO Executive Insight", image: "/images/real/neurasight-ceo-insight.png" },
  { title: "AirGuardLegal — Claims Overview", image: "/images/real/airguard-overview-data.png" },
] as const;

export const seo = {
  siteUrl: "https://amit-murmu-portfolio.vercel.app",
  title: "Amit Murmu — Data Analyst | SQL, Python & Power BI",
  description:
    "Data Analyst with hands-on experience in SQL, Python, Power BI, KPI reporting, and root cause analysis at EaseMyTrip — plus independent projects (NeuraSight AI, AirGuardLegal) turning raw operational data into decisions.",
  keywords: [
    "Amit Murmu",
    "Data Analyst",
    "SQL",
    "Python",
    "Power BI",
    "Operational Analytics",
    "Business Analytics",
    "KPI Reporting",
    "Root Cause Analysis",
    "EaseMyTrip",
  ],
};
