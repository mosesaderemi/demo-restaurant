import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://demo-restaurant.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} · ${site.short}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Modern dining, bold flavours and memorable moments. Reservations, private dining and a menu made to order.",
  keywords: [
    "restaurant",
    "fine dining",
    "reservations",
    "private dining",
    "Nigerian cuisine",
    "grill",
    "events",
  ],
  authors: [{ name: "neche_codes", url: site.footer.creditHref }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: site.name,
    title: `${site.name} · ${site.short}`,
    description: site.hero.sub,
    images: [
      {
        url: site.hero.image,
        width: 2000,
        height: 1250,
        alt: site.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.short}`,
    description: site.hero.sub,
    images: [site.hero.image],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f0e8",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  acceptsReservations: true,
  servesCuisine: ["African", "Grill", "Continental"],
  email: site.contact.email,
  telephone: site.contact.phoneDisplay,
  priceRange: "₦₦",
  description: site.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}