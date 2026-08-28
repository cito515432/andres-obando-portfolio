import { ImageResponse } from "next/og";

export const alt = "Andrés Obando — Data Engineering & Systems Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f2eee5",
          color: "#15251f",
          fontFamily: "Arial, sans-serif",
          padding: "72px 82px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 430,
            height: 430,
            borderRadius: "50%",
            background: "#e6b94f",
            opacity: 0.5,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 24, fontWeight: 700 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#163f35",
                color: "white",
              }}
            >
              AO
            </div>
            ANDRÉS OBANDO
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
            <div style={{ fontSize: 24, color: "#d76242", fontWeight: 700, marginBottom: 18 }}>
              DATA ENGINEERING · SYSTEMS ENGINEERING
            </div>
            <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 700, letterSpacing: -3 }}>
              Datos, software y soluciones que se pueden mantener.
            </div>
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 22, color: "#42524b" }}>
            <span>Python</span><span>SQL</span><span>PySpark</span><span>Java</span><span>AWS / Azure</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
