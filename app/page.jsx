"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "@/components/layout/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import RunningText from "@/components/sections/RunningText";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("skipLoading") === "true") {
        sessionStorage.removeItem("skipLoading");
        return false;
      }
      return !window.location.search.includes("skipLoading=true");
    }
    return true;
  });

  useEffect(() => {
    const isSkipInUrl = window.location.search.includes("skipLoading=true");
    
    if (isSkipInUrl) {
      setLoading(false);
      // Clean up the URL so refresh plays the animation
      const url = new URL(window.location.href);
      url.searchParams.delete("skipLoading");
      window.history.replaceState({}, document.title, url.pathname + url.search + url.hash);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <RunningText />
        <ExperienceSection />
        <TechStackSection />
        <ProjectsSection />
        <CertificationsSection limit={3} />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
