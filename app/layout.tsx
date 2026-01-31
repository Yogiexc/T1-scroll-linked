import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import { LenisScroll } from "@/components/LenisScroll"; // Will create this next

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "T1 Esport | Legacy",
  description: "The official T1 Esport scrollytelling experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${manrope.variable} antialiased bg-black text-white font-manrope overflow-x-hidden`}
      >
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}
