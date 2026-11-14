import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const archivo = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://milesformorphe.vercel.app"),
  icons: { icon: "/favicon.svg" },
  title: { default: "Miles Mattina for Morphe", template: "%s | Miles Mattina for Morphe" },
  description: "An independent, interactive application for the Product Marketing Manager role at Morphe.",
  openGraph: {
    title: "Miles Mattina for Morphe",
    description: "Who is this guy? A custom hello, a little brand-building experience, and the work to back it up.",
    type: "website",
    images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Miles Mattina for Morphe — Product Marketing Manager application" }],
  },
  twitter: { card: "summary_large_image", images: ["/social-preview.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className="h-full antialiased"><body className={`${inter.variable} ${archivo.variable} min-h-full flex flex-col`}>{children}</body></html>;
}
