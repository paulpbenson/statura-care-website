import {
  Activity,
  Clipboard,
  Pill,
  ShieldPlus,
} from "lucide-react";
import type { ModuleData } from "./types";

export const clinicalModules: ModuleData[] = [
  {
    slug: "clinical-care",
    name: "Clinical Care",
    code: "ClinicalCare",
    category: "Clinical & Care",
    icon: Activity,
    section: "Standards 2\u20133",
    tagline: "Clinical intelligence at the point of care.",
    shortDescription:
      "Vital signs monitoring with abnormal detection, 9 standardised clinical assessments (MMSE, Braden, ADL, MoCA, and more), wound management, and care planning.",
    longDescription:
      "Clinical data captured on paper or in disconnected systems makes it hard to spot deterioration trends and maintain assessment schedules. Statura Care\u2019s Clinical Care module provides real-time vital signs monitoring, standardised assessment tools, wound tracking with photo documentation, and care plan management \u2014 all linked to the resident\u2019s record.",
    problemStatement:
      "Clinical data captured on paper or in disconnected systems makes it hard to spot deterioration trends, maintain assessment schedules, and ensure care plans reflect current clinical status. Early detection of change saves lives \u2014 but only if the data is structured and accessible.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Vital Signs Monitoring", description: "Record blood pressure, heart rate, oxygen saturation, temperature, and respiratory rate with automatic abnormal value detection. Critical results generate immediate alerts to clinical staff." },
      { title: "9 Standardised Assessments", description: "Built-in scoring for MMSE, RUDAS, MoCA (cognitive), Braden Scale (pressure injury risk), ADL, IADL (functional), Falls Risk, MNA (nutrition), and Abbey Pain Scale \u2014 with automated score interpretation and risk categorisation." },
      { title: "Wound Management", description: "Track wounds with type, location, measurements, staging, treatment plan, and photo documentation. Monitor healing progress over time with wound assessment history." },
      { title: "Care Plan Management", description: "Create individualised care plans linked to clinical assessments, goals of care, and advance directives. Track review schedules and plan modifications." },
      { title: "Clinical Alerts & Escalation", description: "Abnormal vital signs, overdue assessments, and worsening wound conditions generate alerts with configurable escalation rules to ensure timely clinical response." },
      { title: "Clinical Reporting", description: "Vital signs trends, assessment summaries, wound registers, and care plan compliance reports for clinical governance and Quality Standard evidence." },
    ],
    regulatoryRequirements: [
      { title: "Ongoing Clinical Assessment", description: "Quality Standard 2 requires ongoing assessment and planning with the consumer to optimise health and wellbeing." },
      { title: "Clinical Care Standards", description: "Quality Standard 3 requires safe, effective clinical care that meets the consumer\u2019s needs and is delivered by competent staff." },
      { title: "Care Plan Documentation", description: "Care plans must be documented, regularly reviewed, and reflect the consumer\u2019s current needs and preferences." },
    ],
    integrations: [
      { moduleSlug: "medications", moduleName: "Medications", description: "Clinical assessments may trigger medication reviews. Vital sign changes can indicate medication side effects." },
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Clinical incidents \u2014 falls causing injury, pressure injuries \u2014 may be reportable under SIRS." },
      { moduleSlug: "care-delivery", moduleName: "Care Delivery", description: "Care plans inform daily care delivery, and progress notes reference clinical assessments." },
      { moduleSlug: "quality-indicators", moduleName: "Quality Indicators", description: "Clinical assessment data informs QI domain calculations for falls, pressure injuries, and weight loss." },
    ],
  },

  {
    slug: "care-delivery",
    name: "Care Delivery",
    code: "CareDelivery",
    category: "Clinical & Care",
    icon: Clipboard,
    section: "Standard 7",
    tagline: "Track every minute of care delivered.",
    shortDescription:
      "Progress notes, shift handover reports, and care minutes tracking against the 215/44 mandate with daily and quarterly compliance views.",
    longDescription:
      "Meeting the 215/44 care minutes target requires precise tracking of RN and total care time. Statura Care\u2019s Care Delivery module tracks progress notes, shift handovers, and daily care minutes per resident \u2014 giving you real-time visibility into whether you\u2019re meeting the mandate, not just a retrospective quarterly surprise.",
    problemStatement:
      "Most providers can\u2019t report their actual care minutes until well after the quarter ends. By then, it\u2019s too late to correct shortfalls. You need daily visibility into care minutes delivery so you can adjust staffing before non-compliance becomes a financial penalty.",
    applicableTo: ["residential"],
    capabilities: [
      { title: "Progress Notes", description: "Structured progress notes with categories, priority levels, and resident linkage. Notes are timestamped, attributed, and searchable across residents and date ranges." },
      { title: "Shift Handover", description: "Standardised shift handover reports capturing key events, concerns, and follow-up actions. Incoming staff receive a structured briefing \u2014 not ad-hoc verbal updates." },
      { title: "Daily Care Minutes", description: "Track actual care minutes by staff category (RN, EN, AIN, allied health) per day. The system calculates total and RN minutes per resident against the 215/44 targets." },
      { title: "Quarterly Compliance", description: "Rolling quarterly view of care minutes compliance with trend lines, forecasting, and early warning when you\u2019re tracking below target." },
      { title: "Star Rating Alignment", description: "Care minutes data feeds into Star Rating calculations. See your projected star rating band based on current care delivery levels." },
      { title: "Care Delivery Reports", description: "Daily summaries, quarterly compliance reports, progress note activity, and handover quality metrics for clinical governance." },
    ],
    regulatoryRequirements: [
      { title: "215 Care Minutes Target", description: "Providers must deliver at least 215 minutes of direct care per resident per day (total across all staff categories)." },
      { title: "44 RN Minutes Target", description: "At least 44 of those minutes must be delivered by a registered nurse." },
      { title: "Financial Penalties", description: "Non-compliance with care minutes targets is subject to financial penalties." },
      { title: "Progress Note Documentation", description: "Care delivery must be documented with progress notes reflecting the consumer\u2019s ongoing care." },
    ],
    integrations: [
      { moduleSlug: "clinical-care", moduleName: "Clinical Care", description: "Care plans inform daily care delivery priorities. Progress notes reference clinical assessments and care plan goals." },
      { moduleSlug: "rostering", moduleName: "Rostering & Scheduling", description: "Roster data feeds directly into care minutes calculations \u2014 scheduled vs actual hours by staff category." },
      { moduleSlug: "workforce", moduleName: "Workforce Compliance", description: "Staff qualifications determine which care minutes category their hours count towards." },
    ],
  },

  {
    slug: "medications",
    name: "Medications",
    code: "Medications",
    category: "Clinical & Care",
    icon: Pill,
    section: "Standard 3",
    tagline: "Safe medication management from order to administration.",
    shortDescription:
      "Medication orders, administration recording, Schedule 8 controlled drug register, adverse reaction tracking, drug interaction checking, and reconciliation.",
    longDescription:
      "Medication errors are one of the most common adverse events in aged care. Statura Care\u2019s Medications module provides a complete medication management system \u2014 from order entry with drug interaction checking through administration recording, S8 controlled drug management, adverse reaction tracking, and reconciliation.",
    problemStatement:
      "Paper-based medication charts create risks \u2014 illegible orders, missed administrations, unreconciled S8 balances, and undetected drug interactions that endanger residents. A digital system with built-in safety checks catches errors before they reach the resident.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Medication Order Management", description: "Record medication orders with drug, dose, route, frequency, prescriber, and start/end dates. Active order list with quick access to administration history." },
      { title: "Drug Interaction Checking", description: "Automated checking across 20+ interaction rules and 50+ drug class mappings. Severity levels from minor to contraindicated with clinical guidance for each interaction." },
      { title: "Administration Recording", description: "Record each administration with timestamp, dose given, administering nurse, and witness (required for S8 drugs). Track missed, held, and refused doses with reason codes." },
      { title: "Schedule 8 Register", description: "Full S8 controlled drug register with receipt, administration, disposal, and balance tracking. Dual-witness requirement enforced. Discrepancy alerts for balance mismatches." },
      { title: "Adverse Reaction Tracking", description: "Report and track adverse drug reactions (ADRs) with severity, suspected medication, action taken, and outcome. Serious ADRs may trigger SIRS incident creation." },
      { title: "Medication Reconciliation", description: "Structured reconciliation on admission, transfer, and discharge. Compare ordered medications against actual supply and identify discrepancies for clinical review." },
    ],
    regulatoryRequirements: [
      { title: "Safe Medication Practices", description: "Quality Standard 3 requires safe medication management including prescribing, dispensing, administration, and review." },
      { title: "S8 Record Keeping", description: "Schedule 8 drugs require a formal register with receipt, administration, disposal, and balance records maintained at all times." },
      { title: "Medication Review", description: "Residents should receive regular medication reviews, particularly those on multiple medications (polypharmacy)." },
      { title: "Incident Reporting", description: "Medication incidents must be recorded and reported through the incident management system." },
    ],
    integrations: [
      { moduleSlug: "clinical-care", moduleName: "Clinical Care", description: "Vital sign changes may indicate medication effects. Clinical assessments inform medication review timing." },
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Serious medication errors or adverse reactions may be reportable under SIRS." },
      { moduleSlug: "quality-indicators", moduleName: "Quality Indicators", description: "Polypharmacy and antipsychotic use data feeds directly into QI domain reporting." },
    ],
  },

  {
    slug: "infection-prevention",
    name: "Infection Prevention & Control",
    code: "IPC",
    category: "Clinical & Care",
    icon: ShieldPlus,
    section: "Standards 3 & 5",
    tagline: "Detect outbreaks early. Respond systematically. Prove the controls.",
    shortDescription:
      "Infection surveillance, outbreak auto-detection, hand hygiene audits, antimicrobial stewardship, and outbreak management with notification tracking.",
    longDescription:
      "Post-Royal Commission, infection prevention and control requirements have been significantly strengthened. Statura Care\u2019s IPC module provides a complete surveillance, outbreak management, and audit system \u2014 from detecting the first case to closing the outbreak and documenting the lessons learned.",
    problemStatement:
      "Outbreaks in aged care can be devastating. Early detection and systematic response save lives. But tracking infections across spreadsheets, managing outbreak notifications to multiple agencies, and maintaining audit compliance requires a dedicated system.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Infection Surveillance Register", description: "Track all detected infections with type (15 categories), onset date, laboratory confirmation status, treatment details, and outcome. Build a complete epidemiological picture." },
      { title: "Automatic Outbreak Detection", description: "The system monitors for outbreak thresholds: 2 or more cases of the same infection type in the same unit within 72 hours triggers an outbreak alert. Early detection enables rapid response." },
      { title: "Outbreak Management Workflow", description: "From declaration through control measures, daily monitoring, notification (PHU, ACQSC, families, staff), and closure. The system tracks every step with an outbreak timeline." },
      { title: "Hand Hygiene & Environmental Audits", description: "Conduct and record audits with compliance scoring against your 80% target. Non-compliant areas trigger corrective actions that are tracked to completion." },
      { title: "Antimicrobial Stewardship", description: "Track antimicrobial courses prescribed with type, indication, duration, and review compliance. Monitor patterns to support stewardship goals." },
      { title: "IPC Analytics & Reporting", description: "Infection rates over time, outbreak frequency and duration, audit compliance trends, and quarterly IPC reports for your governing body." },
    ],
    regulatoryRequirements: [
      { title: "Mandatory IPC Lead", description: "Every facility must have a designated IPC lead with appropriate qualifications." },
      { title: "Surveillance & Reporting", description: "Ongoing infection surveillance and outbreak reporting are mandatory." },
      { title: "Outbreak Response Protocols", description: "Defined protocols must be in place and followed when an outbreak is declared." },
      { title: "Antimicrobial Stewardship", description: "Providers must implement antimicrobial stewardship programs." },
    ],
    integrations: [
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Outbreak-related serious harm may be reportable as a SIRS incident." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "IPC data feeds into Standard 3 (Clinical Care) and Standard 5 (Service Environment)." },
      { moduleSlug: "workforce", moduleName: "Workforce Compliance", description: "IPC training records tracked in the workforce module." },
    ],
  },
];
