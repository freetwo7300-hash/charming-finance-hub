type WaveDividerProps = {
  /** "top" sits at the section's top edge, "bottom" at its bottom edge. */
  position?: "top" | "bottom";
  /** Tailwind text-* color class — the wave is painted with currentColor. */
  className?: string;
};

/* Gentle rolling sine: low amplitude (~±18 around y=55), approximated with
   four cubic Bezier quarter-waves whose control points are staggered so the
   crest/trough is rounded, never flat. Floor sits at y=110 so the band of solid
   fill stays slim and the wave line reads as the feature. */
const VIEW_H = 110;
const PATH =
  "M0,55 " +
  "C129.6,55 230.4,37 360,37 " +
  "C489.6,37 590.4,55 720,55 " +
  "C849.6,55 950.4,73 1080,73 " +
  "C1209.6,73 1310.4,55 1440,55 " +
  "L1440,110 L0,110 Z";

/**
 * Layered SVG wave that blends a section edge into the neighbouring surface.
 * Colors come from semantic tokens via currentColor so both themes stay correct.
 */
export function WaveDivider({ position = "bottom", className = "" }: WaveDividerProps) {
  const isTop = position === "top";

  return (
    <span
      aria-hidden="true"
      className={`wave-mask pointer-events-none absolute inset-x-0 z-10 h-24 overflow-hidden sm:h-32 ${
        isTop ? "top-0 rotate-180" : "bottom-0"
      } ${className}`}
    >
      {/* Back swell: softer, drifts the other way, feathered + blurred so it
          blends into the front layer without a clipped hard edge. */}
      <span className="wave-drift-slow absolute inset-y-0 left-0 flex w-[200%] opacity-30 blur-[1.5px]">
        <svg
          className="h-full w-1/2 shrink-0"
          viewBox={`0 0 1440 ${VIEW_H}`}
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d={PATH} />
        </svg>
        <svg
          className="h-full w-1/2 shrink-0"
          viewBox={`0 0 1440 ${VIEW_H}`}
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d={PATH} />
        </svg>
      </span>

      {/* Front swell: solid edge that meets the adjacent section.
          No hard translate offset — the back layer feathers behind it. */}
      <span className="wave-drift absolute inset-y-0 left-0 flex w-[200%]">
        <svg
          className="h-full w-1/2 shrink-0"
          viewBox={`0 0 1440 ${VIEW_H}`}
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d={PATH} />
        </svg>
        <svg
          className="h-full w-1/2 shrink-0"
          viewBox={`0 0 1440 ${VIEW_H}`}
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d={PATH} />
        </svg>
      </span>
    </span>
  );
}
