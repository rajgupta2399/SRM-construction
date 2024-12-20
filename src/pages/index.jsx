import { Geist, Geist_Mono } from "next/font/google";
import HomeCoverSection from "@/components/Components/Hero/Banner";
import { MarqueeDemo } from "@/components/Components/Hero/Marq";
import AboutSection from "@/components/Components/AboutSection/AboutSection";
import { ScrollBasedVelocityDemo } from "@/components/Components/Scroll/ScrollBasedVelocity";
import OurService from "@/components/Components/HomeServices/OurService";

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
      <HomeCoverSection />
      <AboutSection/>
      <OurService/>
      <ScrollBasedVelocityDemo/>
      <MarqueeDemo />
    </>
  );
}
