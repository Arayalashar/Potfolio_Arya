import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

export default function ProjectsSection() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 400, damping: 40 });

  const displayedProjects = projects.slice(0, 4);

  const x = useTransform(smoothProgress, (v) => `calc(-${v * 100}% + ${v * 100}vw)`);

  return (
    <section 
      id="projects" 
      ref={targetRef} 
      style={{ 
        height: "300vh", 
        position: "relative" 
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "80px", // Clear Navbar
          paddingBottom: "2rem",
          overflow: "hidden", 
          background: "var(--bg-primary)"
        }}
      >
        
        <div style={{ textAlign: "center", marginBottom: "2.5rem", flexShrink: 0, padding: "0 5%" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Selected Works
          </h2>
          <p
            style={{
              marginTop: "0.5rem",
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              maxWidth: "480px",
              margin: "0.5rem auto 0",
            }}
          >
            A curated selection of featured projects spanning UI/UX design and web development
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", position: "relative" }}>
           <motion.div 
             style={{ 
               x, 
               display: "flex",
               alignItems: "stretch", 
               gap: "2rem", // Consistent gap between cards
               padding: "0 5%", // Padding to start the first card inside the margin and end the last card with a margin
               width: "fit-content"
             }}
           >
              {displayedProjects.map((project, index) => (
                 <div key={project.id} style={{ width: "90vw", maxWidth: "960px", flexShrink: 0 }}>
                    <ProjectCard project={project} index={index} />
                 </div>
              ))}
              
              <div style={{ display: "flex", flexShrink: 0, paddingRight: "5%" }}>
                 <Link
                   href="/projects"
                   style={{
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                     justifyContent: "center",
                     gap: "1.25rem",
                     height: "100%",
                     minHeight: "400px",
                     maxHeight: "550px",
                     padding: "0 4rem",
                     background: "transparent",
                     border: "2px dashed var(--border-color)",
                     borderRadius: "1.5rem",
                     textDecoration: "none",
                     color: "var(--text-secondary)",
                     transition: "all 0.3s ease",
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.background = "var(--bg-card)";
                     e.currentTarget.style.border = "2px solid var(--border-color)";
                     e.currentTarget.style.color = "var(--text-primary)";
                     e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
                     e.currentTarget.style.transform = "translateY(-4px)";
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.background = "transparent";
                     e.currentTarget.style.border = "2px dashed var(--border-color)";
                     e.currentTarget.style.color = "var(--text-secondary)";
                     e.currentTarget.style.boxShadow = "none";
                     e.currentTarget.style.transform = "translateY(0)";
                   }}
                 >
                   <div style={{ 
                     width: "56px", 
                     height: "56px", 
                     borderRadius: "50%", 
                     background: "var(--bg-card)", 
                     border: "1px solid var(--border-color)",
                     color: "var(--text-primary)", 
                     display: "flex", 
                     alignItems: "center", 
                     justifyContent: "center",
                     fontSize: "1.5rem",
                     transition: "transform 0.3s ease",
                   }}
                   className="view-all-icon"
                   >
                     <FiArrowRight />
                   </div>
                   <span style={{ fontSize: "1.1rem", fontWeight: 500, whiteSpace: "nowrap" }}>
                     View All Projects
                   </span>
                 </Link>
              </div>
           </motion.div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-card-h {
            flex-direction: column !important;
            height: 100% !important;
            padding: 1.5rem !important;
            gap: 1.5rem !important;
          }
          .project-img-container {
            height: 200px !important;
            flex: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card-h"
      style={{
        width: "100%",
        height: "100%",
        minHeight: "400px",
        maxHeight: "550px",
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderRadius: "1.5rem",
        padding: "clamp(1.5rem, 4vh, 2rem)",
        display: "flex",
        gap: "clamp(1.5rem, 4vh, 2.5rem)",
        boxShadow: "0 -10px 40px rgba(0,0,0,0.08)",
        overflow: "hidden",
        transition: "box-shadow 0.3s ease",
        position: "relative"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 60px var(--card-hover-shadow, rgba(0,0,0,0.2))";
        setIsHovered(true);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 -10px 40px rgba(0,0,0,0.08)";
        setIsHovered(false);
      }}
    >
      <div style={{
        position: "absolute",
        top: "-5%",
        right: "5%",
        fontSize: "12rem",
        fontWeight: 900,
        color: "rgba(128,128,128,0.05)",
        zIndex: 0,
        pointerEvents: "none",
        lineHeight: 1
      }}>
        0{index + 1}
      </div>

      <div className="project-img-container" style={{ flex: "1.2", borderRadius: "1rem", overflow: "hidden", zIndex: 1, position: "relative", backgroundColor: "var(--bg-primary)" }}>
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          style={{ 
            width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0,
            filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
            transition: "filter 0.4s ease, transform 0.5s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)"
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #2a2a2a, #1a1a1a)';
          }}
        />
      </div>

      <div className="project-content-container" style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
           <span style={{ fontSize: "0.75rem", letterSpacing: "2px", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>Project Spec</span>
           <span style={{ fontSize: "0.75rem", letterSpacing: "2px", color: "var(--text-primary)", fontWeight: 700 }}>
             {project.tags?.[0] || 'React'}
           </span>
        </div>

        <h3 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", lineHeight: 1.1 }}>
          {project.title}
        </h3>

        <p style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
          {project.shortDescription}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "auto" }}>
          {project.tags?.map((tag, i) => (
            <span key={i} style={{ 
              padding: "0.4rem 0.8rem", 
              fontSize: "0.75rem", 
              fontWeight: 500,
              border: "1px solid var(--border-color)", 
              borderRadius: "50px",
              color: "var(--text-primary)",
              background: "var(--bg-primary)"
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-color)" }}>
          <a
            href={project.viewDetailsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              fontWeight: 700,
              borderRadius: "50px",
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View Live <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
}
