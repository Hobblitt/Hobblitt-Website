import type { Metadata, Viewport } from "next";

import { DM_Sans, Space_Grotesk, Space_Mono } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";


import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
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
  themeColor: "#0B1120",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <noscript>
          <style>
            {`[data-reveal]{opacity:1!important;transform:none!important}`}
          </style>
        </noscript>
      </head>

      <body className="flex min-h-full flex-col bg-[#0B1120] text-[#F8FAFC]">
        {/* Accessibility */}
        <a
          href="#main"
          className="
            sr-only
            font-mono
            uppercase
            focus:not-sr-only
            focus:absolute
            focus:left-4
            focus:top-4
            focus:z-[100]
            focus:border
            focus:border-[#22B8F0]
            focus:bg-[#0B1120]
            focus:px-4
            focus:py-2
            focus:text-[#22B8F0]
          "
        >
          Skip to content
        </a>

        <SiteHeader />

        <main id="main" className="flex flex-1 flex-col pt-[76px]">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
