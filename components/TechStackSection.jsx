"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { techstack } from "@/data/techstack";
import {
  SiFigma, SiHtml5, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiGit, SiGithub, SiVercel, SiFlutter, SiCanva, 
  SiPhp, SiMysql, SiSupabase
} from "react-icons/si";
import { FaAdobe, FaPaintBrush, FaCode, FaCss3Alt } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { TbBrandAdobeIllustrator } from "react-icons/tb";

const CustomAiLogo = ({ className, style }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="100" rx="22" fill="currentColor" />
    <text 
      x="50" 
      y="54" 
      fontFamily="Arial, Helvetica, sans-serif" 
      fontWeight="bold" 
      fontSize="52" 
      fill="#ffffff" 
      textAnchor="middle" 
      dominantBaseline="middle"
    >
      Ai
    </text>
  </svg>
);

const iconMap = {
  SiFigma,
  SiAdobexd: FaAdobe,
  SiAdobeillustrator: CustomAiLogo,
  SiAdobephotoshop: FaAdobe, // Fallback if ever used again
  SiHtml5,
  SiCss3: FaCss3Alt,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiGithub,
  SiVisualstudiocode: VscCode,
  SiVercel,
  SiFlutter,
  SiCanva,
  SiPhp,
  SiMysql,
  SiSupabase,
};

export default function TechStackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="techstack"
      className="section-padding"
      ref={ref}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
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
            Tech Stack & Tools
          </h2>
          <p
            style={{
              marginTop: "0.75rem",
              color: "var(--text-muted)",
              fontSize: "0.975rem",
              maxWidth: "600px",
              margin: "0.75rem auto 0",
              lineHeight: 1.6,
            }}
          >
            The complete ecosystem of tools and technologies I rely on to map logical user flows, craft intuitive interfaces, and build functional, responsive applications.
          </p>
        </motion.div>

        {/* 5x2 Grid for Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[repeat(5,160px)] justify-between gap-6 md:gap-8 w-full max-w-[1200px] mx-auto"
        >
          {techstack.map((tech) => {
            const IconComp = iconMap[tech.icon];
            return (
              <div key={tech.id} className="w-full flex justify-center">
                <TechCard tech={tech} IconComp={IconComp} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function TechCard({ tech, IconComp }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex flex-col items-center justify-center p-4 md:p-5 aspect-square rounded-[24px] transition-all duration-300 gap-2 md:gap-3 w-full max-w-[160px]"
      style={{
        background: "var(--bg-primary)",
        boxShadow: isHovered 
          ? `0 10px 30px -10px ${tech.color}60` 
          : "0 2px 10px rgba(0, 0, 0, 0.02)",
        border: "1px solid rgba(0,0,0,0.03)", 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center h-10 w-10 text-[32px] md:text-[36px]">
        {IconComp && (
          <IconComp
            className="transition-all duration-300"
            style={{
              color: isHovered ? tech.color : "var(--text-primary)", 
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />
        )}
      </div>
      <span
        className="text-[0.75rem] md:text-sm font-semibold text-center transition-colors duration-300"
        style={{ color: "var(--text-primary)", lineHeight: 1.2 }}
      >
        {tech.name}
      </span>
    </motion.div>
  );
}
