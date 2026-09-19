"use client";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Footer from "@/components/layout/Footer";
import CertificationsSection from "@/components/sections/CertificationsSection";

export default function CertificationsPage() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", paddingTop: "80px" }}>
        <main style={{ flex: 1, paddingBottom: "80px" }}>
          
          {/* Top Navigation */}
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%", marginBottom: "-2rem" }}>
            <Link 
              href="/#certifications"
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
                transition: "all 0.3s ease",
                position: "relative",
                zIndex: 10
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

          <CertificationsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
