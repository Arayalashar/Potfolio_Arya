"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/data/experiences";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck } from "react-icons/fi";

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "0.375rem 1rem",
              borderRadius: "50px",
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Experience
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            My professional{" "}
            <span className="instagram-text">journey</span>
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
        </motion.div>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            maxWidth: "860px",
            margin: "0 auto",
          }}
        >
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(180deg, #ffffff, #aaaaaa, #555555, transparent)",
              transformOrigin: "top",
              transform: "translateX(-50%)",
            }}
            className="timeline-line"
          />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: -60 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -60 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  marginBottom: "3rem",
                  position: "relative",
                }}
                className="exp-item"
              >
                {/* Card */}
                <div
                  className="card"
                  style={{
                    width: "calc(50% - 2.5rem)",
                    padding: "1.75rem",
                    borderRadius: "1.25rem",
                    position: "relative",
                    background: "var(--bg-card)",
                  }}
                >
                  {/* Number badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1.5rem",
                      [isLeft ? "right" : "left"]: "-3.5rem",
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #ffffff, #aaaaaa)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "black",
                      fontWeight: 800,
                      fontSize: "0.875rem",
                      boxShadow: "0 4px 15px rgba(255,255,255,0.15)",
                      zIndex: 2,
                    }}
                    className="exp-dot"
                  >
                    {index + 1}
                  </div>

                  {/* Documentation image placeholder */}
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16/7",
                      borderRadius: "0.75rem",
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                      border: "1px solid var(--border-color)",
                      marginBottom: "1.25rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        fontStyle: "italic",
                      }}
                    >
                      📸 {exp.documentationImage.replace("/images/", "")}
                    </span>
                  </div>

                  {/* Role & Org */}
                  <div style={{ marginBottom: "0.875rem" }}>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {exp.jobTitle}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                          fontWeight: 500,
                        }}
                      >
                        <FiBriefcase style={{ fontSize: "0.8rem" }} />
                        {exp.organization}
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "0.2rem 0.625rem",
                          background:
                            "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                          border: "1px solid rgba(255,255,255,0.2)",
                          borderRadius: "50px",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "#ffffff",
                        }}
                      >
                        {exp.position}
                      </span>
                    </div>
                  </div>

                  {/* Period */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      marginBottom: "1rem",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <FiCalendar style={{ fontSize: "0.8rem" }} />
                    {exp.period}
                  </div>

                  {/* Description */}
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: "0.625rem",
                          alignItems: "flex-start",
                          marginBottom: i < exp.description.length - 1 ? "0.625rem" : 0,
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        <FiCheck
                          style={{
                            flexShrink: 0,
                            marginTop: "3px",
                            color: "#ffffff",
                            fontSize: "0.85rem",
                          }}
                        />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { left: 1rem !important; }
          .exp-item { justify-content: flex-end !important; }
          .exp-item > div.card { width: calc(100% - 3.5rem) !important; }
          .exp-dot { right: auto !important; left: -3.5rem !important; }
        }
      `}</style>
    </section>
  );
}
