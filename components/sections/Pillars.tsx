"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const pillars = [
  {
    icon: "cpu",
    color: "#22D3EE",
    title: "Hardware Optimized",
    body: "Proprietary Llama synthesis served over specialized Groq arrays for sub-second consensus latency.",
  },
  {
    icon: "check",
    color: "#A3E635",
    title: "Verified Paths",
    body: "Automated code sandbox testing with real-time logical repair and validation cycles.",
  },
  {
    icon: "shield",
    color: "#F472B6",
    title: "Hallucination Resistant",
    body: "Cross-model disagreement acts as a semantic firewall, preventing unverified data injection.",
  },
];

function PillarIcon({ name, color }: { name: string; color: string }) {
  const common = { width: 28, height: 28, stroke: color, strokeWidth: 1.6, fill: "none" };
  if (name === "cpu") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <rect x="6" y="6" width="12" height="12" rx="1.5" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </svg>
    );
  }
  if (name === "check") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M9 12l2 2 4-5" />
        <rect x="4" y="3" width="16" height="18" rx="2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" {...common}>
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
    </svg>
  );
}

export default function Pillars() {
  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Core Engine <span className="text-gradient-swarm">Pillars</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-2xl"
            >
              <TiltCard className="glass glass-hover flex h-full flex-col items-center rounded-2xl p-8 text-center">
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${pillar.color}22` }}
                >
                  <PillarIcon name={pillar.icon} color={pillar.color} />
                </div>
                <h3
                  className="font-display text-lg font-medium"
                  style={{ color: pillar.color }}
                >
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {pillar.body}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
