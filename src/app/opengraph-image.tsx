import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Statura Care — Aged Care Compliance Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public", "logo-dark.png")
  );
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

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

        {/* Logo */}
        <img
          src={logoBase64}
          width={400}
          height={150}
          style={{ objectFit: "contain", marginBottom: "40px" }}
        />

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
