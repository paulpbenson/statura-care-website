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
        <svg viewBox="0 0 200 200" className="w-6 h-6" aria-hidden="true">
          <path
            d="M100 155 C100 155 45 115 45 82 C45 65 58 52 75 52 C85 52 94 58 100 67 C106 58 115 52 125 52 C142 52 155 65 155 82 C155 115 100 155 100 155Z"
            fill="white"
          />
          <rect x="93" y="95" width="14" height="3.5" rx="1.75" fill="#96A998" />
          <rect
            x="98.25"
            y="89.75"
            width="3.5"
            height="14"
            rx="1.75"
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
