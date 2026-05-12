import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UrRentals — Verified. Agent-Free. Trusted.",
  description:
    "Nigeria's first verified, agent-free rental marketplace. Connect directly with landlords. No hidden fees. Save up to 40%.",
  keywords: ["rental", "Nigeria", "Lagos", "Abuja", "verified", "agent-free", "landlord", "tenant"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1E2A4A]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
