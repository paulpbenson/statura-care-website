import React from "react";
import {
  AlertTriangle,
  Clock,
  Search,
  CheckCircle2,
  FileCheck,
  Shield,
} from "lucide-react";

const steps = [
  {
    icon: AlertTriangle,
    step: "01",
    title: "Incident Reported",
    description:
      "A staff member reports a serious incident through Statura Care. The system auto-classifies priority and calculates ACQSC notification deadlines.",
    time: "0 hours",
    colour: "bg-red-50 text-red-600 border-red-200",
    iconColour: "text-red-500",
  },
  {
    icon: Clock,
    step: "02",
    title: "Deadline Countdown Begins",
    description:
      "For Priority 1, a 24-hour countdown timer activates. Escalating alerts notify compliance officers, managers, and the responsible person on duty.",
    time: "< 1 hour",
    colour: "bg-amber-50 text-amber-600 border-amber-200",
    iconColour: "text-amber-500",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "ACQSC Notification Prepared",
    description:
      "The system auto-generates the notification form with incident details pre-populated. Review, approve, and submit — with full audit trail.",
    time: "< 12 hours",
    colour: "bg-blue-50 text-blue-600 border-blue-200",
    iconColour: "text-blue-500",
  },
  {
    icon: Search,
    step: "04",
    title: "Investigation Launched",
    description:
      "Assign an investigator, track findings, identify root causes, and document recommendations. Every step logged for regulatory review.",
    time: "Day 1-14",
    colour: "bg-indigo-50 text-indigo-600 border-indigo-200",
    iconColour: "text-indigo-500",
  },
  {
    icon: CheckCircle2,
    step: "05",
    title: "Remediation Tracked",
    description:
      "Investigation recommendations become tracked remediation actions with owners, due dates, and completion evidence. Nothing falls through the cracks.",
    time: "Day 14-30",
    colour: "bg-emerald-50 text-emerald-600 border-emerald-200",
    iconColour: "text-emerald-500",
  },
  {
    icon: Shield,
    step: "06",
    title: "Evidence Flows to Standards",
    description:
      "Incident data, investigation findings, and remediation evidence auto-link to Quality Standard 8 (Governance). Your next ACQSC assessment is already prepared.",
    time: "Continuous",
    colour: "bg-[#F5F6F2] text-[#3E5D4A] border-[#96A998]/30",
    iconColour: "text-[#3E5D4A]",
  },
];

export function ComplianceTimelineSection() {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold text-[#3E5D4A] uppercase tracking-[0.2em] mb-3">
            How It Works
          </p>
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[#1E293B] leading-tight tracking-tight">
            From incident to evidence{" "}
            <span className="text-[#3E5D4A]">— automatically.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            See how Statura Care handles a serious incident end-to-end, from
            initial report to ACQSC-ready evidence — with every deadline tracked
            and every action logged.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 hidden sm:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.step} className="flex gap-5 sm:gap-8">
                {/* Icon circle */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-2xl border flex items-center justify-center ${step.colour}`}
                  >
                    <step.icon className={`w-6 h-6 ${step.iconColour}`} />
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                      Step {step.step}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
