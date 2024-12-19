import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import HomeCoverSection from "@/components/Components/Hero/Banner";
import { MarqueeDemo } from "@/components/Components/Hero/Marq";

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
      <MarqueeDemo />
    </>
  );
}
