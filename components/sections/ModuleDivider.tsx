"use client";

import { motion } from "framer-motion";

export default function ModuleDivider({
  moduleLabel,
  title,
  subtitle,
}: {
  moduleLabel: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-8 inline-block rounded-full bg-swarm-ghost px-6 py-2 font-mono text-xs uppercase tracking-[0.2em] text-swarm-bright"
      >
        {moduleLabel}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-4xl font-medium tracking-tight sm:text-6xl"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="my-8 h-px w-40 origin-center bg-white/20"
      />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-xl font-body text-lg text-white/55"
      >
        {subtitle}
      </motion.p>
    </section>
  );
}
