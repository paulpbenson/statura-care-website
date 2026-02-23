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
        width={variant === "dark" ? 200 : 200}
        height={75}
        className="h-10 w-auto"
        priority
      />
    </div>
  );
}
