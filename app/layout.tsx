import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWA from "@/components/FloatingWA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SINGLE METADATA (BENAR)
export const metadata: Metadata = {
  title: "Portal Berita",
  description: "Website berita",
  alternates: {
    languages: {
      id: "/id",
      en: "/en",
      ar: "/ar",
      zh: "/zh",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-black">

        {/* NAVBAR GLOBAL */}
        <Navbar />

        {/* CONTENT */}
        <main className="flex-1">{children}</main>

        {/* FLOATING WHATSAPP */}
        <FloatingWA />

      </body>
    </html>
  );
}