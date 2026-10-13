import type { UddomPlan } from "@/data/modules";

const TONE: Record<UddomPlan, string> = {
  Free: "planBadge--free",
  Grow: "planBadge--grow",
  Convert: "planBadge--convert",
  Scale: "planBadge--scale",
};

/**
 * The plan a module belongs to. One module belongs to exactly one plan (the
 * app's billing matrix), so this is always the merchant-facing plan label.
 */
export default function PlanBadge({
  plan,
  className,
}: {
  plan: UddomPlan;
  className?: string;
}) {
  return (
    <span
      className={["planBadge", TONE[plan], className ?? ""].filter(Boolean).join(" ")}
    >
      {plan}
    </span>
  );
}
