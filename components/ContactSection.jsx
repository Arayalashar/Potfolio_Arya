"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/data/profile";
import { FiMail, FiArrowRight, FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const socialLinks = [
    { id: "contact-instagram", icon: FiInstagram, href: profile.social.instagram, label: "Instagram", color: "var(--text-primary)" },
    { id: "contact-github", icon: FiGithub, href: profile.social.github, label: "GitHub", color: "var(--text-primary)" },
    { id: "contact-linkedin", icon: FiLinkedin, href: profile.social.linkedin, label: "LinkedIn", color: "var(--text-primary)" },
  ];

  return (
    <section
      id="contact"
      className="section-padding"
      ref={ref}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Label */}
          <span
            style={{
              display: "inline-block",
              padding: "0.375rem 1rem",
              borderRadius: "50px",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-color)",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Contact Me
          </span>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            Let&apos;s build something{" "}
            <span className="instagram-text">amazing together</span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: "3rem",
              maxWidth: "520px",
              margin: "0 auto 3rem",
            }}
          >
            Whether you have a project in mind, a collaboration opportunity, or just want to say hi — my inbox is always open. I&apos;ll get back to you as soon as possible!
          </p>

          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: "var(--bg-primary)",
              border: "1px solid var(--border-color)",
              borderRadius: "2rem",
              padding: "3rem 2.5rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: "absolute",
                top: "-50%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Email icon */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #ffffff, #aaaaaa)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
                boxShadow: "0 10px 30px rgba(255,255,255,0.15)",
                fontSize: "1.75rem",
                color: "black",
              }}
            >
              <FiMail />
            </motion.div>

            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Send an email directly
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "2rem",
              }}
            >
              {profile.email}
            </p>

            <a
              href={`mailto:${profile.email}`}
              id="send-email-btn"
              className="btn-primary"
              style={{ display: "inline-flex" }}
            >
              Send Email
              <FiArrowRight />
            </a>

            {/* Social Links */}
            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--border-color)",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Or find me on
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.875rem",
                }}
              >
                {socialLinks.map(({ id, icon: Icon, href, label, color }) => (
                  <motion.a
                    key={id}
                    id={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.92 }}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border-color)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-secondary)",
                      fontSize: "1.2rem",
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
