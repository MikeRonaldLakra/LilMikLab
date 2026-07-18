"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const checklist = [
  { label: "ChatGPT", key: "gpt" },
  { label: "Claude", key: "claude" },
  { label: "Gemini", key: "gemini" },
  { label: "DeepSeek", key: "deepseek" },
  { label: "Nvidia", key: "nvidia" },
  { label: "NodeBeta", key: "judge" },
  { label: "Consensus", key: "consensus" },
  { label: "Response Ready", key: "ready" },
];

const COMMAND = "start NodeBeta";

export default function InteractiveTerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [typed, setTyped] = useState("");
  const [visibleChecks, setVisibleChecks] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) {
        clearInterval(typeInterval);
        let c = 0;
        const checkInterval = setInterval(() => {
          c++;
          setVisibleChecks(c);
          if (c >= checklist.length) clearInterval(checkInterval);
        }, 450);
      }
    }, 70);

    return () => clearInterval(typeInterval);
  }, [isInView]);

  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="module-band coord-label mb-4 inline-flex">
            Live Execution
          </span>
          <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Watch a <span className="text-gradient-NodeBeta">NodeBeta Run</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass overflow-hidden rounded-2xl"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-rose-500/70" />
            <span className="h-3 w-3 rounded-full bg-amber-400/70" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
            <span className="ml-3 font-mono text-xs text-white/30">NodeBeta — zsh</span>
          </div>

          <div className="min-h-[280px] p-6 font-mono text-sm leading-relaxed">
            <div className="flex text-white/80">
              <span className="mr-2 text-NodeBeta-bright">{">"}</span>
              <span>{typed}</span>
              <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-NodeBeta-bright" />
            </div>

            <div className="mt-4 flex flex-col gap-2">
              {checklist.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -8 }}
                  animate={
                    i < visibleChecks
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -8 }
                  }
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-emerald-400">✓</span>
                  <span className="text-white/70">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
