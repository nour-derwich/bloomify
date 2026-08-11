interface CornerFlourishProps {
  /** Which corner of the frame this instance sits in — rotates the same path to fit. */
  corner: "tl" | "tr" | "br" | "bl";
  className?: string;
}

const ROTATION: Record<CornerFlourishProps["corner"], number> = {
  tl: 0,
  tr: 90,
  br: 180,
  bl: 270,
};

/**
 * A small gold flourish tucked into one corner of the OrnateFrame — the detail that
 * reads as "ornate gilt frame" rather than a plain rectangle. Purely decorative.
 */
export function CornerFlourish({ corner, className = "" }: CornerFlourishProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className={className}
      style={{ transform: `rotate(${ROTATION[corner]}deg)` }}
    >
      <path
        d="M4 44 C4 20 20 4 44 4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M44 4 C36 4 30 8 28 16"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="27" cy="18" r="2.2" fill="currentColor" />
    </svg>
  );
}
