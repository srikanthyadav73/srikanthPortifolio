import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Srikanth Yadav Gorla | Software Developer & Python Backend Engineer",
  description:
    "Personal portfolio of Srikanth Yadav Gorla — Software Developer, Python Backend Engineer, and Full Stack Systems Builder based in Hyderabad, India. Specializing in high-performance APIs, SaaS architectures, and retrieval-augmented AI systems.",
  keywords: [
    "Srikanth Yadav Gorla",
    "Srikanth Yadav",
    "Python Developer",
    "Backend Engineer",
    "Full Stack Developer",
    "FastAPI",
    "Django",
    "PostgreSQL",
    "Hyderabad Software Developer",
    "Portfolio",
    "RAG AI",
    "Next.js",
  ],
  authors: [{ name: "Srikanth Yadav Gorla", url: "https://srikanthyadav.dev" }],
  creator: "Srikanth Yadav Gorla",
  metadataBase: new URL("https://srikanthyadav.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://srikanthyadav.dev",
    siteName: "Srikanth Yadav Gorla — Developer Portfolio",
    title: "Srikanth Yadav Gorla | Software Developer & Python Backend Engineer",
    description:
      "Cinematic portfolio of Srikanth Yadav Gorla. Python backend engineering, scalable REST APIs, SaaS architectures, and intelligent digital systems.",
    images: [
      {
        url: "/images/srikanth-hero-formal.jpg",
        width: 1200,
        height: 630,
        alt: "Srikanth Yadav Gorla — Software Developer Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Srikanth Yadav Gorla | Software Developer",
    description:
      "Python backend engineering, scalable REST APIs, SaaS architectures, and intelligent systems.",
    images: ["/images/srikanth-hero-formal.jpg"],
    creator: "@srikanthyadav",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://srikanthyadav.dev/#person",
        name: "Srikanth Yadav Gorla",
        alternateName: "Srikanth Yadav",
        jobTitle: "Software Developer & Python Backend Developer",
        description: PERSONAL_INFO.bio,
        url: "https://srikanthyadav.dev",
        image: "https://srikanthyadav.dev/images/srikanth-hero-formal.jpg",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "India",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Malla Reddy Institute of Technology and Science",
        },
        sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
        knowsAbout: [
          "Python",
          "FastAPI",
          "Django",
          "PostgreSQL",
          "REST APIs",
          "Next.js",
          "Docker",
          "LangChain",
          "Redis",
          "Full Stack Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://srikanthyadav.dev/#website",
        url: "https://srikanthyadav.dev",
        name: "Srikanth Yadav Gorla Portfolio",
        publisher: {
          "@id": "https://srikanthyadav.dev/#person",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-primary selection:bg-accent-orange selection:text-background antialiased relative">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
