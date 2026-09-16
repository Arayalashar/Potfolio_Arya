"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 80%"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container" style={{ maxWidth: "1000px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Experience
          </h2>
          <p
            style={{
              marginTop: "0.75rem",
              color: "var(--text-muted)",
              fontSize: "0.975rem",
              maxWidth: "480px",
              margin: "0.75rem auto 0",
            }}
          >
            Experiences that shaped my skills as a designer and developer
          </p>
        </div>

        {/* Timeline Container */}
        <div
          ref={containerRef}
          style={{
            position: "relative",
            margin: "0 auto",
          }}
        >
          {/* Static Background Line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "var(--border-color)",
              transform: "translateX(-50%)",
            }}
            className="timeline-line-bg"
          >
            {/* Animated Active Line */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: height,
                background: "var(--text-primary)", // Black/White depending on theme
                transformOrigin: "top",
              }}
            />
          </div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={exp.id}
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  marginBottom: "4rem",
                  position: "relative",
                  width: "100%",
                }}
                className="exp-row"
              >
                {/* Timeline Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "30%",
                    transform: "translate(-50%, -50%)",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    border: "3px solid var(--text-primary)",
                    background: "var(--bg-primary)",
                    zIndex: 10,
                  }}
                  className="timeline-dot"
                />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="exp-card-wrapper"
                  style={{
                    width: "calc(50% - 3rem)",
                  }}
                >
                  <div
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "1.5rem",
                      padding: "2.5rem 2rem",
                      textAlign: "center",
                      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* Period */}
                    <div
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: "1rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {exp.period}
                    </div>

                    {/* Job Title */}
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: "var(--text-primary)",
                        marginBottom: "0.5rem",
                        lineHeight: 1.2,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {exp.jobTitle}
                    </h3>

                    {/* Organization */}
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {exp.organization}
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        marginBottom: "2rem",
                        textAlign: "center",
                      }}
                    >
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "0.5rem",
                      }}
                    >
                      {exp.tags &&
                        exp.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: "0.65rem",
                              fontWeight: 700,
                              padding: "0.4rem 0.75rem",
                              background: "var(--bg-secondary)",
                              color: "var(--text-primary)",
                              borderRadius: "50px",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line-bg {
            left: 24px !important;
          }
          .exp-row {
            justify-content: flex-end !important;
          }
          .exp-card-wrapper {
            width: calc(100% - 60px) !important;
          }
          .timeline-dot {
            left: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
