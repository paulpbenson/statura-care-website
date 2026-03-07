import {
  Users,
  FileSignature,
  HeartHandshake,
  Heart,
  Building2,
} from "lucide-react";
import type { ModuleData } from "./types";

export const residentModules: ModuleData[] = [
  {
    slug: "residents",
    name: "Resident Registry",
    code: "Residents",
    category: "Resident & Family",
    icon: Users,
    section: "Part 5",
    tagline: "Your single source of truth for every resident.",
    shortDescription:
      "Master resident register with demographics, government identifiers (Medicare, IHI, DVA), emergency contacts, advance directives, and admission/discharge management.",
    longDescription:
      "Resident information is the foundation of every module in the platform. Statura Care\u2019s Resident Registry provides a master register with validated government identifiers, emergency contacts, guardianship orders, and advance directives \u2014 ensuring every module works from the same accurate, up-to-date source.",
    problemStatement:
      "Resident information lives in multiple systems \u2014 admission files, clinical records, funding databases \u2014 creating fragmentation that risks errors in care delivery and regulatory reporting. A single, authoritative register eliminates duplication and ensures consistency across your entire organisation.",
    applicableTo: ["residential"],
    capabilities: [
      { title: "Master Resident Register", description: "Comprehensive register of all residents with demographics, preferred name, cultural background, language, and religion. Track admission date, care type, and current status." },
      { title: "Government Identifier Validation", description: "Validate and store Medicare numbers, Individual Healthcare Identifiers (IHI) with 800360 prefix checking, DVA numbers, and pension details. Auto-formatted for consistency." },
      { title: "Emergency Contacts", description: "Multiple emergency contacts per resident with relationship, priority order, and contact preferences. Instantly accessible during incidents or clinical emergencies." },
      { title: "Advance Directive Tracking", description: "Record advance care directives, guardianship orders, powers of attorney, and substitute decision-maker details with document uploads and expiry monitoring." },
      { title: "Admission & Discharge Management", description: "Structured admission workflow with checklist, and discharge/transfer tracking with reason codes and destination recording." },
      { title: "Resident Search & Reporting", description: "Search across all resident fields. Generate occupancy reports, admission/discharge summaries, and demographic breakdowns for regulatory reporting." },
    ],
    regulatoryRequirements: [
      { title: "Accurate Records", description: "Providers must maintain accurate and up-to-date records for every care recipient." },
      { title: "Privacy Compliance", description: "Personal information must be collected, stored, and used in accordance with the Privacy Act 1988." },
      { title: "Identifier Validation", description: "Government identifiers must be validated and stored securely for funding and reporting purposes." },
    ],
    integrations: [
      { moduleSlug: "agreements", moduleName: "Agreements & Consent", description: "Every resident agreement links to their registry record for a complete admission profile." },
      { moduleSlug: "clinical-care", moduleName: "Clinical Care", description: "Clinical assessments, vital signs, and care plans are linked to the resident\u2019s master record." },
      { moduleSlug: "funding", moduleName: "Funding & Claims", description: "AN-ACC classifications and subsidy claims reference the resident\u2019s validated identifiers." },
      { moduleSlug: "family-portal", moduleName: "Family Portal", description: "Family member accounts are linked to their resident for permission-controlled access." },
    ],
  },

  {
    slug: "agreements",
    name: "Agreements & Consent",
    code: "Agreements",
    category: "Resident & Family",
    icon: FileSignature,
    section: "ss44\u201351",
    tagline: "Every agreement complete. Every consent current.",
    shortDescription:
      "Resident agreement register with 10-item mandatory content checklist, fee schedule tracking, consent management, and variation history.",
    longDescription:
      "The Aged Care Act 2024 mandates that every care recipient has a written agreement covering 10 specific content areas. Statura Care\u2019s Agreements module ensures every agreement contains the required content, tracks all consents with their expiry dates, and manages fee schedules and variations \u2014 all with full audit trail.",
    problemStatement:
      "An incomplete resident agreement is a compliance breach waiting to happen. The Act specifies 10 mandatory content areas that must be present. Consents expire and need renewal. Fees change and require notice. Managing this across hundreds of residents with paper files creates gaps that regulators will find.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Agreement Register", description: "Track every resident agreement with parties, execution date, commencement date, type (residential, home care, flexible, respite, short-term restorative), and current status." },
      { title: "Mandatory Content Checklist", description: "The system tracks all 10 legislated mandatory content areas for each agreement \u2014 care and services, fees, rights, provider obligations, complaints process, termination, notice periods, security of tenure, privacy, and information consent." },
      { title: "Consent Management", description: "Track all consents: care plan, restrictive practices, information sharing, photography, advance care directives, research, medication, transport, outings, and financial management." },
      { title: "Fee Schedule Tracking", description: "Itemise all fees and charges per agreement with change history. The system calculates required notice periods for fee changes and tracks acknowledgement." },
      { title: "Variation Management", description: "When care, services, or fees change, track the variation with notice given, acknowledgement received, and effective date." },
      { title: "Regulatory Disclosure Tracking", description: "Track required disclosures to care recipients: Charter of Aged Care Rights, fees and charges, complaints process, privacy notice, security of tenure, and advocacy services." },
    ],
    regulatoryRequirements: [
      { title: "Written Agreement Required", description: "Every care recipient must have a written agreement before or as soon as practicable after care commences." },
      { title: "10 Mandatory Content Areas", description: "Each agreement must contain all 10 content areas specified in s45 of the Act." },
      { title: "No Overcharging", description: "Providers must not charge more than specified in the agreement." },
      { title: "Review on Change", description: "Agreements must be reviewed and varied when circumstances change." },
    ],
    integrations: [
      { moduleSlug: "residents", moduleName: "Resident Registry", description: "Agreement records link to the resident\u2019s master record for a complete admission profile." },
      { moduleSlug: "billing", moduleName: "Billing & Finance", description: "Fee schedules from agreements drive invoice generation and payment tracking." },
      { moduleSlug: "sirs", moduleName: "SIRS & Incidents", description: "Restrictive practice consent cross-referenced with SIRS consent tracking." },
    ],
  },

  {
    slug: "advance-care",
    name: "Advance Care Planning",
    code: "AdvanceCare",
    category: "Resident & Family",
    icon: HeartHandshake,
    section: "ss52\u201355",
    tagline: "Honour every resident\u2019s wishes.",
    shortDescription:
      "Advance directives, goals of care documentation, palliative care plans with phase tracking, and recorded ACP conversations.",
    longDescription:
      "Advance care planning ensures resident wishes are documented, accessible, and respected when critical decisions need to be made. Statura Care\u2019s Advance Care Planning module manages directives, goals of care, palliative plans, and ACP conversations in one place \u2014 so the right information is available at the right time.",
    problemStatement:
      "Advance care planning documents are often paper-based and stored inconsistently, making it difficult to ensure resident wishes are accessible when critical decisions need to be made. In an emergency, staff need instant access to directives \u2014 not a search through filing cabinets.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Advance Directive Management", description: "Record and store advance care directives with type, effective date, review date, and document uploads. Expiry monitoring ensures directives are reviewed and renewed on schedule." },
      { title: "Goals of Care Documentation", description: "Document goals of care conversations with the resident, family, and clinical team. Track agreed goals, review dates, and any changes over time." },
      { title: "Palliative Care Plans", description: "Create structured palliative care plans with phase tracking (stable, unstable, deteriorating, terminal). Link to symptom management, comfort measures, and family communication plans." },
      { title: "ACP Conversation Records", description: "Log every ACP conversation with date, participants, topics discussed, decisions made, and next steps. Build a chronological record of the resident\u2019s evolving wishes." },
      { title: "Coverage Reporting", description: "Track ACP coverage across your facility \u2014 which residents have current directives, which need review, and which have no ACP documentation at all." },
    ],
    regulatoryRequirements: [
      { title: "Documented Wishes", description: "Providers must support residents to make and document their advance care wishes." },
      { title: "Accessible Records", description: "Advance care documents must be readily accessible to clinical staff when decisions need to be made." },
      { title: "Regular Review", description: "Advance care plans should be reviewed regularly and when circumstances change." },
    ],
    integrations: [
      { moduleSlug: "residents", moduleName: "Resident Registry", description: "Advance directives and substitute decision-maker details link to the resident\u2019s master record." },
      { moduleSlug: "clinical-care", moduleName: "Clinical Care", description: "Care plans reference advance directives to ensure clinical decisions align with resident wishes." },
      { moduleSlug: "family-portal", moduleName: "Family Portal", description: "Family members can view ACP status and participate in goals of care conversations." },
    ],
  },

  {
    slug: "family-portal",
    name: "Family Portal",
    code: "FamilyPortal",
    category: "Resident & Family",
    icon: Heart,
    section: "Part 10",
    tagline: "Keep families connected and informed.",
    shortDescription:
      "Family member accounts with permission controls, secure messaging, feedback collection, and activity updates for residents\u2019 families and carers.",
    longDescription:
      "Families want to stay informed and involved in their loved one\u2019s care. Statura Care\u2019s Family Portal gives families a secure, controlled way to receive updates, communicate with staff, and provide feedback \u2014 building trust and transparency between providers and families.",
    problemStatement:
      "Families want to stay informed about their loved one\u2019s care, but phone tag and sporadic updates create anxiety and erode trust. Without a structured communication channel, families feel excluded and providers spend hours fielding individual enquiries.",
    applicableTo: ["residential", "home-care"],
    capabilities: [
      { title: "Family Member Accounts", description: "Invite and manage family member accounts with email-based authentication. Each member is linked to their resident with appropriate permission levels." },
      { title: "Permission Controls", description: "Granular permissions control what each family member can see \u2014 from general updates and photos to care plan summaries and billing information. Providers retain full control." },
      { title: "Secure Messaging", description: "Two-way secure messaging between families and facility staff. Messages are logged and auditable, replacing informal phone calls and emails." },
      { title: "Feedback Collection", description: "Structured feedback forms allow families to share compliments, concerns, and suggestions. Feedback is tracked, acknowledged, and linked to improvement actions." },
      { title: "Activity Updates", description: "Share updates about the resident\u2019s activities, wellbeing, and care milestones. Families stay informed without needing to call for updates." },
      { title: "Engagement Reporting", description: "Track family engagement metrics: active members, message frequency, feedback themes, and response times." },
    ],
    regulatoryRequirements: [
      { title: "Consumer Engagement", description: "Quality Standard 6 requires providers to support consumers and their families to provide feedback and be involved in care." },
      { title: "Information Access", description: "Families have a right to access information about their loved one\u2019s care, subject to privacy requirements and resident consent." },
      { title: "Feedback Mechanisms", description: "Providers must have accessible mechanisms for families to provide feedback and raise concerns." },
    ],
    integrations: [
      { moduleSlug: "residents", moduleName: "Resident Registry", description: "Family member accounts are linked to their resident\u2019s master record for permission-controlled access." },
      { moduleSlug: "advance-care", moduleName: "Advance Care Planning", description: "Family members can view ACP status and be included in goals of care discussions." },
      { moduleSlug: "complaints", moduleName: "Complaints Management", description: "Family feedback can be escalated to a formal complaint when appropriate." },
    ],
  },

  {
    slug: "accommodation",
    name: "Accommodation",
    code: "Accommodation",
    category: "Resident & Family",
    icon: Building2,
    section: "ss44\u201351",
    tagline: "Manage every room, bed, and booking.",
    shortDescription:
      "Facility locations, room inventory with amenities, visual bed map, and booking management for admissions and respite stays.",
    longDescription:
      "For residential providers, managing rooms, beds, and bookings across one or more facilities requires real-time visibility. Statura Care\u2019s Accommodation module provides a visual bed map, room inventory, and booking system that ensures you always know your occupancy position and can manage admissions and respite bookings efficiently.",
    problemStatement:
      "Multi-site providers track rooms and beds across spreadsheets, whiteboards, and legacy systems \u2014 leading to double-bookings, missed maintenance, and poor occupancy visibility. A real-time bed map eliminates guesswork and streamlines admissions.",
    applicableTo: ["residential"],
    capabilities: [
      { title: "Multi-Site Location Management", description: "Manage multiple facility locations with address, contact details, approved places, and operational status. Each location has its own room inventory and bed map." },
      { title: "Room Inventory", description: "Track every room with type (single, shared, suite), amenities, accessibility features, current occupant, and maintenance status." },
      { title: "Visual Bed Map", description: "A real-time visual representation of your facility showing room status: occupied, available, reserved, maintenance, and cleaning. Drag-and-drop room assignments." },
      { title: "Booking Management", description: "Manage admission bookings, respite reservations, and room transfers with date tracking, status management, and waitlist functionality." },
      { title: "Occupancy Reporting", description: "Real-time occupancy rates by facility, wing, and room type. Historical occupancy trends and forecasting for financial planning." },
    ],
    regulatoryRequirements: [
      { title: "Approved Places", description: "Providers must operate within their approved number of places for each facility location." },
      { title: "Service Environment", description: "Quality Standard 5 requires a safe, comfortable, and well-maintained service environment." },
      { title: "Accommodation Records", description: "Accurate records of accommodation arrangements must be maintained for each resident." },
    ],
    integrations: [
      { moduleSlug: "residents", moduleName: "Resident Registry", description: "Room assignments link to resident records for a complete accommodation history." },
      { moduleSlug: "prudential", moduleName: "Prudential Compliance", description: "Accommodation pricing and RAD/DAP records link to room and facility data." },
      { moduleSlug: "billing", moduleName: "Billing & Finance", description: "Accommodation charges flow from room assignments into resident billing." },
    ],
  },
];
