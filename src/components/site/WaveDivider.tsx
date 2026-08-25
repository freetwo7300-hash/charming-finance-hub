type WaveDividerProps = {
  /** "top" sits at the section's top edge, "bottom" at its bottom edge. */
  position?: "top" | "bottom";
  /** Tailwind text-* color class — the wave is painted with currentColor. */
  className?: string;
};

const PATH =
  "M0,60 C160,110 320,10 480,50 C640,90 800,110 960,70 C1120,30 1280,10 1440,55 L1440,140 L0,140 Z";

/**
 * Layered SVG wave that blends a section edge into the neighbouring surface.
 * Colors come from semantic tokens via currentColor so both themes stay correct.
 */
export function WaveDivider({ position = "bottom", className = "" }: WaveDividerProps) {
  const isTop = position === "top";

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-10 h-16 overflow-hidden sm:h-24 ${
        isTop ? "top-0 rotate-180" : "bottom-0"
      } ${className}`}
    >
      {/* Back swell: softer, drifts the other way */}
      <span className="wave-drift-slow absolute inset-y-0 left-0 flex w-[200%] opacity-40">
        <svg
          className="h-full w-1/2 shrink-0"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d={PATH} />
        </svg>
        <svg
          className="h-full w-1/2 shrink-0"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d={PATH} />
        </svg>
      </span>

      {/* Front swell: solid edge that meets the adjacent section */}
      <span className="wave-drift absolute inset-y-0 left-0 flex w-[200%] translate-y-3">
        <svg
          className="h-full w-1/2 shrink-0"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d={PATH} />
        </svg>
        <svg
          className="h-full w-1/2 shrink-0"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d={PATH} />
        </svg>
      </span>
    </span>
  );
}
