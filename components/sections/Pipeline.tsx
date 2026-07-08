"use client";

import { useLayoutEffect, useRef } from "react";

const steps = [
  {
    n: "01",
    name: "Fan-Out",
    color: "#B794FF",
    body: "Parallel drafting across Tier-1 neural nodes. Every model answers independently, with no visibility into the others.",
  },
  {
    n: "02",
    name: "Orchestrate",
    color: "#22D3EE",
    body: "Multi-vector dimensional cross-verification. Drafts are laid across the same axes so disagreement becomes visible.",
  },
  {
    n: "03",
    name: "Judge",
    color: "#F472B6",
    body: "Surgical consensus stitching via proprietary node. The strongest passages are merged into one coherent answer.",
  },
  {
    n: "04",
    name: "Verify",
    color: "#FBBF24",
    body: "Sandboxed execution and self-healing repair. Code is run, not just reviewed, before it reaches you.",
  },
  {
    n: "05",
    name: "Scale",
    color: "#60A5FA",
    body: "Optimized delivery to global endpoints, triaged by request complexity so simple queries stay fast.",
  },
];

export default function Pipeline() {
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
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute left-0 top-16 z-10 w-full px-6 text-center">
        <span className="module-band coord-label mb-4 inline-block">
          The Swarm Intelligence Pipeline
        </span>
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-5xl">
          Five stages. <span className="text-gradient-swarm">One synthesis.</span>
        </h2>
      </div>

      <div
        ref={trackRef}
        className="absolute left-0 top-0 flex h-full items-center gap-10 pl-[8vw] pr-[20vw] will-change-transform"
      >
        {steps.map((step) => (
          <div
            key={step.n}
            className="pipeline-panel glass flex h-[60vh] w-[78vw] flex-shrink-0 flex-col justify-between rounded-3xl p-10 sm:w-[46vw] lg:w-[30vw]"
            style={{ boxShadow: `0 0 90px -30px ${step.color}55` }}
          >
            <div>
              <span
                className="font-mono text-sm tracking-widest"
                style={{ color: step.color }}
              >
                Step {step.n}
              </span>
              <h3
                className="mt-6 font-display text-4xl font-medium tracking-tight sm:text-5xl"
                style={{ color: step.color }}
              >
                {step.name}
              </h3>
            </div>
            <p className="font-body text-lg leading-relaxed text-white/60">
              {step.body}
            </p>
            <div
              className="h-1 w-16 rounded-full"
              style={{ backgroundColor: step.color }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
