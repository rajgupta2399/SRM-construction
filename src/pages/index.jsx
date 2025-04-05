import { Geist, Geist_Mono } from "next/font/google";
import HomeCoverSection from "@/components/Components/Hero/Banner";
import { MarqueeDemo } from "@/components/Components/Hero/Marq";
import AboutSection from "@/components/Components/AboutSection/AboutSection";
import { ScrollBasedVelocityDemo } from "@/components/Components/Scroll/ScrollBasedVelocity";
import OurService from "@/components/Components/HomeServices/OurService";
import { RetroGridDemo } from "@/components/Components/Facts/Facts";
import Query from "@/components/Components/Facts/Query";
import ExpertTeam from "@/components/Components/Team/ExpertTeam";
import Testimonial from "@/components/Components/Testimonials/Testtimonials";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Best Waterproofing Services in Delhi NCR | 10+ Years Warranty | SRM
          Construction
        </title>
        <meta
          name="description"
          content="Expert waterproofing solutions for homes & commercial spaces in Delhi NCR. Get guaranteed leak-proof protection with 10+ years warranty. Call 9034499719 for free inspection."
        />
        <meta
          name="keywords"
          content="waterproofing Delhi, roof waterproofing, bathroom leakage, terrace waterproofing, best waterproofing company, waterproofing contractors, wall leakage repair"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a237e" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Top-Rated Waterproofing Services in Delhi NCR | 9034499719"
        />
        <meta
          property="og:description"
          content="Permanent solution for roof leaks, terrace seepage & bathroom waterproofing."
        />
        <meta property="og:url" content="https://srmconstruction.in/" />
        <meta property="og:site_name" content="SRM Waterproofing Experts" />
        <meta property="og:type" content="website" />
        {/* Optional image: */}
        {/* <meta property="og:image" content="https://srmconstructiondelhi.com/images/waterproofing-service.jpg" /> */}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "SRM Construction Waterproofing Services",
              image: "https://srmconstructiondelhi.com/images/logo.jpg",
              url: "https://srmconstruction.in",
              telephone: "+919034499719",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Baba Mohan Ram Colony, Mukand Vihar, Mukandpur Part 2, Mukundpur",
                addressLocality: "Delhi",
                addressRegion: "NCR",
                postalCode: "110042",
                addressCountry: "IN",
              },
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
            }),
          }}
        />
      </Head>

      <HomeCoverSection />
      <ScrollBasedVelocityDemo />
      <AboutSection />
      <OurService />
      <ExpertTeam />
      <RetroGridDemo />
      <Query />
      <MarqueeDemo />
      <Testimonial />
    </>
  );
}
