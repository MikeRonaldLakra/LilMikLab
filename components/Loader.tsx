"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 1400;
    let raf: number;

    function tick() {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 300);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-void"
        >
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
              NexusForge
            </span>
            <span className="mt-4 font-display text-6xl font-medium tabular-nums text-gradient-swarm sm:text-8xl">
              {progress}
            </span>
          </motion.div>

          <div className="absolute bottom-12 h-px w-40 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-swarm-core to-aurora-cyan"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
