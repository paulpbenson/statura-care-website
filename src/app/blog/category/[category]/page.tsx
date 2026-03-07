import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogPosts, blogCategories, toSlug, getCategoryBySlug } from "@/data/blog";
import { Calendar, Clock, ArrowRight, ChevronRight } from "lucide-react";

export function generateStaticParams() {
  return blogCategories.map((category) => ({
    category: toSlug(category),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const categoryName = getCategoryBySlug(slug);
  if (!categoryName) return { title: "Category Not Found — Statura Care" };

  const title = `${categoryName} Articles — Statura Care Blog`;
  const description = `Browse all ${categoryName} articles from Statura Care. Expert guidance for Australian aged care providers.`;

  return {
    title,
    description,
    alternates: { canonical: `https://statura.care/blog/category/${slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: `https://statura.care/blog/category/${slug}`,
      type: "website",
      locale: "en_AU",
    },
  };
}

function formatDate(iso: string): string {
  const date = new Date(iso + "T00:00:00");
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const categoryName = getCategoryBySlug(slug);

  const filteredPosts = categoryName
    ? [...blogPosts]
        .filter((p) => toSlug(p.category) === slug)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    : [];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://statura.care/blog" },
      { "@type": "ListItem", position: 3, name: categoryName || slug },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0F172A] pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#96A998] opacity-[0.03] blur-[120px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-sm text-slate-400 mb-6">
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link href="/blog" className="hover:text-white transition-colors duration-150">
                  Blog
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-500">{categoryName || slug}</span>
              </nav>

              <p className="text-xs font-semibold text-[#96A998] uppercase tracking-[0.2em] mb-3">
                Category
              </p>
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-tight">
                {categoryName || slug}
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} in this category.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group p-7 rounded-2xl border border-slate-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-200 bg-white"
                  >
                    <p className="text-[11px] font-semibold text-[#3E5D4A] uppercase tracking-[0.15em] mb-3">
                      {post.category}
                    </p>
                    <h2 className="font-serif font-bold text-lg lg:text-xl text-[#1E293B] leading-snug mb-3 group-hover:text-[#3E5D4A] transition-colors duration-150">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.description}
                    </p>
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
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3E5D4A] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                        Read article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-slate-500 text-lg mb-6">
                  No articles found in this category.
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#3E5D4A] hover:text-[#96A998] transition-colors duration-150"
                >
                  Browse all articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
