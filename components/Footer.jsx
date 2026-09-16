"use client";
import { FiHeart } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-color)",
        background: "var(--bg-primary)",
        padding: "2rem 0",
      }}
    >
      <div
        className="section-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Logo / Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #ffffff, #aaaaaa)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "black", fontWeight: 800, fontSize: "0.75rem" }}>A</span>
          </div>
          <span
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            Arya Alifia Al Ashar
          </span>
        </div>

        {/* Center — Copyright */}
        <p
          style={{
            fontSize: "0.825rem",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
          }}
        >
          © {year} · Crafted with{" "}
          <FiHeart
            style={{
              color: "#aaaaaa",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />{" "}
          by Arya Alifia
        </p>

        {/* Right — Stack info */}
        <p style={{ fontSize: "0.775rem", color: "var(--text-muted)" }}>
          Built with Next.js · Framer Motion · Tailwind CSS
        </p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        @media (max-width: 640px) {
          footer .section-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
