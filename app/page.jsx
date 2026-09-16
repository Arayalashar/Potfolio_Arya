"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RunningText from "@/components/RunningText";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);


  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />

          <main>
            <HeroSection />
            <AboutSection />
            <RunningText />
            <ExperienceSection />
            <TechStackSection />
            <ProjectsSection />
            <ContactSection />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}
