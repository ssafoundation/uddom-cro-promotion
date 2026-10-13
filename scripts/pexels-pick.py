"""Download the chosen Pexels product photos for the storefront mock-ups.

Pexels License: free for commercial use, modification allowed, no attribution
required. Excluded by that licence: selling unaltered copies, and using an
identifiable person in a way that implies endorsement — so every pick below is a
product-only photo with no people, and each was checked for third-party
branding (two otherwise-good candidates were rejected for a visible logo).

Picks (all on a light background, so they sit in a white photo area):
  tote   6650001   three leather bags on a plain light wall
  bottle 31699476  water bottles with green caps
  gift   11781094  an open kraft box with ribbon
"""

import io
import subprocess
from pathlib import Path

from PIL import Image

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36"
DEST = Path(r"E:/shopifyAppsFolder/Apps for store/Uddom-Presentation/public/images/products")
MAX_W = 900
QUALITY = 84

PICKS = [
    ("tote", "6650001"),
    ("bottle", "31699476"),
    ("gift", "11781094"),
]

# Where the subject actually is, as a fraction of the downloaded frame, so a
# placement can never crop into empty background:
#   tote   — the bags sit in the bottom half; the top is empty wall
#   bottle — the bottles already fill the frame; only the blurred top goes
#   gift   — the box sits in the lower right; the top-left corner is empty
CROPS: dict[str, tuple[float, float, float, float]] = {
    "tote": (0.0, 0.48, 1.0, 1.0),
    "bottle": (0.0, 0.05, 1.0, 1.0),
    "gift": (0.14, 0.22, 1.0, 1.0),
}


def fetch(url: str) -> bytes:
    result = subprocess.run(
        ["curl", "-sL", "--max-time", "60", "-A", UA, "-H", "Accept: */*", url],
        capture_output=True,
        check=False,
    )
    if result.returncode != 0 or not result.stdout:
        raise RuntimeError(f"curl failed ({result.returncode})")
    return result.stdout


def crop_to_subject(image: Image.Image, box: tuple[float, float, float, float]) -> Image.Image:
    left, top, right, bottom = box
    return image.crop(
        (
            round(image.width * left),
            round(image.height * top),
            round(image.width * right),
            round(image.height * bottom),
        )
    )


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)

    for name, pid in PICKS:
        url = (
            f"https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg"
            "?auto=compress&cs=tinysrgb&w=1400"
        )
        image = Image.open(io.BytesIO(fetch(url))).convert("RGB")
        before = image.size
        image = crop_to_subject(image, CROPS[name])
        if image.width > MAX_W:
            image = image.resize(
                (MAX_W, round(image.height * MAX_W / image.width)), Image.LANCZOS
            )
        target = DEST / f"{name}.webp"
        image.save(target, "WEBP", quality=QUALITY, method=6)
        print(
            f"{name:8s} {before[0]}x{before[1]} -> cropped {image.width}x{image.height:<5d}"
            f" {target.stat().st_size // 1024:4d}KB  <- pexels {pid}"
        )


if __name__ == "__main__":
    main()
