import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Components/Header/Header";
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
      <Header />
      <HomeCoverSection />

      <MarqueeDemo />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        tenetur consequatur soluta veniam, maiores reiciendis, incidunt,
        reprehenderit eum quas dolor asperiores expedita. Consectetur suscipit a
        sunt dolores animi repellendus at nemo consequuntur autem tempore odio
        quasi minima architecto sed perspiciatis, magnam blanditiis nisi, illo
        ex libero, non expedita nostrum sapiente! Placeat minima aut eveniet
        recusandae soluta commodi repudiandae nihil necessitatibus earum,
        consequatur quis. Mollitia libero nemo sequi quas hic numquam reiciendis
        ipsa velit impedit consequuntur et alias, enim aut, debitis nihil omnis
        quod quae vel nulla! Consectetur unde quae velit culpa corrupti, et
        suscipit dolorum harum dignissimos, quo quisquam tempora.
      </p>
    </>
  );
}
