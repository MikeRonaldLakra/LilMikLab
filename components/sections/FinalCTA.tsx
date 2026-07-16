"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const burstParticles = Array.from({ length: 24 }, (_, i) => {
  const angle = (i / 24) * Math.PI * 2;
  return {
    x: Math.cos(angle) * (120 + Math.random() * 80),
    y: Math.sin(angle) * (120 + Math.random() * 80),
    delay: Math.random() * 0.3,
  };
});

const colors = ["#B794FF", "#22D3EE", "#F472B6", "#FBBF24", "#60A5FA"];

export default function FinalCTA() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Aurora glow */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nodebeta-core/25 blur-[140px]"
        />
      </div>

      {/* Particle burst, triggered once when this section enters view */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-0">
        {burstParticles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: colors[i % colors.length] }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            whileInView={{ x: p.x, y: p.y, opacity: [0, 1, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-6 font-mono text-xs uppercase tracking-[0.3em] text-white/40"
      >
        Phase One Deployment Complete
      </motion.span>

      <div className="relative z-10 flex flex-col items-center gap-2">
        {["Architecting", "The Future", "of Intelligence"].map((line, i) => (
          <motion.h2
            key={line}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-bold tracking-tight text-gradient-nodebeta sm:text-6xl"
          >
            {line}
          </motion.h2>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 mt-12 flex flex-col items-center gap-5 sm:flex-row"
      >
        <MagneticButton
          href="#capabilities"
          className="inline-block rounded-full bg-gradient-to-r from-nodebeta-core to-aurora-cyan px-10 py-4 font-body text-sm font-medium text-white shadow-[0_0_50px_-10px_rgba(139,92,246,0.9)]"
        >
          Start Building
        </MagneticButton>
        <MagneticButton
          href="#"
          className="inline-block rounded-full border border-white/15 px-10 py-4 font-body text-sm font-medium text-white/80"
        >
          Launch LilMik
        </MagneticButton>
      </motion.div>
    </section>
  );
}
