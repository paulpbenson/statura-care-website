import React from "react";
import Image from "next/image";

export function Logo({
  variant = "light",
  showSubBrand = true,
  className = "",
}: {
  variant?: "light" | "dark";
  showSubBrand?: boolean;
  className?: string;
}) {
  const src = variant === "dark" ? "/logo-dark.png" : "/logo-light.png";

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={src}
        alt="Statura Care"
        width={300}
        height={120}
        className="h-auto w-full max-h-20"
        priority
      />
    </div>
  );
}
