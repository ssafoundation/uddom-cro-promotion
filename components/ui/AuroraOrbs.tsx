/**
 * Decorative floating colour orbs.
 *
 * The reference the site's tone follows (Programming Hero) scatters glowing
 * 3D shapes around its sections. These are the CSS equivalent: a few large,
 * heavily blurred gradient circles that drift very slowly behind everything.
 *
 * They are pure CSS — no image asset, no library, no licence — they sit at
 * z-index -1 so they never touch the content, and the global
 * prefers-reduced-motion rule stops the drift.
 */
export default function AuroraOrbs() {
  return (
    <div className="orbField" aria-hidden="true">
      <span className="orb orb--a" />
      <span className="orb orb--b" />
      <span className="orb orb--c" />
      <span className="orb orb--d" />
    </div>
  );
}
