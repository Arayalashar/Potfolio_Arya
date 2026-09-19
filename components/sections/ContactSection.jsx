"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/data/profile";
import { FiMail, FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });



  return (
    <section
      id="contact"
      className="section-padding"
      ref={ref}
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Contact Me
          </h2>
          <p
            style={{
              marginTop: "0.75rem",
              color: "var(--text-muted)",
              fontSize: "0.975rem",
              maxWidth: "480px",
              margin: "0.75rem auto 4rem",
            }}
          >
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-color)",
            borderRadius: "1.5rem",
            padding: "3rem",
            position: "relative",
            overflow: "hidden",
            width: "100%",
            margin: "0 auto",
            textAlign: "left",
          }}
        >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "2rem",
                letterSpacing: "-0.02em",
              }}
            >
              Send an Email directly.
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get("name");
                const email = formData.get("email");
                const message = formData.get("message");
                window.location.href = `mailto:${profile.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}\n\nFrom: ${name} (${email})`;
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  NAME
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  suppressHydrationWarning
                  placeholder="John Doe"
                  style={{
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--border-color)",
                    background: "transparent",
                    color: "var(--text-primary)",
                    fontSize: "0.95rem",
                    outline: "none",
                    width: "100%",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--text-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  EMAIL
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  suppressHydrationWarning
                  placeholder="johndoe@example.com"
                  style={{
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--border-color)",
                    background: "transparent",
                    color: "var(--text-primary)",
                    fontSize: "0.95rem",
                    outline: "none",
                    width: "100%",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--text-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  required
                  suppressHydrationWarning
                  rows="4"
                  placeholder="Your message here..."
                  style={{
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--border-color)",
                    background: "transparent",
                    color: "var(--text-primary)",
                    fontSize: "0.95rem",
                    outline: "none",
                    width: "100%",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--text-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
                />
              </div>

              <button
                type="submit"
                suppressHydrationWarning
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  background: "var(--text-primary)",
                  color: "var(--bg-primary)",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.3s ease, transform 0.2s ease",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "scale(0.98)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
      </div>
    </section>
  );
}
