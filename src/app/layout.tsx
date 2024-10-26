import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ghostridercoin.org'),
  title: {
    default: "GhostriderCoin | The Fast, Secure Digital Cryptocurrency",
    template: "%s | GhostriderCoin"
  },
  description: "Discover GhostriderCoin, a community-driven cryptocurrency with fast transactions and a secure network.",
  keywords: ["cryptocurrency", "GhostriderCoin", "blockchain", "crypto trading", "digital currency"],
  authors: [{ name: "GhostriderCoin Team" }],
  creator: "GhostriderCoin Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ghostridercoin.org",
    siteName: "GhostriderCoin",
    title: "GhostriderCoin | The Fast, Secure Digital Cryptocurrency",
    description: "Discover GhostriderCoin, a community-driven cryptocurrency with fast transactions and a secure network.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "GhostriderCoin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostriderCoin | The Fast, Secure Digital Cryptocurrency",
    description: "Discover GhostriderCoin, a community-driven cryptocurrency with fast transactions and a secure network.",
    creator: "@ghostridercoin",
    images: ["/opengraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
