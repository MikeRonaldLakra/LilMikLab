"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Architecture", href: "#judge-node" },
  { label: "Benchmarks", href: "#benchmarks" },
  { label: "Founder", href: "#founder" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-6 sm:px-10">
        <a href="#" data-cursor="Top" className="font-display text-sm font-bold uppercase tracking-widest">
          NexusForge
          <span className="text-swarm-bright">.</span>
        </a>

        <button
          data-cursor={open ? "Close" : "Menu"}
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-void px-6 sm:px-10"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  data-cursor="Go"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                  className="font-display text-5xl font-medium tracking-tight text-white/80 transition-colors hover:text-swarm-bright sm:text-7xl"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
