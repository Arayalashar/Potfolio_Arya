"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/data/profile";
import { FiBookOpen } from "react-icons/fi";
import { GlareCard } from "@/components/ui/glare-card";

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "clamp(2rem, 5vh, 4rem)" }}
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
            About Me
          </h2>
        </motion.div>

        <div className="about-wrapper">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 7fr",
              gap: "4rem",
              alignItems: "stretch",
            }}
            className="about-main-grid"
          >
            <motion.div variants={fadeLeft} style={{ height: "100%" }}>
              <GlareCard className="shadow-[0_20px_40px_rgba(0,0,0,0.08)] h-full border-none rounded-[24px] bg-white overflow-hidden">
                <img
                  src="/group-837.png"
                  alt="Portfolio Card"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "top center",
                  }}
                />
              </GlareCard>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2.5rem",
                }}
                className="about-sub-grid"
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                      paddingBottom: "0.5rem",
                      borderBottom: "1px solid var(--border-color)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Who am I
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                    }}
                  >
                    {profile.whoAmI}
                  </p>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                      paddingBottom: "0.5rem",
                      borderBottom: "1px solid var(--border-color)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    My Approach
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                    }}
                  >
                    {profile.myApproach}
                  </p>
                </div>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border-color)", marginBottom: "1.5rem" }}>
                  <div style={{ width: "4px", height: "1.5rem", backgroundColor: "var(--text-primary)" }}></div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                      margin: 0,
                    }}
                  >
                    Education
                  </h3>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.5rem",
                  }}
                  className="about-edu-grid"
                >
                  {profile.educationHistory.map((edu, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.25rem",
                        padding: "1.5rem",
                        background: "var(--bg-card)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "0.75rem",
                        transition: "border-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-color)";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        {edu.logo && (
                          <img
                            src={edu.logo}
                            alt={`${edu.institution} Logo`}
                            style={{ width: "36px", height: "36px", objectFit: "contain" }}
                          />
                        )}
                        <h4
                          style={{
                            fontWeight: 700,
                            fontSize: "1.15rem",
                            color: "var(--text-primary)",
                            margin: 0,
                          }}
                        >
                          {edu.institution}
                        </h4>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <p
                          style={{
                            fontWeight: 600,
                            fontSize: "1rem",
                            color: "var(--text-primary)",
                            margin: 0,
                          }}
                        >
                          {edu.degree}
                        </p>
                        <p
                          style={{
                            fontSize: "0.85rem",
                            color: "var(--text-muted)",
                            margin: 0,
                          }}
                        >
                          {edu.period}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-main-grid {
            grid-template-columns: 1fr !important;
          }
          .about-main-grid > div:first-child > div {
            min-height: 400px;
          }
        }
        @media (max-width: 768px) {
          .about-sub-grid, .about-edu-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
