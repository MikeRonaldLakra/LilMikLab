"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const cards = [
  {
    tag: "The Problem",
    title: "Monolithic Fragility",
    body: "Single frontier models suffer from systematic bias, brittle hallucination vectors, and uncalibrated confidence. Relying on one model is an architectural vulnerability in production environments.",
  },
  {
    tag: "The Solution",
    title: "Swarm Orchestration",
    body: "NexusForge forces algorithmic democracy. By orchestrating parallel neural pathways, we treat disagreement as a signal and consensus as a mandate for factual truth.",
  },
];

export default function ReliabilityCrisis() {
  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 font-display text-4xl font-medium tracking-tight sm:text-6xl"
        >
          The <span className="text-gradient-swarm">Reliability Crisis</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl"
            >
              <TiltCard className="glass glass-hover h-full rounded-2xl p-8">
                <span className="module-band coord-label mb-6 inline-block">
                  {card.tag}
                </span>
                <h3 className="font-display text-2xl font-medium text-gradient-swarm sm:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/60">
                  {card.body}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
