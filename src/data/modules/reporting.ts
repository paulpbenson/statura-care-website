import {
  FileBarChart,
  Bell,
  LineChart,
} from "lucide-react";
import type { ModuleData } from "./types";

export const reportingModules: ModuleData[] = [
  {
    slug: "reporting-hub",
    name: "Reporting Hub",
    code: "ReportingHub",
    category: "Reporting & Analytics",
    icon: FileBarChart,
    section: "Part 10",
    tagline: "Every report from one place. Every submission on time.",
    shortDescription:
      "Centralised report generation across all modules, board pack compilation, regulatory submission tracking, scheduled reports, and a searchable report archive.",
    longDescription:
      "Aged care providers must generate reports for governing bodies, regulators, and internal management across dozens of compliance areas. Statura Care\u2019s Reporting Hub centralises all report generation \u2014 pulling data from every module to produce board packs, regulatory submissions, and operational reports from a single interface.",
    problemStatement:
      "Reports are scattered across modules, spreadsheets, and email threads. Compiling a board pack means manually gathering data from multiple sources. Regulatory submissions (NAQIMQP, DEX, QI) have different deadlines and formats. Without a centralised reporting system, something always falls through the cracks.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Cross-Module Report Generation", description: "Generate reports from any module in the platform \u2014 84 report types covering compliance, clinical, workforce, financial, and operational data. Reports are generated in real time from live data." },
      { title: "Board Pack Compilation", description: "Compile comprehensive board packs by selecting reports from across modules. Add cover pages, executive summaries, and commentary. Track board pack distribution and acknowledgement." },
      { title: "Regulatory Submission Tracking", description: "Track all regulatory submission deadlines \u2014 NAQIMQP, QI reporting, DEX, prudential statements, and more. Submission status, reference numbers, and evidence are recorded for audit." },
      { title: "Scheduled Reports", description: "Configure reports to generate automatically on a daily, weekly, monthly, or quarterly schedule. Reports are delivered to nominated recipients by email or stored in the archive." },
      { title: "Report Archive", description: "Every generated report is archived with timestamp, generator, parameters, and output. Search and retrieve any historical report instantly." },
      { title: "Favourites & Quick Access", description: "Mark frequently used reports as favourites for one-click access. Custom dashboards show your most-used reports and upcoming submission deadlines." },
    ],
    regulatoryRequirements: [
      { title: "Board Reporting", description: "Governing bodies must receive regular reports on quality, safety, compliance, and financial performance." },
      { title: "Regulatory Submissions", description: "Multiple regulatory submissions are required throughout the year with specific deadlines and formats." },
      { title: "Record Keeping", description: "Reports and submissions must be retained as evidence of compliance activities." },
    ],
    integrations: [
      { moduleSlug: "governance", moduleName: "Governance", description: "Board packs compiled for governance meetings with meeting agenda linkage." },
      { moduleSlug: "quality-indicators", moduleName: "Quality Indicators", description: "QI data submitted to NAQIMQP through the reporting hub." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Quality Standard compliance reports generated for self-assessment and audit preparation." },
    ],
  },

  {
    slug: "notifications",
    name: "Notifications & Alerts Hub",
    code: "Notifications",
    category: "Reporting & Analytics",
    icon: Bell,
    section: "Part 10",
    tagline: "The right alert to the right person at the right time.",
    shortDescription:
      "Centralised notification inbox, configurable alert rules, escalation workflows, user preferences, and response time analytics across all modules.",
    longDescription:
      "Every module in Statura Care generates alerts \u2014 screening expiries, overdue assessments, SIRS deadlines, liquidity warnings, and more. The Notifications Hub centralises all alerts into a single inbox with configurable escalation rules, ensuring critical items are seen and actioned promptly.",
    problemStatement:
      "When alerts come from multiple systems via email, SMS, and in-app notifications, critical items get lost in the noise. A screening expiry buried in an inbox or a SIRS deadline missed because the alert went to the wrong person can have serious regulatory consequences.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Unified Notification Inbox", description: "All notifications from every module appear in one inbox with filtering by module, severity, status, and date. Mark as read, snooze, or action directly from the inbox." },
      { title: "Alert Severity & Prioritisation", description: "Alerts are classified by severity \u2014 critical, high, medium, low \u2014 with visual indicators and sorting. Critical alerts (SIRS deadlines, RN coverage gaps) surface immediately." },
      { title: "Escalation Rules", description: "Configure escalation workflows: if an alert isn\u2019t acknowledged within a defined timeframe, it escalates to the next level \u2014 from staff to manager to executive to governing body." },
      { title: "User Preferences", description: "Each user controls their notification preferences \u2014 which modules, which severity levels, and which delivery channels (in-app, email, SMS). Preferences respect minimum requirements for critical alerts." },
      { title: "Response Time Analytics", description: "Track how quickly alerts are acknowledged and resolved. Identify patterns in slow responses that indicate process or staffing issues." },
      { title: "Bulk Alert Management", description: "Resolve, snooze, or reassign alerts in bulk. Manage alert fatigue by tuning thresholds and reducing low-value notifications." },
    ],
    regulatoryRequirements: [
      { title: "Timely Response", description: "Regulatory deadlines (SIRS reporting, complaints acknowledgement) require timely awareness and response." },
      { title: "Escalation Protocols", description: "Providers must have escalation protocols ensuring critical issues reach decision-makers promptly." },
      { title: "Audit Trail", description: "Alert history provides evidence of timely awareness and response to compliance events." },
    ],
    integrations: [
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "SIRS deadline alerts are among the highest-priority notifications in the system." },
      { moduleSlug: "workforce", moduleName: "Workforce Compliance", description: "Screening expiry and training overdue alerts flow into the notification hub." },
      { moduleSlug: "clinical-care", moduleName: "Clinical Care", description: "Abnormal vital signs and overdue assessment alerts escalated through the notification system." },
    ],
  },

  {
    slug: "analytics",
    name: "Analytics & Benchmarking",
    code: "Analytics",
    category: "Reporting & Analytics",
    icon: LineChart,
    section: "Part 10",
    tagline: "See how you compare. Know where to improve.",
    shortDescription:
      "Executive dashboards, cross-module compliance scoring, historical trend analysis, and national benchmark comparisons for continuous improvement.",
    longDescription:
      "Compliance is not just about meeting minimum standards \u2014 it\u2019s about continuous improvement. Statura Care\u2019s Analytics module provides executive dashboards that synthesise data from every module into compliance scores, trend analysis, and benchmark comparisons against national performance data.",
    problemStatement:
      "Most providers can tell you whether they\u2019re compliant today, but not whether they\u2019re improving or declining over time. Without cross-module analytics and external benchmarking, you\u2019re managing by anecdote rather than evidence. The Star Ratings system makes comparative performance visible to consumers \u2014 you need to see it first.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Executive Dashboard", description: "A single-page view of your organisation\u2019s compliance position across all modules. Colour-coded compliance scores with drill-down to underlying data." },
      { title: "Cross-Module Compliance Scoring", description: "Weighted compliance scores calculated from data across all active modules. Identify your strongest and weakest areas with actionable insights." },
      { title: "Trend Analysis", description: "Historical trend lines for key performance indicators \u2014 care minutes delivery, incident rates, QI scores, staffing levels, and more. Spot deterioration before it becomes a compliance issue." },
      { title: "National Benchmark Comparisons", description: "Compare your facility\u2019s performance against national benchmarks across 10 key metrics. Understand where you sit relative to sector averages and top performers." },
      { title: "Custom Dashboards", description: "Build custom dashboards with drag-and-drop widgets. Save multiple dashboard configurations for different audiences \u2014 executive, clinical, operational, and governing body views." },
      { title: "Star Rating Projection", description: "Based on your current data, project your likely Star Rating across the four domains: residents\u2019 experience, compliance, quality measures, and staffing." },
    ],
    regulatoryRequirements: [
      { title: "Continuous Improvement", description: "Quality Standard 2 (The Organisation) requires providers to actively pursue continuous improvement based on data and evidence." },
      { title: "Governing Body Oversight", description: "Governing bodies must have access to performance data to fulfil their oversight obligations." },
      { title: "Star Ratings Awareness", description: "Providers should monitor their performance against Star Rating domains to maintain competitive positioning." },
    ],
    integrations: [
      { moduleSlug: "quality-indicators", moduleName: "Quality Indicators", description: "QI data feeds into benchmark comparisons and trend analysis." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Quality Standard compliance scores contribute to the overall compliance dashboard." },
      { moduleSlug: "reporting-hub", moduleName: "Reporting Hub", description: "Analytics dashboards can be exported as reports through the reporting hub." },
    ],
  },
];
