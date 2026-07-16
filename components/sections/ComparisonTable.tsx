"use client";

import { motion } from "framer-motion";

type Cell = { type: "icon"; value: "check" | "dash" | "x" } | { type: "text"; value: string };

const columns = ["Capability", "Standard LLM", "Agentic Wrapper", "LilMik NodeBeta"];

const rows: { label: string; cells: Cell[] }[] = [
  {
    label: "Consensus Verification",
    cells: [
      { type: "icon", value: "x" },
      { type: "icon", value: "dash" },
      { type: "icon", value: "check" },
    ],
  },
  {
    label: "Hallucination Mitigation",
    cells: [
      { type: "text", value: "Low" },
      { type: "text", value: "Moderate" },
      { type: "text", value: "Ultra-High" },
    ],
  },
  {
    label: "Reasoning Fidelity",
    cells: [
      { type: "text", value: "Single-Point" },
      { type: "text", value: "Sequential" },
      { type: "text", value: "Parallel Consensus" },
    ],
  },
  {
    label: "Latency (Consensus)",
    cells: [
      { type: "text", value: "N/A" },
      { type: "text", value: "Slow (10s+)" },
      { type: "text", value: "Sub-Second (Groq)" },
    ],
  },
];

function CellIcon({ value }: { value: "check" | "dash" | "x" }) {
  if (value === "check") return <span className="text-emerald-400">●</span>;
  if (value === "dash") return <span className="text-amber-400">●</span>;
  return <span className="text-rose-500">●</span>;
}

export default function ComparisonTable() {
  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Competitive Strategic <span className="text-gradient-nodebeta">Advantage</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass overflow-x-auto rounded-2xl"
        >
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                {columns.map((col, i) => (
                  <th
                    key={col}
                    className={`p-5 font-display text-sm font-medium tracking-tight ${
                      i === columns.length - 1 ? "text-nodebeta-bright" : "text-white/70"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-white/5 last:border-0">
                  <td className="p-5 font-body text-sm text-white/80">{row.label}</td>
                  {row.cells.map((cell, i) => (
                    <td key={i} className="p-5 font-body text-sm text-white/70">
                      {cell.type === "icon" ? <CellIcon value={cell.value} /> : cell.value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
