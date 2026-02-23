import React from "react";

export function Logo({
  variant = "light",
  showSubBrand = true,
  className = "",
}: {
  variant?: "light" | "dark";
  showSubBrand?: boolean;
  className?: string;
}) {
  const textColor = variant === "dark" ? "text-white" : "text-[#1E293B]";
  const subColor = variant === "dark" ? "text-slate-300" : "text-slate-500";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon */}
      <div className="w-10 h-10 bg-[#96A998] rounded-[10px] flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 200 200" className="w-7 h-7" aria-hidden="true">
          <path
            d="M100 170 C100 170 30 120 30 78 C30 56 47 40 68 40 C82 40 93 48 100 60 C107 48 118 40 132 40 C153 40 170 56 170 78 C170 120 100 170 100 170Z"
            fill="white"
          />
          <rect x="91" y="96" width="18" height="4" rx="2" fill="#96A998" />
          <rect
            x="97"
            y="90"
            width="6"
            height="16"
            rx="2"
            fill="#96A998"
          />
        </svg>
      </div>
      {/* Wordmark */}
      <div className="flex flex-col">
        <span className={`font-serif font-black text-xl leading-none tracking-tight ${textColor}`}>
          Statura<span className="text-[#96A998]">.</span>
        </span>
        {showSubBrand && (
          <span
            className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${subColor}`}
          >
            CARE
          </span>
        )}
      </div>
    </div>
  );
}
