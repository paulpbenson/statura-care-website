import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Statura Care Privacy Policy. How we collect, use, store, and protect your personal information in accordance with the Privacy Act 1988 and the Australian Privacy Principles.",
  alternates: { canonical: "https://statura.care/privacy" },
  openGraph: {
    title: "Privacy Policy — Statura Care",
    description:
      "How Statura Care collects, uses, stores, and protects your personal information in accordance with the Privacy Act 1988 and the Australian Privacy Principles.",
    url: "https://statura.care/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="w-14 h-14 rounded-2xl bg-[#96A998]/10 border border-[#96A998]/20 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#96A998]" />
              </div>
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Privacy Policy
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Your privacy matters to us.
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                This policy explains how Statura Care collects, uses, stores,
                and protects your personal information.
              </p>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm text-slate-400 mb-12">
                Last updated: 7 March 2026
              </p>

              {/* 1. Introduction */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  1. Introduction
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  Statura Pty Ltd (ABN ___________), trading as Statura Care
                  (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), is committed
                  to protecting your privacy and handling your personal
                  information responsibly.
                </p>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  We comply with the Privacy Act 1988 (Cth) and the Australian
                  Privacy Principles (APPs). This Privacy Policy describes how
                  we collect, hold, use, and disclose personal information in
                  connection with our website at statura.care and the Statura
                  Care platform.
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  By using our website or platform, you acknowledge that you have
                  read and understood this Privacy Policy.
                </p>
              </div>

              {/* 2. Information We Collect */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  2. Information we collect
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  We may collect the following types of personal information:
                </p>
                <div className="p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] mb-4">
                  <h3 className="font-semibold text-[#1E293B] text-sm mb-3">
                    Personal information provided by you
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-500 leading-relaxed">
                    <li className="flex gap-2">
                      <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                      <span>Name, email address, phone number, organisation name, and job title — collected through contact forms, demo requests, and account creation.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                      <span>Billing and payment information — processed through our payment provider and not stored directly by us.</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] mb-4">
                  <h3 className="font-semibold text-[#1E293B] text-sm mb-3">
                    Usage data collected automatically
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-500 leading-relaxed">
                    <li className="flex gap-2">
                      <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                      <span>Pages visited, features used, browser type, device type, and IP address.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                      <span>This data is used to improve platform performance and user experience.</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC]">
                  <h3 className="font-semibold text-[#1E293B] text-sm mb-3">
                    Aged care resident data
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We do not directly collect or access aged care resident data.
                    Customer organisations enter and manage their own resident
                    and care recipient data within their organisation-scoped
                    Supabase database instance. This data is isolated at the
                    database level through row-level security policies and is not
                    accessible to Statura Care staff.
                  </p>
                </div>
              </div>

              {/* 3. How We Use Information */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  3. How we use your information
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  We use the personal information we collect for the following
                  purposes:
                </p>
                <ul className="space-y-3 text-base text-slate-500 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>To provide, maintain, and improve the Statura Care platform and services.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>To communicate with you about your account, service updates, and product announcements.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>To respond to enquiries, demo requests, and support queries.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>To comply with our legal obligations, including record-keeping and reporting requirements.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>To detect, prevent, and address technical issues or security incidents.</span>
                  </li>
                </ul>
                <p className="text-base text-slate-500 leading-relaxed mt-4">
                  We will not use your personal information for purposes other
                  than those described in this policy without your consent,
                  unless required or authorised by law.
                </p>
              </div>

              {/* 4. Data Storage & Security */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  4. Data storage and security
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  We take reasonable steps to protect your personal information
                  from misuse, interference, loss, unauthorised access,
                  modification, and disclosure.
                </p>
                <ul className="space-y-3 text-base text-slate-500 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>All data is hosted in Sydney, Australia on Australian infrastructure. Your data never leaves Australia.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Data is encrypted at rest and in transit using industry-standard encryption protocols (TLS 1.3).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Row-level security (RLS) ensures each organisation can only access their own data, enforced at the database layer.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Immutable audit trails log every action, including who did what, when, and from where.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Role-based access controls restrict data access to authorised personnel only.</span>
                  </li>
                </ul>
                <p className="text-base text-slate-500 leading-relaxed mt-4">
                  For more information about our security practices, visit our{" "}
                  <a
                    href="/security"
                    className="text-[#3E5D4A] hover:underline font-medium"
                  >
                    Security page
                  </a>
                  .
                </p>
              </div>

              {/* 5. Third Parties */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  5. Third-party service providers
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  We do not sell, rent, or trade your personal information to
                  third parties.
                </p>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  We may share limited personal information with the following
                  categories of service providers who assist us in operating the
                  platform:
                </p>
                <ul className="space-y-3 text-base text-slate-500 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-[#1E293B]">Infrastructure providers</strong> — Supabase (database and authentication infrastructure), hosted in the Sydney region.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-[#1E293B]">Hosting providers</strong> — Vercel (website and application hosting), with edge delivery from Australian nodes.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-[#1E293B]">Payment processors</strong> — for processing subscription payments securely. We do not store credit card details.</span>
                  </li>
                </ul>
                <p className="text-base text-slate-500 leading-relaxed mt-4">
                  All third-party providers are bound by contractual privacy and
                  data protection obligations. We take reasonable steps to ensure
                  they handle your information consistently with this policy and
                  the APPs.
                </p>
              </div>

              {/* 6. Your Rights */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  6. Your rights
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  Under the Australian Privacy Principles, you have the right
                  to:
                </p>
                <ul className="space-y-3 text-base text-slate-500 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-[#1E293B]">Access</strong> — request access to the personal information we hold about you.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-[#1E293B]">Correction</strong> — request correction of any personal information that is inaccurate, out of date, incomplete, or misleading.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span><strong className="text-[#1E293B]">Deletion</strong> — request deletion of your personal information, subject to any legal obligations we may have to retain certain records.</span>
                  </li>
                </ul>
                <p className="text-base text-slate-500 leading-relaxed mt-4">
                  To exercise any of these rights, contact us at{" "}
                  <a
                    href="mailto:hello@statura.care"
                    className="text-[#3E5D4A] hover:underline font-medium"
                  >
                    hello@statura.care
                  </a>
                  . We will respond to your request within 30 days.
                </p>
                <p className="text-base text-slate-500 leading-relaxed mt-4">
                  If you are not satisfied with our response, you may lodge a
                  complaint with the Office of the Australian Information
                  Commissioner (OAIC) at{" "}
                  <a
                    href="https://www.oaic.gov.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3E5D4A] hover:underline font-medium"
                  >
                    www.oaic.gov.au
                  </a>
                  .
                </p>
              </div>

              {/* 7. Cookies */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  7. Cookies
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  We use essential cookies only. These cookies are necessary for
                  the platform to function correctly, including session
                  management and authentication.
                </p>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  We do not use third-party tracking cookies. We do not use
                  advertising cookies. We do not participate in cross-site
                  tracking or advertising networks.
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  You can configure your browser to refuse cookies, but this may
                  affect your ability to use certain features of the platform.
                </p>
              </div>

              {/* 8. Changes */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  8. Changes to this policy
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, technology, or legal requirements.
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  If we make material changes to how we handle your personal
                  information, we will notify you by email (if we have your
                  email address) and update the &quot;Last updated&quot; date at
                  the top of this page. We encourage you to review this policy
                  periodically.
                </p>
              </div>

              {/* 9. Contact */}
              <div className="p-7 rounded-2xl border border-slate-200 bg-[#F8FAFC]">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  9. Contact us
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or how we
                  handle your personal information, please contact us:
                </p>
                <p className="text-base text-slate-500 leading-relaxed mb-1">
                  <strong className="text-[#1E293B]">Email:</strong>{" "}
                  <a
                    href="mailto:hello@statura.care"
                    className="text-[#3E5D4A] hover:underline font-medium"
                  >
                    hello@statura.care
                  </a>
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  <strong className="text-[#1E293B]">Website:</strong>{" "}
                  <a
                    href="https://statura.care/contact"
                    className="text-[#3E5D4A] hover:underline font-medium"
                  >
                    statura.care/contact
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
