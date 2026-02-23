"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const EDGE_FUNCTION_URL =
  "https://xaxycjprriboclvfoxbe.supabase.co/functions/v1/contact-form";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      organisation: (form.elements.namedItem("organisation") as HTMLInputElement)
        .value,
      enquiry: (form.elements.namedItem("enquiry") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch(EDGE_FUNCTION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to connect. Please email hello@statura.care directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 rounded-2xl border border-slate-200 bg-[#F8FAFC]">
        <div className="text-center py-8">
          <div className="w-14 h-14 rounded-2xl bg-[#96A998]/10 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-7 h-7 text-[#3E5D4A]" />
          </div>
          <h3 className="font-semibold text-[#1E293B] text-lg mb-2">
            Enquiry received
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
            Thank you for your interest in Statura Care. We&apos;ll be in touch
            within one business day.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-semibold text-[#3E5D4A] hover:text-[#2F4B3B] transition-colors"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-2xl border border-slate-200 bg-[#F8FAFC]">
      <h3 className="font-semibold text-[#1E293B] text-lg mb-6">
        Request a demo
      </h3>

      {status === "error" && (
        <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#1E293B] mb-1.5"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={2}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#96A998] focus:border-transparent transition"
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#1E293B] mb-1.5"
          >
            Work email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#96A998] focus:border-transparent transition"
            placeholder="jane@yourprovider.com.au"
          />
        </div>

        <div>
          <label
            htmlFor="organisation"
            className="block text-sm font-medium text-[#1E293B] mb-1.5"
          >
            Organisation
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#96A998] focus:border-transparent transition"
            placeholder="Your aged care provider name"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry"
            className="block text-sm font-medium text-[#1E293B] mb-1.5"
          >
            What are you most interested in?
          </label>
          <select
            id="enquiry"
            name="enquiry"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#96A998] focus:border-transparent transition"
          >
            <option value="demo">Platform demo</option>
            <option value="pricing">Pricing enquiry</option>
            <option value="sirs">SIRS &amp; Incidents module</option>
            <option value="keyperson">Responsible Persons module</option>
            <option value="standards">Quality Standards module</option>
            <option value="security">Security &amp; data protection</option>
            <option value="other">Something else</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#1E293B] mb-1.5"
          >
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#96A998] focus:border-transparent transition resize-none"
            placeholder="Tell us about your compliance priorities..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full py-3.5 rounded-xl bg-[#0F172A] text-white font-semibold text-sm hover:bg-[#1E293B] transition-all duration-150 shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send enquiry"
          )}
        </button>

        <p className="text-xs text-slate-400 text-center">
          No spam. No obligation. We&apos;ll respond within one business day.
        </p>
      </form>
    </div>
  );
}
