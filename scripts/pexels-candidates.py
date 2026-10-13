"""Download Pexels candidates and build a contact sheet per search term.

Pexels License: free for commercial use, modification allowed, no attribution
required. The only restrictions are selling unaltered copies and using an
identifiable person in a way that implies endorsement — so the picks are made
from photos with no people in them.

The contact sheet exists so the picks can actually be LOOKED AT before they are
placed on the site, instead of being chosen blind.
"""

import io
import re
import subprocess
import time
from pathlib import Path

from PIL import Image, ImageDraw

# Pexels answers 403 to a plain urllib request, so fetch through curl, which
# sends a browser-like header set.
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36"
OUT = Path("/tmp/px")
CELL = 260
COLS = 3
ROWS = 3
PER_TERM = COLS * ROWS

TERMS = {
    "tote": "bag white background",
    "cap": "baseball cap white background",
    "bottle": "water bottle white background",
    "gift": "gift box white background",
}


def fetch(url: str) -> bytes:
    result = subprocess.run(
        ["curl", "-sL", "--max-time", "45", "-A", UA, "-H", "Accept: */*", url],
        capture_output=True,
        check=False,
    )
    if result.returncode != 0 or not result.stdout:
        raise RuntimeError(f"curl failed ({result.returncode}) for {url}")
    return result.stdout


def photo_ids(term: str) -> list[str]:
    html = fetch(f"https://www.pexels.com/search/{term.replace(' ', '%20')}/").decode(
        "utf-8", "ignore"
    )
    ids = re.findall(r"images\.pexels\.com/photos/(\d+)/", html)
    seen: list[str] = []
    for pid in ids:
        if pid not in seen:
            seen.append(pid)
        if len(seen) >= PER_TERM:
            break
    return seen


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    for key, term in TERMS.items():
        try:
            ids = photo_ids(term)
        except Exception as exc:  # noqa: BLE001
            print(f"{key}: search failed ({exc})")
            continue

        thumbs: list[Image.Image] = []
        for pid in ids:
            url = f"https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg?auto=compress&cs=tinysrgb&w=500"
            try:
                raw = fetch(url)
                image = Image.open(io.BytesIO(raw)).convert("RGB")
            except Exception as exc:  # noqa: BLE001
                print(f"   {pid}: download failed ({exc})")
                continue
            image.thumbnail((CELL, CELL), Image.LANCZOS)
            thumbs.append(image)
            time.sleep(0.4)

        if not thumbs:
            print(f"{key}: nothing downloaded")
            continue

        sheet = Image.new("RGB", (COLS * CELL, ROWS * CELL), (20, 20, 24))
        draw = ImageDraw.Draw(sheet)
        for i, thumb in enumerate(thumbs):
            col, row = i % COLS, i // COLS
            x, y = col * CELL, row * CELL
            sheet.paste(thumb, (x + (CELL - thumb.width) // 2, y + (CELL - thumb.height) // 2))
            draw.rectangle([x, y, x + 34, y + 22], fill=(0, 0, 0))
            draw.text((x + 8, y + 6), str(i), fill=(0, 255, 170))

        target = OUT / f"sheet-{key}.png"
        sheet.save(target)
        print(f"{key}: {len(thumbs)} thumbs -> {target}  ids={','.join(ids[:len(thumbs)])}")


if __name__ == "__main__":
    main()
