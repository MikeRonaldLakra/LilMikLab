"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/Marquee";
import MagneticButton from "@/components/MagneticButton";

const headline = ["Architecting the", "Future of", "Intelligence."];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

// Letter-by-letter drop-in — heavier and busier than a simple line-fade.
const letter = {
  hidden: { y: "120%", opacity: 0, rotate: 6 },
  visible: {
    y: "0%",
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      <motion.span
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="module-band coord-label relative z-10 mb-6"
      >
        Proprietary Architecture Briefing
      </motion.span>

      <h1 className="relative z-10 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
        {headline.map((line, li) => (
          <motion.span
            key={line}
            variants={container}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 0.15 + li * 0.25 }}
            className="block overflow-hidden py-1"
          >
            {line.split("").map((char, ci) => (
              <motion.span
                key={ci}
                variants={letter}
                className="inline-block text-gradient-swarm"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-8 max-w-xl text-balance font-body text-lg text-white/60"
      >
        NexusForge — Swarm AI Engine
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <MagneticButton
          href="#features"
          className="inline-block rounded-full bg-gradient-to-r from-swarm-core to-aurora-cyan px-8 py-3 font-body text-sm font-medium text-void shadow-[0_0_40px_-8px_rgba(139,92,246,0.8)]"
        >
          See how it thinks
        </MagneticButton>
        <MagneticButton
          href="#founder"
          className="inline-block rounded-full border border-white/15 px-8 py-3 font-body text-sm font-medium text-white/80"
        >
          Meet the architect
        </MagneticButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="relative z-10 mt-16 flex flex-col items-center gap-2"
      >
        <span className="coord-label">Scroll to explore</span>
        <div className="h-10 w-px bg-gradient-to-b from-swarm-core to-transparent" />
      </motion.div>

      <div className="absolute bottom-0 left-0 z-10 w-full -rotate-2 border-y border-white/5 bg-void/40 py-4 backdrop-blur-sm">
        <Marquee items={["Fan-Out", "Orchestrate", "Judge", "Verify", "Scale"]} speed={22} />
      </div>
    </section>
  );
}
