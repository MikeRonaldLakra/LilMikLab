"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NodeKey = "claude" | "gpt" | "gemini" | "judge" | "synthesis";

const nodes: Record<
  NodeKey,
  { label: string; color: string; description: string }
> = {
  claude: {
    label: "Claude",
    color: "#F472B6",
    description:
      "Linguistic Context — deep reasoning and nuanced language understanding.",
  },
  gpt: {
    label: "GPT-4o",
    color: "#22D3EE",
    description:
      "Reasoning Core — broad general knowledge and structured logical inference.",
  },
  gemini: {
    label: "Gemini",
    color: "#FBBF24",
    description:
      "Semantic Breadth — long-context retrieval and multimodal grounding.",
  },
  judge: {
    label: "Judge",
    color: "#B794FF",
    description:
      "Decentralized reasoning, stochastic agreement analysis, dynamic Groq-routed inference, and adaptive complexity triage — all in one node.",
  },
  synthesis: {
    label: "Synthesis",
    color: "#A3E635",
    description:
      "The final, single answer — surgically stitched from the strongest passages of all three drafts.",
  },
};

const positions: Record<NodeKey, { x: number; y: number }> = {
  claude: { x: 60, y: 50 },
  gpt: { x: 240, y: 50 },
  gemini: { x: 150, y: 50 },
  judge: { x: 150, y: 160 },
  synthesis: { x: 150, y: 250 },
};

export default function JudgeNode() {
  const [selected, setSelected] = useState<NodeKey>("judge");

  const connectorsToJudge: NodeKey[] = ["claude", "gpt", "gemini"];

  return (
    <section id="judge-node" className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="module-band coord-label mb-6 inline-flex">
            Interactive Architecture
          </span>
          <h2 className="mb-6 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            The <span className="text-gradient-NodeBeta">Judge Node</span>
          </h2>
          <p className="mb-8 max-w-md font-body text-white/50">
            Click any node to see what it contributes to the final answer.
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="glass rounded-2xl border-l-2 p-6"
              style={{ borderLeftColor: nodes[selected].color }}
            >
              <span
                className="font-display text-lg font-medium"
                style={{ color: nodes[selected].color }}
              >
                {nodes[selected].label}
              </span>
              <p className="mt-2 font-body text-white/60">
                {nodes[selected].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="glass relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl">
          <svg viewBox="0 0 300 300" className="h-[85%] w-[85%]" aria-hidden="true">
            <defs>
              {(Object.keys(nodes) as NodeKey[]).map((key) => (
                <filter key={key} id={`glow-${key}`}>
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              ))}
            </defs>

            {/* Animated data-flow connectors: worker nodes -> Judge */}
            {connectorsToJudge.map((key) => (
              <line
                key={key}
                x1={positions[key].x}
                y1={positions[key].y}
                x2={positions.judge.x}
                y2={positions.judge.y}
                stroke={nodes[key].color}
                strokeOpacity={0.4}
                strokeWidth={1.5}
                strokeDasharray="6 6"
                className="animate-flow"
              />
            ))}

            {/* Judge -> Synthesis */}
            <line
              x1={positions.judge.x}
              y1={positions.judge.y}
              x2={positions.synthesis.x}
              y2={positions.synthesis.y}
              stroke={nodes.judge.color}
              strokeOpacity={0.5}
              strokeWidth={2}
              strokeDasharray="6 6"
              className="animate-flow"
            />

            {(Object.keys(nodes) as NodeKey[]).map((key) => {
              const isJudge = key === "judge";
              const isSynthesis = key === "synthesis";
              const r = isJudge ? 20 : isSynthesis ? 16 : 13;
              const isSelected = selected === key;
              return (
                <g
                  key={key}
                  onClick={() => setSelected(key)}
                  data-cursor="Click"
                  className="cursor-pointer"
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    cx={positions[key].x}
                    cy={positions[key].y}
                    r={r + (isSelected ? 4 : 0)}
                    fill={isJudge || isSynthesis ? nodes[key].color : "#161619"}
                    stroke={nodes[key].color}
                    strokeWidth={isSelected ? 2.5 : 1.5}
                    filter={`url(#glow-${key})`}
                    className="transition-all duration-300"
                  />
                  <text
                    x={positions[key].x}
                    y={positions[key].y + r + 16}
                    textAnchor="middle"
                    fill={isSelected ? nodes[key].color : "rgba(255,255,255,0.5)"}
                    fontSize="9"
                    fontFamily="var(--font-mono)"
                    className="uppercase tracking-widest"
                  >
                    {nodes[key].label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
