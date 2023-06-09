import { type NextPage } from "next";
import Head from "next/head";
import { libre_bodoni } from "../fonts";
import clsx from "clsx";

import Hero from "../components/Hero";
import STN from "../components/STN";
import Grandma from "../components/Grandma";
import Brucey from "../components/Brucey";
import Headshots from "../components/Headshots";
import Cringe from "../components/Cringe";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <main data-theme="dracula">
      <Head>
        <title>BSIG</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={clsx("bg-black", libre_bodoni.className)}>
        <div className="min-h-screen w-full scroll-smooth bg-gradient-to-br from-red-400/40 from-20% via-blue-400/40 via-40% to-yellow-400/40 p-0">
          <Hero />
          <Cringe />
          <Headshots />
          <Brucey />
          <STN />
          <Grandma />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
