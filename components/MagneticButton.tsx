"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";


export default function MagneticButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: relX * 0.35, y: relY * 0.35 });
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
