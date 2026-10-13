import Link from "next/link";

import PlanBadge from "@/components/ui/PlanBadge";
import type { UddomModule } from "@/data/modules";

/**
 * A single module in the /features index. The whole card is the link, so the
 * plan badge and the arrow cannot be clicked independently of the destination.
 */
export default function FeatureCard({ module }: { module: UddomModule }) {
  return (
    <Link className="featureCard reveal" href={`/features/${module.key}`} data-reveal>
      <div className="featureCard__top">
        <h3 className="featureCard__title">{module.title}</h3>
        <PlanBadge plan={module.plan} />
      </div>
      <p className="featureCard__text">{module.blurb}</p>
      <span className="featureCard__arrow" aria-hidden="true">
        View module
        <span className="btn__arrow">→</span>
      </span>
    </Link>
  );
}
