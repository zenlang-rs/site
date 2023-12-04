"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Zen Playground",
  description: "Playground to test and run zen language on the go!",
  generator: "Next.js",
  applicationName: "Zen Playground",
  referrer: "origin-when-cross-origin",
  keywords: ["zen", "compiler", "competitive coding"],
  authors: [{ name: "rootCircle" }],
  colorScheme: "light",
  creator: "rootCircle",
  publisher: "zenlang-rs",
  metadataBase: new URL("https://zenlang.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zen Playground",
    description: "Playground to test and run zen language on the go!",
    url: "https://zenlang.netlify.app",
    domain: "zenlang.netlify.app",
    siteName: "Zen Playground",
    images: "/logo.png",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href={"/logo.ico"} sizes="any" />
        <meta name="description" content={metadata.description} />
        <meta name="application-name" content={metadata.applicationName} />
        <meta name="author" content={metadata.authors} />
        <meta name="generator" content={metadata.generator} />
        <meta name="keywords" content={metadata.keywords.join(",")} />
        <meta name="referrer" content={metadata.referrer} />
        <meta name="color-scheme" content={metadata.colorScheme} />
        <meta name="creator" content={metadata.creator} />
        <meta name="publisher" content={metadata.publisher} />
        <link rel="canonical" href={metadata.alternates.canonical} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta
          property="og:image"
          content={metadata.openGraph.url + metadata.openGraph.images}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={metadata.openGraph.domain} />
        <meta property="twitter:url" content={metadata.openGraph.url} />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta
          name="twitter:description"
          content={metadata.openGraph.description}
        />
        <meta
          name="twitter:image"
          content={metadata.openGraph.url + metadata.openGraph.images}
        />
        <meta name="next-size-adjust" />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider>
          <div>
            <Navbar />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
