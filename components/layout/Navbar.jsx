"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#projects" },
  { label: "Certificate", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    
    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }
    
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          margin: "1.25rem auto 0",
          width: "calc(100% - 2rem)",
          maxWidth: "1200px",
          zIndex: 1000,
          padding: "0.875rem 1.5rem",
          background: "var(--bg-secondary)",
          borderRadius: "50px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          border: "1px solid var(--border-color)",
          transition: "all 0.4s ease",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}
        >
          <motion.button
            onClick={() => handleNavClick("#home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            suppressHydrationWarning
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
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
          </motion.button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              marginLeft: "auto",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  suppressHydrationWarning
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.5rem 1rem",
                    borderRadius: "50px",
                    fontSize: "0.9rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                    position: "relative",
                    transition: "all 0.3s ease",
                    fontFamily: "inherit",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50px",
                        background: "var(--bg-card)",
                        border: "1px solid var(--border-color)",
                        zIndex: -1,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>


            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
              id="mobile-menu-btn"
              suppressHydrationWarning
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                cursor: "pointer",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                fontSize: "1rem",
              }}
              className="mobile-menu-btn"
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "70px",
              left: "1rem",
              right: "1rem",
              zIndex: 999,
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "1.25rem",
              padding: "1rem",
              backdropFilter: "blur(20px)",
              boxShadow: "0 20px 60px var(--shadow-color)",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNavClick(link.href)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "0.875rem 1rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "0.75rem",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  fontFamily: "inherit",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "var(--bg-primary)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "none";
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
