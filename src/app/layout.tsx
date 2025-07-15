import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/layout/Layout";
import { Toaster } from "@/components/ui/sonner";
import Analytics from "@/components/analytics/Analytics";
import PerformanceMonitor from "@/components/performance/PerformanceMonitor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ClearCircuit™ - Professional Panel Labels",
    template: "%s | ClearCircuit™",
  },
  description: "Professional electrical panel labeling solutions that meet NEC 408.4(A) standards. Trusted by electricians and homeowners nationwide for safer, clearer circuits.",
  keywords: ["electrical panel labels", "breaker panel labels", "NEC compliant", "circuit labels", "electrical safety"],
  authors: [{ name: "ClearCircuit" }],
  creator: "ClearCircuit",
  metadataBase: new URL("https://clearcircuit.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clearcircuit.com",
    title: "ClearCircuit™ - Professional Panel Labels",
    description: "Professional electrical panel labeling solutions that meet NEC 408.4(A) standards.",
    siteName: "ClearCircuit",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ClearCircuit Professional Panel Labels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearCircuit™ - Professional Panel Labels",
    description: "Professional electrical panel labeling solutions that meet NEC 408.4(A) standards.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },
  other: {
    "theme-color": "#1F6FEB",
    "msapplication-TileColor": "#1F6FEB",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
          <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="antialiased">
          <Analytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'} />
          <PerformanceMonitor />
          <Layout>
            {children}
          </Layout>
          <Toaster />
        </body>
      </html>
  );
}
