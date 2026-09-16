"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import { FiArrowRight, FiExternalLink, FiGrid } from "react-icons/fi";
import { profile } from "@/data/profile";

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
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
            Selected Work
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
            Projects I&apos;m{" "}
            <span className="instagram-text">proud of</span>
          </h2>
          <p
            style={{
              marginTop: "0.75rem",
              color: "var(--text-muted)",
              fontSize: "0.975rem",
              maxWidth: "460px",
              margin: "0.75rem auto 0",
            }}
          >
            A curated selection of 4 featured projects spanning UI/UX design and web development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.75rem",
            marginBottom: "3rem",
          }}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} inView={inView} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            id="view-more-projects-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              padding: "0.875rem 2rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "50px",
              fontSize: "0.925rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#ffffff";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <FiGrid />
            View More Projects
            <FiArrowRight />
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, index, inView }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: 0.15 + index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -6 }}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderRadius: "1.5rem",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
        e.currentTarget.style.boxShadow = "0 20px 60px var(--card-hover-shadow)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-color)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Project Thumbnail */}
      <div
        style={{
          aspectRatio: "16/9",
          background: `linear-gradient(
            135deg,
            rgba(255,255,255,0.1) 0%,
            rgba(255,255,255,0.05) 100%
          )`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Pattern background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Project number overlay */}
        <span
          className="instagram-text"
          style={{
            fontSize: "5rem",
            fontWeight: 900,
            opacity: 0.08,
            fontFamily: "'Space Grotesk', sans-serif",
            position: "absolute",
            userSelect: "none",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Project icon */}
        <div
          style={{
            position: "relative",
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #ffffff, #aaaaaa)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(255,255,255,0.15)",
            fontSize: "1.75rem",
          }}
        >
          {["🎯", "📚", "🌱", "🤝"][index]}
        </div>

        {/* Thumbnail label */}
        <span
          style={{
            position: "absolute",
            bottom: "0.75rem",
            right: "0.75rem",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            fontStyle: "italic",
          }}
        >
          {project.thumbnail.replace("/images/", "")}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem" }}>
        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "0.375rem",
            flexWrap: "wrap",
            marginBottom: "0.875rem",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                display: "inline-block",
                padding: "0.2rem 0.625rem",
                borderRadius: "50px",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
            marginBottom: "0.625rem",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: "1.25rem",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.shortDescription}
        </p>

        {/* View Details */}
        <a
          href={project.viewDetailsUrl}
          target="_blank"
          rel="noopener noreferrer"
          id={`view-details-btn-${project.id}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#ffffff",
            textDecoration: "none",
            transition: "gap 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.gap = "0.7rem";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.gap = "0.4rem";
          }}
        >
          View Details
          <FiExternalLink />
        </a>
      </div>
    </motion.div>
  );
}
