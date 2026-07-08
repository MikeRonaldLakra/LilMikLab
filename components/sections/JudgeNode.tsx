"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Decentralized Reasoning",
    body: "No single model controls the final output vector.",
  },
  {
    title: "Stochastic Analysis",
    body: "Mathematical weighing of semantic agreement clusters.",
  },
  {
    title: "Dynamic Routing",
    body: "Low-latency inference via Groq-optimized hardware arrays.",
  },
  {
    title: "Adaptive Triage",
    body: "Complexity analysis directs queries to specific neural clusters.",
  },
];

export default function JudgeNode() {
  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="module-band coord-label mb-6 inline-block">
            Architecture
          </span>
          <h2 className="mb-10 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            The <span className="text-gradient-swarm">Judge Node</span>
          </h2>

          <ul className="flex flex-col gap-6">
            {points.map((point, i) => (
              <motion.li
                key={point.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-l-2 border-swarm-core/50 pl-5"
              >
                <span className="font-body text-base font-semibold text-white">
                  {point.title}:
                </span>{" "}
                <span className="font-body text-base text-white/60">
                  {point.body}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="glass relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl"
        >
          <svg viewBox="0 0 300 300" className="h-3/4 w-3/4" aria-hidden="true">
            {/* Three worker nodes feeding into one judge node */}
            {[
              [60, 60],
              [240, 60],
              [150, 60],
            ].map(([x, y], i) => (
              <g key={i}>
                <line
                  x1={x}
                  y1={y}
                  x2={150}
                  y2={220}
                  stroke="#8B5CF6"
                  strokeOpacity={0.35}
                  strokeWidth={1.5}
                />
                <circle cx={x} cy={y} r={10} fill="#3F2E6B" stroke="#B794FF" strokeWidth={1.5} />
              </g>
            ))}
            <circle
              cx={150}
              cy={220}
              r={18}
              fill="#8B5CF6"
              className="animate-pulse"
            />
            <circle cx={150} cy={220} r={30} fill="none" stroke="#B794FF" strokeOpacity={0.4} />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
