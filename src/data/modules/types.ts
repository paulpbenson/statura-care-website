import type { LucideIcon } from "lucide-react";

export type CareType = "residential" | "home-care";

export type ModuleCategory =
  | "Compliance & Governance"
  | "Resident & Family"
  | "Clinical & Care"
  | "Workforce & Operations"
  | "Financial & Administrative"
  | "Reporting & Analytics";

export interface ModuleCapability {
  title: string;
  description: string;
}

export interface ModuleWorkflowStep {
  step: string;
  title: string;
  description: string;
  time?: string;
}

export interface ModuleIntegration {
  moduleSlug: string;
  moduleName: string;
  description: string;
}

export interface ModuleRegRequirement {
  title: string;
  description: string;
}

export interface ModuleData {
  slug: string;
  name: string;
  code: string;
  category: ModuleCategory;
  icon: LucideIcon;
  section: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  problemStatement: string;
  applicableTo: CareType[];
  capabilities: ModuleCapability[];
  workflow?: ModuleWorkflowStep[];
  regulatoryRequirements: ModuleRegRequirement[];
  integrations: ModuleIntegration[];
}

export const categories: ModuleCategory[] = [
  "Compliance & Governance",
  "Resident & Family",
  "Clinical & Care",
  "Workforce & Operations",
  "Financial & Administrative",
  "Reporting & Analytics",
];

export const categoryDescriptions: Record<ModuleCategory, string> = {
  "Compliance & Governance": "The regulatory obligations that keep your doors open.",
  "Resident & Family": "The people at the heart of everything you do.",
  "Clinical & Care": "The clinical care you deliver and monitor.",
  "Workforce & Operations": "The people who deliver care, and how you manage them.",
  "Financial & Administrative": "The funding you receive and the finances you manage.",
  "Reporting & Analytics": "The insights that drive continuous improvement.",
};

export const categoryColours: Record<ModuleCategory, { bg: string; text: string; border: string; gradient: string }> = {
  "Compliance & Governance": {
    bg: "bg-[#96A998]/10",
    text: "text-[#3E5D4A]",
    border: "border-[#96A998]/20",
    gradient: "from-[#96A998]/10 to-transparent",
  },
  "Resident & Family": {
    bg: "bg-rose-50",
    text: "text-rose-700",
    border: "border-rose-100",
    gradient: "from-rose-50 to-transparent",
  },
  "Clinical & Care": {
    bg: "bg-teal-50",
    text: "text-teal-700",
    border: "border-teal-100",
    gradient: "from-teal-50 to-transparent",
  },
  "Workforce & Operations": {
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-100",
    gradient: "from-violet-50 to-transparent",
  },
  "Financial & Administrative": {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-100",
    gradient: "from-amber-50 to-transparent",
  },
  "Reporting & Analytics": {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-100",
    gradient: "from-blue-50 to-transparent",
  },
};
