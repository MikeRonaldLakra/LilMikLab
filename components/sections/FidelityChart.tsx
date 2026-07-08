"use client";

import { motion } from "framer-motion";

const points = "20,280 120,190 220,110 340,70 460,55";

export default function FidelityChart() {
  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Fidelity <span className="text-gradient-swarm">Convergence</span>
        </h2>

        <div className="relative mt-16">
          <span className="absolute -top-6 left-0 font-body text-sm font-semibold text-swarm-bright">
            99.9% Fidelity
          </span>

          <svg viewBox="0 0 480 300" className="w-full">
            <defs>
              <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
            </defs>

            <motion.polygon
              points={`${points} 460,300 20,300`}
              fill="url(#fillGrad)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4 }}
            />

            <motion.polyline
              points={points}
              fill="none"
              stroke="#B794FF"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />

            <motion.circle
              cx={460}
              cy={55}
              r={6}
              fill="#B794FF"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 1.5 }}
            />
          </svg>

          <div className="mt-2 flex justify-between font-body text-xs uppercase tracking-widest text-white/40">
            <span>Single Draft</span>
            <span>Consensus Pass</span>
            <span>Final Synthesis</span>
          </div>
        </div>

        <p className="mt-12 text-center font-body text-white/50">
          Error rates decay exponentially as model diversity and consensus rounds
          increase.
        </p>
      </div>
    </section>
  );
}
