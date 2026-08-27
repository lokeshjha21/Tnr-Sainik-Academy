import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import TopBar from "./_components/layout/TopBar";
import Navbar from "./_components/layout/Navbar";
import Footer from "./_components/layout/Footer";
import MobileCTA from "./_components/layout/MobileCTA";
import WhatsAppButton from "./_components/layout/WhatsAppButton";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | TNR Sainik Academy Hyderabad",
    default: "TNR Sainik Academy Hyderabad | Best Defence & Government Exam Coaching",
  },
  description:
    "TNR Sainik Academy Society — Best defence exam coaching in Hyderabad. Indian Army, Navy, Air Force, NDA, Telangana Police, SSC, Railway preparation with expert faculty and daily physical training. Located at Bahadurpally, Hyderabad.",
  keywords: [
    "army coaching Hyderabad",
    "defence academy Hyderabad",
    "police coaching Hyderabad",
    "SSC coaching Hyderabad",
    "NDA coaching Hyderabad",
    "physical training academy Hyderabad",
    "government exam coaching Hyderabad",
    "Bahadurpally defence academy",
    "TNR Sainik Academy",
    "sainik coaching Hyderabad",
  ],
  authors: [{ name: "TNR Sainik Academy Society" }],
  creator: "TNR Sainik Academy Society",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tnrsainikacademy.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "TNR Sainik Academy Society",
    title: "TNR Sainik Academy Hyderabad | Best Defence & Government Exam Coaching",
    description:
      "Best defence exam coaching academy in Hyderabad. Indian Army, Navy, Air Force, Police, SSC, Railway preparation with expert faculty and physical training.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TNR Sainik Academy Hyderabad",
    description: "Best defence & government exam coaching in Hyderabad.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/tnr-logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/tnr-logo.png",
    apple: "/images/tnr-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col pb-[56px] md:pb-0">
        {/* JSON-LD LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "TNR Sainik Academy Society",
              description:
                "Best defence exam coaching academy in Hyderabad offering preparation for Indian Army, Navy, Air Force, Police, SSC, and Railway exams.",
              url: "https://tnrsainikacademy.com",
              telephone: "+918886779779",
              email: "tnrsainikacademy@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Survey No. 108, Main Road, Opposite Gandhi Statue",
                addressLocality: "Bahadurpally",
                addressRegion: "Telangana",
                postalCode: "500043",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "17.5642",
                longitude: "78.3932",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "06:00",
                closes: "20:00",
              },
              foundingDate: "2013",
            }),
          }}
        />
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTA />
        <WhatsAppButton />
      </body>
    </html>
  );
}
