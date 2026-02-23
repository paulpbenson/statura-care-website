import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${light ? "text-[#96A998]" : "text-[#3E5D4A]"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif font-bold text-3xl lg:text-4xl leading-tight tracking-tight ${light ? "text-white" : "text-[#1E293B]"}`}>
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className={light ? "text-[#96A998]" : "text-[#3E5D4A]"}>{titleAccent}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-slate-300" : "text-slate-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
