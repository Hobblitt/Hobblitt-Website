import type { Metadata, Viewport } from "next";

import { DM_Sans, League_Spartan } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
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
  themeColor: "#111827",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${leagueSpartan.variable} h-full antialiased`}
    >
      <head>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>

      <body className="flex min-h-full flex-col bg-[#111827] text-[#F8FAFC]">
        <a
          href="#main"
          className="
            sr-only type-nav uppercase
            focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]
            focus:border focus:border-[#22B8F0] focus:bg-[#111827] focus:px-4 focus:py-2 focus:text-[#22B8F0]
          "
        >
          Skip to content
        </a>

        <SiteHeader />

        <main id="main" className="flex flex-1 flex-col pt-[72px]">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}