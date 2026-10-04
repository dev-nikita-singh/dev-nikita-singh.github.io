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
  title: "Nikita Singh — Developer & Builder",
  description:
    "Portfolio of Nikita Singh — building intelligent systems at the intersection of agentic AI, software engineering, and open source.",
  metadataBase: new URL("https://dev-nikita-singh.github.io"),
  openGraph: {
    title: "Nikita Singh — Developer & Builder",
    description:
      "Agentic AI, software engineering, and systems that ship. Portfolio of Nikita Singh.",
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
