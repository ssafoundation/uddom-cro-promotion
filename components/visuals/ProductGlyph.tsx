type Variant = "tote" | "cap" | "bottle" | "gift";

/**
 * Minimal line-art product marks for the storefront mock-ups.
 *
 * These are drawn in-house (no third-party asset, so no licence question) and
 * they inherit `currentColor`, so the surrounding element decides whether a mark
 * is brand green or the amber gift tone.
 */
const ART: Record<Variant, { body: string; detail: string[] }> = {
  tote: {
    body: "M18 25h28a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V28a3 3 0 0 1 3-3Z",
    detail: ["M24 25v-4a8 8 0 0 1 16 0v4"],
  },
  cap: {
    body: "M16 40a16 16 0 0 1 32 0Z",
    detail: ["M11 40h42v3a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4Z", "M32 24v-3"],
  },
  bottle: {
    body: "M23 22h18a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H23a4 4 0 0 1-4-4V26a4 4 0 0 1 4-4Z",
    detail: ["M27 22v-5h10v5", "M27 10h10a2 2 0 0 1 2 2v5H25v-5a2 2 0 0 1 2-2Z"],
  },
  gift: {
    body: "M18 27h28a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V30a3 3 0 0 1 3-3Z",
    detail: [
      "M14 20h36a2 2 0 0 1 2 2v5H12v-5a2 2 0 0 1 2-2Z",
      "M32 20v35",
      "M32 20c0-5-9-7-9-1s9 4 9 1",
      "M32 20c0-5 9-7 9-1s-9 4-9 1",
    ],
  },
};

type Props = {
  variant: Variant;
  className?: string;
};

export default function ProductGlyph({ variant, className }: Props) {
  const art = ART[variant];

  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={art.body} fill="currentColor" fillOpacity={0.14} />
      {art.detail.map((d) => (
        <path d={d} key={d} />
      ))}
    </svg>
  );
}
