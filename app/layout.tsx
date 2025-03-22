import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/portfolio-components/Header";
import StairTransition from "@/components/portfolio-components/StairTransition";
import PageTransition from "@/components/portfolio-components/PageTransition";

export const metadata: Metadata = {
  title: "Nader Saoudi | Developer",
  description: "A portfolio website for Nader Saoudi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
