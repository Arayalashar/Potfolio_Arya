"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "@/data/profile";

const ROLES = profile.roles;

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        height: "1.4em",
        fontSize: "clamp(1.25rem, 4vw, 2rem)",
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          fontWeight: 700,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {displayed}
      </span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
        style={{
          display: "inline-block",
          width: "2px",
          height: "1.2em",
          background: "linear-gradient(135deg, #ffffff, #aaaaaa)",
          borderRadius: "2px",
          marginLeft: "2px",
          verticalAlign: "middle",
        }}
      />
    </div>
  );
}

const socialLinks = [
  {
    id: "instagram-link",
    icon: FiInstagram,
    href: profile.social.instagram,
    label: "Instagram",
    color: "var(--text-primary)",
  },
  {
    id: "github-link",
    icon: FiGithub,
    href: profile.social.github,
    label: "GitHub",
    color: "var(--text-primary)",
  },
  {
    id: "linkedin-link",
    icon: FiLinkedin,
    href: profile.social.linkedin,
    label: "LinkedIn",
    color: "var(--text-primary)",
  },
];

export default function HeroSection() {
  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.85, x: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 },
    },
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "6rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 50%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: "clamp(3rem, 6vw, 4.5rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.03em",
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              Hi, I&apos;m Arya
            </motion.h1>

            <motion.div variants={itemVariants} style={{ marginBottom: "1.5rem" }}>
              <TypewriterText />
            </motion.div>

            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
                maxWidth: "480px",
              }}
            >
              {profile.bio}
            </motion.p>



            <motion.div
              variants={itemVariants}
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "4rem",
              }}
            >
              <button
                className="btn-primary"
                onClick={handleScrollToProjects}
                id="explore-work-btn"
                suppressHydrationWarning
              >
                Explore Work
                <FiArrowRight />
              </button>
              <a
                href={profile.cvUrl}
                download
                className="btn-secondary"
                id="download-cv-btn"
                suppressHydrationWarning
              >
                <FiDownload />
                Download CV
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  fontWeight: 700,
                }}
              >
                CONNECT ME IN:
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {socialLinks.map(({ id, icon: Icon, href, label, color }) => (
                  <motion.a
                    key={id}
                    id={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    suppressHydrationWarning
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-color)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-secondary)",
                      fontSize: "1.1rem",
                      textDecoration: "none",
                      transition: "color 0.3s ease, border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = color;
                      e.currentTarget.style.borderColor = color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.borderColor = "var(--border-color)";
                    }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={photoVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >


            <div style={{ position: "relative", width: "100%", maxWidth: "480px", marginLeft: "auto" }}>
              <motion.img
                src="/Asset_FotoDiri.png"
                alt="Arya - Fullstack Developer"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                  position: "relative",
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "2%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "70%",
                  height: "25px",
                  background: "rgba(0, 0, 0, 0.25)",
                  borderRadius: "50%",
                  filter: "blur(12px)",
                  zIndex: 1,
                }}
              />
            </div>


          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
