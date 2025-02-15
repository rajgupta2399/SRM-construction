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
import Newsletter from "@/components/Components/Footer/NewsLetter";
// import Logo from "../components/Components/Icons/Logo";

export const metadata = {
  title: "SRM",
  description: "SRM construction",
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

  if (!isMounted) return null;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="" />
      </Head>
      <main className={`${montserrat.variable} font-mont w-full min-h-screen`}>
        <ThemeProvide>
          <ThemeSwitcher />
          <Header />
          <Component {...pageProps} />
          {/* <Newsletter/> */}
          <BackgroundBeamsWithCollisionDemo />
        </ThemeProvide>
      </main>
    </>
  );
}
