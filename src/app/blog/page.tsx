import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogPosts, blogCategories, toSlug } from "@/data/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Aged Care Compliance Insights & Guides",
  description:
    "Expert guides, compliance updates, and practical insights for Australian aged care providers. Stay informed on SIRS, quality standards, governance, workforce, and more under the Aged Care Act 2024.",
  alternates: { canonical: "https://statura.care/blog" },
  openGraph: {
    title: "Blog — Aged Care Compliance Insights & Guides",
    description:
      "Expert guides, compliance updates, and practical insights for Australian aged care providers. Stay informed on SIRS, quality standards, governance, workforce, and more under the Aged Care Act 2024.",
    url: "https://statura.care/blog",
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "aged care compliance blog",
    "aged care guides",
    "SIRS reporting guide",
    "aged care quality standards guide",
    "aged care workforce compliance",
    "Aged Care Act 2024 updates",
  ],
};

function formatDate(iso: string): string {
  const date = new Date(iso + "T00:00:00");
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const blogListingJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Statura Care Blog",
    description:
      "Expert guides, compliance updates, and practical insights for Australian aged care providers.",
    url: "https://statura.care/blog",
    publisher: {
      "@type": "Organization",
      name: "Statura Care",
      url: "https://statura.care",
      logo: {
        "@type": "ImageObject",
        url: "https://statura.care/logo-icon.png",
      },
    },
    blogPost: sortedPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      author: {
        "@type": "Organization",
        name: "Statura Care",
        url: "https://statura.care",
      },
      url: `https://statura.care/blog/${post.slug}`,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://statura.care/blog" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#96A998] opacity-[0.03] blur-[120px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Blog
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                Compliance insights &{" "}
                <span className="text-[#96A998]">practical guides.</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Expert guidance for Australian aged care providers navigating the Aged Care Act 2024.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter Pills */}
        <section className="bg-white pt-12 lg:pt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((category) => {
                const count = blogPosts.filter((p) => p.category === category).length;
                return (
                  <Link
                    key={category}
                    href={`/blog/category/${toSlug(category)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-[#1E293B] hover:border-[#3E5D4A] hover:text-[#3E5D4A] transition-colors duration-150"
                  >
                    {category}
                    <span className="text-xs text-slate-400 font-normal">({count})</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-white py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {sortedPosts.map((post) => (
                <div
                  key={post.slug}
                  className="group p-7 rounded-2xl border border-slate-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-200 bg-white"
                >
                  <Link
                    href={`/blog/category/${toSlug(post.category)}`}
                    className="text-[11px] font-semibold text-[#3E5D4A] uppercase tracking-[0.15em] mb-3 inline-block hover:text-[#96A998] transition-colors duration-150"
                  >
                    {post.category}
                  </Link>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-serif font-bold text-lg lg:text-xl text-[#1E293B] leading-snug mb-3 group-hover:text-[#3E5D4A] transition-colors duration-150">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>
                  </Link>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${toSlug(tag)}`}
                        className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full hover:bg-[#3E5D4A] hover:text-white transition-colors duration-150"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3E5D4A] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                    >
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
