import type { Metadata } from "next";

import Navbar from "@/components/navigation/Navbar";
import RevealObserver from "@/components/ui/RevealObserver";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { buildJsonLd, buildMetadata } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = buildJsonLd();

  return (
    <html lang="en">
      <head>
        {/* Keep all content visible if JavaScript is unavailable. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          // Structured data contains no user input and no invented ratings.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skipLink" href="#main">
          Skip to content
        </a>

        <ScrollProgress />
        <Navbar />

        <main id="main">{children}</main>

        <RevealObserver />
      </body>
    </html>
  );
}
