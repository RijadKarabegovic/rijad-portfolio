import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
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
      <body className={poppins.className}>   
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
