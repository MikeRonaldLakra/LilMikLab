"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "Phase 0", label: "Blueprint" },
  { year: "Phase 1", label: "Backend Architecture" },
  { year: "Phase 2", label: "NodeBeta Orchestration" },
  { year: "Phase 3", label: "Production Deployment" },
];

const bio =
  "From architectural blueprint to production-grade deployment, Mike engineered LilMik to solve the inherent flaws of monolithic intelligence.";

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative border-t border-void-line px-6 py-32 sm:px-10 sm:py-44"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Stylized portrait frame — no external photo, built from light + type */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-void-raised"
        >
          {/* Background light */}
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-nodebeta-core/40 blur-[80px]"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-0 h-1/2 w-1/2 rounded-full bg-aurora-cyan/30 blur-[70px]"
          />

         
         {/* Replaced Monogram with Photo */}
<img 
  src="Screenshot 2026-07-17 055621.png" /* Replace with your actual image file path */
  alt="Mike Ronald Lakra" 
  className="relative z-10 h-full w-full object-cover" 
/>

          {/* Floating NodeBeta particles inside the frame */}
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-NodeBeta-bright"
              style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -10, 0] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="module-band coord-label inline-flex"
          >
            Founder &amp; Sole Architect
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-5xl font-medium tracking-tight sm:text-6xl"
          >
            Mike Ronald Lakra
          </motion.h2>

          {/* Animated signature draw-on */}
          <motion.svg
            viewBox="0 0 240 60"
            className="mt-4 h-12 w-56"
            aria-hidden="true"
          >
            <motion.path
              d="M10 40 C 30 10, 45 50, 60 25 S 90 45, 105 20 S 135 45, 150 22 C 165 8, 180 40, 200 30"
              fill="none"
              stroke="#B794FF"
              strokeWidth={2}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            />
          </motion.svg>

          {/* Word-by-word reveal bio */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
            className="mt-4 max-w-md font-body text-lg text-white/60"
          >
            {bio.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mr-[0.3em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Timeline */}
          <div className="mt-10 flex flex-col gap-4 border-l border-white/10 pl-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-NodeBeta-bright" />
                <span className="font-mono text-xs uppercase tracking-widest text-white/30">
                  {item.year}
                </span>
                <p className="font-body text-white/70">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
