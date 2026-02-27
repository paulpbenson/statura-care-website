import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Aged Care Compliance Glossary — Key Terms & Definitions",
  description: "Comprehensive glossary of aged care compliance terms under the Aged Care Act 2024. Definitions for SIRS, ACQSC, quality standards, responsible persons, prudential compliance, care minutes, and more.",
  alternates: { canonical: "https://statura.care/glossary" },
  openGraph: {
    title: "Aged Care Compliance Glossary | Statura Care",
    description: "Key terms and definitions for aged care compliance under the Aged Care Act 2024.",
    url: "https://statura.care/glossary",
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "aged care compliance glossary",
    "aged care terms",
    "SIRS definition",
    "ACQSC meaning",
    "aged care quality standards explained",
    "aged care act 2024 terms",
    "responsible persons aged care definition",
    "prudential compliance definition",
    "care minutes definition",
    "AN-ACC meaning",
    "behaviour support plan",
    "restrictive practice aged care",
    "RAD refundable accommodation deposit",
    "registered nurse coverage aged care",
    "whistleblower protection aged care",
    "incident management aged care",
  ],
};

interface GlossaryTerm {
  id: string;
  letter: string;
  term: string;
  definition: string;
  related: { label: string; href: string }[];
}

const glossaryTerms: GlossaryTerm[] = [
  {
    id: "acqsc",
    letter: "A",
    term: "ACQSC (Aged Care Quality and Safety Commission)",
    definition: "The independent national regulatory body responsible for assessing and monitoring aged care provider compliance with the Aged Care Act 2024 and the Aged Care Quality Standards. The ACQSC conducts assessment contacts, investigates complaints, and can issue compliance notices or enforceable undertakings to providers.",
    related: [
      { label: "SIRS & Incidents module", href: "/modules/sirs" },
      { label: "Quality Standards module", href: "/modules/quality-standards" },
    ],
  },
  {
    id: "aged-care-act-2024",
    letter: "A",
    term: "Aged Care Act 2024",
    definition: "The primary legislation governing residential aged care in Australia. The Act establishes the Aged Care Quality Standards, mandates the Serious Incident Response Scheme (SIRS), requires responsible persons, and sets out obligations for providers regarding prudential compliance, care minutes, complaints, and workforce qualifications.",
    related: [
      { label: "Aged Care Compliance Software", href: "/aged-care-compliance-software" },
    ],
  },
  {
    id: "an-acc",
    letter: "A",
    term: "AN-ACC (Australian National Aged Care Classification)",
    definition: "The classification system used to measure and report care minutes delivered at aged care facilities. AN-ACC categorises residents based on their care needs and is used to determine funding, staffing requirements, and compliance with care minute targets.",
    related: [
      { label: "Care minutes definition", href: "#care-minutes" },
    ],
  },
  {
    id: "assessment-contact",
    letter: "A",
    term: "Assessment Contact",
    definition: "A regulatory visit conducted by the ACQSC to assess a provider's compliance with the Aged Care Quality Standards and legislative obligations. Assessment contacts involve onsite inspections, document review, and interviews with staff and residents. Providers must prepare evidence packs demonstrating compliance across all eight quality standards.",
    related: [
      { label: "Quality Standards self-assessment", href: "/modules/quality-standards" },
    ],
  },
  {
    id: "associated-provider",
    letter: "A",
    term: "Associated Provider",
    definition: "An entity that provides aged care services on behalf of a residential aged care provider but is not the approved provider itself. Associated providers must be suitability assessed and remain under the responsibility and oversight of the approved provider.",
    related: [
      { label: "Associated Providers module", href: "/modules/associated-providers" },
    ],
  },
  {
    id: "behaviour-support-plan",
    letter: "B",
    term: "Behaviour Support Plan",
    definition: "A documented strategy for managing a resident's challenging behaviours. It must be developed in consultation with the resident, family, and clinical staff, and must identify triggers, agreed strategies, and review timeframes. Behaviour support plans are a key component of person-centred care and restrictive practice minimisation.",
    related: [
      { label: "Restrictive Practice module", href: "/modules/restrictive-practices" },
    ],
  },
  {
    id: "care-minutes",
    letter: "C",
    term: "Care Minutes",
    definition: "The total amount of direct and indirect care provided to residents, measured in minutes per day per resident. The Aged Care Act 2024 establishes a minimum target of 200 care minutes per resident per day, including 40 minutes of registered nurse time. Care minutes tracking is essential for compliance and funding justification.",
    related: [
      { label: "Care minutes calculator guide", href: "/blog/care-minutes-target-200-minutes-compliance" },
    ],
  },
  {
    id: "clinical-governance",
    letter: "C",
    term: "Clinical Governance",
    definition: "The overarching system of accountability and responsibility for clinical and safety standards in an aged care facility. Clinical governance encompasses clinical leadership, quality assurance processes, incident management, infection prevention, professional development, and evidence-based practice to ensure safe, high-quality care.",
    related: [
      { label: "SIRS & Incidents module", href: "/modules/sirs" },
      { label: "Quality Standards module", href: "/modules/quality-standards" },
    ],
  },
  {
    id: "code-of-conduct",
    letter: "C",
    term: "Code of Conduct",
    definition: "A set of mandatory ethical and professional standards that must guide the behaviour of all aged care workers. The Code of Conduct under the Aged Care Act 2024 covers respectful communication, professional boundaries, confidentiality, and accountability. Breaches can result in sanctions including workforce exclusions.",
    related: [
      { label: "Code of Conduct module", href: "/modules/code-of-conduct" },
      { label: "Workforce Compliance module", href: "/modules/workforce-compliance" },
    ],
  },
  {
    id: "complaints-management",
    letter: "C",
    term: "Complaints Management",
    definition: "The formal process for receiving, documenting, investigating, and resolving complaints from residents, families, and staff. Providers must have robust complaints policies that ensure timely resolution, feedback to complainants, and use of complaint data to drive quality improvements.",
    related: [
      { label: "Complaints module", href: "/modules/complaints" },
    ],
  },
  {
    id: "compliance-notice",
    letter: "C",
    term: "Compliance Notice",
    definition: "A formal enforcement instrument issued by the ACQSC requiring a provider to remedy a breach of the Aged Care Act 2024 or Quality Standards within a specified timeframe. Failure to comply with a compliance notice can result in significant penalties or suspension of approval to provide aged care.",
    related: [
      { label: "ACQSC compliance obligations", href: "/aged-care-compliance-software" },
    ],
  },
  {
    id: "consumer-dignity-choice",
    letter: "C",
    term: "Consumer Dignity and Choice",
    definition: "A foundational principle under the Aged Care Quality Standards ensuring residents maintain autonomy, independence, and decision-making power over their care and personal affairs. This includes choice in care delivery, activities, dining, and residential arrangements, balanced with safety and best practice considerations.",
    related: [
      { label: "Quality Standards module", href: "/modules/quality-standards" },
    ],
  },
  {
    id: "deemed-refusal",
    letter: "D",
    term: "Deemed Refusal",
    definition: "A legal mechanism under the Aged Care Act 2024 where a responsible person is deemed to have refused a screening clearance or suitability assessment if they do not respond within statutory timeframes. A deemed refusal means the person cannot work in or be associated with aged care without the provider's specific approval.",
    related: [
      { label: "Responsible Persons module", href: "/modules/responsible-persons" },
    ],
  },
  {
    id: "funding-claims",
    letter: "F",
    term: "Funding & Claims",
    definition: "The financial processes and reporting requirements for aged care funding. Providers must accurately claim funding from the Australian government based on resident classification, care minutes, and compliance with conditions of funding. Errors or misrepresentations can trigger audits and reclaim demands.",
    related: [
      { label: "Funding & Claims module", href: "/modules/funding-claims" },
    ],
  },
  {
    id: "governing-body",
    letter: "G",
    term: "Governing Body",
    definition: "The board, committee, or management structure responsible for strategic leadership, oversight, and accountability in an aged care provider organisation. The governing body must ensure the provider meets all obligations under the Aged Care Act 2024 and Quality Standards, including financial management, risk oversight, and compliance monitoring.",
    related: [
      { label: "Organisational Governance module", href: "/modules/organisational-governance" },
    ],
  },
  {
    id: "incident-management",
    letter: "I",
    term: "Incident Management",
    definition: "The systematic process for identifying, reporting, investigating, and learning from adverse events and near-misses in aged care settings. Incident management supports quality improvement, prevents recurrence, protects residents, and generates evidence for compliance with safety standards. Some incidents must be reported under SIRS.",
    related: [
      { label: "SIRS & Incidents module", href: "/modules/sirs" },
    ],
  },
  {
    id: "infection-prevention-control",
    letter: "I",
    term: "Infection Prevention and Control",
    definition: "The systematic measures implemented to prevent and minimise the spread of infectious diseases in aged care facilities. This includes hand hygiene, environmental cleaning, immunisation, personal protective equipment protocols, outbreak investigation, and staff training. IPC is essential for resident safety and quality of care.",
    related: [
      { label: "Infection Prevention & Control module", href: "/modules/infection-prevention" },
      { label: "Quality Standards module", href: "/modules/quality-standards" },
    ],
  },
  {
    id: "liquidity-requirements",
    letter: "L",
    term: "Liquidity Requirements",
    definition: "Financial solvency thresholds that aged care providers must maintain under the Aged Care Act 2024. Providers must hold sufficient liquid assets and maintain adequate cash flow to meet operating costs, resident accommodation, and care obligations. Failure to maintain liquidity can trigger regulator intervention.",
    related: [
      { label: "Prudential Compliance module", href: "/modules/prudential" },
    ],
  },
  {
    id: "qi-program",
    letter: "N",
    term: "National Aged Care Mandatory Quality Indicator Program (QI Program)",
    definition: "The mandatory national program requiring all aged care providers to measure and publicly report on key quality indicators. The QI Program includes metrics on care staffing, workforce turnover, complaints, and incidents. Data drives quality improvement and supports provider accountability to the community.",
    related: [
      { label: "Quality Standards module", href: "/modules/quality-standards" },
    ],
  },
  {
    id: "open-disclosure",
    letter: "O",
    term: "Open Disclosure",
    definition: "The transparent communication process required when an adverse event or unexpected outcome occurs in aged care. Open disclosure involves acknowledging what happened, explaining the circumstances, expressing regret, and outlining corrective actions. It supports trust, accountability, and resident safety.",
    related: [
      { label: "SIRS & Incidents module", href: "/modules/sirs" },
      { label: "Complaints module", href: "/modules/complaints" },
    ],
  },
  {
    id: "organisational-governance",
    letter: "O",
    term: "Organisational Governance",
    definition: "The overall structure, processes, and accountability mechanisms through which an aged care provider is managed and controlled. Organisational governance encompasses board oversight, risk management, compliance frameworks, financial stewardship, and ethical decision-making aligned with aged care values.",
    related: [
      { label: "Organisational Governance module", href: "/modules/organisational-governance" },
    ],
  },
  {
    id: "priority-1-incident",
    letter: "P",
    term: "Priority 1 Incident",
    definition: "Under SIRS, a serious incident requiring notification to the ACQSC within 24 hours of identification. Priority 1 incidents include deaths, expected or unexpected; hospitalisation related to care; allegations of abuse or neglect; and chemical, biological, radiological, or nuclear events. Immediate notification is mandatory.",
    related: [
      { label: "SIRS & Incidents module", href: "/modules/sirs" },
      { label: "SIRS reporting obligations guide", href: "/blog/sirs-reporting-obligations-aged-care-act-2024" },
    ],
  },
  {
    id: "priority-2-incident",
    letter: "P",
    term: "Priority 2 Incident",
    definition: "Under SIRS, a serious incident requiring notification to the ACQSC within 30 days of identification. Priority 2 incidents include non-accidental resident injury, alleged worker misconduct affecting resident safety, significant environmental hazards, and missing residents. Timely reporting allows regulatory oversight and support.",
    related: [
      { label: "SIRS & Incidents module", href: "/modules/sirs" },
    ],
  },
  {
    id: "prudential-compliance",
    letter: "P",
    term: "Prudential Compliance",
    definition: "The financial and solvency obligations imposed on aged care providers to ensure they can meet resident care and accommodation obligations. Prudential compliance includes maintaining liquidity ratios, holding adequate reserves for refundable accommodation deposits (RADs), managing debt, and reporting financial information to regulators.",
    related: [
      { label: "Prudential Compliance module", href: "/modules/prudential" },
      { label: "Prudential compliance guide", href: "/blog/prudential-compliance-refundable-deposits-aged-care" },
    ],
  },
  {
    id: "quality-standards",
    letter: "Q",
    term: "Quality Standards (Aged Care Quality Standards)",
    definition: "Eight core quality standards that all aged care providers must meet under the Aged Care Act 2024: Consumer dignity and choice, Safety, Accountability, Complaints and feedback, Staffing and management, Resident lifestyle and activities, Governance and management, and Quality assessment and improvement. These standards drive person-centred, safe, accountable aged care.",
    related: [
      { label: "Quality Standards module", href: "/modules/quality-standards" },
      { label: "Self-assessment checklist", href: "/blog/aged-care-quality-standards-self-assessment-checklist" },
    ],
  },
  {
    id: "rad",
    letter: "R",
    term: "Refundable Accommodation Deposit (RAD)",
    definition: "A one-time upfront payment made by residents for accommodation in residential aged care facilities. RADs must be fully refundable and are subject to strict prudential requirements. Providers must hold RAD funds in separate accounts, earn interest, and manage them according to legislative protections.",
    related: [
      { label: "Prudential Compliance module", href: "/modules/prudential" },
    ],
  },
  {
    id: "rn-coverage",
    letter: "R",
    term: "Registered Nurse (RN) Coverage",
    definition: "The requirement that residential aged care facilities maintain adequate registered nurse staffing and availability to meet resident care needs. The Aged Care Act 2024 requires a minimum of 40 care minutes per resident per day from registered nurses. RN coverage ensures residents have access to qualified clinical assessment and decision-making.",
    related: [
      { label: "Workforce Compliance module", href: "/modules/workforce-compliance" },
      { label: "Care minutes calculator", href: "/blog/care-minutes-target-200-minutes-compliance" },
    ],
  },
  {
    id: "responsible-person",
    letter: "R",
    term: "Responsible Person",
    definition: "An individual at a residential aged care provider with management authority or control who must undergo suitability screening and periodic assessment. Responsible persons include board members, executive leadership, compliance officers, clinical leads, and other staff with decision-making authority. All must demonstrate suitability to work in aged care.",
    related: [
      { label: "Responsible Persons module", href: "/modules/responsible-persons" },
      { label: "Responsible Persons Register guide", href: "/blog/responsible-persons-register-guide" },
    ],
  },
  {
    id: "restrictive-practice",
    letter: "R",
    term: "Restrictive Practice",
    definition: "Any measure or action that restricts a resident's rights, freedom of movement, or autonomy, including physical restraint, chemical restraint (medication), and seclusion. All restrictive practices must be justified, minimised, documented, and regularly reviewed. Use is only permitted when necessary to prevent harm and only as a last resort.",
    related: [
      { label: "Restrictive Practices module", href: "/modules/restrictive-practices" },
    ],
  },
  {
    id: "sirs",
    letter: "S",
    term: "SIRS (Serious Incident Response Scheme)",
    definition: "The mandatory national scheme requiring residential aged care providers to identify, respond to, investigate, and report serious incidents. SIRS has two priority levels: Priority 1 incidents (24-hour notification) and Priority 2 incidents (30-day notification). Providers must have robust incident management systems, investigation processes, and corrective actions.",
    related: [
      { label: "SIRS & Incidents module", href: "/modules/sirs" },
      { label: "SIRS reporting obligations", href: "/blog/sirs-reporting-obligations-aged-care-act-2024" },
    ],
  },
  {
    id: "self-assessment",
    letter: "S",
    term: "Self-Assessment",
    definition: "The provider-led evaluation process to determine compliance with the eight Aged Care Quality Standards. Providers conduct self-assessments annually, documenting evidence, identifying gaps, and planning improvements. Self-assessments prepare providers for ACQSC assessment contacts and demonstrate commitment to continuous quality improvement.",
    related: [
      { label: "Quality Standards module", href: "/modules/quality-standards" },
    ],
  },
  {
    id: "suitability-assessment",
    letter: "S",
    term: "Suitability Assessment",
    definition: "The formal evaluation process to determine if a person is suitable to be a responsible person in aged care or to provide care services. Suitability assessments check criminal history, professional conduct, working with children checks, health status, and character references. Unsuitable persons are excluded from aged care work.",
    related: [
      { label: "Responsible Persons module", href: "/modules/responsible-persons" },
    ],
  },
  {
    id: "whistleblower-protection",
    letter: "W",
    term: "Whistleblower Protection",
    definition: "The legal protections available to workers and others who report suspected breaches of aged care laws, standards, or ethical obligations. Whistleblower protections ensure reporters are protected from reprisal, discrimination, or termination. Providers must have confidential channels and policies supporting safe disclosure.",
    related: [
      { label: "Whistleblower module", href: "/modules/whistleblower" },
    ],
  },
  {
    id: "workforce-compliance",
    letter: "W",
    term: "Workforce Compliance",
    definition: "The comprehensive framework ensuring all aged care workers meet required qualifications, screening, training, and conduct standards. Workforce compliance includes criminal history checks, health assessments, code of conduct adherence, professional development, and fitness-to-practise evaluations. Compliance protects residents and supports safe, quality care.",
    related: [
      { label: "Workforce Compliance module", href: "/modules/workforce-compliance" },
    ],
  },
];

// Group terms by letter
const termsByLetter = glossaryTerms.reduce(
  (acc, term) => {
    if (!acc[term.letter]) {
      acc[term.letter] = [];
    }
    acc[term.letter].push(term);
    return acc;
  },
  {} as Record<string, GlossaryTerm[]>
);

const alphabet = Object.keys(termsByLetter).sort();

export default function GlossaryPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "Glossary", item: "https://statura.care/glossary" },
    ],
  };

  const definedTermSetJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Aged Care Compliance Glossary",
    description: "Comprehensive glossary of aged care compliance terms under the Aged Care Act 2024",
    hasDefinedTerm: glossaryTerms.map((term) => ({
      "@type": "DefinedTerm",
      name: term.term,
      description: term.definition,
      inDefinedTermSet: "https://statura.care/glossary",
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetJsonLd) }} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#96A998] opacity-[0.03] blur-[120px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Compliance Resources
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Aged Care Compliance{" "}
                <span className="text-[#96A998]">Glossary</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Comprehensive definitions of key aged care compliance terms under the Aged Care Act 2024. From SIRS to quality standards to prudential compliance, understand the language of aged care regulation.
              </p>
            </div>
          </div>
        </section>

        {/* Alphabet Navigation */}
        <section className="bg-white border-b border-slate-200 sticky top-20 z-40 py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {alphabet.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="inline-block px-3 py-2 rounded-lg text-sm font-semibold text-[#1E293B] bg-[#F5F6F2] hover:bg-[#96A998] hover:text-white transition-all duration-150"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Glossary Terms */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {alphabet.map((letter) => (
              <div key={letter} className="mb-16 lg:mb-20 last:mb-0">
                {/* Letter heading */}
                <h2 id={`letter-${letter}`} className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] mb-8 pb-4 border-b-2 border-[#96A998]">
                  {letter}
                </h2>

                {/* Terms grid */}
                <div className="space-y-6">
                  {termsByLetter[letter].map((term) => (
                    <div
                      key={term.id}
                      id={term.id}
                      className="p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#96A998]/30 transition-all duration-200"
                    >
                      <h3 className="font-serif font-bold text-lg lg:text-xl text-[#1E293B] mb-3">
                        {term.term}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {term.definition}
                      </p>

                      {/* Related links */}
                      {term.related.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {term.related.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F6F2] text-sm font-medium text-[#3E5D4A] hover:bg-[#96A998] hover:text-white transition-all duration-150"
                            >
                              {link.label}
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0F172A] py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-serif font-bold text-2xl lg:text-3xl text-white mb-4">
              Need help with compliance?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Statura Care provides purpose-built software to manage aged care compliance obligations across all 14 compliance areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.statura.care/signup"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#0F172A] font-semibold text-sm hover:bg-slate-100 transition-all duration-150 shadow-lg"
              >
                Start your 14-day free trial
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-slate-600 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-150"
              >
                Request a demo
              </Link>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              No credit card required. Australian-hosted in Sydney.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
