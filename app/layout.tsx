import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import { SoulCursor } from "@/components/SoulCursor";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nikita Singh — Agentic Systems",
  description:
    "Nikita Singh — agentic AI, reliable infrastructure, and open-source systems that ship.",
  metadataBase: new URL("https://dev-nikita-singh.github.io"),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Nikita Singh — Agentic Systems",
    description:
      "Agentic AI, open systems, and products that feel inevitable once they ship.",
    url: "https://dev-nikita-singh.github.io",
    siteName: "Nikita Singh",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[var(--ink)]">
        <SoulCursor />
        {children}
      </body>
    </html>
  );
}
