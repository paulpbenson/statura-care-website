"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Why Statura", href: "#why-statura" },
  { label: "Pricing", href: "#pricing" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_2px_rgba(15,23,42,0.05)] border-b border-slate-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" aria-label="Home">
            <Logo variant={isScrolled ? "light" : "dark"} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  isScrolled
                    ? "text-slate-600 hover:text-[#1E293B]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://app.staturacare.com.au/login"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-150 ${
                isScrolled
                  ? "text-[#1E293B] hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Sign in
            </a>
            <a
              href="https://app.staturacare.com.au/signup"
              className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-[#0F172A] text-white hover:bg-[#1E293B] transition-all duration-150 shadow-sm hover:shadow-md"
            >
              Start free trial
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-[#1E293B]" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-[#1E293B]" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-slate-600 hover:text-[#1E293B] py-3 border-b border-slate-100 last:border-0"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <a
                href="https://app.staturacare.com.au/login"
                className="text-sm font-medium text-center py-2.5 rounded-lg border-2 border-[#1E293B] text-[#1E293B]"
              >
                Sign in
              </a>
              <a
                href="https://app.staturacare.com.au/signup"
                className="text-sm font-semibold text-center py-2.5 rounded-lg bg-[#0F172A] text-white"
              >
                Start free trial
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
