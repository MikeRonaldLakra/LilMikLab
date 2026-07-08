"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false); // To fix the fly-in bug

  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let hasMoved = false;

    function handleMove(e: PointerEvent) {
      if (!hasMoved) {
        // First move: instantly teleport cursor to mouse, no flying effect
        pos.current.x = e.clientX;
        pos.current.y = e.clientY;
        setIsVisible(true);
        hasMoved = true;
      }
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    }

    window.addEventListener("pointermove", handleMove);

    let rafId: number;
    function tick() {
      // Lerp math for smooth trailing
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      
      if (dotRef.current) {
        // Using translate3d for GPU acceleration
        dotRef.current.style.transform = `translate3d(${pos.current.x - 6}px, ${pos.current.y - 6}px, 0)`;
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
      ref={dotRef} 
      // Tailwind classes for the perfect premium look
      className={`fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
      aria-hidden="true" 
    />
  );
}
