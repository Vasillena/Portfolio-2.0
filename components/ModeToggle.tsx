/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useRef, useState } from "react";

import BulbDark from "@/icons/theme-2.svg";
import BulbLight from "@/icons/theme.svg";
import BulbM from "@/icons/m-theme-icon-l.svg";
import MagicText from "@/icons/magic.svg";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    clickSoundRef.current = new Audio("/click.mp3");
    clickSoundRef.current.volume = 1;
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    clickSoundRef.current?.play();
    setTheme(isDark ? "light" : "dark");
  };

  return (
    // <div>
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="sm:absolute sm:-top-6 sm:right-4 sm:w-27 sm:h-42 sm:z-10 flex flex-col items-center animate-glow sm:scale-75"
    >
      {isDark ? (
        // <Image src={bulbDark} width={60} height={93} alt="Theme toggle" />
        <>
          <div className="hidden sm:block">
            <BulbDark className="w-15 h-23.25" />
          </div>
          {/* <div className="xl:hidden">
            <Icon title="Theme" icon="Theme" />
          </div> */}
          <div className="sm:hidden flex flex-col justify-center items-center sm:w-full sm:h-full">
            <BulbM className="w-full h-full sm:p-2" />
            <p className="md:text-4xl">Theme</p>
          </div>
        </>
      ) : (
        <>
          {/* <Image src={bulbLight} width={60} height={93} alt="Theme toggle" />
           */}
          <>
            <div className="hidden sm:block">
              <BulbLight className="w-15 h-23.25" />
            </div>
            {/* <div className="xl:hidden">
              <Icon title="Theme" icon="Theme" />
            </div> */}
            <div className="sm:hidden flex flex-col justify-center items-center sm:w-full sm:h-full">
              <BulbM className="w-full h-full sm:p-2" />
              <p className="md:text-4xl">Theme</p>
            </div>
          </>

          {/* <Image
              src={magicText}
              width={108}
              height={70}
              alt="Click for some magic"
              className="scale-[1.8] mt-4 opacity-80 animate-pulse"
            /> */}
          <MagicText className="hidden xl:block w-27 h-17.5 mt-4 opacity-80 animate-pulse" />
        </>
      )}
    </button>
    // </div>
  );
};

export default ModeToggle;
