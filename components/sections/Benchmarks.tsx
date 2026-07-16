"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const rows = [
  { label: "LilMik NodeBeta", value: 98, display: "98% Consensus Accuracy", hero: true },
  { label: "GPT-4o (Monolithic)", value: 82, display: "82% Accuracy", hero: false },
  { label: "Claude 3.5 (Monolithic)", value: 85, display: "85% Accuracy", hero: false },
];

export default function Benchmarks() {
  return (
    <section id="benchmarks" className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 font-display text-4xl font-medium tracking-tight sm:text-6xl"
        >
          Factual Integrity <span className="text-gradient-nodebeta">Benchmarks</span>
        </motion.h2>

        <div className="mb-16 flex items-end gap-4">
          <AnimatedCounter
            value={98}
            suffix="%"
            className="font-display text-7xl font-bold text-gradient-nodebeta sm:text-9xl"
          />
          <span className="mb-3 font-body text-lg text-white/50">
            consensus accuracy vs single-model baselines
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {rows.map((row, i) => (
            <div key={row.label} className="flex flex-col gap-2">
              <span className="font-body text-sm text-white/70">{row.label}</span>
              <div className="h-12 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${row.value}%` }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`flex h-full items-center justify-end rounded-full px-5 ${
                    row.hero
                      ? "bg-gradient-to-r from-nodebeta-dim via-nodebeta-core to-aurora-cyan"
                      : "bg-slate-700/70"
                  }`}
                >
                  <span className="whitespace-nowrap font-body text-sm font-medium text-white">
                    {row.display}
                  </span>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-center font-body text-sm italic text-white/40"
        >
          Benchmarks based on modified DRACO (Deep Research Accuracy, Completeness,
          and Objectivity) metrics. NodeBeta architecture outperforms single-model
          baselines by ~13.8%.
        </motion.p>
      </div>
    </section>
  );
}
