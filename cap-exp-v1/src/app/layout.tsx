import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capital Expansion | Institutional Private Credit",
  description: "An elite, private network facilitating middle-market private credit transactions at critical corporate and strategic inflection points.",
};

import { TelemetryRail } from "@/components/TelemetryRail";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-black text-white font-sans selection:bg-zinc-800 selection:text-white`}
      >
        <div className="bg-noise" />
        
        {/* The Telemetry Rail (hidden on mobile, visible on md+) */}
        <div className="hidden md:block">
          <TelemetryRail />
        </div>

        {/* Main Content Area (padded on md+ to avoid the rail) */}
        <div className="relative z-10 flex min-h-screen flex-col md:pl-24">
          {children}
        </div>
      </body>
    </html>
  );
}
