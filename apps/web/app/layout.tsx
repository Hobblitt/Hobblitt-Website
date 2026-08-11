import type { Metadata, Viewport } from "next";
import { DM_Sans, Source_Serif_4, Space_Mono } from "next/font/google";
import { MobileTabBar } from "@/components/layout/mobile-tab-bar";
import { NewsTicker } from "@/components/layout/news-ticker";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.legalName,
  openGraph: {
    type: "website",
    siteName: siteConfig.legalName,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#fcf9f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${sourceSerif.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        {/* Scroll-reveal animations start hidden; without JS, show everything. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-paper text-ink-soft">
        <a
          href="#main"
          className="sr-only font-stamp text-stamp uppercase focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:border-2 focus:border-ink focus:bg-highlight focus:px-4 focus:py-2 focus:text-highlight-ink"
        >
          Skip to content
        </a>

        <NewsTicker />
        <SiteHeader />

        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>

        <SiteFooter />
        <MobileTabBar />
      </body>
    </html>
  );
}
