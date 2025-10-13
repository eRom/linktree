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
  title: "Romain Ecarnot - Architecte Cloud & Développeur | Linktree",
  description:
    "Romain Ecarnot, architecte cloud & développeur. Engagé dans la reprise professionnelle après un AVC, il met son expertise au service de la tech et de la santé digitale.",
  keywords: [
    "Romain Ecarnot",
    "architecte cloud",
    "développeur",
    "reprise professionnelle",
    "AVC",
    "tech",
    "santé digitale",
    "cloud computing",
    "développement web",
    "LinkedIn",
    "GitHub",
    "Health In Cloud",
    "Tipeee",
  ],
  authors: [{ name: "Romain Ecarnot" }],
  creator: "Romain Ecarnot",
  publisher: "Romain Ecarnot",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.romain-ecarnot.com",
    title: "Romain Ecarnot - Architecte Cloud & Développeur",
    description:
      "Romain Ecarnot, architecte cloud & développeur. Engagé dans la reprise professionnelle après un AVC, il met son expertise au service de la tech et de la santé digitale.",
    siteName: "Romain Ecarnot Linktree",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/146684?s=400&u=66a228f8030e491a4115a4e6b2f06eceb03a7f6a&v=4",
        width: 1200,
        height: 630,
        alt: "Romain Ecarnot - Architecte Cloud & Développeur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romain Ecarnot - Architecte Cloud & Développeur",
    description:
      "Romain Ecarnot, architecte cloud & développeur. Engagé dans la reprise professionnelle après un AVC, il met son expertise au service de la tech et de la santé digitale.",
    images: [
      "https://avatars.githubusercontent.com/u/146684?s=400&u=66a228f8030e491a4115a4e6b2f06eceb03a7f6a&v=4",
    ],
  },
  alternates: {
    canonical: "https://www.romain-ecarnot.com",
  },
  verification: {
    google: "IEOR1xYofoX9wNR1O31-PSF9hK__8p-OpojAVz7O4JQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* JSON-LD Schema.org Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Romain Ecarnot",
              jobTitle: "Architecte Cloud & Développeur",
              description:
                "Architecte cloud et développeur engagé dans la reprise professionnelle après un AVC, mettant son expertise au service de la tech et de la santé digitale.",
              url: "https://www.romain-ecarnot.com",
              image:
                "https://avatars.githubusercontent.com/u/146684?s=400&u=66a228f8030e491a4115a4e6b2f06eceb03a7f6a&v=4",
              sameAs: [
                "https://www.linkedin.com/in/romainecarnot/",
                "https://github.com/eRom",
                "https://www.healthincloud.app/",
                "https://fr.tipeee.com/rebondir-apres-lavc-ma-carriere-dans-la-tech/",
              ],
              knowsAbout: [
                "Cloud Computing",
                "Développement Web",
                "Architecture Cloud",
                "Santé Digitale",
                "Reprise Professionnelle",
              ],
              alumniOf: {
                "@type": "Organization",
                name: "Formation Cloud & Développement",
              },
              worksFor: {
                "@type": "Organization",
                name: "Freelance - Cloud Architect",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "FR",
              },
            }),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://avatars.githubusercontent.com" />
        <link rel="preconnect" href="https://dev.healthincloud.app" />

        {/* Favicon & Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="icon" sizes="512x512" href="/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
