"use client";
import { FiArrowUp, FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/profile";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkStyle = {
    color: "var(--text-secondary)",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.2s ease",
    display: "block",
  };

  const titleStyle = {
    fontSize: "0.75rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "var(--text-muted)",
    marginBottom: "1.25rem",
  };

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-color)",
        paddingTop: "5rem",
        paddingBottom: "2rem",
      }}
    >
      <div
        className="section-container footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: "4rem",
          marginBottom: "4rem",
        }}
      >
        <div>
          <div style={{ marginBottom: "1.25rem" }}>
            <span
              style={{
                fontWeight: 800,
                fontSize: "1.1rem",
                color: "var(--text-primary)",
                letterSpacing: "0.02em",
              }}
            >
              PORTFOLIO.
            </span>
          </div>
          
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
              maxWidth: "360px",
            }}
          >
            A passionate UI/UX Designer and Junior Web Developer. I blend creativity with technical expertise to build products that are both beautiful and functional.
          </p>

          <a
            href={`mailto:${profile.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 2rem",
              borderRadius: "50px",
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.95rem",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <FiMail size={18} />
            Let's get in touch
          </a>
        </div>

        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: "2rem" 
          }}
          className="footer-links-grid"
        >
          <div>
            <h3 style={titleStyle}>PAGE</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={titleStyle}>WORK</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Project", href: "#projects" },
                { label: "Certificate", href: "#certifications" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={titleStyle}>SOCIAL</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Instagram", url: profile.social.instagram },
                { label: "LinkedIn", url: profile.social.linkedin },
                { label: "GitHub", url: profile.social.github },
              ].map((social) => (
                <li key={social.label}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="section-container"
        style={{
          borderTop: "1px solid var(--border-color)",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--text-muted)",
          }}
        >
          © {year} {profile.fullName}. Made by Arya
        </p>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          {[
            { icon: FiInstagram, url: profile.social.instagram },
            { icon: FiLinkedin, url: profile.social.linkedin },
            { icon: FiGithub, url: profile.social.github },
          ].map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-primary)",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--border-color)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--bg-card)";
              }}
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToTop}
        suppressHydrationWarning
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 50,
          background: "rgba(128, 128, 128, 0.1)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(128, 128, 128, 0.2)",
          borderRadius: "50%",
          width: "52px",
          height: "52px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-primary)",
          cursor: "pointer",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.1)",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(128, 128, 128, 0.2)";
          e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
          e.currentTarget.style.border = "1px solid rgba(128, 128, 128, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(128, 128, 128, 0.1)";
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.border = "1px solid rgba(128, 128, 128, 0.2)";
        }}
        aria-label="Scroll to top"
      >
        <FiArrowUp style={{ pointerEvents: "none", fontSize: "1.2rem" }} />
      </button>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 600px) {
          .footer-links-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
