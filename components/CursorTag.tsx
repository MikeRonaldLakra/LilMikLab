"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Any element with data-cursor="LABEL" will expand the cursor into a pill
 * showing that label while hovered. This is the signature Active Theory
 * interaction pattern — the cursor itself becomes contextual UI rather than
 * a static dot.
 */
export default function CursorTag() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e: PointerEvent) {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      const el = (e.target as HTMLElement)?.closest("[data-cursor]");
      setLabel(el ? el.getAttribute("data-cursor") : null);
    }
    window.addEventListener("pointermove", handleMove);

    let rafId: number;
    function tick() {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (wrapRef.current) {
        wrapRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="cursor-tag-root pointer-events-none fixed left-0 top-0 z-[200] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <div
        className={`flex items-center justify-center rounded-full bg-white text-void transition-all duration-300 ease-out ${
          label ? "h-20 w-20 text-xs font-medium uppercase tracking-wide" : "h-3 w-3"
        }`}
        style={{ mixBlendMode: "difference", background: label ? "#fff" : "#B794FF" }}
      >
        {label}
      </div>
    </div>
  );
}
