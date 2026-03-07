import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Statura Care Terms of Service. Terms and conditions for using the Statura Care aged care compliance platform.",
  alternates: { canonical: "https://statura.care/terms" },
  openGraph: {
    title: "Terms of Service — Statura Care",
    description:
      "Terms and conditions for using the Statura Care aged care compliance and care management platform.",
    url: "https://statura.care/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="w-14 h-14 rounded-2xl bg-[#96A998]/10 border border-[#96A998]/20 flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-[#96A998]" />
              </div>
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Terms of Service
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Terms and conditions.
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Please read these terms carefully before using the Statura Care
                platform. By accessing or using our services, you agree to be
                bound by these terms.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm text-slate-400 mb-12">
                Last updated: 7 March 2026
              </p>

              {/* 1. Agreement */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  1. Agreement to terms
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  These Terms of Service (&quot;Terms&quot;) constitute a
                  legally binding agreement between you (&quot;you&quot;,
                  &quot;your&quot;, &quot;Customer&quot;) and Statura Pty Ltd
                  (ABN ___________), trading as Statura Care (&quot;we&quot;,
                  &quot;us&quot;, &quot;our&quot;, &quot;Statura Care&quot;).
                </p>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  By accessing or using the Statura Care website at statura.care
                  or the Statura Care platform at app.statura.care, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Terms. If you are agreeing on behalf of an
                  organisation, you represent that you have the authority to bind
                  that organisation to these Terms.
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  If you do not agree to these Terms, you must not access or use
                  the platform.
                </p>
              </div>

              {/* 2. Service Description */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  2. Service description
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  Statura Care is a software-as-a-service (SaaS) compliance and
                  care management platform designed for Australian aged care
                  providers. The platform assists with regulatory compliance
                  under the Aged Care Act 2024, covering both residential aged
                  care and Support at Home.
                </p>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  The platform is web-based and accessed through a modern web
                  browser. Features and modules available to you depend on your
                  selected subscription plan.
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  Statura Care is a compliance management tool and does not
                  constitute legal, medical, or professional advice. You remain
                  responsible for your organisation&apos;s compliance
                  obligations.
                </p>
              </div>

              {/* 3. Account Responsibilities */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  3. Account responsibilities
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  When creating an account, you agree to:
                </p>
                <ul className="space-y-3 text-base text-slate-500 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Provide accurate, current, and complete information during registration and keep it up to date.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Keep your authentication credentials secure and not share access with unauthorised individuals.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Be authorised by your organisation to create an account and bind the organisation to these Terms.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Notify us immediately of any unauthorised access to your account.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Use the platform responsibly and in accordance with all applicable laws and regulations.</span>
                  </li>
                </ul>
                <p className="text-base text-slate-500 leading-relaxed mt-4">
                  You are responsible for all activity that occurs under your
                  account.
                </p>
              </div>

              {/* 4. Acceptable Use */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  4. Acceptable use
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="space-y-3 text-base text-slate-500 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Use the platform for any unlawful purpose or in violation of any applicable law or regulation.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Attempt to gain unauthorised access to any part of the platform, other accounts, or related systems.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Interfere with or disrupt the platform, servers, or networks connected to the platform.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Reverse-engineer, decompile, disassemble, or otherwise attempt to derive the source code of the platform.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Use the platform to store or transmit malicious code, viruses, or any material that is unlawful, harmful, or objectionable.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Resell, sublicense, or make the platform available to any third party without our prior written consent.</span>
                  </li>
                </ul>
                <p className="text-base text-slate-500 leading-relaxed mt-4">
                  We reserve the right to suspend or terminate your access if we
                  reasonably believe you have violated these terms.
                </p>
              </div>

              {/* 5. Intellectual Property */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  5. Intellectual property
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  All intellectual property rights in the Statura Care platform,
                  including software, design, branding, documentation, and
                  content, are owned by Statura Pty Ltd or its licensors.
                  Nothing in these Terms transfers any intellectual property
                  rights to you.
                </p>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  We grant you a limited, non-exclusive, non-transferable,
                  revocable licence to access and use the platform for your
                  internal business purposes during the term of your
                  subscription.
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  You retain all ownership and intellectual property rights in
                  the data you enter into the platform (&quot;Customer
                  Data&quot;). We do not claim any ownership over your data.
                </p>
              </div>

              {/* 6. Data Ownership & Portability */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  6. Data ownership and portability
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  Your data belongs to you. We act as a data processor on your
                  behalf and will only use your data to provide and improve the
                  services described in these Terms.
                </p>
                <ul className="space-y-3 text-base text-slate-500 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>You may export your data at any time through the platform&apos;s built-in export functionality.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Upon account closure or termination, your data will remain available for export for 90 days.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>After the 90-day period, your data will be permanently deleted from our systems upon your request.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>We will not hold your data hostage. If you leave, your data leaves with you.</span>
                  </li>
                </ul>
              </div>

              {/* 7. Service Availability */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  7. Service availability
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  We target 99.9% uptime for the Statura Care platform. We
                  monitor systems continuously and aim to resolve issues
                  promptly.
                </p>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  Planned maintenance will be communicated in advance and
                  scheduled outside peak business hours where possible. Emergency
                  maintenance may be performed without advance notice if
                  necessary to protect the security or integrity of the
                  platform.
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  We are not liable for interruptions caused by circumstances
                  beyond our reasonable control, including third-party service
                  outages, internet connectivity issues, force majeure events, or
                  failures in your own infrastructure.
                </p>
              </div>

              {/* 8. Fees & Payment */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  8. Fees and payment
                </h2>
                <ul className="space-y-3 text-base text-slate-500 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Fees are as set out in your selected subscription plan and any applicable order form.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Subscriptions may be invoiced monthly or annually, depending on your selected billing cycle.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Payment is due within 30 days of invoice date unless otherwise agreed in writing.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>All prices are in Australian Dollars (AUD) and are exclusive of GST unless stated otherwise.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>We reserve the right to adjust pricing with 30 days written notice. Price changes will take effect at the start of the next billing period.</span>
                  </li>
                </ul>
              </div>

              {/* 9. Limitation of Liability */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  9. Limitation of liability
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  To the maximum extent permitted by law, including the
                  Australian Consumer Law:
                </p>
                <ul className="space-y-3 text-base text-slate-500 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Our total aggregate liability to you for any claims arising out of or in connection with these Terms or your use of the platform is limited to the total fees paid by you to us in the 12 months immediately preceding the event giving rise to the claim.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>We are not liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or business opportunity, however caused, even if we have been advised of the possibility of such damages.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law, including liability for fraud, gross negligence, or death or personal injury caused by negligence.</span>
                  </li>
                </ul>
              </div>

              {/* 10. Termination */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  10. Termination
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  Either party may terminate the subscription by providing 30
                  days written notice to the other party.
                </p>
                <ul className="space-y-3 text-base text-slate-500 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Upon termination, your access to the platform will cease at the end of your current billing period.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>Your data will remain available for export for 90 days after the effective date of termination.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3E5D4A] mt-1 flex-shrink-0">&bull;</span>
                    <span>After the 90-day period, we will permanently delete your data unless retention is required by law.</span>
                  </li>
                </ul>
                <p className="text-base text-slate-500 leading-relaxed mt-4">
                  We may suspend or terminate your access immediately and
                  without notice if you materially breach these Terms, including
                  misuse of the platform, non-payment after reasonable notice, or
                  conduct that threatens the security or integrity of the
                  platform.
                </p>
              </div>

              {/* 11. Governing Law */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  11. Governing law and jurisdiction
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  These Terms are governed by the laws of New South Wales,
                  Australia. Any dispute arising out of or in connection with
                  these Terms shall be subject to the exclusive jurisdiction of
                  the courts of New South Wales.
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  Before commencing formal proceedings, each party agrees to
                  attempt to resolve any dispute through good faith negotiation.
                </p>
              </div>

              {/* 12. Changes */}
              <div className="mb-12">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  12. Changes to these terms
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  We may update these Terms from time to time. If we make
                  material changes, we will provide at least 30 days notice by
                  email or through the platform before the changes take effect.
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  Your continued use of the platform after the changes take
                  effect constitutes acceptance of the revised Terms. If you do
                  not agree to the updated Terms, you may terminate your
                  subscription in accordance with Section 10.
                </p>
              </div>

              {/* Contact */}
              <div className="p-7 rounded-2xl border border-slate-200 bg-[#F8FAFC]">
                <h2 className="font-serif font-bold text-2xl text-[#1E293B] leading-tight tracking-tight mb-4">
                  Contact
                </h2>
                <p className="text-base text-slate-500 leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
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
