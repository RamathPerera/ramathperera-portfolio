import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ramath Perera | Computer Science Undergraduate",
  description:
    "Portfolio of Ramath Perera, a Computer Science undergraduate at UCSC specialized in Full Stack Development.",
  keywords: [
    "Ramath Perera",
    "Portfolio",
    "Computer Science",
    "UCSC",
    "Full Stack Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Ramath Perera" }],
  openGraph: {
    title: "Ramath Perera | Computer Science Undergraduate",
    description: "Check out my projects and skills.",
    url: "https://ramathperera.me",
    siteName: "Ramath Perera",
    images: [
      {
        url: "/opengraph-image.png", // We will add this image next!
        width: 1200,
        height: 630,
        alt: "Ramath Perera Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
