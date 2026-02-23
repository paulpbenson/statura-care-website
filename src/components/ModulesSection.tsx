import React from "react";
import {
  UserCheck,
  AlertTriangle,
  Award,
  DollarSign,
  FileSignature,
  Users,
  ShieldAlert,
  MessageSquareWarning,
  Microscope,
  BarChart3,
  ClipboardList,
  Building2,
  Banknote,
  BadgeCheck,
} from "lucide-react";

const moduleGroups = [
  {
    category: "Governance & People",
    colour: "from-[#96A998]/10 to-transparent",
    borderColour: "border-[#96A998]/20",
    modules: [
      {
        icon: UserCheck,
        name: "Responsible Persons",
        code: "KeyPerson",
        section: "ss157-161",
        description:
          "Manage suitability assessments across 10 statutory matters, worker screening, ACQSC notifications, and governing body skills matrices.",
      },
      {
        icon: ClipboardList,
        name: "Code of Conduct",
        code: "Conduct",
        section: "ss63-65",
        description:
          "Track worker acknowledgments, training compliance, breach investigations with natural justice protections, and ACQSC reporting.",
      },
      {
        icon: Users,
        name: "Workforce Compliance",
        code: "Workforce",
        section: "ss66-72",
        description:
          "Worker screening, mandatory training, daily staffing minutes calculator, 24/7 RN coverage tracking, and qualification management.",
      },
      {
        icon: Building2,
        name: "Associated Providers",
        code: "Associates",
        section: "ss14-16",
        description:
          "Associated persons register, influence assessment, due diligence records, and ACQSC change notifications.",
      },
    ],
  },
  {
    category: "Safety & Quality",
    colour: "from-red-50 to-transparent",
    borderColour: "border-red-100",
    modules: [
      {
        icon: AlertTriangle,
        name: "SIRS & Incidents",
        code: "SIRS",
        section: "ss162-164",
        description:
          "Priority 1/2 incident reporting with auto-calculated deadlines, investigation workflow, restrictive practices register, and behaviour support plans.",
      },
      {
        icon: Award,
        name: "Quality Standards",
        code: "Standards",
        section: "ss146-147",
        description:
          "Self-assess against all 8 Quality Standards, map evidence from across modules, track continuous improvement, and generate audit preparation packs.",
      },
      {
        icon: MessageSquareWarning,
        name: "Complaints",
        code: "Complaints",
        section: "ss196-201",
        description:
          "5-business-day acknowledgment and 30-day resolution tracking, escalation workflow, systemic issue identification, and adverse action monitoring.",
      },
      {
        icon: ShieldAlert,
        name: "Whistleblower",
        code: "Whistleblower",
        section: "ss186-195",
        description:
          "Confidential disclosure management with identity-restricted access, anonymous portal, investigation workflow, and discloser protection monitoring.",
      },
      {
        icon: Microscope,
        name: "Infection Prevention",
        code: "IPC",
        section: "Standard 3 & 5",
        description:
          "Infection surveillance, outbreak auto-detection, hand hygiene audits, antimicrobial stewardship, and outbreak notifications.",
      },
      {
        icon: BarChart3,
        name: "Quality Indicators",
        code: "QI Reporter",
        section: "NAQIMQP",
        description:
          "Quarterly data collection across 5 domains, rate calculations, national benchmarking, trend analysis, and CSV export for submission.",
      },
    ],
  },
  {
    category: "Financial & Commercial",
    colour: "from-blue-50 to-transparent",
    borderColour: "border-blue-100",
    modules: [
      {
        icon: DollarSign,
        name: "Prudential Compliance",
        code: "Prudential",
        section: "ss170-183",
        description:
          "Refundable deposit register, liquidity snapshots with coverage ratios, permitted use tracking, and 4-standard governance compliance.",
      },
      {
        icon: FileSignature,
        name: "Agreements & Consent",
        code: "Agreements",
        section: "ss44-51",
        description:
          "Resident agreement register with 10-item mandatory content checklist, fee schedule tracking, consent management, and variation history.",
      },
      {
        icon: Banknote,
        name: "Funding & Claims",
        code: "Funding",
        section: "AN-ACC",
        description:
          "AN-ACC classification tracking across 13 classes, subsidy rate management, monthly claims reconciliation, and supplement tracking.",
      },
      {
        icon: BadgeCheck,
        name: "Registration",
        code: "Registration",
        section: "ss17-30",
        description:
          "Registration status tracking, conditions register, regulatory correspondence management, and compliance self-checks.",
      },
    ],
  },
];

export function ModulesSection() {
  return (
    <section id="modules" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
            14 Compliance Modules
          </p>
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
            Every obligation,{" "}
            <span className="text-[#3E5D4A]">one platform.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Pick the modules you need today. Add more as you grow. Each module
            plugs into the same platform core — shared audit trail, alerts,
            documents, and dashboard.
          </p>
        </div>

        {/* Module groups */}
        <div className="space-y-12">
          {moduleGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-serif font-bold text-xl text-[#1E293B] mb-5 pl-1">
                {group.category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {group.modules.map((mod) => (
                  <div
                    key={mod.code}
                    className={`group relative p-6 rounded-2xl bg-gradient-to-br ${group.colour} border ${group.borderColour} hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-200`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                        <mod.icon className="w-5 h-5 text-[#3E5D4A]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-[#1E293B] text-sm">
                            {mod.name}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-200/60 px-1.5 py-0.5 rounded">
                            {mod.section}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {mod.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
