import {
  UserCheck,
  ClipboardList,
  Users,
  Building2,
  AlertTriangle,
  Award,
  MessageSquareWarning,
  ShieldAlert,
  Microscope,
  BarChart3,
  DollarSign,
  FileSignature,
  Banknote,
  BadgeCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ModuleCategory = "Governance & People" | "Safety & Quality" | "Financial & Commercial";

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
  capabilities: ModuleCapability[];
  workflow?: ModuleWorkflowStep[];
  regulatoryRequirements: ModuleRegRequirement[];
  integrations: ModuleIntegration[];
}

export const categoryColours: Record<ModuleCategory, { bg: string; text: string; border: string; gradient: string }> = {
  "Governance & People": {
    bg: "bg-[#96A998]/10",
    text: "text-[#3E5D4A]",
    border: "border-[#96A998]/20",
    gradient: "from-[#96A998]/10 to-transparent",
  },
  "Safety & Quality": {
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-100",
    gradient: "from-red-50 to-transparent",
  },
  "Financial & Commercial": {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-100",
    gradient: "from-blue-50 to-transparent",
  },
};

export const modules: ModuleData[] = [
  // ═══════════════════════════════════════════════
  // GOVERNANCE & PEOPLE
  // ═══════════════════════════════════════════════
  {
    slug: "responsible-persons",
    name: "Responsible Persons",
    code: "KeyPerson",
    category: "Governance & People",
    icon: UserCheck,
    section: "ss12–13, 152, 157–161",
    tagline: "Know who's responsible — and prove their suitability.",
    shortDescription:
      "Manage suitability assessments across all 10 statutory matters, worker screening, ACQSC notifications, and governing body skills matrices.",
    longDescription:
      "The Aged Care Act 2024 places significant obligations on providers to identify, assess, and monitor every responsible person — from executive decision-makers to nursing management. Statura Care's Responsible Persons module gives you a structured system to track suitability, manage screening compliance, and notify the ACQSC within statutory deadlines.",
    problemStatement:
      "Under the Aged Care Act 2024, providers must maintain a register of all responsible persons, conduct suitability assessments across 10 statutory matters, and notify the ACQSC within 14 days of any changes. Manual tracking across spreadsheets and emails creates gaps that put your registration at risk.",
    capabilities: [
      {
        title: "Responsible Person Register",
        description:
          "Maintain a complete register of all responsible persons across five categories: executive decision-makers, those with significant influence, nursing management, day-to-day operations, and prescribed others. Track their role, appointment date, and current status.",
      },
      {
        title: "Suitability Assessments",
        description:
          "Structured assessment workflow covering all 10 matters defined in s13 of the Act. Each matter tracked as clear, flagged, not applicable, or pending — with supporting evidence and narrative reasoning for every response.",
      },
      {
        title: "Worker Screening Compliance",
        description:
          "Track police certificates, NDIS Worker Screening clearances, and statutory declarations with expiry monitoring. Escalating alerts fire at 90, 60, 30, and 14 days before expiry so no screening lapses.",
      },
      {
        title: "ACQSC Notification Tracking",
        description:
          "Auto-generated notifications when reportable events occur — new appointments, cessations, suitability changes, and circumstance changes. Built-in 14-day deadline countdown with escalating alerts.",
      },
      {
        title: "Governing Body Skills Matrix",
        description:
          "Map competencies across your governing body: clinical, financial, governance, aged care operations, consumer perspective, risk management, HR, and technology. Identify skill gaps and generate board governance reports.",
      },
      {
        title: "Self-Service Portal",
        description:
          "Responsible persons can log in via secure magic link to complete self-declarations, upload documents, and notify of circumstance changes — reducing the administrative burden on your compliance team.",
      },
    ],
    workflow: [
      { step: "01", title: "Person Identified", description: "A new responsible person is appointed or identified. Their record is created in the register with role category and appointment details.", time: "Day 0" },
      { step: "02", title: "Screening Initiated", description: "Police certificates, NDIS Worker Screening, and statutory declarations are requested and tracked. Expiry dates are set automatically.", time: "Day 1–7" },
      { step: "03", title: "Suitability Assessed", description: "A structured assessment against all 10 statutory matters is conducted with evidence documented for each matter.", time: "Day 7–14" },
      { step: "04", title: "ACQSC Notified", description: "The system calculates the 14-day deadline and auto-generates the notification. Review, approve, and submit with full audit trail.", time: "Within 14 days" },
      { step: "05", title: "Ongoing Monitoring", description: "Screening expiry alerts, annual reassessment triggers, and circumstance change monitoring run continuously.", time: "Ongoing" },
    ],
    regulatoryRequirements: [
      { title: "Annual Suitability Assessments", description: "All active responsible persons must be reassessed annually, or earlier when circumstances change." },
      { title: "14-Day ACQSC Notification", description: "Providers must notify the ACQSC within 14 days of new appointments, cessations, suitability changes, or circumstance changes." },
      { title: "Screening Validity", description: "All responsible persons must hold current screening clearances. Expired screenings may constitute a registration condition breach." },
      { title: "Governing Body Competencies", description: "The governing body must collectively possess the skills and experience needed to govern the organisation effectively." },
    ],
    integrations: [
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Incidents record which responsible person was on duty, linking incident accountability to the register." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Governing body compliance evidence auto-feeds into Quality Standard 8 (Organisational Governance) assessments." },
      { moduleSlug: "code-of-conduct", moduleName: "Code of Conduct", description: "Governing persons tracked in both the Responsible Persons and Code of Conduct registers." },
    ],
  },

  {
    slug: "code-of-conduct",
    name: "Code of Conduct",
    code: "Conduct",
    category: "Governance & People",
    icon: ClipboardList,
    section: "ss63–65",
    tagline: "Every worker acknowledged. Every breach investigated.",
    shortDescription:
      "Track worker acknowledgments, training compliance, breach investigations with natural justice protections, and ACQSC reporting.",
    longDescription:
      "The Aged Care Act 2024 establishes a statutory Code of Conduct covering eight obligations that apply to every person working in aged care — employees, contractors, volunteers, and governing persons. Statura Care's Code of Conduct module ensures every worker acknowledges the Code, completes mandatory training, and that any alleged breaches are investigated with full natural justice protections.",
    problemStatement:
      "Every worker and governing person in aged care is subject to the statutory Code of Conduct. Providers must ensure 100% acknowledgment, deliver training, and investigate breaches with documented natural justice. Tracking this across hundreds of workers with spreadsheets leaves gaps that expose your organisation to regulatory action.",
    capabilities: [
      {
        title: "Worker Register",
        description:
          "Maintain a register of every person subject to the Code — employees, contractors, volunteers, governing persons, and agency staff. Track their acknowledgment status, training compliance, and any conduct history.",
      },
      {
        title: "Acknowledgment Tracking",
        description:
          "Every worker must acknowledge reading and understanding the Code. Track acknowledgment dates with version control. When the Code is updated, the system triggers re-acknowledgment requirements automatically.",
      },
      {
        title: "Training Management",
        description:
          "Induction and periodic refresher training tracked with completion dates, expiry dates, and compliance rates. Training modules cover all eight statutory obligations.",
      },
      {
        title: "Breach Investigation Workflow",
        description:
          "Structured investigation process: intake, investigator assignment (separate from the subject), terms of reference, evidence gathering, interviews, and — critically — the subject's right to respond before findings are made. Natural justice protections are built into the workflow.",
      },
      {
        title: "Outcome & Action Recording",
        description:
          "Record findings as substantiated, unsubstantiated, or inconclusive. Document actions taken — from counselling and training to warnings, suspension, termination, or ACQSC reporting for banning order consideration.",
      },
      {
        title: "ACQSC Breach Reporting",
        description:
          "Serious breaches must be reported to the ACQSC Commissioner. Track which breaches have been reported, Commissioner responses, and any banning order outcomes.",
      },
    ],
    regulatoryRequirements: [
      { title: "Universal Coverage", description: "All workers and governing persons are subject to the Code — no exceptions." },
      { title: "Mandatory Acknowledgment", description: "Every person must acknowledge the Code in writing, with re-acknowledgment when the Code is updated." },
      { title: "Natural Justice", description: "Breach investigations must provide the subject a right to respond before findings are made." },
      { title: "Serious Breach Reporting", description: "Serious breaches must be reported to the ACQSC Commissioner, who may issue banning orders." },
    ],
    integrations: [
      { moduleSlug: "responsible-persons", moduleName: "Responsible Persons", description: "Governing persons appear in both the Code of Conduct and Responsible Persons registers." },
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Conduct breaches may overlap with reportable incidents — use of force, neglect, or abuse." },
      { moduleSlug: "workforce", moduleName: "Workforce Compliance", description: "Worker records link across both modules for a complete people compliance picture." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Conduct compliance feeds into Quality Standard 7 (Human Resources) and Standard 8 (Governance)." },
    ],
  },

  {
    slug: "workforce",
    name: "Workforce Compliance",
    code: "Workforce",
    category: "Governance & People",
    icon: Users,
    section: "ss66–72",
    tagline: "Staff the floor. Meet the minutes. Prove the compliance.",
    shortDescription:
      "Worker screening, mandatory training, daily staffing minutes calculator, 24/7 RN coverage tracking, and qualification management.",
    longDescription:
      "The Aged Care Act 2024 introduced mandatory minimum staffing requirements with real financial penalties for non-compliance. Statura Care's Workforce module tracks every worker's screening, qualifications, and training — and calculates your daily care minutes per resident in real time so you always know where you stand.",
    problemStatement:
      "Providers must deliver a minimum of 200 care minutes per resident per day (increasing to 215 from October 2024), including 40 minutes of registered nurse care, with a registered nurse on-site 24/7. Non-compliance carries financial penalties. Tracking this manually across rosters, qualifications, and screening expiries is error-prone and high-risk.",
    capabilities: [
      {
        title: "Worker Register & Qualifications",
        description:
          "Comprehensive register of all workers with employment type, role category, qualifications, AHPRA registration status, and start/end dates. Expired registrations are flagged immediately — nurses cannot practise with a lapsed AHPRA registration.",
      },
      {
        title: "Screening Compliance",
        description:
          "Track police certificates, NDIS Worker Screening clearances, and Working with Vulnerable People checks with expiry monitoring. Escalating alerts ensure no worker's screening lapses.",
      },
      {
        title: "Mandatory Training Register",
        description:
          "Track completion across 10+ training modules — manual handling, fire safety, infection prevention, medication management, dementia care, palliative care, elder abuse recognition, Code of Conduct, and first aid. Expiry dates trigger re-training alerts.",
      },
      {
        title: "Daily Staffing Minutes Calculator",
        description:
          "Log actual staffing hours by role category (RN, EN, PCW, allied health) each day. The system automatically calculates total care minutes per resident per day, RN minutes per resident, and flags non-compliance against the 200-minute and 40-minute RN minimums.",
      },
      {
        title: "24/7 RN Coverage Tracking",
        description:
          "Confirm a registered nurse was on-site for every 24-hour period. Gaps are identified immediately with critical alerts — 24/7 RN coverage is a hard regulatory requirement.",
      },
      {
        title: "Staffing Mix Analysis",
        description:
          "Analyse your workforce composition by role category with trending over time. Generate reports aligned with Star Ratings, ACQSC reporting requirements, and governing body reporting.",
      },
    ],
    regulatoryRequirements: [
      { title: "200 Care Minutes Minimum", description: "Providers must deliver at least 200 minutes of direct care per resident per day (increasing to 215 from October 2024)." },
      { title: "40 RN Minutes Minimum", description: "At least 40 of those minutes must be delivered by a registered nurse." },
      { title: "24/7 RN On-Site", description: "At least one registered nurse must be on-site 24 hours a day, 7 days a week — with no gaps." },
      { title: "Financial Penalties", description: "Non-compliance with staffing requirements is subject to financial penalties." },
      { title: "Screening Compliance", description: "All workers must hold valid screening checks at all times." },
    ],
    integrations: [
      { moduleSlug: "responsible-persons", moduleName: "Responsible Persons", description: "Responsible persons who are employees appear in both registers." },
      { moduleSlug: "code-of-conduct", moduleName: "Code of Conduct", description: "Worker conduct records link to workforce records for a complete compliance picture." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Staffing data feeds into Quality Standard 7 (Human Resources) evidence." },
      { moduleSlug: "infection-prevention", moduleName: "Infection Prevention", description: "IPC training completion tracked in the workforce module." },
    ],
  },

  {
    slug: "associated-providers",
    name: "Associated Providers",
    code: "Associates",
    category: "Governance & People",
    icon: Building2,
    section: "ss14–16",
    tagline: "Map every association. Document every relationship.",
    shortDescription:
      "Associated persons register, influence assessment, due diligence records, and ACQSC change notifications.",
    longDescription:
      "The ACQSC considers the conduct and suitability of a provider's associated persons when assessing the provider itself. Statura Care's Associated Providers module maintains a complete register of all associated persons and entities — with influence assessments, due diligence records, and change notification tracking.",
    problemStatement:
      "Providers must disclose all associated persons to the ACQSC at registration and whenever associations change. Failure to disclose is a registration condition breach. Associated persons include individuals, companies, trusts, and partnerships with any level of influence — and the Commissioner considers their conduct when assessing your suitability.",
    capabilities: [
      {
        title: "Associated Persons Register",
        description:
          "Track all associated persons and entities — individuals, companies, trusts, and partnerships — with documented relationship basis, ownership percentages, and current status.",
      },
      {
        title: "Influence Assessment",
        description:
          "Classify each associate's level of influence: controlling, significant, moderate, minor, or historical. This assessment drives due diligence requirements and ACQSC disclosure obligations.",
      },
      {
        title: "Due Diligence Records",
        description:
          "Document background checks, bankruptcy searches, ASIC searches, litigation history, and regulatory history for each associate. Track adverse findings and their resolution.",
      },
      {
        title: "ACQSC Change Notifications",
        description:
          "When associations are created, modified, or ceased, the system tracks notification requirements to the ACQSC with submission status and deadline monitoring.",
      },
    ],
    regulatoryRequirements: [
      { title: "Disclosure Obligation", description: "All associated persons must be disclosed to the ACQSC at registration and when associations change." },
      { title: "Registration Condition", description: "Failure to disclose associated persons constitutes a registration condition breach." },
      { title: "Commissioner Consideration", description: "The ACQSC Commissioner considers the conduct of associated persons when assessing provider suitability." },
    ],
    integrations: [
      { moduleSlug: "responsible-persons", moduleName: "Responsible Persons", description: "Identifies dual relationships where responsible persons are also associates." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Association records feed into Quality Standard 8 (Governance) evidence." },
    ],
  },

  // ═══════════════════════════════════════════════
  // SAFETY & QUALITY
  // ═══════════════════════════════════════════════
  {
    slug: "sirs",
    name: "SIRS & Incidents",
    code: "SIRS",
    category: "Safety & Quality",
    icon: AlertTriangle,
    section: "ss162–164",
    tagline: "From incident to evidence — with every deadline tracked.",
    shortDescription:
      "Priority 1/2 incident reporting with auto-calculated deadlines, investigation workflow, restrictive practices register, and behaviour support plans.",
    longDescription:
      "The Serious Incident Response Scheme (SIRS) requires providers to report serious incidents to the ACQSC within strict timeframes — 24 hours for Priority 1, 30 days for Priority 2. Statura Care's SIRS module automates deadline tracking, structures the investigation process, and maintains the restrictive practices register and behaviour support plans in one integrated system.",
    problemStatement:
      "Missing a Priority 1 SIRS notification deadline can trigger immediate regulatory intervention. Managing incidents across spreadsheets, emails, and paper forms creates unacceptable risk — especially when you need to track investigations, remediation actions, and restrictive practices simultaneously. One missed deadline can cascade into a compliance crisis.",
    capabilities: [
      {
        title: "Incident Register with Auto-Classification",
        description:
          "Report incidents across 9 types defined in the Act: unreasonable force, unlawful sexual contact, psychological/emotional abuse, unexpected death, financial coercion, neglect, inappropriate restrictive practice use, unexplained absence, and other serious incidents. Priority is auto-calculated based on severity.",
      },
      {
        title: "Deadline Countdown & Escalation",
        description:
          "Priority 1 incidents trigger a 24-hour countdown with critical alerts at 20 hours. Priority 2 incidents have a 30-day deadline with escalating alerts at 14, 25, and 28 days. The system makes it structurally difficult to miss a notification deadline.",
      },
      {
        title: "ACQSC Notification Management",
        description:
          "Auto-generate initial, update (within 7 days for P1), and final report forms with incident details pre-populated. Review, approve, and submit — with full audit trail of every notification.",
      },
      {
        title: "Investigation Workflow",
        description:
          "Assign investigators, track investigation status, record findings, identify root causes, and document recommendations. Every step is logged for regulatory review.",
      },
      {
        title: "Restrictive Practices Register",
        description:
          "Track all uses of chemical, physical, mechanical, and environmental restraint and seclusion. Each use must be authorised, time-limited, and linked to a behaviour support plan with documented consent.",
      },
      {
        title: "Behaviour Support Plans",
        description:
          "Create and manage assessed behaviour support plans with alternative strategies trialled, consent tracking, and review schedules. Plans are linked to the restrictive practices register for a complete picture.",
      },
    ],
    workflow: [
      { step: "01", title: "Incident Reported", description: "A staff member reports a serious incident. The system auto-classifies priority and calculates the ACQSC notification deadline.", time: "0 hours" },
      { step: "02", title: "Deadline Countdown", description: "For P1, a 24-hour countdown begins with escalating alerts to compliance officers, managers, and the responsible person on duty.", time: "< 1 hour" },
      { step: "03", title: "ACQSC Notification", description: "The notification form is auto-generated with incident details. Review, approve, and submit with full audit trail.", time: "< 12 hours" },
      { step: "04", title: "Investigation Launched", description: "An investigator is assigned. Findings, root causes, and recommendations are documented systematically.", time: "Day 1–14" },
      { step: "05", title: "Remediation Tracked", description: "Investigation recommendations become tracked actions with owners, due dates, and completion evidence.", time: "Day 14–30" },
      { step: "06", title: "Evidence Flows to Standards", description: "Incident data, investigation findings, and remediation evidence auto-link to Quality Standard 8. Your next ACQSC assessment is already prepared.", time: "Continuous" },
    ],
    regulatoryRequirements: [
      { title: "P1: 24-Hour Notification", description: "Priority 1 incidents — those causing or likely to cause serious harm — must be notified to the ACQSC within 24 hours of the provider becoming aware." },
      { title: "P2: 30-Day Notification", description: "Priority 2 incidents must be notified within 30 business days." },
      { title: "P1 Update: 7 Days", description: "An update report for Priority 1 incidents must be submitted within 7 days of the initial notification." },
      { title: "Investigation Required", description: "All serious incidents must be investigated with findings documented." },
      { title: "Quarterly RP Reporting", description: "Restrictive practice use must be reported to the ACQSC quarterly." },
    ],
    integrations: [
      { moduleSlug: "responsible-persons", moduleName: "Responsible Persons", description: "Incidents record which responsible person was on duty at the time." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Incident data auto-feeds into Standard 8 (Governance) and Standard 3.4 (Restrictive Practices)." },
      { moduleSlug: "whistleblower", moduleName: "Whistleblower", description: "Protected disclosures can trigger SIRS incident creation." },
      { moduleSlug: "agreements", moduleName: "Agreements & Consent", description: "Restrictive practice consent cross-references with agreement consent records." },
    ],
  },

  {
    slug: "quality-standards",
    name: "Quality Standards",
    code: "Standards",
    category: "Safety & Quality",
    icon: Award,
    section: "ss146–147",
    tagline: "Audit-ready at all times — not just before an assessment.",
    shortDescription:
      "Self-assess against all 8 Quality Standards, map evidence from across modules, track continuous improvement, and generate audit preparation packs.",
    longDescription:
      "The 8 Aged Care Quality Standards define the outcomes providers must achieve. Statura Care's Quality Standards module structures your self-assessment process, automatically maps evidence from every active module, and maintains a continuous improvement register — so you're always assessment-ready, not scrambling before an ACQSC visit.",
    problemStatement:
      "ACQSC assessments can happen at any time — announced or unannounced. If your evidence is scattered across filing cabinets, shared drives, and individual knowledge, you're at risk. Preparing for an assessment shouldn't be a three-month project. It should be the natural output of day-to-day compliance work.",
    capabilities: [
      {
        title: "Self-Assessment Engine",
        description:
          "Assess compliance at the outcome level for each of the 8 Quality Standards. Rate each outcome as Compliant, Partially Compliant, Non-Compliant, or Not Assessed — with narrative reasoning and evidence references.",
      },
      {
        title: "Cross-Module Evidence Mapping",
        description:
          "Evidence flows in from every active module automatically. SIRS incident data feeds Standard 8. Workforce staffing data feeds Standard 7. Complaints data feeds Standard 6. You build evidence through normal operations, not manual collection.",
      },
      {
        title: "Continuous Improvement Register",
        description:
          "Every non-compliance or partial compliance triggers an improvement action with tracking: what needs improving, who's responsible, due date, progress updates, completion evidence, and verification.",
      },
      {
        title: "Assessment Cycle Management",
        description:
          "Rolling assessment schedule so you're not assessing all 8 standards at once. Set frequency per standard (default 6 months), assign assessors, and track when each standard is next due.",
      },
      {
        title: "Audit Preparation Pack",
        description:
          "Generate a comprehensive digital audit binder for ACQSC assessment contacts. Includes all self-assessments, mapped evidence, improvement actions, and cross-module data — structured the way assessors expect to see it.",
      },
      {
        title: "Compliance Dashboard",
        description:
          "Visual heatmap across all 8 standards showing outcome-level compliance status. Instantly identify gaps, track improvement over time, and report to your governing body with confidence.",
      },
    ],
    regulatoryRequirements: [
      { title: "Continuous Self-Assessment", description: "Providers must continuously assess their compliance against the 8 Quality Standards." },
      { title: "Evidence Documentation", description: "Compliance must be supported by documented evidence — not just assertions." },
      { title: "Continuous Improvement", description: "A systematic continuous improvement approach is a registration condition." },
      { title: "Assessment Readiness", description: "ACQSC assessments can occur at any time. Providers must be able to demonstrate compliance on demand." },
    ],
    integrations: [
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Incident data auto-feeds into Standard 8 (Governance) and Standard 3.4 (Restrictive Practices)." },
      { moduleSlug: "responsible-persons", moduleName: "Responsible Persons", description: "Governing body data feeds into Standard 8 governance evidence." },
      { moduleSlug: "complaints", moduleName: "Complaints", description: "Complaint data feeds into Standard 6 (Feedback and Complaints)." },
      { moduleSlug: "workforce", moduleName: "Workforce Compliance", description: "Staffing data feeds into Standard 7 (Human Resources)." },
      { moduleSlug: "prudential", moduleName: "Prudential Compliance", description: "Financial governance evidence feeds into Standard 8." },
    ],
  },

  {
    slug: "complaints",
    name: "Complaints",
    code: "Complaints",
    category: "Safety & Quality",
    icon: MessageSquareWarning,
    section: "ss196–201",
    tagline: "Acknowledge in 5. Resolve in 30. Track every interaction.",
    shortDescription:
      "5-business-day acknowledgment and 30-day resolution tracking, escalation workflow, systemic issue identification, and adverse action monitoring.",
    longDescription:
      "The Act requires providers to acknowledge complaints within 5 business days and resolve them within 30. Statura Care's Complaints module structures the entire lifecycle — from receipt through investigation and resolution — with built-in deadline tracking, escalation pathways, and monitoring to ensure complainants don't suffer adverse action.",
    problemStatement:
      "Complaints are a leading indicator of care quality. But managing them well requires tracking statutory timeframes, documenting every communication, identifying systemic issues, and ensuring complainants aren't treated badly for speaking up. Without a structured system, complaints fall through the cracks — and the ACQSC notices.",
    capabilities: [
      {
        title: "Complaints Register",
        description:
          "Track every complaint from receipt to resolution with auto-generated complaint numbers. Classify across 14 categories (care quality, staff conduct, communication, fees, food, environment, medication, personal care, privacy, rights, safety, access, discharge, and other) with severity grading.",
      },
      {
        title: "Statutory Deadline Tracking",
        description:
          "The system auto-calculates the 5-business-day acknowledgment deadline and 30-business-day resolution deadline from receipt. Escalating alerts ensure you never miss a statutory timeframe.",
      },
      {
        title: "Communication Log",
        description:
          "Document every interaction with the complainant — phone, email, in-person, letter. A chronological record of all communications demonstrates your commitment to resolution.",
      },
      {
        title: "Escalation Management",
        description:
          "Track internal escalations (to management) and external escalations (to the Commissioner) with reference numbers. Some complaints may need to be escalated to the SIRS or Whistleblower modules.",
      },
      {
        title: "Adverse Action Monitoring",
        description:
          "After a complaint is lodged, monitor the care recipient for adverse action — ensuring they don't experience negative treatment as a result of complaining. Document monitoring activities and outcomes.",
      },
      {
        title: "Trend Analysis",
        description:
          "Analyse complaint trends by category, service area, resolution time, and escalation rate. Identify systemic issues before they become regulatory findings.",
      },
    ],
    regulatoryRequirements: [
      { title: "5-Day Acknowledgment", description: "Complaints must be acknowledged within 5 business days of receipt." },
      { title: "30-Day Resolution", description: "Complaints must be resolved within 30 business days (extendable with documented reason)." },
      { title: "No Adverse Action", description: "Complainants must not suffer adverse treatment as a result of making a complaint." },
      { title: "Governing Body Reporting", description: "Complaint trends must be reported to the governing body regularly." },
    ],
    integrations: [
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Complaint data feeds into Quality Standard 6 (Feedback and Complaints)." },
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Complaints can escalate to SIRS incidents when reportable conduct is identified." },
      { moduleSlug: "whistleblower", moduleName: "Whistleblower", description: "Complaints can convert to protected disclosures when the complainant meets the criteria." },
    ],
  },

  {
    slug: "whistleblower",
    name: "Whistleblower",
    code: "Whistleblower",
    category: "Safety & Quality",
    icon: ShieldAlert,
    section: "ss186–195",
    tagline: "Protect the people who speak up.",
    shortDescription:
      "Confidential disclosure management with identity-restricted access, anonymous portal, investigation workflow, and discloser protection monitoring.",
    longDescription:
      "The Aged Care Act 2024 provides strong protections for people who disclose wrongdoing in aged care. Statura Care's Whistleblower module provides a secure, confidential system for receiving, investigating, and tracking protected disclosures — with strict access controls that ensure discloser identity is only visible to designated eligible recipients.",
    problemStatement:
      "Whistleblower protections are meaningless if the system doesn't enforce them. If anyone in the organisation can see who made a disclosure, the protection is compromised. You need a system that restricts discloser identity to eligible recipients only, provides an anonymous reporting channel, and monitors for reprisal — all with a complete audit trail.",
    capabilities: [
      {
        title: "Confidential Disclosure Register",
        description:
          "A secure register of all protected disclosures with strict identity protections. Discloser identity fields are only visible to designated eligible recipients — all other users see the disclosure content but never who made it.",
      },
      {
        title: "Anonymous Reporting Portal",
        description:
          "A public-facing portal where anyone can submit a disclosure anonymously — no authentication required. Disclosers receive a unique reference number to check the status of their disclosure without revealing their identity.",
      },
      {
        title: "Eligible Recipient Access Control",
        description:
          "Discloser identity is restricted to designated eligible recipients (typically compliance officer, CEO, board chair). Every access to confidential identity fields is logged in the audit trail.",
      },
      {
        title: "Investigation Management",
        description:
          "Structured investigation: assign an investigator (who is not the subject), set terms of reference, gather evidence, document findings, and recommend actions. The workflow ensures procedural fairness throughout.",
      },
      {
        title: "Discloser Protection Monitoring",
        description:
          "After a disclosure, actively monitor the discloser (if known) for potential reprisal. Track employment changes, schedule regular check-ins, and record any concerns about detrimental action.",
      },
      {
        title: "Policy & Acknowledgment Management",
        description:
          "Maintain your whistleblower policy with version control, track distribution to staff, and record acknowledgments. Annual policy review reminders ensure your policy stays current.",
      },
    ],
    regulatoryRequirements: [
      { title: "Documented Policy", description: "Providers must have a documented whistleblower policy, reviewed at least annually." },
      { title: "Confidentiality Protection", description: "Discloser identity must be protected from unauthorised disclosure." },
      { title: "No Reprisal", description: "Providers must not take detrimental action against a person who makes a protected disclosure." },
      { title: "Investigation Obligation", description: "Disclosures must be received, assessed, and investigated appropriately." },
    ],
    integrations: [
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "A disclosure can trigger creation of a SIRS incident when the alleged conduct meets SIRS criteria." },
      { moduleSlug: "responsible-persons", moduleName: "Responsible Persons", description: "Disclosures concerning a responsible person link to their record." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Whistleblower framework feeds into Standard 6 (Feedback and Complaints) and Standard 8 (Governance)." },
    ],
  },

  {
    slug: "infection-prevention",
    name: "Infection Prevention",
    code: "IPC",
    category: "Safety & Quality",
    icon: Microscope,
    section: "Standard 3 & 5",
    tagline: "Detect outbreaks early. Respond systematically. Prove the controls.",
    shortDescription:
      "Infection surveillance, outbreak auto-detection, hand hygiene audits, antimicrobial stewardship, and outbreak notifications.",
    longDescription:
      "Post-Royal Commission, infection prevention and control requirements have been significantly strengthened. Statura Care's IPC module provides a complete surveillance, outbreak management, and audit system — from detecting the first case to closing the outbreak and documenting the lessons learned.",
    problemStatement:
      "Outbreaks in aged care can be devastating. Early detection and systematic response save lives. But tracking infections across spreadsheets, managing outbreak notifications to multiple agencies, and maintaining audit compliance requires a dedicated system — not ad-hoc processes.",
    capabilities: [
      {
        title: "Infection Surveillance Register",
        description:
          "Track all detected infections with type (15 categories), onset date, laboratory confirmation status, treatment details, and outcome. Build a complete epidemiological picture of your facility.",
      },
      {
        title: "Automatic Outbreak Detection",
        description:
          "The system monitors for outbreak thresholds: 2 or more cases of the same infection type in the same unit within 72 hours triggers an outbreak alert. Early detection enables rapid response.",
      },
      {
        title: "Outbreak Management Workflow",
        description:
          "From declaration through control measures, daily monitoring, notification (PHU, ACQSC, families, staff), and closure. The system tracks every step with an outbreak timeline visualisation.",
      },
      {
        title: "Hand Hygiene & Environmental Audits",
        description:
          "Conduct and record audits with compliance scoring against your 80% target. Non-compliant areas trigger corrective actions that are tracked to completion.",
      },
      {
        title: "Antimicrobial Stewardship",
        description:
          "Track antimicrobial courses prescribed with type, indication, duration, and review compliance. Monitor patterns to support stewardship goals and reduce antimicrobial resistance.",
      },
      {
        title: "IPC Analytics & Reporting",
        description:
          "Infection rates over time, outbreak frequency and duration, audit compliance trends, antimicrobial patterns, and quarterly IPC reports for your governing body.",
      },
    ],
    regulatoryRequirements: [
      { title: "Mandatory IPC Lead", description: "Every facility must have a designated IPC lead with appropriate qualifications." },
      { title: "Surveillance & Reporting", description: "Ongoing infection surveillance and outbreak reporting are mandatory." },
      { title: "Outbreak Response Protocols", description: "Defined protocols must be in place and followed when an outbreak is declared." },
      { title: "Antimicrobial Stewardship", description: "Providers must implement antimicrobial stewardship programs." },
      { title: "Quarterly Governing Body Reports", description: "IPC performance must be reported to the governing body quarterly." },
    ],
    integrations: [
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Outbreak-related serious harm may be reportable as a SIRS incident." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "IPC data feeds into Standard 3 (Clinical Care) and Standard 5 (Service Environment)." },
      { moduleSlug: "workforce", moduleName: "Workforce Compliance", description: "IPC training records tracked in the workforce module." },
    ],
  },

  {
    slug: "quality-indicators",
    name: "Quality Indicators",
    code: "QI Reporter",
    category: "Safety & Quality",
    icon: BarChart3,
    section: "NAQIMQP",
    tagline: "Collect. Calculate. Benchmark. Improve.",
    shortDescription:
      "Quarterly data collection across 5 domains, rate calculations, national benchmarking, trend analysis, and CSV export for submission.",
    longDescription:
      "The National Aged Care Mandatory Quality Indicator Program requires quarterly data collection and submission across five clinical domains. Statura Care's QI Reporter automates rate calculations, benchmarks your facility against national averages, identifies deteriorating trends, and prepares your submission — so you spend less time on data and more time on improvement.",
    problemStatement:
      "Quarterly QI reporting is time-consuming and error-prone when done manually. Calculating rates, comparing against national benchmarks, identifying trends across quarters, and preparing submissions in the correct format takes staff away from care. And if the data shows your facility is performing below benchmark, you need to act quickly.",
    capabilities: [
      {
        title: "Five-Domain Data Collection",
        description:
          "Structured collection across all five mandatory domains: pressure injuries (by stage), physical restraint, unplanned weight loss, falls and major injury, and medication management (polypharmacy and antipsychotic use).",
      },
      {
        title: "Automated Rate Calculations",
        description:
          "Enter numerators and denominators — the system calculates prevalence and incidence rates automatically. No more spreadsheet formulas to audit.",
      },
      {
        title: "National Benchmarking",
        description:
          "Compare your facility's rates against published national averages with 25th and 75th percentile data. Instantly see where you're performing above or below benchmark.",
      },
      {
        title: "Trend Analysis",
        description:
          "Track performance over quarters. The system automatically identifies deteriorating trends — two or more consecutive quarters of worsening rates — and flags them for action.",
      },
      {
        title: "Improvement Actions",
        description:
          "When your rates are above benchmark or trending negatively, create targeted improvement actions linked to the specific domain. Track progress and measure impact in subsequent quarters.",
      },
      {
        title: "Submission Preparation",
        description:
          "Generate a CSV export matching Department submission requirements. Review, approve, and submit — with governing body quarterly QI reports generated automatically.",
      },
    ],
    regulatoryRequirements: [
      { title: "Quarterly Collection", description: "Data must be collected quarterly on designated census dates." },
      { title: "Submission Deadline", description: "QI data must be submitted to the Department by the quarterly deadline." },
      { title: "Public Reporting", description: "Published QI data is accessible on the My Aged Care website for public comparison." },
      { title: "ACQSC Assessment Use", description: "QI data is used in ACQSC quality assessments." },
    ],
    integrations: [
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Falls data cross-references with SIRS incident records." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "QI data feeds into Quality Standard 3 (Clinical Care) evidence." },
      { moduleSlug: "infection-prevention", moduleName: "Infection Prevention", description: "Infection-related QI data links to the IPC surveillance register." },
    ],
  },

  // ═══════════════════════════════════════════════
  // FINANCIAL & COMMERCIAL
  // ═══════════════════════════════════════════════
  {
    slug: "prudential",
    name: "Prudential Compliance",
    code: "Prudential",
    category: "Financial & Commercial",
    icon: DollarSign,
    section: "ss170–183",
    tagline: "Protect residents' money. Prove you can refund every dollar.",
    shortDescription:
      "Refundable deposit register, liquidity snapshots with coverage ratios, permitted use tracking, and 4-standard governance compliance.",
    longDescription:
      "Providers holding refundable accommodation deposits have a fiduciary duty to protect those funds and maintain sufficient liquidity to refund them on demand. Statura Care's Prudential module tracks every deposit, monitors your liquidity position in real time, and ensures compliance across all four Prudential Standards.",
    problemStatement:
      "Refundable accommodation deposits can represent tens of millions of dollars in liability. If your liquidity falls short and you can't refund a departing resident, you face immediate regulatory intervention. Tracking deposits, permitted uses, and liquidity ratios across spreadsheets is a risk no provider should take.",
    capabilities: [
      {
        title: "Refundable Deposit Register",
        description:
          "Track every RAD, RAC, and bond held with amount, date received, resident, room, interest accrued, permitted uses applied, and current balance. The system calculates balances automatically.",
      },
      {
        title: "Liquidity Dashboard",
        description:
          "Real-time view of your liquidity position: total deposits held vs liquid assets, with a coverage ratio that triggers alerts at watch (1.2–1.5), warning (1.0–1.2), and critical (<1.0) levels.",
      },
      {
        title: "Cash Flow Forecasting",
        description:
          "Project refund obligations over 30, 60, 90, and 180 days based on resident profiles. Scenario modelling helps you plan for multiple departures simultaneously.",
      },
      {
        title: "Permitted Use Tracking",
        description:
          "Record every use of refundable deposits for permitted purposes — capital expenditure, debt repayment, working capital, investment — with approval documentation and supporting evidence.",
      },
      {
        title: "Governance Compliance Checklist",
        description:
          "Structured compliance tracking for all four Prudential Standards: Governance, Liquidity, Records, and Disclosure. Track board financial expertise, reporting cycles, independent audits, and risk management.",
      },
      {
        title: "Prudential Reporting",
        description:
          "Generate annual prudential compliance statements, liquidity position reports, deposit reconciliations, and financial governance attestations for ACQSC submission.",
      },
    ],
    regulatoryRequirements: [
      { title: "Liquidity Requirement", description: "Providers must maintain sufficient liquidity to refund all deposits as they fall due." },
      { title: "Monthly Reconciliation", description: "Deposit registers must be reconciled with financial accounts monthly." },
      { title: "Governance Framework", description: "Documented financial governance framework with board oversight, quarterly reporting, and independent audit." },
      { title: "Disclosure Obligations", description: "Maximum RAD/DAP amounts must be published on My Aged Care. Annual statements provided to each resident." },
    ],
    integrations: [
      { moduleSlug: "responsible-persons", moduleName: "Responsible Persons", description: "Governing body financial expertise from the skills matrix displayed as evidence for Prudential Standard 1." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Prudential compliance feeds into Quality Standard 8 (Governance)." },
      { moduleSlug: "agreements", moduleName: "Agreements & Consent", description: "Accommodation payment terms in agreements link to deposit records." },
    ],
  },

  {
    slug: "agreements",
    name: "Agreements & Consent",
    code: "Agreements",
    category: "Financial & Commercial",
    icon: FileSignature,
    section: "ss44–51",
    tagline: "Every agreement complete. Every consent current.",
    shortDescription:
      "Resident agreement register with 10-item mandatory content checklist, fee schedule tracking, consent management, and variation history.",
    longDescription:
      "The Aged Care Act 2024 mandates that every care recipient has a written agreement covering 10 specific content areas. Statura Care's Agreements module ensures every agreement contains the required content, tracks all consents with their expiry dates, and manages fee schedules and variations — all with full audit trail.",
    problemStatement:
      "An incomplete resident agreement is a compliance breach waiting to happen. The Act specifies 10 mandatory content areas that must be present. Consents expire and need renewal. Fees change and require notice. Managing this across hundreds of residents with paper files or basic spreadsheets creates gaps that regulators will find.",
    capabilities: [
      {
        title: "Agreement Register",
        description:
          "Track every resident agreement with parties, execution date, commencement date, type (residential, home care, flexible, respite, short-term restorative), and current status. Auto-generated agreement numbers for easy reference.",
      },
      {
        title: "Mandatory Content Checklist",
        description:
          "The system tracks all 10 legislated mandatory content areas for each agreement — care and services, fees, rights, provider obligations, complaints process, termination, notice periods, security of tenure, privacy, and information consent. Missing items are flagged immediately.",
      },
      {
        title: "Consent Management",
        description:
          "Track all consents: care plan, restrictive practices, information sharing, photography, advance care directives, research, medication, transport, outings, and financial management. Each consent records the method, status, expiry date, and evidence.",
      },
      {
        title: "Fee Schedule Tracking",
        description:
          "Itemise all fees and charges per agreement with change history. The system calculates required notice periods for fee changes and tracks acknowledgment from care recipients.",
      },
      {
        title: "Variation Management",
        description:
          "When care, services, or fees change, track the variation with notice given, acknowledgment received, and effective date. Maintain a complete history of all changes.",
      },
      {
        title: "Regulatory Disclosure Tracking",
        description:
          "Track required disclosures to care recipients: Charter of Aged Care Rights, fees and charges, complaints process, privacy notice, security of tenure, and advocacy services.",
      },
    ],
    regulatoryRequirements: [
      { title: "Written Agreement Required", description: "Every care recipient must have a written agreement before or as soon as practicable after care commences." },
      { title: "10 Mandatory Content Areas", description: "Each agreement must contain all 10 content areas specified in s45 of the Act." },
      { title: "No Overcharging", description: "Providers must not charge more than specified in the agreement." },
      { title: "Review on Change", description: "Agreements must be reviewed and varied when circumstances change." },
    ],
    integrations: [
      { moduleSlug: "prudential", moduleName: "Prudential Compliance", description: "Accommodation payment terms link to refundable deposit records." },
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Restrictive practice consent cross-referenced with SIRS consent tracking." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Agreement compliance feeds into Standard 1 (Consumer Dignity and Choice) and Standard 2 (Ongoing Assessment and Planning)." },
    ],
  },

  {
    slug: "funding",
    name: "Funding & Claims",
    code: "Funding",
    category: "Financial & Commercial",
    icon: Banknote,
    section: "AN-ACC",
    tagline: "Classify accurately. Claim correctly. Reconcile monthly.",
    shortDescription:
      "AN-ACC classification tracking across 13 classes, subsidy rate management, monthly claims reconciliation, and supplement tracking.",
    longDescription:
      "Accurate AN-ACC classification and claims management is essential to your financial sustainability. Statura Care's Funding module tracks every resident's classification, manages subsidy rates, reconciles monthly claims against expected funding, and monitors supplements — ensuring you claim everything you're entitled to and nothing you're not.",
    problemStatement:
      "Incorrect funding claims can result in debt recovery and compliance action. With 13 AN-ACC classes, multiple supplement types, and monthly claims reconciliation, the complexity is significant. Under-claiming costs you money. Over-claiming costs you your reputation. You need a system that gets it right.",
    capabilities: [
      {
        title: "Resident Funding Register",
        description:
          "Track every resident's AN-ACC classification across 13 classes, assessment date, reassessment due date, and daily subsidy rate. Maintain a complete classification history with change reasons.",
      },
      {
        title: "Subsidy Rate Management",
        description:
          "Maintain current AN-ACC rates for each class with effective date ranges. Update rates when the government adjusts them (typically July 1 annually). The system calculates expected daily funding automatically.",
      },
      {
        title: "Monthly Claims Reconciliation",
        description:
          "Compare expected funding (classifications × days × rates) against actual funding received from Services Australia. Identify and investigate variances before they compound.",
      },
      {
        title: "Supplement Tracking",
        description:
          "Track eligibility and claims for all supplement types: accommodation, homeless, veterans, oxygen, enteral feeding, hardship, and viability supplements.",
      },
      {
        title: "Reclassification Alerts",
        description:
          "When a resident's care needs change significantly — post-incident or clinical deterioration — the system prompts a reclassification review to ensure funding matches actual care requirements.",
      },
      {
        title: "Funding Analytics",
        description:
          "Average funding per resident per day, case-mix profile (AN-ACC class distribution), revenue forecasting, and rate change impact modelling for financial planning.",
      },
    ],
    regulatoryRequirements: [
      { title: "Accurate Claims", description: "Funding claims to Services Australia must accurately reflect each resident's classification and care." },
      { title: "Reassessment Obligation", description: "Reclassification required when care needs change significantly (typically 12-monthly minimum)." },
      { title: "Debt Recovery Risk", description: "Incorrect claims can result in debt recovery and compliance action." },
      { title: "Reconciliation", description: "Monthly reconciliation of expected vs actual funding to identify discrepancies." },
    ],
    integrations: [
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Incidents causing care level changes prompt reclassification review alerts." },
      { moduleSlug: "prudential", moduleName: "Prudential Compliance", description: "Funding data feeds into financial position and liquidity planning." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Funding governance feeds into Quality Standard 8 evidence." },
    ],
  },

  {
    slug: "registration",
    name: "Registration",
    code: "Registration",
    category: "Financial & Commercial",
    icon: BadgeCheck,
    section: "ss17–30",
    tagline: "Your licence to operate — monitored and maintained.",
    shortDescription:
      "Registration status tracking, conditions register, regulatory correspondence management, and compliance self-checks.",
    longDescription:
      "Provider registration is the foundation of everything — without it, you cannot deliver aged care services. Statura Care's Registration module tracks your registration status, monitors all conditions, manages ACQSC correspondence with deadline tracking, and runs compliance self-checks that query other modules to verify you're meeting every condition.",
    problemStatement:
      "Losing your registration means you cannot deliver any care services. Registration conditions are varied and specific — some apply to all providers, others are tailored to your circumstances. Tracking compliance with every condition, managing ACQSC correspondence deadlines, and preparing for renewal is critical work that cannot afford to slip.",
    capabilities: [
      {
        title: "Registration Record Management",
        description:
          "Track your registration number, type (residential, home care, flexible, multi-type), status, approval dates, and expiry dates. Monitor approved places and services by type and location.",
      },
      {
        title: "Conditions Register",
        description:
          "Track standard conditions (that apply to all providers) and specific conditions (tailored to your provider). For each condition, record compliance status, evidence, and verification dates.",
      },
      {
        title: "Compliance Self-Check",
        description:
          "Periodic self-assessment against all registration conditions. The system queries other active modules to verify compliance — for example, checking KeyPerson for responsible person suitability or Whistleblower for policy existence.",
      },
      {
        title: "Renewal Monitoring",
        description:
          "Countdown alerts at 180, 90, 60, and 30 days before registration expiry. Track application preparation, supporting documentation, submission, and outcome.",
      },
      {
        title: "ACQSC Correspondence Management",
        description:
          "Track all communications with the ACQSC: type, date, content summary, response requirements, and deadlines. Escalating alerts ensure no correspondence goes unanswered.",
      },
      {
        title: "Registration Dashboard",
        description:
          "At-a-glance view of registration status, renewal countdown, conditions compliance percentage, active regulatory actions, and pending variations.",
      },
    ],
    regulatoryRequirements: [
      { title: "Active Registration", description: "Providers must maintain active registration to deliver any aged care services." },
      { title: "Condition Compliance", description: "All registration conditions — standard and specific — must be met at all times." },
      { title: "Renewal Monitoring", description: "Registration renewal must be prepared and submitted before expiry." },
      { title: "Correspondence Deadlines", description: "ACQSC correspondence requiring a response must be answered by the stated deadline." },
    ],
    integrations: [
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Registration conditions map to Quality Standards — compliance self-check draws on Standards assessments." },
      { moduleSlug: "responsible-persons", moduleName: "Responsible Persons", description: "Responsible person suitability is a registration condition — verified through the self-check." },
      { moduleSlug: "whistleblower", moduleName: "Whistleblower", description: "Having a whistleblower policy is a registration condition — verified through the self-check." },
    ],
  },
];

// Helper functions
export function getModuleBySlug(slug: string): ModuleData | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesByCategory(category: ModuleCategory): ModuleData[] {
  return modules.filter((m) => m.category === category);
}

export const categories: ModuleCategory[] = [
  "Governance & People",
  "Safety & Quality",
  "Financial & Commercial",
];
