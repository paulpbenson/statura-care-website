import {
  UserCheck,
  ClipboardList,
  Building2,
  AlertTriangle,
  Award,
  MessageSquareWarning,
  ShieldAlert,
  BarChart3,
  BadgeCheck,
  Scale,
} from "lucide-react";
import type { ModuleData } from "./types";

export const complianceModules: ModuleData[] = [
  {
    slug: "responsible-persons",
    name: "Responsible Persons",
    code: "KeyPerson",
    category: "Compliance & Governance",
    icon: UserCheck,
    section: "ss12\u201313, 152, 157\u2013161",
    tagline: "Know who\u2019s responsible \u2014 and prove their suitability.",
    shortDescription:
      "Manage suitability assessments across all 10 statutory matters, worker screening, ACQSC notifications, and governing body skills matrices.",
    longDescription:
      "The Aged Care Act 2024 places significant obligations on providers to identify, assess, and monitor every responsible person \u2014 from executive decision-makers to nursing management. Statura Care\u2019s Responsible Persons module gives you a structured system to track suitability, manage screening compliance, and notify the ACQSC within statutory deadlines.",
    problemStatement:
      "Under the Aged Care Act 2024, providers must maintain a register of all responsible persons, conduct suitability assessments across 10 statutory matters, and notify the ACQSC within 14 days of any changes. Manual tracking across spreadsheets and emails creates gaps that put your registration at risk.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Responsible Person Register", description: "Maintain a complete register of all responsible persons across five categories: executive decision-makers, those with significant influence, nursing management, day-to-day operations, and prescribed others. Track their role, appointment date, and current status." },
      { title: "Suitability Assessments", description: "Structured assessment workflow covering all 10 matters defined in s13 of the Act. Each matter tracked as clear, flagged, not applicable, or pending \u2014 with supporting evidence and narrative reasoning for every response." },
      { title: "Worker Screening Compliance", description: "Track police certificates, NDIS Worker Screening clearances, and statutory declarations with expiry monitoring. Escalating alerts fire at 90, 60, 30, and 14 days before expiry so no screening lapses." },
      { title: "ACQSC Notification Tracking", description: "Auto-generated notifications when reportable events occur \u2014 new appointments, cessations, suitability changes, and circumstance changes. Built-in 14-day deadline countdown with escalating alerts." },
      { title: "Governing Body Skills Matrix", description: "Map competencies across your governing body: clinical, financial, governance, aged care operations, consumer perspective, risk management, HR, and technology. Identify skill gaps and generate board governance reports." },
      { title: "Self-Service Portal", description: "Responsible persons can log in via secure magic link to complete self-declarations, upload documents, and notify of circumstance changes \u2014 reducing the administrative burden on your compliance team." },
    ],
    workflow: [
      { step: "01", title: "Person Identified", description: "A new responsible person is appointed or identified. Their record is created in the register with role category and appointment details.", time: "Day 0" },
      { step: "02", title: "Screening Initiated", description: "Police certificates, NDIS Worker Screening, and statutory declarations are requested and tracked. Expiry dates are set automatically.", time: "Day 1\u20137" },
      { step: "03", title: "Suitability Assessed", description: "A structured assessment against all 10 statutory matters is conducted with evidence documented for each matter.", time: "Day 7\u201314" },
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
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Governing body compliance evidence auto-feeds into Quality Standard 2 (The Organisation) assessments." },
      { moduleSlug: "governance", moduleName: "Governance", description: "Board composition and skills matrix data flows into governance meeting packs and risk oversight." },
    ],
  },

  {
    slug: "quality-standards",
    name: "Quality Standards",
    code: "Standards",
    category: "Compliance & Governance",
    icon: Award,
    section: "ss146\u2013147",
    tagline: "Audit-ready at all times \u2014 not just before an assessment.",
    shortDescription:
      "Self-assess against all 7 Quality Standards, map evidence from across modules, track continuous improvement, and generate audit preparation packs.",
    longDescription:
      "The 7 Strengthened Aged Care Quality Standards define the outcomes providers must achieve. Statura Care\u2019s Quality Standards module structures your self-assessment process, automatically maps evidence from every active module, and maintains a continuous improvement register \u2014 so you\u2019re always assessment-ready, not scrambling before an ACQSC visit.",
    problemStatement:
      "ACQSC assessments can happen at any time \u2014 announced or unannounced. If your evidence is scattered across filing cabinets, shared drives, and individual knowledge, you\u2019re at risk. Preparing for an assessment shouldn\u2019t be a three-month project. It should be the natural output of day-to-day compliance work.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Self-Assessment Engine", description: "Assess compliance at the outcome level for each of the 7 Quality Standards. Rate each outcome as Compliant, Partially Compliant, Non-Compliant, or Not Assessed \u2014 with narrative reasoning and evidence references." },
      { title: "Cross-Module Evidence Mapping", description: "Evidence flows in from every active module automatically. SIRS incident data feeds Standard 2 (The Organisation) and Standard 3 (The Care and Services). Workforce staffing data feeds Standard 2. Clinical data feeds Standard 5 (Clinical Care). You build evidence through normal operations, not manual collection." },
      { title: "Continuous Improvement Register", description: "Every non-compliance or partial compliance triggers an improvement action with tracking: what needs improving, who\u2019s responsible, due date, progress updates, completion evidence, and verification." },
      { title: "Assessment Cycle Management", description: "Rolling assessment schedule so you\u2019re not assessing all 7 standards at once. Set frequency per standard (default 6 months), assign assessors, and track when each standard is next due." },
      { title: "Audit Preparation Pack", description: "Generate a comprehensive digital audit binder for ACQSC assessment contacts. Includes all self-assessments, mapped evidence, improvement actions, and cross-module data \u2014 structured the way assessors expect to see it." },
      { title: "Compliance Dashboard", description: "Visual heatmap across all 7 standards showing outcome-level compliance status. Instantly identify gaps, track improvement over time, and report to your governing body with confidence." },
    ],
    regulatoryRequirements: [
      { title: "Continuous Self-Assessment", description: "Providers must continuously assess their compliance against the 7 Quality Standards." },
      { title: "Evidence Documentation", description: "Compliance must be supported by documented evidence \u2014 not just assertions." },
      { title: "Continuous Improvement", description: "A systematic continuous improvement approach is a registration condition." },
      { title: "Assessment Readiness", description: "ACQSC assessments can occur at any time. Providers must be able to demonstrate compliance on demand." },
    ],
    integrations: [
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Incident data auto-feeds into Standard 2 (The Organisation) and Standard 3 (The Care and Services)." },
      { moduleSlug: "responsible-persons", moduleName: "Responsible Persons", description: "Governing body data feeds into Standard 2 (The Organisation) evidence." },
      { moduleSlug: "complaints", moduleName: "Complaints", description: "Complaint data feeds into Standard 2 (The Organisation)." },
      { moduleSlug: "clinical-care", moduleName: "Clinical Care", description: "Clinical assessments and care plans feed into Standard 3 (The Care and Services) and Standard 5 (Clinical Care) evidence." },
      { moduleSlug: "analytics", moduleName: "Analytics & Benchmarking", description: "Cross-module compliance scoring provides a single view of standards performance." },
    ],
  },

  {
    slug: "code-of-conduct",
    name: "Code of Conduct",
    code: "Conduct",
    category: "Compliance & Governance",
    icon: ClipboardList,
    section: "ss63\u201365",
    tagline: "Every worker acknowledged. Every breach investigated.",
    shortDescription:
      "Track worker acknowledgements, training compliance, breach investigations with natural justice protections, and ACQSC reporting.",
    longDescription:
      "The Aged Care Act 2024 establishes a statutory Code of Conduct covering eight obligations that apply to every person working in aged care \u2014 employees, contractors, volunteers, and governing persons. Statura Care\u2019s Code of Conduct module ensures every worker acknowledges the Code, completes mandatory training, and that any alleged breaches are investigated with full natural justice protections.",
    problemStatement:
      "Every worker and governing person in aged care is subject to the statutory Code of Conduct. Providers must ensure 100% acknowledgement, deliver training, and investigate breaches with documented natural justice. Tracking this across hundreds of workers with spreadsheets leaves gaps that expose your organisation to regulatory action.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Worker Register", description: "Maintain a register of every person subject to the Code \u2014 employees, contractors, volunteers, governing persons, and agency staff. Track their acknowledgement status, training compliance, and any conduct history." },
      { title: "Acknowledgment Tracking", description: "Every worker must acknowledge reading and understanding the Code. Track acknowledgement dates with version control. When the Code is updated, the system triggers re-acknowledgement requirements automatically." },
      { title: "Training Management", description: "Induction and periodic refresher training tracked with completion dates, expiry dates, and compliance rates. Training modules cover all eight statutory obligations." },
      { title: "Breach Investigation Workflow", description: "Structured investigation process: intake, investigator assignment (separate from the subject), terms of reference, evidence gathering, interviews, and the subject\u2019s right to respond before findings are made." },
      { title: "Outcome & Action Recording", description: "Record findings as substantiated, unsubstantiated, or inconclusive. Document actions taken \u2014 from counselling and training to warnings, suspension, termination, or ACQSC reporting for banning order consideration." },
      { title: "ACQSC Breach Reporting", description: "Serious breaches must be reported to the ACQSC Commissioner. Track which breaches have been reported, Commissioner responses, and any banning order outcomes." },
    ],
    regulatoryRequirements: [
      { title: "Universal Coverage", description: "All workers and governing persons are subject to the Code \u2014 no exceptions." },
      { title: "Mandatory Acknowledgment", description: "Every person must acknowledge the Code in writing, with re-acknowledgement when the Code is updated." },
      { title: "Natural Justice", description: "Breach investigations must provide the subject a right to respond before findings are made." },
      { title: "Serious Breach Reporting", description: "Serious breaches must be reported to the ACQSC Commissioner, who may issue banning orders." },
    ],
    integrations: [
      { moduleSlug: "responsible-persons", moduleName: "Responsible Persons", description: "Governing persons appear in both the Code of Conduct and Responsible Persons registers." },
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Conduct breaches may overlap with reportable incidents \u2014 use of force, neglect, or abuse." },
      { moduleSlug: "workforce", moduleName: "Workforce Compliance", description: "Worker records link across both modules for a complete people compliance picture." },
    ],
  },

  {
    slug: "sirs",
    name: "SIRS & Incidents",
    code: "SIRS",
    category: "Compliance & Governance",
    icon: AlertTriangle,
    section: "ss162\u2013164",
    tagline: "From incident to evidence \u2014 with every deadline tracked.",
    shortDescription:
      "Priority 1/2 incident reporting with auto-calculated deadlines, investigation workflow, restrictive practices register, and behaviour support plans.",
    longDescription:
      "The Serious Incident Response Scheme (SIRS) requires providers to report serious incidents to the ACQSC within strict timeframes \u2014 24 hours for Priority 1, 30 days for Priority 2. Statura Care\u2019s SIRS module automates deadline tracking, structures the investigation process, and maintains the restrictive practices register and behaviour support plans in one integrated system.",
    problemStatement:
      "Missing a Priority 1 SIRS notification deadline can trigger immediate regulatory intervention. Managing incidents across spreadsheets, emails, and paper forms creates unacceptable risk \u2014 especially when you need to track investigations, remediation actions, and restrictive practices simultaneously.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Incident Register with Auto-Classification", description: "Report incidents across 9 types defined in the Act: unreasonable force, unlawful sexual contact, psychological/emotional abuse, unexpected death, financial coercion, neglect, inappropriate restrictive practice use, unexplained absence, and other serious incidents. Priority is auto-calculated based on severity." },
      { title: "Deadline Countdown & Escalation", description: "Priority 1 incidents trigger a 24-hour countdown with critical alerts at 20 hours. Priority 2 incidents have a 30-day deadline with escalating alerts at 14, 25, and 28 days." },
      { title: "ACQSC Notification Management", description: "Auto-generate initial, update (within 7 days for P1), and final report forms with incident details pre-populated. Review, approve, and submit \u2014 with full audit trail." },
      { title: "Investigation Workflow", description: "Assign investigators, track investigation status, record findings, identify root causes, and document recommendations. Every step is logged for regulatory review." },
      { title: "Restrictive Practices Register", description: "Track all uses of chemical, physical, mechanical, and environmental restraint and seclusion. Each use must be authorised, time-limited, and linked to a behaviour support plan." },
      { title: "Behaviour Support Plans", description: "Create and manage assessed behaviour support plans with alternative strategies trialled, consent tracking, and review schedules linked to the restrictive practices register." },
    ],
    workflow: [
      { step: "01", title: "Incident Reported", description: "A staff member reports a serious incident. The system auto-classifies priority and calculates the ACQSC notification deadline.", time: "0 hours" },
      { step: "02", title: "Deadline Countdown", description: "For P1, a 24-hour countdown begins with escalating alerts to compliance officers, managers, and the responsible person on duty.", time: "< 1 hour" },
      { step: "03", title: "ACQSC Notification", description: "The notification form is auto-generated with incident details. Review, approve, and submit with full audit trail.", time: "< 12 hours" },
      { step: "04", title: "Investigation Launched", description: "An investigator is assigned. Findings, root causes, and recommendations are documented systematically.", time: "Day 1\u201314" },
      { step: "05", title: "Remediation Tracked", description: "Investigation recommendations become tracked actions with owners, due dates, and completion evidence.", time: "Day 14\u201330" },
    ],
    regulatoryRequirements: [
      { title: "P1: 24-Hour Notification", description: "Priority 1 incidents \u2014 those causing or likely to cause serious harm \u2014 must be notified to the ACQSC within 24 hours." },
      { title: "P2: 30-Day Notification", description: "Priority 2 incidents must be notified within 30 calendar days." },
      { title: "P1 Update: 7 Days", description: "An update report for Priority 1 incidents must be submitted within 7 days of the initial notification." },
      { title: "Investigation Required", description: "All serious incidents must be investigated with findings documented." },
    ],
    integrations: [
      { moduleSlug: "responsible-persons", moduleName: "Responsible Persons", description: "Incidents record which responsible person was on duty at the time." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Incident data auto-feeds into Standard 2 (The Organisation) and Standard 3 (The Care and Services)." },
      { moduleSlug: "clinical-care", moduleName: "Clinical Care", description: "Clinical incidents link to vital signs and assessment data for a complete picture." },
    ],
  },

  {
    slug: "registration",
    name: "Provider Registration",
    code: "Registration",
    category: "Compliance & Governance",
    icon: BadgeCheck,
    section: "ss17\u201330",
    tagline: "Your licence to operate \u2014 monitored and maintained.",
    shortDescription:
      "Registration status tracking, conditions register, regulatory correspondence management, and compliance self-checks.",
    longDescription:
      "Provider registration is the foundation of everything \u2014 without it, you cannot deliver aged care services. Statura Care\u2019s Registration module tracks your registration status, monitors all conditions, manages ACQSC correspondence with deadline tracking, and runs compliance self-checks that query other modules to verify you\u2019re meeting every condition.",
    problemStatement:
      "Losing your registration means you cannot deliver any care services. Registration conditions are varied and specific \u2014 some apply to all providers, others are tailored to your circumstances. Tracking compliance with every condition, managing ACQSC correspondence deadlines, and preparing for renewal is critical work that cannot afford to slip.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Registration Record Management", description: "Track your registration number, type (residential, home care, flexible, multi-type), status, approval dates, and expiry dates. Monitor approved places and services by type and location." },
      { title: "Conditions Register", description: "Track standard conditions (that apply to all providers) and specific conditions (tailored to your provider). For each condition, record compliance status, evidence, and verification dates." },
      { title: "Compliance Self-Check", description: "Periodic self-assessment against all registration conditions. The system queries other active modules to verify compliance \u2014 checking responsible person suitability, whistleblower policy existence, and more." },
      { title: "Renewal Monitoring", description: "Countdown alerts at 180, 90, 60, and 30 days before registration expiry. Track application preparation, supporting documentation, submission, and outcome." },
      { title: "ACQSC Correspondence Management", description: "Track all communications with the ACQSC: type, date, content summary, response requirements, and deadlines. Escalating alerts ensure no correspondence goes unanswered." },
      { title: "Registration Dashboard", description: "At-a-glance view of registration status, renewal countdown, conditions compliance percentage, active regulatory actions, and pending variations." },
    ],
    regulatoryRequirements: [
      { title: "Active Registration", description: "Providers must maintain active registration to deliver any aged care services." },
      { title: "Condition Compliance", description: "All registration conditions \u2014 standard and specific \u2014 must be met at all times." },
      { title: "Renewal Monitoring", description: "Registration renewal must be prepared and submitted before expiry." },
      { title: "Correspondence Deadlines", description: "ACQSC correspondence requiring a response must be answered by the stated deadline." },
    ],
    integrations: [
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Registration conditions map to Quality Standards \u2014 compliance self-check draws on Standards assessments." },
      { moduleSlug: "responsible-persons", moduleName: "Responsible Persons", description: "Responsible person suitability is a registration condition \u2014 verified through the self-check." },
      { moduleSlug: "whistleblower", moduleName: "Whistleblower", description: "Having a whistleblower policy is a registration condition \u2014 verified through the self-check." },
    ],
  },

  {
    slug: "whistleblower",
    name: "Whistleblower & Disclosures",
    code: "Whistleblower",
    category: "Compliance & Governance",
    icon: ShieldAlert,
    section: "ss186\u2013195",
    tagline: "Protect the people who speak up.",
    shortDescription:
      "Confidential disclosure management with identity-restricted access, anonymous portal, investigation workflow, and discloser protection monitoring.",
    longDescription:
      "The Aged Care Act 2024 provides strong protections for people who disclose wrongdoing in aged care. Statura Care\u2019s Whistleblower module provides a secure, confidential system for receiving, investigating, and tracking protected disclosures \u2014 with strict access controls that ensure discloser identity is only visible to designated eligible recipients.",
    problemStatement:
      "Whistleblower protections are meaningless if the system doesn\u2019t enforce them. If anyone in the organisation can see who made a disclosure, the protection is compromised. You need a system that restricts discloser identity to eligible recipients only, provides an anonymous reporting channel, and monitors for reprisal.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Confidential Disclosure Register", description: "A secure register of all protected disclosures with strict identity protections. Discloser identity fields are only visible to designated eligible recipients \u2014 all other users see the disclosure content but never who made it." },
      { title: "Anonymous Reporting Portal", description: "A public-facing portal where anyone can submit a disclosure anonymously. Disclosers receive a unique reference number to check the status without revealing their identity." },
      { title: "Eligible Recipient Access Control", description: "Discloser identity is restricted to designated eligible recipients (typically compliance officer, CEO, board chair). Every access to confidential identity fields is logged." },
      { title: "Investigation Management", description: "Structured investigation: assign an investigator (who is not the subject), set terms of reference, gather evidence, document findings, and recommend actions with procedural fairness." },
      { title: "Discloser Protection Monitoring", description: "After a disclosure, actively monitor the discloser (if known) for potential reprisal. Track employment changes, schedule regular check-ins, and record any concerns." },
      { title: "Policy & Acknowledgment Management", description: "Maintain your whistleblower policy with version control, track distribution to staff, and record acknowledgements. Annual policy review reminders ensure your policy stays current." },
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
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Whistleblower framework feeds into Standard 2 (The Organisation) evidence." },
    ],
  },

  {
    slug: "complaints",
    name: "Complaints Management",
    code: "Complaints",
    category: "Compliance & Governance",
    icon: MessageSquareWarning,
    section: "ss196\u2013201",
    tagline: "Acknowledge in 5. Resolve in 30. Track every interaction.",
    shortDescription:
      "5-business-day acknowledgement and 30-day resolution tracking, escalation workflow, systemic issue identification, and adverse action monitoring.",
    longDescription:
      "The Act requires providers to acknowledge complaints within 5 business days and resolve them within 30. Statura Care\u2019s Complaints module structures the entire lifecycle \u2014 from receipt through investigation and resolution \u2014 with built-in deadline tracking, escalation pathways, and monitoring to ensure complainants don\u2019t suffer adverse action.",
    problemStatement:
      "Complaints are a leading indicator of care quality. But managing them well requires tracking statutory timeframes, documenting every communication, identifying systemic issues, and ensuring complainants aren\u2019t treated badly for speaking up. Without a structured system, complaints fall through the cracks.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Complaints Register", description: "Track every complaint from receipt to resolution with auto-generated complaint numbers. Classify across 14 categories with severity grading." },
      { title: "Statutory Deadline Tracking", description: "The system auto-calculates the 5-business-day acknowledgement deadline and 30-business-day resolution deadline from receipt. Escalating alerts ensure you never miss a statutory timeframe." },
      { title: "Communication Log", description: "Document every interaction with the complainant \u2014 phone, email, in-person, letter. A chronological record of all communications demonstrates your commitment to resolution." },
      { title: "Escalation Management", description: "Track internal escalations (to management) and external escalations (to the Commissioner) with reference numbers. Some complaints may need to be escalated to the SIRS or Whistleblower modules." },
      { title: "Adverse Action Monitoring", description: "After a complaint is lodged, monitor the care recipient for adverse action \u2014 ensuring they don\u2019t experience negative treatment as a result of complaining." },
      { title: "Trend Analysis", description: "Analyse complaint trends by category, service area, resolution time, and escalation rate. Identify systemic issues before they become regulatory findings." },
    ],
    regulatoryRequirements: [
      { title: "5-Day Acknowledgment", description: "Complaints must be acknowledged within 5 business days of receipt." },
      { title: "30-Day Resolution", description: "Complaints must be resolved within 30 business days (extendable with documented reason)." },
      { title: "No Adverse Action", description: "Complainants must not suffer adverse treatment as a result of making a complaint." },
      { title: "Governing Body Reporting", description: "Complaint trends must be reported to the governing body regularly." },
    ],
    integrations: [
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Complaint data feeds into Quality Standard 2 (The Organisation)." },
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Complaints can escalate to SIRS incidents when reportable conduct is identified." },
      { moduleSlug: "whistleblower", moduleName: "Whistleblower", description: "Complaints can convert to protected disclosures when the complainant meets the criteria." },
    ],
  },

  {
    slug: "governance",
    name: "Governance",
    code: "Governance",
    category: "Compliance & Governance",
    icon: Scale,
    section: "Quality Standard 2",
    tagline: "Structured oversight for your governing body.",
    shortDescription:
      "Board and committee meeting management, action tracking, strategic risk register with 5\u00d75 matrix, conflict of interest declarations, compliance calendar, and policy register.",
    longDescription:
      "Effective governance is the foundation of a well-run aged care provider. Statura Care\u2019s Governance module gives your board and committees the structure they need \u2014 from meeting management and action tracking to strategic risk oversight, conflict declarations, and a compliance calendar that ensures nothing falls through the cracks.",
    problemStatement:
      "Governing bodies need clear visibility across the organisation \u2014 but meeting records, risk registers, compliance deadlines, and policy reviews are often scattered across shared drives and personal inboxes. Without a single source of truth, boards make decisions on incomplete information.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Meeting Management", description: "Schedule board and committee meetings, manage agendas, record minutes and attendance, and track decisions. Minutes link to action items for follow-through." },
      { title: "Action Item Tracking", description: "Every decision and action from meetings is tracked with owner, due date, status, and completion evidence. Overdue actions generate escalating alerts." },
      { title: "Strategic Risk Register", description: "Maintain a 5\u00d75 risk matrix with likelihood and consequence ratings. Track risk treatments, review schedules, and risk trend over time. Extreme and high risks are surfaced to the board automatically." },
      { title: "Conflict of Interest Declarations", description: "Annual and ad-hoc conflict declarations for all board members and senior staff. Track standing interests, meeting-specific declarations, and management plans." },
      { title: "Compliance Calendar", description: "A unified calendar of all regulatory deadlines across the organisation \u2014 registration renewal, QI submissions, prudential reporting, SIRS obligations, and more." },
      { title: "Policy Register", description: "Centralised register of all organisational policies with version control, review dates, approval history, and distribution tracking." },
    ],
    regulatoryRequirements: [
      { title: "Effective Governance", description: "Quality Standard 2 (The Organisation) requires providers to demonstrate effective organisational governance, including clinical governance." },
      { title: "Risk Management", description: "Providers must have a documented risk management framework with regular review by the governing body." },
      { title: "Conflict Management", description: "Board members must declare and manage conflicts of interest appropriately." },
      { title: "Policy Framework", description: "Providers must maintain current policies and procedures covering all aspects of care and operations." },
    ],
    integrations: [
      { moduleSlug: "responsible-persons", moduleName: "Responsible Persons", description: "Board member records flow from the responsible persons register into governance meeting attendance and skills matrices." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Governance activity feeds directly into Quality Standard 2 (The Organisation) evidence." },
      { moduleSlug: "reporting-hub", moduleName: "Reporting Hub", description: "Board packs are compiled from the Reporting Hub with governance data included automatically." },
    ],
  },

  {
    slug: "quality-indicators",
    name: "Quality Indicators",
    code: "QI Reporter",
    category: "Compliance & Governance",
    icon: BarChart3,
    section: "NAQIMQP",
    tagline: "Collect. Calculate. Benchmark. Improve.",
    shortDescription:
      "Quarterly data collection across 5 domains, rate calculations, national benchmarking, trend analysis, and CSV export for submission.",
    longDescription:
      "The National Aged Care Mandatory Quality Indicator Program requires quarterly data collection and submission across five clinical domains. Statura Care\u2019s QI Reporter automates rate calculations, benchmarks your facility against national averages, identifies deteriorating trends, and prepares your submission.",
    problemStatement:
      "Quarterly QI reporting is time-consuming and error-prone when done manually. Calculating rates, comparing against national benchmarks, identifying trends across quarters, and preparing submissions in the correct format takes staff away from care.",
    applicableTo: ["residential"],
    capabilities: [
      { title: "Five-Domain Data Collection", description: "Structured collection across all five mandatory domains: pressure injuries (by stage), physical restraint, unplanned weight loss, falls and major injury, and medication management (polypharmacy and antipsychotic use)." },
      { title: "Automated Rate Calculations", description: "Enter numerators and denominators \u2014 the system calculates prevalence and incidence rates automatically. No more spreadsheet formulas to audit." },
      { title: "National Benchmarking", description: "Compare your facility\u2019s rates against published national averages with 25th and 75th percentile data. Instantly see where you\u2019re performing above or below benchmark." },
      { title: "Trend Analysis", description: "Track performance over quarters. The system automatically identifies deteriorating trends \u2014 two or more consecutive quarters of worsening rates \u2014 and flags them for action." },
      { title: "Improvement Actions", description: "When your rates are above benchmark or trending negatively, create targeted improvement actions linked to the specific domain. Track progress and measure impact." },
      { title: "Submission Preparation", description: "Generate a CSV export matching Department submission requirements. Review, approve, and submit \u2014 with governing body quarterly QI reports generated automatically." },
    ],
    regulatoryRequirements: [
      { title: "Quarterly Collection", description: "Data must be collected quarterly on designated census dates." },
      { title: "Submission Deadline", description: "QI data must be submitted to the Department by the quarterly deadline." },
      { title: "Public Reporting", description: "Published QI data is accessible on the My Aged Care website for public comparison." },
      { title: "ACQSC Assessment Use", description: "QI data is used in ACQSC quality assessments." },
    ],
    integrations: [
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Falls data cross-references with SIRS incident records." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "QI data feeds into Quality Standard 5 (Clinical Care) evidence." },
      { moduleSlug: "clinical-care", moduleName: "Clinical Care", description: "Clinical assessment data informs QI domain calculations." },
    ],
  },

  {
    slug: "associated-providers",
    name: "Associated Providers",
    code: "Associates",
    category: "Compliance & Governance",
    icon: Building2,
    section: "ss14\u201316",
    tagline: "Map every association. Document every relationship.",
    shortDescription:
      "Associated persons register, influence assessment, due diligence records, and ACQSC change notifications.",
    longDescription:
      "The ACQSC considers the conduct and suitability of a provider\u2019s associated persons when assessing the provider itself. Statura Care\u2019s Associated Providers module maintains a complete register of all associated persons and entities \u2014 with influence assessments, due diligence records, and change notification tracking.",
    problemStatement:
      "Providers must disclose all associated persons to the ACQSC at registration and whenever associations change. Failure to disclose is a registration condition breach. Associated persons include individuals, companies, trusts, and partnerships with any level of influence.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Associated Persons Register", description: "Track all associated persons and entities \u2014 individuals, companies, trusts, and partnerships \u2014 with documented relationship basis, ownership percentages, and current status." },
      { title: "Influence Assessment", description: "Classify each associate\u2019s level of influence: controlling, significant, moderate, minor, or historical. This assessment drives due diligence requirements and ACQSC disclosure obligations." },
      { title: "Due Diligence Records", description: "Document background checks, bankruptcy searches, ASIC searches, litigation history, and regulatory history for each associate. Track adverse findings and their resolution." },
      { title: "ACQSC Change Notifications", description: "When associations are created, modified, or ceased, the system tracks notification requirements to the ACQSC with submission status and deadline monitoring." },
    ],
    regulatoryRequirements: [
      { title: "Disclosure Obligation", description: "All associated persons must be disclosed to the ACQSC at registration and when associations change." },
      { title: "Registration Condition", description: "Failure to disclose associated persons constitutes a registration condition breach." },
      { title: "Commissioner Consideration", description: "The ACQSC Commissioner considers the conduct of associated persons when assessing provider suitability." },
    ],
    integrations: [
      { moduleSlug: "responsible-persons", moduleName: "Responsible Persons", description: "Identifies dual relationships where responsible persons are also associates." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Association records feed into Quality Standard 2 (The Organisation) evidence." },
    ],
  },
];
