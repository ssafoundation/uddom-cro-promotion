import Shot from "@/components/ui/Shot";
import { screenshots, type ScreenshotKey } from "@/data/platform";

type Props = {
  shotKey: ScreenshotKey;
  className?: string;
};

/**
 * The product screenshot surface for the showcase tabs.
 *
 * It delegates to the shared `Shot` component, so a real capture (the merchant's
 * own in-app screenshots, shipped with the user documentation) renders in the
 * light panel, and anything without an image yet keeps an obvious labelled
 * placeholder. No fake product UI is ever presented as a real screenshot.
 */
export default function ScreenshotFrame({ shotKey, className }: Props) {
  return (
    <Shot
      shot={screenshots[shotKey]}
      className={className}
      sizes="(max-width: 920px) 100vw, 720px"
    />
  );
}
