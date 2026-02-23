import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Statura Care — Aged Care Compliance Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0F172A",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle green glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "#96A998",
            opacity: 0.06,
            filter: "blur(100px)",
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "#96A998",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg viewBox="0 0 200 200" width="52" height="52">
              <path
                d="M100 170 C100 170 30 120 30 78 C30 56 47 40 68 40 C82 40 93 48 100 60 C107 48 118 40 132 40 C153 40 170 56 170 78 C170 120 100 170 100 170Z"
                fill="white"
              />
              <rect x="91" y="96" width="18" height="4" rx="2" fill="#96A998" />
              <rect x="97" y="90" width="6" height="16" rx="2" fill="#96A998" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "56px",
                fontWeight: 900,
                color: "white",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Statura
              <span style={{ color: "#96A998" }}>.</span>
            </span>
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#94A3B8",
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
              }}
            >
              CARE
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "28px",
            color: "#CBD5E1",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          The modular compliance platform for
          <br />
          Australian aged care providers
        </p>

        {/* Domain */}
        <p
          style={{
            fontSize: "18px",
            color: "#96A998",
            marginTop: "32px",
            fontWeight: 600,
          }}
        >
          statura.care
        </p>
      </div>
    ),
    { ...size }
  );
}
