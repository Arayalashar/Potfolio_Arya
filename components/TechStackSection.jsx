"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techstack } from "@/data/techstack";
import {
  SiFigma,
  SiHtml5, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiGit, SiGithub, SiVercel,
} from "react-icons/si";
import { FaAdobe, FaPaintBrush, FaCode } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const iconMap = {
  SiFigma,
  SiAdobexd: FaAdobe,
  SiAdobeillustrator: FaPaintBrush,
  SiHtml5,
  SiCss3: FaCode,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiGithub,
  SiVisualstudiocode: VscCode,
  SiVercel,
};

const categories = ["Design", "Frontend", "Tools"];
const categoryLabels = {
  Design: "🎨 Design Tools",
  Frontend: "💻 Frontend",
  Tools: "🔧 Dev Tools",
};

export default function TechStackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="techstack"
      className="section-padding"
      ref={ref}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="tech-grid"
        >
          {/* Left — Title & Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
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
              My Techstack
            </span>

            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Tools I use to bring{" "}
              <span className="instagram-text">ideas to life</span>
            </h2>

            <p
              style={{
                fontSize: "0.975rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              From wireframing in Figma to shipping production-ready code with React and Next.js — I work across the full design-to-development pipeline with a curated set of modern tools.
            </p>

            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}
            >
              My tech stack evolves constantly as I adopt the latest technologies, but always with a focus on performance, accessibility, and exceptional user experience.
            </p>

            {/* Category legend */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "2rem",
              }}
            >
              {categories.map((cat) => (
                <span
                  key={cat}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    padding: "0.375rem 0.875rem",
                    borderRadius: "50px",
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border-color)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                  }}
                >
                  {categoryLabels[cat]}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Tech Cards by Category */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            {categories.map((cat, catIndex) => {
              const items = techstack.filter((t) => t.category === cat);
              return (
                <div key={cat} style={{ marginBottom: catIndex < categories.length - 1 ? "1.75rem" : 0 }}>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "0.875rem",
                    }}
                  >
                    {categoryLabels[cat]}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.625rem",
                    }}
                  >
                    {items.map((tech, i) => {
                      const IconComp = iconMap[tech.icon];
                      return (
                        <motion.div
                          key={tech.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={
                            inView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.8 }
                          }
                          transition={{
                            duration: 0.4,
                            delay: 0.3 + catIndex * 0.1 + i * 0.04,
                            ease: "backOut",
                          }}
                          whileHover={{
                            scale: 1.08,
                            y: -4,
                            boxShadow: `0 8px 24px ${tech.color}33`,
                          }}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.5rem 0.875rem",
                            borderRadius: "50px",
                            background: "var(--bg-primary)",
                            border: "1px solid var(--border-color)",
                            cursor: "default",
                            transition: "border-color 0.25s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = tech.color + "66";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--border-color)";
                          }}
                        >
                          {IconComp && (
                            <IconComp
                              style={{
                                fontSize: "1rem",
                                color: tech.color,
                                flexShrink: 0,
                              }}
                            />
                          )}
                          <span
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: 500,
                              color: "var(--text-secondary)",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {tech.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tech-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
