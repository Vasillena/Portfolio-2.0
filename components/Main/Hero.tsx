"use client";

import { MazzardExtraLight, MazzardThin } from "@/utils/fonts";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Logo from "@/icons/logo.svg";
import Mobile from "../Responsive/Mobile";
import ModeToggle from "../Common/ModeToggle";
import Nav from "./Nav";
import PortfolioText from "@/icons/portfolio-text.svg";
import Projects from "../Projects/Projects";
import Tablet from "../Responsive/Tablet";
import dynamic from "next/dynamic";
import { useBreakpoints } from "@/utils/useBreakpoints";
import { useModal } from "@/utils/ModalProvider";

const Player = dynamic(() => import("../Responsive/Player"), {
  ssr: false,
});

export default function Hero() {
  const { isAboutOpen, isProjectsOpen, isContactOpen, closeModal } = useModal();
  const { up } = useBreakpoints();

  return (
    <>
      {/* <section
        className="max-w-7xl mx-auto relative h-screen grid grid-cols-[minmax(0,1fr)_minmax(0,3fr)] sm:grid-cols-[minmax(0,1fr)_minmax(0,6fr)] xl:grid-cols-2 gap-4 xl:gap-0 px-4 
  bg-[url(/bg-l.png)] dark:bg-[url(/bg-d.png)]
   bg-no-repeat bg-center bg-size-[560%] sm:bg-size-[400%] bg-[#151515] dark:bg-white
  xl:bg-none! xl:bg-transparent!"
      > */}
      <section
        className="max-w-7xl mx-auto relative h-dvh xl:h-screen grid grid-cols-[minmax(0,1fr)_minmax(0,3fr)] sm:grid-cols-2 gap-4 sm:gap-0 px-4 
  bg-[url(/bg-l.png)] dark:bg-[url(/bg-d.png)]
   bg-no-repeat bg-center bg-size-[460%] sm:bg-size-[300%] md:bg-size-[170%] bg-white dark:bg-[#151515]
  xl:bg-none! xl:bg-transparent!"
      >
        {/* LEFT SIDE */}
        <div className="relative pt-10">
          {/* Navigation */}
          <Nav />

          {up("xl") && <Player src="/cloud-of-sorrow.mp3" />}

          {/* Vertical text */}
          {/* <div className="fixed xl:absolute xl:right-0 top-1/2 -translate-y-1/2 scale-90 sm:scale-110 xl:scale-100">
            <div className="relative inline-block">
              <PortfolioText className="h-[80vh] w-auto dark:invert dark:brightness-0" /> */}
          <div className="fixed sm:absolute sm:right-0 sm:top-20 md:top-2 xl:top-1/2 xl:-translate-y-1/2 sm:-mr-1 md:-mr-1.5 lg:-mr-1 xl:mr-0 scale-90 xl:scale-100">
            <div className="relative inline-block">
              <PortfolioText className="h-[80vh] w-auto dark:invert dark:brightness-0" />

              {/* Divider */}
              <div className="sm:hidden pointer-events-none absolute -top-20 right-0 h-full">
                <div className="h-screen w-px bg-black dark:bg-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-px bg-black dark:bg-white" />

        {/* RIGHT SIDE */}

        <div className="relative flex items-center justify-center">
          <div className="hidden sm:block">
            <ModeToggle />
          </div>

          {/* <div className="hidden relative -left-8 xl:flex h-full w-full flex-col items-center justify-center">
            <div
              className="pointer-events-none absolute -top-10 left-[-2em] hidden h-full w-full bg-center bg-no-repeat bg-[url(/hero-elipse.png)] bg-size-[70%] dark:invert dark:brightness-0 lg:block"
            /> */}
          <div className="hidden relative left-20 md:left-12 lg:-left-6 xl:-left-8 sm:flex h-full w-full flex-col items-center justify-center">
            <div className="pointer-events-none absolute -top-10 left-[-2em] hidden h-full w-full bg-center bg-no-repeat xl:bg-[url(/hero-elipse.png)] bg-size-[70%] dark:invert dark:brightness-0 sm:block" />

            <h1
              className={`relative -left-20 -top-12 sm:top-20 xl:-top-12 z-10 text-[80px] scale-75 xl:scale-100 ${MazzardThin.className}`}
            >
              <span className="block">
                <span className={`text-xl ${MazzardThin.className}`}>
                  &lt;title&gt;
                </span>
                <span className={`text-5xl ${MazzardExtraLight.className}`}>
                  Hi,
                </span>
              </span>
              <span className="block -mt-12">
                I’m Lena
                <span className={`text-xl ${MazzardThin.className}`}>
                  &lt;/title&gt;
                </span>
              </span>
            </h1>
          </div>

          {/* Footer text */}
          <div className="hidden xl:block absolute bottom-10 right-10 dark:invert dark:brightness-0">
            <Logo className="w-75" />
          </div>

          <Mobile />
        </div>
        <Tablet />

        {/* MODALS */}
        <About isOpen={isAboutOpen} onClose={() => closeModal("isAboutOpen")} />

        <Projects
          isOpen={isProjectsOpen}
          onClose={() => closeModal("isProjectsOpen")}
        />

        <Contact
          isOpen={isContactOpen}
          onClose={() => closeModal("isContactOpen")}
        />
      </section>
    </>
  );
}
