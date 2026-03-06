import {
  Users,
  CalendarDays,
  HardHat,
  Home,
} from "lucide-react";
import type { ModuleData } from "./types";

export const workforceModules: ModuleData[] = [
  {
    slug: "workforce",
    name: "Workforce Compliance",
    code: "Workforce",
    category: "Workforce & Operations",
    icon: Users,
    section: "ss66\u201372",
    tagline: "Staff the floor. Meet the minutes. Prove the compliance.",
    shortDescription:
      "Worker screening, mandatory training, daily staffing minutes calculator, 24/7 RN coverage tracking, and qualification management.",
    longDescription:
      "The Aged Care Act 2024 introduced mandatory minimum staffing requirements with real financial penalties for non-compliance. Statura Care\u2019s Workforce module tracks every worker\u2019s screening, qualifications, and training \u2014 and calculates your daily care minutes per resident in real time so you always know where you stand.",
    problemStatement:
      "Providers must deliver a minimum of 215 care minutes per resident per day, including 44 minutes of registered nurse care, with a registered nurse on-site 24/7. Non-compliance carries financial penalties. Tracking this manually across rosters, qualifications, and screening expiries is error-prone and high-risk.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Worker Register & Qualifications", description: "Comprehensive register of all workers with employment type, role category, qualifications, AHPRA registration status, and start/end dates. Expired registrations are flagged immediately." },
      { title: "Screening Compliance", description: "Track police certificates, NDIS Worker Screening clearances, and Working with Vulnerable People checks with expiry monitoring. Escalating alerts ensure no worker\u2019s screening lapses." },
      { title: "Mandatory Training Register", description: "Track completion across 10+ training modules \u2014 manual handling, fire safety, infection prevention, medication management, dementia care, Code of Conduct, and first aid. Expiry dates trigger re-training alerts." },
      { title: "Daily Staffing Minutes Calculator", description: "Log actual staffing hours by role category (RN, EN, PCW, allied health) each day. Automatically calculate total care minutes per resident and flag non-compliance." },
      { title: "24/7 RN Coverage Tracking", description: "Confirm a registered nurse was on-site for every 24-hour period. Gaps are identified immediately with critical alerts \u2014 24/7 RN coverage is a hard regulatory requirement." },
      { title: "Staffing Mix Analysis", description: "Analyse your workforce composition by role category with trending over time. Generate reports aligned with Star Ratings and ACQSC reporting requirements." },
    ],
    regulatoryRequirements: [
      { title: "215 Care Minutes Minimum", description: "Providers must deliver at least 215 minutes of direct care per resident per day." },
      { title: "44 RN Minutes Minimum", description: "At least 44 of those minutes must be delivered by a registered nurse." },
      { title: "24/7 RN On-Site", description: "At least one registered nurse must be on-site 24 hours a day, 7 days a week \u2014 with no gaps." },
      { title: "Screening Compliance", description: "All workers must hold valid screening checks at all times." },
    ],
    integrations: [
      { moduleSlug: "rostering", moduleName: "Rostering & Scheduling", description: "Roster data feeds into staffing compliance calculations. Worker qualifications determine role eligibility." },
      { moduleSlug: "code-of-conduct", moduleName: "Code of Conduct", description: "Worker conduct records link to workforce records for a complete compliance picture." },
      { moduleSlug: "care-delivery", moduleName: "Care Delivery", description: "Staff qualifications determine which care minutes category their hours count towards." },
    ],
  },

  {
    slug: "rostering",
    name: "Rostering & Scheduling",
    code: "Rostering",
    category: "Workforce & Operations",
    icon: CalendarDays,
    section: "Standard 7",
    tagline: "Build compliant rosters, control costs.",
    shortDescription:
      "Shift scheduling, roster management, leave requests, shift swaps, RN 24/7 coverage validation, and SCHADS Award compliance checking.",
    longDescription:
      "Rostering for aged care is uniquely complex \u2014 you need 24/7 RN coverage, SCHADS Award compliance, care minutes alignment, and cost control, all while managing leave and last-minute changes. Statura Care\u2019s Rostering module brings it all together with built-in compliance validation.",
    problemStatement:
      "Rostering aged care workers involves balancing regulatory requirements (24/7 RN, care minutes targets), industrial obligations (SCHADS Award rates, overtime limits), and operational realities (leave, sick calls, shift swaps). Doing this in spreadsheets is slow, error-prone, and expensive.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Roster Management", description: "Build weekly and fortnightly rosters with drag-and-drop shift assignment. Template rosters for recurring patterns. View by facility, wing, or individual worker." },
      { title: "Shift Scheduling", description: "Define shift types with start/end times, break requirements, and minimum staffing levels. Track shift fill rates and unfilled shifts with escalating alerts." },
      { title: "RN Coverage Validation", description: "Real-time validation that every 24-hour period has at least one RN rostered. Coverage gaps are highlighted before the roster is published." },
      { title: "SCHADS Award Compliance", description: "Built-in SCHADS Award pay calculation across 15 levels (L1.1\u2013L8.1). Penalty rates for evening, night, weekend, and public holiday shifts calculated per 15-minute segment." },
      { title: "Leave & Shift Swaps", description: "Leave request workflow with balance tracking and approval management. Shift swap requests between workers with manager approval and compliance validation." },
      { title: "Cost Analysis", description: "Real-time roster cost projections with base rate, penalties, overtime, and allowances. Compare actual vs budgeted labour costs by period." },
    ],
    regulatoryRequirements: [
      { title: "24/7 RN Coverage", description: "Rosters must ensure at least one RN is on-site at all times \u2014 no exceptions." },
      { title: "Care Minutes Alignment", description: "Rostered hours must deliver sufficient care minutes to meet the 215/44 targets." },
      { title: "SCHADS Compliance", description: "Rostering must comply with the SCHADS Award including maximum hours, minimum engagement, and penalty rates." },
    ],
    integrations: [
      { moduleSlug: "workforce", moduleName: "Workforce Compliance", description: "Worker qualifications and availability drive roster eligibility. Screening expiry prevents rostering non-compliant workers." },
      { moduleSlug: "care-delivery", moduleName: "Care Delivery", description: "Rostered hours feed into daily care minutes calculations for compliance tracking." },
      { moduleSlug: "billing", moduleName: "Billing & Finance", description: "Roster costs flow into financial reporting and labour cost analysis." },
    ],
  },

  {
    slug: "whs",
    name: "WHS & Safety",
    code: "WHS",
    category: "Workforce & Operations",
    icon: HardHat,
    section: "WHS Act",
    tagline: "Protect your workers, protect your residents.",
    shortDescription:
      "Workplace health and safety incident reporting, hazard registers, workplace inspections, chemical management, equipment registers, and emergency preparedness.",
    longDescription:
      "Aged care workplaces present unique WHS risks \u2014 manual handling injuries, chemical exposure, aggressive behaviour, and infection risks. Statura Care\u2019s WHS module provides a complete workplace safety management system from incident reporting through hazard identification, inspections, and emergency preparedness.",
    problemStatement:
      "WHS incidents, hazard reports, and inspection records scattered across paper forms and email make it impossible to identify systemic risks before someone gets hurt. A structured system turns reactive incident management into proactive risk prevention.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "WHS Incident Reporting", description: "Structured incident reporting separate from clinical SIRS incidents. Track injuries, near misses, and hazardous events with root cause analysis and corrective actions." },
      { title: "Hazard Register", description: "Identify and record workplace hazards with risk ratings using a 5\u00d75 matrix (likelihood \u00d7 consequence). Track control measures and residual risk after treatment." },
      { title: "Workplace Inspections", description: "Schedule and conduct workplace inspections with checklist templates. Track findings, corrective actions, and completion. Monitor inspection compliance rates." },
      { title: "Chemical Register", description: "Register all hazardous chemicals with Safety Data Sheets (SDS), storage requirements, PPE requirements, and first aid information. Track SDS currency and chemical usage." },
      { title: "Equipment Register", description: "Track equipment testing and maintenance schedules \u2014 hoists, wheelchairs, fire equipment, emergency lighting. Overdue testing generates alerts." },
      { title: "Emergency Preparedness", description: "Manage emergency plans, evacuation procedures, and fire drill schedules. Track drill participation, outcomes, and improvement actions." },
    ],
    regulatoryRequirements: [
      { title: "WHS Duties", description: "Providers have a duty under WHS legislation to provide a safe workplace for workers and residents." },
      { title: "Incident Notification", description: "Notifiable WHS incidents (death, serious injury, dangerous incidents) must be reported to the WHS regulator." },
      { title: "Hazard Management", description: "Hazards must be identified, assessed, and controlled using the hierarchy of controls." },
      { title: "Emergency Planning", description: "Providers must have current emergency management plans with regular testing." },
    ],
    integrations: [
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "WHS incidents involving residents may also be reportable under SIRS. Cross-reference prevents duplicate reporting." },
      { moduleSlug: "workforce", moduleName: "Workforce Compliance", description: "WHS training compliance tracked through the workforce module. Worker injury history linked to workforce records." },
      { moduleSlug: "governance", moduleName: "Governance", description: "WHS risk data feeds into the strategic risk register for governing body oversight." },
    ],
  },

  {
    slug: "home-care",
    name: "Home Care Services",
    code: "HomeCare",
    category: "Workforce & Operations",
    icon: Home,
    section: "Part 6",
    tagline: "Deliver home care with confidence.",
    shortDescription:
      "Support at Home, Home Care Packages, and CHSP service delivery, visit scheduling, client budgets, travel recording, and DEX reporting.",
    longDescription:
      "Home care providers juggle package budgets, visit schedules, travel time, and government reporting across multiple programs. Statura Care\u2019s Home Care module manages the full service delivery lifecycle \u2014 from package allocation and scheduling through budget tracking and DEX submission.",
    problemStatement:
      "Home care providers juggle package budgets, visit schedules, travel time, and DEX reporting across disconnected systems \u2014 risking overspends, missed visits, and late submissions. A unified system brings visibility and control to every aspect of home care delivery.",
    applicableTo: ["home-care"],
    capabilities: [
      { title: "Package Management", description: "Track Home Care Packages (HCP), CHSP allocations, and Support at Home packages with budget amounts, start/end dates, and service types. Monitor active packages and upcoming renewals." },
      { title: "Service Delivery Tracking", description: "Record service delivery against each package \u2014 service type, duration, worker, and outcome. Compare delivered services against care plans and package allocations." },
      { title: "Visit Scheduling", description: "Schedule and manage client visits with worker assignment, travel time estimation, and route optimisation. Track actual visit times against scheduled and identify missed visits." },
      { title: "Client Budget Management", description: "Real-time budget utilisation tracking per client and package. Alerts when budgets are running low or when unspent funds risk being returned at end of period." },
      { title: "Travel & Expense Recording", description: "Record travel time between client visits with distance and duration. Track travel costs against package allocations." },
      { title: "DEX Reporting", description: "Generate DEX (Data Exchange) submission files for government reporting. SLK-581 identifiers auto-generated from client data. Validate submissions before lodgement." },
    ],
    regulatoryRequirements: [
      { title: "Package Budget Management", description: "Home care packages must be managed within allocated budgets with transparent reporting to consumers." },
      { title: "Service Delivery Standards", description: "Services must be delivered in accordance with care plans and package agreements." },
      { title: "DEX Reporting", description: "Service delivery data must be reported to the Department via the Data Exchange (DEX) platform." },
      { title: "Unspent Funds", description: "Providers must manage and report on unspent package funds, which may be subject to return." },
    ],
    integrations: [
      { moduleSlug: "residents", moduleName: "Resident Registry", description: "Home care clients are managed in the same resident registry as residential residents for a unified view." },
      { moduleSlug: "rostering", moduleName: "Rostering & Scheduling", description: "Home care visit schedules integrate with worker rostering for efficient resource allocation." },
      { moduleSlug: "billing", moduleName: "Billing & Finance", description: "Service delivery and travel costs flow into client invoicing and package reconciliation." },
    ],
  },
];
