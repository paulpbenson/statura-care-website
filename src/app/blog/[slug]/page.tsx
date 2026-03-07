import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { blogContent } from "@/data/blog-content";
import { Calendar, Clock, User, ChevronRight, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found — Statura Care" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://statura.care/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://statura.care/blog/${slug}`,
      type: "article",
      locale: "en_AU",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    keywords: post.tags,
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

/**
 * Parse basic markdown-style formatting in blog content:
 * - **bold** -> <strong>
 * - [link text](url) -> <a>
 */
function parseInlineMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  // Combined regex: match links first, then bold
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    // Add text before this match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined && match[2] !== undefined) {
      // Link: [text](url)
      parts.push(
        <a
          key={key++}
          href={match[2]}
          className="text-[#3E5D4A] underline underline-offset-2 hover:text-[#96A998] transition-colors duration-150"
        >
          {match[1]}
        </a>
      );
    } else if (match[3] !== undefined) {
      // Bold: **text**
      parts.push(<strong key={key++}>{match[3]}</strong>);
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

function renderContent(content: string): React.ReactNode[] {
  const paragraphs = content.split("\n\n");
  return paragraphs.map((para, i) => (
    <p key={i} className="text-slate-600 leading-relaxed text-[17px]">
      {parseInlineMarkdown(para)}
    </p>
  ));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const sections = blogContent[slug];
  if (!sections) notFound();

  // Related posts: same category, excluding current
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Statura Care",
      url: "https://statura.care",
    },
    publisher: {
      "@type": "Organization",
      name: "Statura Care",
      url: "https://statura.care",
      logo: {
        "@type": "ImageObject",
        url: "https://statura.care/logo-icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://statura.care/blog/${slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://statura.care" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://statura.care/blog" },
      { "@type": "ListItem", position: 3, name: post.title },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
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
                <span className="text-slate-500 truncate max-w-[200px] sm:max-w-none">
                  {post.title}
                </span>
              </nav>

              {/* Category badge */}
              <p className="text-[11px] font-semibold text-[#96A998] uppercase tracking-[0.15em] mb-4">
                {post.category}
              </p>

              <h1 className="font-serif font-black text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.1] tracking-tight">
                {post.title}
              </h1>

              {/* Meta line */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readingTime}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <article className="space-y-6">
              {sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="font-serif font-bold text-2xl lg:text-[1.7rem] text-[#1E293B] leading-snug mt-10 mb-4">
                      {section.heading}
                    </h2>
                  )}
                  <div className="space-y-4">
                    {renderContent(section.content)}
                  </div>
                </div>
              ))}
            </article>

            {/* Back to blog */}
            <div className="mt-14 pt-8 border-t border-slate-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#3E5D4A] hover:text-[#96A998] transition-colors duration-150"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="bg-[#F8F9FA] py-16 lg:py-24 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="font-serif font-bold text-2xl lg:text-3xl text-[#1E293B] mb-8">
                Related articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group p-7 rounded-2xl border border-slate-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-200 bg-white"
                  >
                    <p className="text-[11px] font-semibold text-[#3E5D4A] uppercase tracking-[0.15em] mb-3">
                      {related.category}
                    </p>
                    <h3 className="font-serif font-bold text-base lg:text-lg text-[#1E293B] leading-snug mb-3 group-hover:text-[#3E5D4A] transition-colors duration-150">
                      {related.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(related.publishedAt)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {related.readingTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <CTABanner compact />
      </main>
      <Footer />
    </>
  );
}
