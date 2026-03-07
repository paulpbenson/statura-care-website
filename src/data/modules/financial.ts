import {
  DollarSign,
  Banknote,
  Receipt,
  FolderOpen,
  Plug,
  Coins,
} from "lucide-react";
import type { ModuleData } from "./types";

export const financialModules: ModuleData[] = [
  {
    slug: "prudential",
    name: "Prudential Compliance",
    code: "Prudential",
    category: "Financial & Administrative",
    icon: DollarSign,
    section: "ss170\u2013183",
    tagline: "Protect residents\u2019 money. Prove you can refund every dollar.",
    shortDescription:
      "Refundable deposit register, liquidity snapshots with coverage ratios, permitted use tracking, and 4-standard governance compliance.",
    longDescription:
      "Providers holding refundable accommodation deposits have a fiduciary duty to protect those funds and maintain sufficient liquidity to refund them on demand. Statura Care\u2019s Prudential module tracks every deposit, monitors your liquidity position in real time, and ensures compliance across all four Prudential Standards.",
    problemStatement:
      "Refundable accommodation deposits can represent tens of millions of dollars in liability. If your liquidity falls short and you can\u2019t refund a departing resident, you face immediate regulatory intervention. Tracking deposits, permitted uses, and liquidity ratios across spreadsheets is a risk no provider should take.",
    applicableTo: ["residential"],
    capabilities: [
      { title: "Refundable Deposit Register", description: "Track every RAD, RAC, and bond held with amount, date received, resident, room, interest accrued, permitted uses applied, and current balance. The system calculates balances automatically." },
      { title: "Liquidity Dashboard", description: "Real-time view of your liquidity position: total deposits held vs liquid assets, with a coverage ratio that triggers alerts at watch (1.2\u20131.5), warning (1.0\u20131.2), and critical (<1.0) levels." },
      { title: "Cash Flow Forecasting", description: "Project refund obligations over 30, 60, 90, and 180 days based on resident profiles. Scenario modelling helps you plan for multiple departures simultaneously." },
      { title: "Permitted Use Tracking", description: "Record every use of refundable deposits for permitted purposes \u2014 capital expenditure, debt repayment, working capital, investment \u2014 with approval documentation and supporting evidence." },
      { title: "Governance Compliance Checklist", description: "Structured compliance tracking for all four Prudential Standards: Governance, Liquidity, Records, and Disclosure. Track board financial expertise, reporting cycles, independent audits, and risk management." },
      { title: "Prudential Reporting", description: "Generate annual prudential compliance statements, liquidity position reports, deposit reconciliations, and financial governance attestations for ACQSC submission." },
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
      { moduleSlug: "billing", moduleName: "Billing & Finance", description: "DAP charges and deposit interest flow into resident billing." },
    ],
  },

  {
    slug: "funding",
    name: "Funding & Claims",
    code: "Funding",
    category: "Financial & Administrative",
    icon: Banknote,
    section: "AN-ACC",
    tagline: "Classify accurately. Claim correctly. Reconcile monthly.",
    shortDescription:
      "AN-ACC classification tracking across 13 classes, subsidy rate management, monthly claims reconciliation, and supplement tracking.",
    longDescription:
      "Accurate AN-ACC classification and claims management is essential to your financial sustainability. Statura Care\u2019s Funding module tracks every resident\u2019s classification, manages subsidy rates, reconciles monthly claims against expected funding, and monitors supplements \u2014 ensuring you claim everything you\u2019re entitled to and nothing you\u2019re not.",
    problemStatement:
      "Incorrect funding claims can result in debt recovery and compliance action. With 13 AN-ACC classes, multiple supplement types, and monthly claims reconciliation, the complexity is significant. Under-claiming costs you money. Over-claiming costs you your reputation. You need a system that gets it right.",
    applicableTo: ["residential"],
    capabilities: [
      { title: "Resident Funding Register", description: "Track every resident\u2019s AN-ACC classification across 13 classes, assessment date, reassessment due date, and daily subsidy rate. Maintain a complete classification history with change reasons." },
      { title: "Subsidy Rate Management", description: "Maintain current AN-ACC rates for each class with effective date ranges. Update rates when the government adjusts them (typically July 1 annually). The system calculates expected daily funding automatically." },
      { title: "Monthly Claims Reconciliation", description: "Compare expected funding (classifications \u00d7 days \u00d7 rates) against actual funding received from Services Australia. Identify and investigate variances before they compound." },
      { title: "Supplement Tracking", description: "Track eligibility and claims for all supplement types: accommodation, homeless, veterans, oxygen, enteral feeding, hardship, and viability supplements." },
      { title: "Reclassification Alerts", description: "When a resident\u2019s care needs change significantly \u2014 post-incident or clinical deterioration \u2014 the system prompts a reclassification review to ensure funding matches actual care requirements." },
      { title: "Funding Analytics", description: "Average funding per resident per day, case-mix profile (AN-ACC class distribution), revenue forecasting, and rate change impact modelling for financial planning." },
    ],
    regulatoryRequirements: [
      { title: "Accurate Claims", description: "Funding claims to Services Australia must accurately reflect each resident\u2019s classification and care." },
      { title: "Reassessment Obligation", description: "Reclassification required when care needs change significantly (typically 12-monthly minimum)." },
      { title: "Debt Recovery Risk", description: "Incorrect claims can result in debt recovery and compliance action." },
      { title: "Reconciliation", description: "Monthly reconciliation of expected vs actual funding to identify discrepancies." },
    ],
    integrations: [
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Incidents causing care level changes prompt reclassification review alerts." },
      { moduleSlug: "prudential", moduleName: "Prudential Compliance", description: "Funding data feeds into financial position and liquidity planning." },
      { moduleSlug: "billing", moduleName: "Billing & Finance", description: "Subsidy income flows into billing and financial reconciliation." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Funding governance feeds into Quality Standard 8 evidence." },
    ],
  },

  {
    slug: "billing",
    name: "Billing & Finance",
    code: "Billing",
    category: "Financial & Administrative",
    icon: Receipt,
    section: "ss44\u201351",
    tagline: "Invoice accurately. Collect efficiently. Report clearly.",
    shortDescription:
      "Invoicing, payments, fee schedules, resident statements, aged debtors, fee cap tracking, and journal entries for aged care billing.",
    longDescription:
      "Aged care billing involves resident fees, means-tested contributions, accommodation charges, and government subsidies \u2014 all subject to regulatory caps and disclosure requirements. Statura Care\u2019s Billing module manages the full billing cycle from fee schedule setup through invoicing, payment collection, and financial reporting.",
    problemStatement:
      "Billing in aged care is uniquely complex \u2014 basic daily fees, means-tested fees with annual and lifetime caps, accommodation charges in multiple formats (RAD, DAP, or combination), and government subsidies that must be reconciled monthly. Getting it wrong means overcharging residents (a compliance breach) or under-collecting revenue.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Invoice Generation", description: "Automated invoice generation based on fee schedules, accommodation charges, and service delivery. Supports recurring invoices, ad-hoc charges, and credit notes with full audit trail." },
      { title: "Payment Processing", description: "Record payments by direct debit, EFT, cheque, or cash. Automatic allocation to oldest outstanding invoices. Track payment plans and instalment arrangements." },
      { title: "Fee Schedule Management", description: "Configure fee schedules per resident with basic daily fee, means-tested fee, accommodation charge (RAD/DAP/combination), and additional services. Automatic rate updates when government-set fees change." },
      { title: "Resident Statements", description: "Generate monthly and on-demand statements showing all charges, payments, adjustments, and running balance. Statements can be sent directly to residents or family members." },
      { title: "Fee Cap Tracking", description: "Track each resident\u2019s means-tested fee contributions against annual and lifetime caps. Automatic alerts when caps are approaching and fee adjustments when caps are reached." },
      { title: "Aged Debtors & Revenue Reporting", description: "Outstanding balances grouped by ageing buckets (30/60/90+ days). Revenue breakdowns by fee type, period, and facility. Financial statements for board reporting." },
    ],
    regulatoryRequirements: [
      { title: "No Overcharging", description: "Providers must not charge more than the amounts specified in resident agreements and set by government." },
      { title: "Fee Cap Compliance", description: "Means-tested fees must not exceed annual or lifetime caps set under the legislation." },
      { title: "Transparent Billing", description: "Residents must receive clear, itemised statements of all charges and payments." },
      { title: "Subsidy Reconciliation", description: "Government subsidies must be reconciled against resident care and billing records." },
    ],
    integrations: [
      { moduleSlug: "agreements", moduleName: "Agreements & Consent", description: "Fee schedules from agreements drive invoice generation and payment tracking." },
      { moduleSlug: "funding", moduleName: "Funding & Claims", description: "Subsidy income and means-tested fee data flow between funding and billing." },
      { moduleSlug: "prudential", moduleName: "Prudential Compliance", description: "DAP charges and deposit interest calculations link to prudential records." },
      { moduleSlug: "support-at-home", moduleName: "Support at Home", description: "Home care service delivery and travel costs flow into client invoicing." },
      { moduleSlug: "sah-contributions-claims", moduleName: "SAH Contributions & Claims", description: "SAH claim payments and client contributions reconcile with billing records." },
    ],
  },

  {
    slug: "sah-contributions-claims",
    name: "SAH Contributions & Claims",
    code: "SahFunding",
    category: "Financial & Administrative",
    icon: Coins,
    section: "SAH Part 3A",
    tagline: "Calculate contributions. Submit claims. Track every dollar.",
    shortDescription:
      "Support at Home client contribution calculations, ACPP claims submission with pre-validation, price list management, and client financial ledger tracking.",
    longDescription:
      "The Support at Home program introduces a fundamentally new funding model \u2014 per-service contributions based on service category and means testing tier, with lifetime caps and no basic daily fee. Statura Care\u2019s SAH Contributions & Claims module automates the complex contribution calculations, validates claims before ACPP submission, manages your price list, and provides a complete financial ledger for every client.",
    problemStatement:
      "SAH contributions vary by service category (Clinical, Independence, Everyday Living) and means testing tier (four tiers from full pensioners to self-funded). Calculating the correct contribution per service, tracking against lifetime caps, generating ACPP claims, and reconciling payments is complex. Manual calculation is error-prone and risks over- or under-charging clients.",
    applicableTo: ["home-care"],
    capabilities: [
      { title: "Automatic Contribution Calculation", description: "When a service is delivered, the system automatically calculates the client\u2019s contribution based on their means testing tier and the service category. Clinical care has zero or minimal contributions; Everyday Living has the highest. Lifetime caps are tracked and enforced." },
      { title: "ACPP Claims Submission", description: "Bundle completed services into claim periods, run pre-validation checks (duplicates, date range errors, missing fields, budget exceedance), and generate CSV files for Aged Care Provider Portal submission." },
      { title: "Smart Claims Pre-Validation", description: "Before submission, the system checks for common rejection triggers: duplicate services, services outside package dates, suspended packages, missing worker details, budget exceeded, and services during recorded absences." },
      { title: "Price List Management", description: "Maintain your organisation\u2019s price list by service type and category with unit prices, effective dates, and active/inactive status. Unique constraint prevents overlapping prices for the same service." },
      { title: "Client Financial Ledger", description: "Complete per-client financial view: every service delivered, contribution charged, subsidy claimed, lifetime cap proximity, and budget position. Everything a care manager needs in one place." },
      { title: "Claims & Contribution Reporting", description: "Claims register with submission status and payment tracking. Per-client contribution summaries. Budget variance analysis showing allocated vs actual spending by quarter." },
    ],
    regulatoryRequirements: [
      { title: "Means-Tested Contributions", description: "Client contributions must be calculated correctly based on their means testing tier and the service category, with lifetime caps enforced." },
      { title: "Lifetime Cap Compliance", description: "Total client contributions must not exceed the lifetime cap ($135,319 for new entrants, $84,572 for grandfathered clients, indexed biannually)." },
      { title: "Accurate Claims", description: "ACPP claims must accurately reflect services delivered, correctly split between subsidy and client contribution." },
      { title: "Price Transparency", description: "Providers must publish and maintain a current price list for all services offered under the SAH program." },
    ],
    integrations: [
      { moduleSlug: "support-at-home", moduleName: "Support at Home", description: "Service delivery data flows from Support at Home into contribution calculations and ACPP claims." },
      { moduleSlug: "billing", moduleName: "Billing & Finance", description: "Claim payments and client contributions reconcile with the billing and finance module." },
      { moduleSlug: "funding", moduleName: "Funding & Claims", description: "SAH funding analytics complement residential AN-ACC funding for multi-service providers." },
    ],
  },

  {
    slug: "documents",
    name: "Document Management",
    code: "Documents",
    category: "Financial & Administrative",
    icon: FolderOpen,
    section: "Part 10",
    tagline: "Every policy current. Every document findable.",
    shortDescription:
      "Centralised document storage with categories, tagging, version control, expiry tracking, and template management across your organisation.",
    longDescription:
      "Aged care providers manage hundreds of policies, procedures, forms, certificates, and compliance documents. Statura Care\u2019s Document Management module provides centralised storage with categorisation, tagging, version control, and expiry monitoring \u2014 so the right document is always findable and always current.",
    problemStatement:
      "Policies in shared drives, certificates in filing cabinets, and procedures in email attachments create a compliance risk. When an auditor asks for your infection control policy, you need it in seconds \u2014 not hours. Expired documents that haven\u2019t been reviewed are a regulatory finding waiting to happen.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Centralised Document Repository", description: "Store all organisational documents in one searchable repository with folder structure, categories, and tags. Full-text search finds documents by content, not just filename." },
      { title: "Version Control", description: "Track document versions with change history, author attribution, and the ability to view or restore previous versions. Only the current version is displayed by default." },
      { title: "Expiry Tracking", description: "Set review and expiry dates on policies, certificates, and compliance documents. Escalating alerts ensure documents are reviewed and renewed before they lapse." },
      { title: "Template Management", description: "Maintain a library of approved templates for common documents \u2014 care plans, incident reports, consent forms, meeting minutes. Templates ensure consistency across your organisation." },
      { title: "Access Controls", description: "Control who can view, edit, and approve documents by role and module. Sensitive documents (HR, financial, clinical) are restricted to authorised staff only." },
      { title: "Document Register & Reporting", description: "Complete register of all documents with category, status, owner, and review date. Expiry reports highlight documents approaching or past their review date." },
    ],
    regulatoryRequirements: [
      { title: "Policy Currency", description: "Providers must maintain current policies and procedures that reflect legislative requirements and best practice." },
      { title: "Document Retention", description: "Records must be retained for prescribed periods under the Aged Care Act and Privacy Act." },
      { title: "Audit Readiness", description: "Compliance documents must be readily available for regulatory audits and assessments." },
    ],
    integrations: [
      { moduleSlug: "governance", moduleName: "Governance", description: "Governance meeting minutes, policies, and strategic plans stored in the document repository." },
      { moduleSlug: "quality-standards", moduleName: "Quality Standards", description: "Evidence documents for Quality Standard compliance linked from the document register." },
      { moduleSlug: "workforce", moduleName: "Workforce Compliance", description: "Worker certificates, qualifications, and screening documents stored and tracked centrally." },
    ],
  },

  {
    slug: "integrations",
    name: "Integrations Hub",
    code: "Integrations",
    category: "Financial & Administrative",
    icon: Plug,
    section: "Part 10",
    tagline: "Connect your systems. Unify your data.",
    shortDescription:
      "Connect external systems including payroll, pharmacy, pathology, and My Health Record with managed data import/export, field mappings, and sync monitoring.",
    longDescription:
      "No aged care platform operates in isolation. Statura Care\u2019s Integrations Hub connects your existing systems \u2014 payroll, pharmacy dispensing, pathology, My Health Record, and more \u2014 with managed data flows, field mappings, and sync monitoring so your data stays consistent across every system.",
    problemStatement:
      "Aged care providers use multiple systems that don\u2019t talk to each other \u2014 payroll, pharmacy, pathology, clinical, and financial systems all holding different versions of the same data. Manual re-keying is slow, error-prone, and creates data inconsistencies that compound over time.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Connection Management", description: "Configure and manage connections to external systems with secure credential storage. 13 pre-built provider connectors for common aged care systems." },
      { title: "Data Import", description: "Import data from external systems with field mapping, validation, and error handling. Preview imports before committing. Full import history with rollback capability." },
      { title: "Data Export", description: "Export data in standard formats (CSV, XML, JSON, FHIR) for external systems. Scheduled exports run automatically at configured intervals." },
      { title: "Field Mapping", description: "Map fields between Statura Care and external systems with transformation rules. Handle different coding systems, date formats, and naming conventions." },
      { title: "Webhook Management", description: "Configure webhooks for real-time event notifications to external systems. Monitor webhook delivery with retry and failure alerting." },
      { title: "Sync Monitoring", description: "Real-time dashboard showing sync status across all connections. Failed syncs generate alerts with error details for rapid resolution." },
    ],
    regulatoryRequirements: [
      { title: "Data Integrity", description: "Data exchanged between systems must maintain integrity and accuracy throughout the transfer process." },
      { title: "Privacy Compliance", description: "Data sharing must comply with the Privacy Act 1988 and the My Health Records Act 2012." },
      { title: "Interoperability Standards", description: "Health data exchange should follow Australian Digital Health Agency standards including HL7 FHIR AU Core profiles." },
    ],
    integrations: [
      { moduleSlug: "medications", moduleName: "Medications", description: "Pharmacy dispensing data imported into the medication management module." },
      { moduleSlug: "clinical-care", moduleName: "Clinical Care", description: "Pathology results and My Health Record data integrated into clinical records." },
      { moduleSlug: "rostering", moduleName: "Rostering & Scheduling", description: "Roster and timesheet data exported to payroll systems." },
    ],
  },
];
