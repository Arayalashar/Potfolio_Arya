"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const stages = [
      { target: 30, delay: 100 },
      { target: 60, delay: 200 },
      { target: 85, delay: 150 },
      { target: 100, delay: 150 },
    ];

    let current = 0;
    let elapsed = 0;

    const runStage = (index) => {
      if (index >= stages.length) return;
      const stage = stages[index];
      elapsed += stage.delay;

      setTimeout(() => {
        const start = current;
        const end = stage.target;
        const duration = 100;
        const step = 16;
        let t = 0;
        const interval = setInterval(() => {
          t += step;
          const eased = 1 - Math.pow(1 - t / duration, 3);
          const val = Math.round(start + (end - start) * eased);
          setProgress(val);
          if (t >= duration) {
            clearInterval(interval);
            current = end;
            if (end === 100) {
              setTimeout(() => setDone(true), 0);
            } else {
              runStage(index + 1);
            }
          }
        }, step);
      }, elapsed - stage.delay);
    };

    runStage(0);
  }, []);

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => onComplete?.(), 200);
      return () => clearTimeout(t);
    }
  }, [done, onComplete]);

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.18, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="loading-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 60%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <motion.div
              custom={0}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #aaaaaa 50%, #555555 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "0.08em",
                  lineHeight: 1.2,
                  marginBottom: "0.25rem",
                }}
              >
                ARYA
              </span>
            </motion.div>

            <motion.div
              custom={1}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(0.9rem, 2.5vw, 1.25rem)",
                  fontWeight: 400,
                  fontFamily: "'Inter', sans-serif",
                  color: "#707090",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  marginBottom: "3.5rem",
                }}
              >
                Portofolio Loading
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ width: "260px", margin: "0 auto" }}
            >
              <div
                style={{
                  height: "2px",
                  background: "rgba(255,255,255,0.07)",
                  borderRadius: "99px",
                  overflow: "hidden",
                  marginBottom: "1rem",
                }}
              >
                <motion.div
                  style={{
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #ffffff, #aaaaaa, #555555)",
                    borderRadius: "99px",
                    boxShadow: "0 0 8px rgba(255,255,255,0.3)",
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              <motion.span
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "linear-gradient(135deg, #ffffff, #aaaaaa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  fontVariantNumeric: "tabular-nums",
                  letterSpacing: "0.05em",
                }}
                key={progress}
              >
                {progress}%
              </motion.span>
            </motion.div>
          </div>

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: i % 2 === 0 ? "#ffffff" : "#aaaaaa",
                left: `${15 + i * 14}%`,
                top: `${20 + (i % 3) * 25}%`,
                opacity: 0.25,
              }}
              animate={{
                y: [0, -18, 0],
                opacity: [0.15, 0.4, 0.15],
              }}
              transition={{
                duration: 2 + i * 0.35,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
