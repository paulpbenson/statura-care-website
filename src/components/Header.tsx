"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { modules, categories, categoryColours } from "@/data/modules";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Modules", href: "/modules", hasDropdown: true },
  { label: "Integrations", href: "/integrations" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsModulesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsModulesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsModulesOpen(false), 200);
  };

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
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                      isScrolled
                        ? "text-slate-600 hover:text-[#1E293B] hover:bg-slate-50"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isModulesOpen ? "rotate-180" : ""}`} />
                  </Link>

                  {/* Modules Mega Dropdown */}
                  {isModulesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.15)] border border-slate-200/80 p-6 w-[720px]">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.15em]">
                            14 Compliance Modules
                          </p>
                          <Link
                            href="/modules"
                            className="text-xs font-semibold text-[#3E5D4A] hover:text-[#2F4B3B] transition-colors"
                            onClick={() => setIsModulesOpen(false)}
                          >
                            View all →
                          </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                          {categories.map((cat) => (
                            <div key={cat}>
                              <p className={`text-[10px] font-bold uppercase tracking-[0.15em] mb-2.5 ${categoryColours[cat].text}`}>
                                {cat}
                              </p>
                              <div className="space-y-0.5">
                                {modules
                                  .filter((m) => m.category === cat)
                                  .map((mod) => (
                                    <Link
                                      key={mod.slug}
                                      href={`/modules/${mod.slug}`}
                                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-slate-50 transition-colors group"
                                      onClick={() => setIsModulesOpen(false)}
                                    >
                                      <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-[#96A998]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                                        <mod.icon className="w-3.5 h-3.5 text-[#3E5D4A]" />
                                      </div>
                                      <span className="text-xs font-medium text-slate-700 group-hover:text-[#1E293B]">
                                        {mod.name}
                                      </span>
                                    </Link>
                                  ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isScrolled
                      ? "text-slate-600 hover:text-[#1E293B] hover:bg-slate-50"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://app.statura.care/login"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-150 ${
                isScrolled
                  ? "text-[#1E293B] hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Sign in
            </a>
            <a
              href="https://app.statura.care/signup"
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
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-slate-600 hover:text-[#1E293B] py-3 border-b border-slate-100 last:border-0"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <a
                href="https://app.statura.care/login"
                className="text-sm font-medium text-center py-2.5 rounded-lg border-2 border-[#1E293B] text-[#1E293B]"
              >
                Sign in
              </a>
              <a
                href="https://app.statura.care/signup"
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
