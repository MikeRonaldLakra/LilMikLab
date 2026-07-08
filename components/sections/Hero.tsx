"use client";

import { motion } from "framer-motion";

// Dogstudio's signature move: headline letters spaced out and revealed one
// by one, rather than a simple line fade — reads as kinetic typography.
const HEADLINE = "Architecting the Future of Intelligence";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.018, delayChildren: 0.3 } },
};

const char = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 mb-8 font-mono text-xs uppercase tracking-[0.35em] text-white/40"
      >
        Proprietary Architecture Briefing
      </motion.span>

      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl font-display text-3xl font-medium leading-[1.3] tracking-[0.05em] sm:text-5xl md:text-6xl"
        aria-label={HEADLINE}
      >
        {HEADLINE.split("").map((c, i) => (
          <motion.span
            key={i}
            variants={char}
            className={`inline-block ${c === " " ? "w-3 sm:w-5" : "text-gradient-swarm"}`}
          >
            {c === " " ? "\u00A0" : c}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-10 max-w-xl text-balance font-body text-lg text-white/60"
      >
        NexusForge — Swarm AI Engine
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <a
          href="#capabilities"
          data-cursor="View"
          className="rounded-full bg-gradient-to-r from-swarm-core to-aurora-cyan px-8 py-3 font-body text-sm font-medium text-void transition-transform hover:scale-[1.03]"
        >
          See how it thinks
        </a>
        <a
          href="#founder"
          data-cursor="Go"
          className="rounded-full border border-white/15 px-8 py-3 font-body text-sm font-medium text-white/80 transition-colors hover:border-swarm-core/60 hover:text-white"
        >
          Meet the architect
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
        className="absolute bottom-10 left-0 z-10 flex w-full items-center justify-between px-6 sm:px-10"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">
          Scroll
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">
          N = 3 + 1 Swarm Nodes
        </span>
      </motion.div>
    </section>
  );
}
