"use client";
import { motion } from "framer-motion";

const nodes = ["Claude", "ChatGpt", "Gemini", "DeepSeek", "NodeBeta"];

export default function Footer() {
  return (
    <footer className="relative border-t border-void-line px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-bold tracking-tight text-gradient-swarm sm:text-8xl"
        >
          Questions?
        </motion.h2>

        <p className="mt-6 max-w-md font-body text-lg text-white/60">
          Phase one deployment complete. Architecting the future of
          intelligence — one consensus pass at a time.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
          {nodes.map((node, i) => (
            <motion.div
              key={node}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="font-display text-lg font-medium"
            >
              {node} <span className="text-swarm-bright">.</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 font-mono text-xs uppercase tracking-widest text-white/30 sm:flex-row sm:items-center">
          <span>LilMik © {new Date().getFullYear()}</span>
          <span>Swarm AI Engine</span>
        </div>
      </div>
    </footer>
  );
}
