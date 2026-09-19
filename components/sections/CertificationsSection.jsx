"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowRight } from "react-icons/fi";
import { certifications } from "@/data/certifications";
import Link from "next/link";

export default function CertificationsSection({ limit }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [failedImages, setFailedImages] = useState({});
  const displayedCerts = limit ? certifications.slice(0, limit) : certifications;

  return (
    <section id="certifications" className="section-padding" style={{ position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", padding: "0 5%" }}>
        
        <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 5vh, 4rem)" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ 
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)", 
              fontWeight: 800, 
              color: "var(--text-primary)",
              letterSpacing: "-0.03em"
            }}
          >
            Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginTop: "0.5rem", color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: "480px", margin: "0.5rem auto 0" }}
          >
            Professional credentials and continuous learning achievements.
          </motion.p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "1.5rem",
          marginBottom: limit ? "3rem" : "0"
        }}>
          {displayedCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                borderRadius: "1rem",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border-color)";
              }}
            >
              <div style={{ 
                width: "100%", 
                aspectRatio: "4/3",
                background: "#f0f0f0",
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {failedImages[cert.id] ? (
                  <span style={{ color: "#666", fontSize: "0.8rem" }}>Image not found</span>
                ) : (
                  <img 
                    src={cert.thumbnail} 
                    alt={cert.title}
                    style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "0.5rem" }}
                    onError={() => setFailedImages(prev => ({ ...prev, [cert.id]: true }))}
                  />
                )}
              </div>

              <div style={{ 
                padding: "1.25rem 1rem", 
                display: "flex", 
                alignItems: "center", 
                gap: "1rem",
                background: "var(--bg-card)",
                borderTop: "1px solid var(--border-color)"
              }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  color: "var(--text-primary)",
                  flexShrink: 0,
                  overflow: "hidden"
                }}>
                  {cert.logo && (cert.logo.endsWith('.jpg') || cert.logo.endsWith('.png') || cert.logo.endsWith('.svg')) ? (
                    <img src={cert.logo} alt={cert.issuer} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    cert.logo || cert.issuer.charAt(0)
                  )}
                </div>

                <div style={{ flex: 1, overflow: "hidden" }}>
                  <h3 style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginBottom: "0.25rem"
                  }}>
                    {cert.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                    <span>{cert.issuer}</span>
                    <span style={{ color: "var(--border-color)", fontSize: "0.9rem" }}>|</span>
                    <span style={{ color: "#3b82f6", fontWeight: 600 }}>{cert.type || "Course"}</span>
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </div>

        {limit && certifications.length > limit && (
           <div style={{ textAlign: "center", marginTop: "2rem" }}>
             <Link
               href="/certifications"
               style={{
                 display: "inline-flex",
                 alignItems: "center",
                 gap: "0.5rem",
                 fontSize: "0.9rem",
                 fontWeight: 600,
                 color: "var(--text-secondary)",
                 textDecoration: "none",
                 padding: "0.75rem 1.5rem",
                 border: "1px solid var(--border-color)",
                 borderRadius: "50px",
                 transition: "all 0.3s ease",
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.color = "var(--text-primary)";
                 e.currentTarget.style.borderColor = "var(--text-primary)";
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.color = "var(--text-secondary)";
                 e.currentTarget.style.borderColor = "var(--border-color)";
               }}
             >
               View all achievements <FiArrowRight />
             </Link>
           </div>
        )}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem"
            }}
          >
            <button
              onClick={() => setSelectedCert(null)}
              style={{
                position: "absolute",
                top: "2rem",
                right: "2rem",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                cursor: "pointer",
                fontSize: "1.25rem",
                transition: "background 0.2s, transform 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <FiX />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "100%",
                maxHeight: "85vh",
                background: "#fff",
                borderRadius: "0.75rem",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <img 
                src={selectedCert.thumbnail} 
                alt={selectedCert.title}
                style={{ 
                  display: "block",
                  maxWidth: "100%",
                  maxHeight: "85vh",
                  objectFit: "contain"
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
