import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foxship - All-in-one Package Tracking",
  description:
    "Track packages from 3,100+ carriers worldwide. Real-time updates, instant notifications, and seamless tracking experience.",
  keywords: [
    "package tracking",
    "shipment tracking",
    "delivery tracking",
    "FedEx tracking",
    "UPS tracking",
    "DHL tracking",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
