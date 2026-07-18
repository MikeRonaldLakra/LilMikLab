export default function Vignette() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[2]"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 40%, rgba(5,5,5,0.55) 85%, rgba(5,5,5,0.85) 100%)",
      }}
    />
  );
}
