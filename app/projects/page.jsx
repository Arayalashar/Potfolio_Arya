"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";

import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <main style={{ flex: 1, paddingTop: "60px", paddingBottom: "80px", maxWidth: "1200px", margin: "0 auto", width: "100%", paddingLeft: "5%", paddingRight: "5%" }}>
            
            {/* Top Navigation */}
            <div style={{ marginBottom: "3rem" }}>
              <Link 
                href="/#projects" 
                onClick={() => sessionStorage.setItem("skipLoading", "true")}
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "0.5rem", 
                  color: "var(--text-primary)", 
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  padding: "0.5rem 1.25rem",
                  border: "1px solid var(--border-color)",
                  borderRadius: "50px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--text-primary)";
                  e.currentTarget.style.color = "var(--bg-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
              >
                <FiArrowLeft /> Back to Home
              </Link>
            </div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
                All Projects
              </h1>
              <p style={{ marginTop: "1rem", color: "var(--text-secondary)", fontSize: "1rem", maxWidth: "600px", margin: "1rem auto 0", lineHeight: 1.6 }}>
                A complete showcase of my web development and UI/UX design journey, spanning various technologies and problem domains.
              </p>
            </motion.div>

            {/* Grid */}
            <div 
              className="projects-grid"
              style={{ 
                display: "grid", 
                gap: "2.5rem" 
              }}
            >
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </main>

          <Footer />
          
          <style>{`
            .projects-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 768px) {
              .projects-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
        </div>
    </>
  );
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderRadius: "1rem",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 15px 40px var(--card-hover-shadow, rgba(0,0,0,0.15))";
        setIsHovered(true);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        setIsHovered(false);
      }}
    >
      <div style={{ aspectRatio: "16/10", width: "100%", position: "relative", backgroundColor: "var(--bg-card)", borderBottom: "1px solid var(--border-color)" }}>
        <img 
          src={project.thumbnail} 
          alt={project.title}
          style={{ 
            width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center",
            filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
            transition: "filter 0.3s ease",
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #2a2a2a, #1a1a1a)';
          }}
        />
      </div>
      
      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
          <span style={{ fontSize: "0.7rem", letterSpacing: "1px", color: "var(--text-primary)", fontWeight: 700, textTransform: "uppercase" }}>
            {project.schema || project.tags?.[0] || 'Web'}
          </span>
        </div>

        <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
          {project.title}
        </h3>
        
        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem", flex: 1 }}>
          {project.shortDescription}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
          {project.tags?.map((tag, i) => (
            <span key={i} style={{ padding: "0.25rem 0.6rem", fontSize: "0.65rem", border: "1px solid var(--border-color)", borderRadius: "50px", color: "var(--text-muted)" }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", paddingTop: "1rem", borderTop: "1px solid var(--border-color)" }}>
          <a
            href={project.viewDetailsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              fontWeight: 700,
              borderRadius: "50px",
              fontSize: "0.8rem",
              textDecoration: "none",
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            View Live <FiExternalLink />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
