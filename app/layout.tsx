import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import CursorGlow from "@/components/CursorGlow";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://siddharthjagadale.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Backend & Machine Learning Developer`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "Siddharth Jagadale",
    "Python Developer",
    "FastAPI Developer",
    "Machine Learning Engineer",
    "Computer Vision Developer",
    "React Developer",
    "Backend Developer Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} | Backend & Machine Learning Developer`,
    description: profile.tagline,
    siteName: `${profile.name} Portfolio`,
    images: [{ url: "/profile.jpg", width: 1200, height: 1200, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Backend & Machine Learning Developer`,
    description: profile.tagline,
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: "Software Engineer",
    email: profile.email,
    sameAs: [profile.github, profile.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} bg-base text-ink antialiased`}
      >
        <div className="fixed inset-0 -z-10 bg-grid-glow" />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
