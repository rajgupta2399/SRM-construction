"use client";

import "@/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Montserrat } from "next/font/google";
import ThemeSwitcher from "@/components/Components/Header/ThemeSwitcher";
import ThemeProvide from "@/components/Components/Header/ThemeProvide";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "@/components/Components/Header/Header";
import FooterApp from "@/components/Components/Footer/Foot";
import { BackgroundBeamsWithCollisionDemo } from "@/components/Components/Footer/Footer";
import VideoPopup from "@/components/Components/VideoPopup/VideoPopup";
import FloatingWhatsAppButton from "@/components/Components/VideoPopup/FloatingWhatsAppButton ";

export const metadata = {
  title:
    "Best Waterproofing Services in Delhi NCR | 10+ Years Warranty | SRM Construction",
  description:
    "Expert waterproofing solutions for homes & commercial spaces in Delhi NCR. Get guaranteed leak-proof protection with 10+ years warranty. Call 9034499719 for free inspection.",
  keywords:
    "waterproofing Delhi, roof waterproofing, bathroom leakage, terrace waterproofing, best waterproofing company, waterproofing contractors, wall leakage repair",
  authors: [
    { name: "SRM Construction", url: "https://srmconstruction.in/" },
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://srmconstruction.in/",
    title: "Top-Rated Waterproofing Services in Delhi NCR | 9034499719",
    description:
      "Permanent solution for roof leaks, terrace seepage & bathroom waterproofing. 100% satisfaction guarantee with long-term warranty.",
    siteName: "SRM Waterproofing Experts",
    // images: [
    //   {
    //     url: "https://srmconstructiondelhi.com/images/waterproofing-service.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Professional Waterproofing Work in Delhi",
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Delhi's Trusted Waterproofing Specialists | 9034499719",
  //   description:
  //     "Advanced waterproofing techniques for complete protection against leaks and dampness. Serving Delhi NCR since 2010.",
  //   images: [
  //     "https://srmconstructiondelhi.com/images/waterproofing-twitter-card.jpg",
  //   ],
  // },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <VideoPopup />

      {isMounted && (
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
            <meta name="geo.region" content="IN-DL" />
            <meta name="geo.placename" content="Delhi NCR" />
            <meta name="theme-color" content="#1a237e" />

            {/* Structured Data */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "HomeAndConstructionBusiness",
                name: "SRM Construction Waterproofing Services",
                image: "https://srmconstructiondelhi.com/images/logo.jpg",
                url: "https://srmconstruction.in",
                telephone: "+919034499719",
                // priceRange: "₹₹",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "Baba Mohan Ram Colony, Mukand Vihar, Mukandpur Part 2, Mukundpur",
                  addressLocality: "Delhi",
                  addressRegion: "NCR",
                  postalCode: "110042",
                  addressCountry: "IN",
                },
                // geo: {
                //   "@type": "GeoCoordinates",
                //   latitude: "28.6139",
                //   longitude: "77.2090",
                // },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "08:00",
                  closes: "20:00",
                },
                // sameAs: [
                //   "https://www.facebook.com/srmconstruction",
                //   "https://www.instagram.com/srmconstruction",
                // ],
              })}
            </script>

            {/* Service Specific Structured Data */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Waterproofing Service",
                provider: {
                  "@type": "LocalBusiness",
                  name: "SRM Construction",
                },
                // areaServed: {
                //   "@type": "GeoCircle",
                //   geoMidpoint: {
                //     "@type": "GeoCoordinates",
                //     latitude: "28.6139",
                //     longitude: "77.2090",
                //   },
                //   geoRadius: "50000",
                // },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Waterproofing Services",
                  itemListElement: [
                    {
                      "@type": "OfferCatalog",
                      name: "Terrace Waterproofing",
                      itemListElement: [
                        {
                          "@type": "Offer",
                          itemOffered: {
                            "@type": "Service",
                            name: "Polyurethane Coating Waterproofing",
                          },
                        },
                      ],
                    },
                    {
                      "@type": "OfferCatalog",
                      name: "Bathroom Waterproofing",
                      itemListElement: [
                        {
                          "@type": "Offer",
                          itemOffered: {
                            "@type": "Service",
                            name: "Bathroom Leakage Treatment",
                          },
                        },
                      ],
                    },
                  ],
                },
              })}
            </script>
          </Head>

          <main
            className={`${montserrat.variable} font-mont w-full min-h-screen`}
          >
            <ThemeProvide>
              <ThemeSwitcher />
              <Header />
              <Component {...pageProps} />
              <FloatingWhatsAppButton
                phoneNumber="9034499719"
                message="Hi, I need waterproofing services"
              />
              <BackgroundBeamsWithCollisionDemo />
            </ThemeProvide>
          </main>
        </>
      )}
    </>
  );
}
