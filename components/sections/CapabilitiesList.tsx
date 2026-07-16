"use client";

import { useLayoutEffect, useRef } from "react";

const capabilities = [
  {
    tag: "Module 01",
    category: "Ingestion",
    name: "Fan-Out",
    color: "#B794FF",
    body: "Parallel drafting across Tier-1 neural nodes. Every model answers independently, with no visibility into the others' output.",
  },
  {
    tag: "Module 02",
    category: "Cross-Verification",
    name: "Orchestrate",
    color: "#22D3EE",
    body: "Multi-vector dimensional cross-verification. Drafts are laid across the same axes so disagreement becomes visible instead of hidden.",
  },
  {
    tag: "Module 03",
    category: "Synthesis",
    name: "Judge",
    color: "#F472B6",
    body: "Surgical consensus stitching via a proprietary node. The strongest passages from each draft are merged into one coherent answer.",
  },
  {
    tag: "Module 04",
    category: "Validation",
    name: "Verify",
    color: "#FBBF24",
    body: "Sandboxed execution and self-healing repair. Generated code is run, not just reviewed, before it reaches you.",
  },
  {
    tag: "Module 05",
    category: "Delivery",
    name: "Scale",
    color: "#60A5FA",
    body: "Optimized delivery to global endpoints, triaged by request complexity so simple queries stay fast and complex ones stay thorough.",
  },
];

export default function CapabilitiesList() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const gsapCtx = gsap.context(() => {
        if (!sectionRef.current || !trackRef.current) return;
        const track = trackRef.current;

        const getScrollDistance = () =>
          track.scrollWidth - sectionRef.current!.clientWidth;

        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${getScrollDistance() + window.innerHeight * 0.5}`,
            scrub: 0.6,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      }, sectionRef);

      ctx = gsapCtx;
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute left-0 top-14 z-10 w-full px-6 text-center sm:px-10">
        <span className="module-band coord-label mb-4 inline-flex">
          Featured Capabilities
        </span>
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-5xl">
          The NodeBeta Intelligence <span className="text-gradient-nodebeta">Pipeline</span>
        </h2>
      </div>

      <div
        ref={trackRef}
        className="absolute left-0 top-0 flex h-full items-center gap-8 pl-[8vw] pr-[20vw] will-change-transform"
      >
        {capabilities.map((cap) => (
          <div
            key={cap.name}
            data-cursor="View"
            className="glass flex h-[58vh] w-[80vw] flex-shrink-0 flex-col justify-between rounded-3xl p-10 sm:w-[48vw] lg:w-[32vw]"
            style={{ boxShadow: `0 0 90px -30px ${cap.color}55` }}
          >
            <div>
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: cap.color }}
                >
                  {cap.tag}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-white/30">
                  {cap.category}
                </span>
              </div>
              <h3
                className="mt-6 font-display text-4xl font-medium tracking-tight sm:text-5xl"
                style={{ color: cap.color }}
              >
                {cap.name}
              </h3>
            </div>
            <p className="font-body text-lg leading-relaxed text-white/60">
              {cap.body}
            </p>
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: cap.color }} />
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-0 z-10 w-full px-6 text-center sm:px-10">
        <span className="font-mono text-xs uppercase tracking-widest text-white/30">
          Scroll to move through the pipeline →
        </span>
      </div>
    </section>
  );
}
