"use client";

/**
 * Continuous, non-stop horizontal ticker. Unlike scroll-triggered reveals,
 * this animates independently of scroll — a constant-motion band that reads
 * as "alive" the moment the page loads, a common Awwwards signature.
 */
export default function Marquee({
  items,
  speed = 28,
  className = "",
}: {
  items: string[];
  speed?: number;
  className?: string;
}) {
  const track = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="flex w-max animate-marquee gap-10 whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className="font-display text-2xl font-medium tracking-tight text-white/15 sm:text-4xl"
          >
            {item}
            <span className="ml-10 text-aurora-cyan/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
