export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  author: string;
  category: string;
  readingTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sirs-reporting-obligations-aged-care-act-2024",
    title: "SIRS Reporting Obligations Under the Aged Care Act 2024: What Providers Need to Know",
    description:
      "A practical guide to Priority 1 and Priority 2 SIRS reporting deadlines, what constitutes a reportable incident, and how to build a compliant incident management workflow under the new Act.",
    publishedAt: "2026-02-10",
    author: "Statura Care",
    category: "Compliance Guides",
    readingTime: "8 min read",
    tags: ["SIRS", "incident reporting", "Aged Care Act 2024", "ACQSC", "compliance"],
  },
  {
    slug: "responsible-persons-register-guide",
    title: "How to Build and Maintain a Responsible Persons Register for Aged Care",
    description:
      "Step-by-step guide to establishing a responsible persons register under sections 12–13 of the Aged Care Act 2024, including suitability assessments, the 10 matters test, screening requirements, and ACQSC notification obligations.",
    publishedAt: "2026-02-03",
    author: "Statura Care",
    category: "Compliance Guides",
    readingTime: "10 min read",
    tags: ["responsible persons", "governance", "suitability assessment", "screening", "ACQSC"],
  },
  {
    slug: "aged-care-quality-standards-self-assessment-checklist",
    title: "Aged Care Quality Standards Self-Assessment: A Practical Checklist for Providers",
    description:
      "How to conduct an effective self-assessment against all 8 Aged Care Quality Standards, map evidence across modules, identify gaps, and prepare for ACQSC assessment contacts.",
    publishedAt: "2026-01-27",
    author: "Statura Care",
    category: "Quality & Safety",
    readingTime: "12 min read",
    tags: ["quality standards", "self-assessment", "audit preparation", "ACQSC", "continuous improvement"],
  },
  {
    slug: "care-minutes-target-200-minutes-compliance",
    title: "Meeting the 200 Care Minutes Target: A Compliance Guide for Aged Care Providers",
    description:
      "Understanding the mandatory 200 care minutes per resident per day requirement, including the 40-minute RN component, 24/7 RN coverage obligations, and practical strategies for tracking and reporting staffing compliance.",
    publishedAt: "2026-01-20",
    author: "Statura Care",
    category: "Workforce",
    readingTime: "9 min read",
    tags: ["care minutes", "workforce compliance", "staffing", "RN coverage", "200 minutes"],
  },
  {
    slug: "prudential-compliance-refundable-deposits-aged-care",
    title: "Prudential Compliance for Aged Care: Managing Refundable Deposits and Liquidity Obligations",
    description:
      "A comprehensive guide to prudential obligations under sections 170–183 of the Aged Care Act 2024, covering refundable accommodation deposits, liquidity requirements, permitted use rules, and governance reporting.",
    publishedAt: "2026-01-13",
    author: "Statura Care",
    category: "Financial Compliance",
    readingTime: "11 min read",
    tags: ["prudential compliance", "refundable deposits", "RADs", "liquidity", "accommodation pricing"],
  },
  {
    slug: "aged-care-governance-best-practices-2026",
    title: "Aged Care Governance Best Practices: A Board-Level Guide for 2026",
    description:
      "A comprehensive board-level guide to governance obligations under the Aged Care Act 2024, covering governing body responsibilities, clinical governance frameworks, compliance reporting requirements, and best practice governance structures.",
    publishedAt: "2026-02-17",
    author: "Statura Care",
    category: "Governance",
    readingTime: "10 min read",
    tags: ["governance", "board responsibilities", "clinical governance", "Aged Care Act 2024", "governing body"],
  },
  {
    slug: "open-disclosure-aged-care-guide",
    title: "Open Disclosure in Aged Care: When and How to Communicate Incidents to Families",
    description:
      "A step-by-step guide to open disclosure requirements in aged care, covering regulatory obligations, the communication process with families, documentation standards, and managing complex disclosure conversations.",
    publishedAt: "2026-02-19",
    author: "Statura Care",
    category: "Safety & Quality",
    readingTime: "9 min read",
    tags: ["open disclosure", "incident communication", "families", "transparency", "complaints"],
  },
  {
    slug: "aged-care-worker-screening-requirements",
    title: "Aged Care Worker Screening: Requirements, Timelines, and Compliance Under the New Act",
    description:
      "A practical guide to worker screening requirements under the Aged Care Act 2024, including police checks, NDIS screening, timelines, exemptions, ongoing monitoring, and record-keeping obligations.",
    publishedAt: "2026-02-21",
    author: "Statura Care",
    category: "Workforce",
    readingTime: "8 min read",
    tags: ["worker screening", "police checks", "NDIS screening", "aged care workforce", "background checks"],
  },
  {
    slug: "restrictive-practices-aged-care-compliance",
    title: "Managing Restrictive Practices in Aged Care: Compliance, Reporting, and Behaviour Support",
    description:
      "A comprehensive guide to managing restrictive practices under the Aged Care Act 2024, covering types of restraint, regulatory requirements, behaviour support planning, SIRS reporting, and minimisation strategies.",
    publishedAt: "2026-02-23",
    author: "Statura Care",
    category: "Safety & Quality",
    readingTime: "11 min read",
    tags: ["restrictive practices", "behaviour support", "chemical restraint", "physical restraint", "SIRS"],
  },
  {
    slug: "aged-care-data-security-requirements",
    title: "Data Security Requirements for Aged Care Providers: Protecting Resident Information",
    description:
      "An essential guide to data security and information governance requirements for aged care providers, covering privacy obligations, data breach notification, secure systems, Australian hosting, and encryption standards.",
    publishedAt: "2026-02-25",
    author: "Statura Care",
    category: "Technology",
    readingTime: "9 min read",
    tags: ["data security", "privacy", "My Aged Care", "information governance", "cyber security"],
  },
  {
    slug: "support-at-home-program-guide",
    title: "The Support at Home Program: What Aged Care Providers Need to Know",
    description:
      "A comprehensive guide to the Support at Home (SAH) program that replaced Home Care Packages from July 2025. Covers 8 classification levels, quarterly budgets, per-service contributions, wellness goals, and what providers need to do to comply.",
    publishedAt: "2026-03-01",
    author: "Statura Care",
    category: "Support at Home",
    readingTime: "12 min read",
    tags: ["Support at Home", "SAH", "home care", "HCP transition", "classification levels"],
  },
  {
    slug: "acqsc-assessment-contact-preparation",
    title: "Preparing for an ACQSC Assessment Contact: A Practical Guide for Providers",
    description:
      "How to prepare for announced and unannounced ACQSC assessment contacts. Covers what assessors look for, evidence organisation, common pitfalls, and practical strategies for maintaining continuous audit readiness.",
    publishedAt: "2026-03-03",
    author: "Statura Care",
    category: "Compliance Guides",
    readingTime: "11 min read",
    tags: ["ACQSC", "assessment contact", "audit preparation", "quality standards", "compliance"],
  },
  {
    slug: "support-at-home-contributions-explained",
    title: "Support at Home Contributions Explained: Tiers, Categories, and Caps",
    description:
      "A detailed guide to how client contributions work under the Support at Home program. Covers the 4 means-testing tiers, 3 service categories, per-service contribution rates, lifetime caps, and hardship provisions.",
    publishedAt: "2026-02-27",
    author: "Statura Care",
    category: "Support at Home",
    readingTime: "10 min read",
    tags: ["SAH contributions", "means testing", "service categories", "lifetime cap", "hardship"],
  },
  {
    slug: "aged-care-quality-standards-overview",
    title: "The 8 Aged Care Quality Standards: A Complete Overview for Providers",
    description:
      "A comprehensive overview of all 8 Aged Care Quality Standards under the Aged Care Act 2024. What each standard requires, how they apply to both residential care and Support at Home, and how to demonstrate compliance.",
    publishedAt: "2026-02-15",
    author: "Statura Care",
    category: "Quality & Safety",
    readingTime: "14 min read",
    tags: ["quality standards", "Aged Care Act 2024", "compliance", "self-assessment", "ACQSC"],
  },
  {
    slug: "support-at-home-quarterly-budgets",
    title: "SAH Quarterly Budgets: Allocation, Carry-Over, and Budget Management",
    description:
      "A practical guide to managing quarterly budgets under the Support at Home program. Covers budget allocation by classification level, carry-over caps, care management deductions, and strategies for effective budget tracking.",
    publishedAt: "2026-02-28",
    author: "Statura Care",
    category: "Support at Home",
    readingTime: "9 min read",
    tags: ["SAH budgets", "quarterly budgets", "carry-over", "classification levels", "budget management"],
  },
  {
    slug: "aged-care-workforce-compliance-guide",
    title: "Aged Care Workforce Compliance: Screening, Training, and Staffing Requirements",
    description:
      "A comprehensive guide to workforce compliance obligations for aged care providers. Covers worker screening, mandatory training, care minutes targets, 24/7 RN coverage, SCHADS Award obligations, and the Code of Conduct.",
    publishedAt: "2026-02-12",
    author: "Statura Care",
    category: "Workforce",
    readingTime: "11 min read",
    tags: ["workforce compliance", "worker screening", "care minutes", "RN coverage", "SCHADS", "code of conduct"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories = [...new Set(blogPosts.map((p) => p.category))];
