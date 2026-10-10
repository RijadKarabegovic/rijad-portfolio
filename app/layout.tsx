import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { ThemeProvider } from "./provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const aktura = localFont({
  src: "./fonts/Aktura-Regular.ttf",
  weight: "400",
  variable: "--font-aktura",
  display: "swap",
});

// Only Semibold + Bold files exist. Map common Tailwind weights onto them
// so `font-clash` works without requiring font-semibold/font-bold.
const clashDisplay = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay-Semibold.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Semibold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rijad's Portfolio",
  description: "Portfolio created with NextJS, ThreeJS and many other other tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${poppins.className} ${aktura.variable} ${clashDisplay.variable}`}>   
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
