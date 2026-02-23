import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const footerLinks = {
  Platform: [
    { label: "Features", href: "/#features" },
    { label: "Modules", href: "/modules" },
    { label: "Integrations", href: "/integrations" },
    { label: "Security", href: "/security" },
    { label: "Pricing", href: "/pricing" },
  ],
  Modules: [
    { label: "Responsible Persons", href: "/modules/responsible-persons" },
    { label: "SIRS & Incidents", href: "/modules/sirs" },
    { label: "Quality Standards", href: "/modules/quality-standards" },
    { label: "Prudential Compliance", href: "/modules/prudential" },
  ],
  Resources: [
    { label: "Aged Care Act 2024", href: "https://www.legislation.gov.au/C2024A00040/latest", external: true },
    { label: "ACQSC", href: "https://www.agedcarequality.gov.au", external: true },
    { label: "Quality Standards", href: "https://www.agedcarequality.gov.au/providers/aged-care-quality-standards", external: true },
  ],
  Company: [
    { label: "Contact", href: "/contact" },
    { label: "Security", href: "/security" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Logo variant="dark" />
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              Smart applications for regulated industries. Built in Australia for
              Australian aged care providers.
            </p>
            <a
              href="mailto:hello@statura.care"
              className="inline-block mt-4 text-sm text-[#96A998] hover:text-white transition-colors duration-150"
            >
              hello@statura.care
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em] mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Statura Pty Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-500">
              Australian hosted (Sydney)
            </span>
            <span className="text-xs text-slate-500">WCAG 2.1 AA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
