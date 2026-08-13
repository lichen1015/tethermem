import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TetherMem — Query-Aware Memory Routing for Long-Horizon Video",
  description:
    "TetherMem preserves subject identity while restoring scene progression in long-horizon autoregressive video generation.",
  metadataBase: new URL("https://tethermem.openai-apps.com"),
  openGraph: {
    title: "TetherMem — Tether the Subject, Release the Scene",
    description:
      "Query-aware memory routing for long-horizon autoregressive video generation.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TetherMem — Tether the Subject, Release the Scene",
    description:
      "Query-aware memory routing for long-horizon autoregressive video generation.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
