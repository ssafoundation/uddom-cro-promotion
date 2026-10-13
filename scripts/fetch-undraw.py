"""Fetch the free illustrations used on the marketing site.

Source: unDraw (https://undraw.co). Licence — "free for commercial use, modify
allowed, no attribution required"; the only restrictions are redistributing the
illustration packs as packs and using them for AI/ML training. We therefore keep
the files inside this repository's own /public folder for this site only, and
never ship them as a downloadable pack.

Each illustration is recoloured to the Uddom brand green so it belongs to the
site rather than to unDraw's default purple. unDraw's palette is built for a
LIGHT surface (dark #3f3d56 shapes, light greys), so every placement must sit on
a white panel — on the dark sections the dark shapes would disappear.

Run:  python scripts/fetch-undraw.py
"""

from pathlib import Path
from urllib.request import Request, urlopen

DEST = Path(r"E:/shopifyAppsFolder/Apps for store/Uddom-Presentation/public/illustrations")
CDN = "https://cdn.undraw.co/illustration/{name}.svg"
# The CDN answers 403 to a request with no User-Agent, so send a normal one.
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36"

# unDraw's default accent -> the Uddom brand green.
RECOLOUR = {
    "#6c63ff": "#0bbf87",
}

# (unDraw asset name, local file name)
ASSETS = [
    ("project-flow_ghph", "how-it-works.svg"),
    ("digital-invoice_lvub", "subscriptions.svg"),
]


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)

    for name, filename in ASSETS:
        request = Request(CDN.format(name=name), headers={"User-Agent": UA})
        with urlopen(request, timeout=60) as response:
            svg = response.read().decode("utf-8")

        for old, new in RECOLOUR.items():
            svg = svg.replace(old, new)
            svg = svg.replace(old.upper(), new)

        target = DEST / filename
        target.write_text(svg, encoding="utf-8")
        print(f"{filename:26s} {len(svg):7d} chars  <- unDraw/{name}")


if __name__ == "__main__":
    main()
