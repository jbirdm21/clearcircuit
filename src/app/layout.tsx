import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/layout/Layout";
import { Toaster } from "@/components/ui/sonner";
import Analytics from "@/components/analytics/Analytics";
import PerformanceMonitor from "@/components/performance/PerformanceMonitor";
import MobileEmergencyContact from "@/components/ui/MobileEmergencyContact";
import SocialProofNotifications from "@/components/ui/SocialProofNotifications";
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
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ClearCircuit",
    "application-name": "ClearCircuit",
    "mobile-web-app-capable": "yes",
    "format-detection": "telephone=no",
    "msapplication-tap-highlight": "no",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ClearCircuit",
    startupImage: [
      {
        url: "/images/icons/icon-192x192.png",
        media: "screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/images/icons/icon-192x192.png",
        media: "screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/images/icons/icon-192x192.png",
        media: "screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/images/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/images/icons/icon-192x192.png" }],
    apple: [
      { url: "/images/icons/icon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/images/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/images/icons/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/images/icons/icon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/images/icons/icon-72x72.png", sizes: "72x72", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
          <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js')
                      .then(function(registration) {
                        console.log('SW registered: ', registration);
                      })
                      .catch(function(registrationError) {
                        console.log('SW registration failed: ', registrationError);
                      });
                  });
                }
              `
            }}
          />
        </head>
        <body className="antialiased">
          <Analytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'} />
          <PerformanceMonitor />
          <Layout>
            {children}
          </Layout>
          <Toaster />
          <MobileEmergencyContact />
          <SocialProofNotifications 
            position="bottom-left" 
            displayDuration={5000}
            intervalDelay={12000}
          />
        </body>
      </html>
  );
}
