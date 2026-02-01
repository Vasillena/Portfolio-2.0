/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { unlockOverlayFade, unlockOverlaySwipeUp } from "@/utils/animations";
import { useEffect, useRef, useState } from "react";

import Logo from "@/icons/v-logo.svg";

const STORAGE_KEY = "site_unlocked";

export default function SiteOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const startY = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  /* ------------------ STATE ------------------ */
  const [locked, setLocked] = useState<boolean | null>(null);
  const [isTouch, setIsTouch] = useState<boolean | null>(null);

  const [showVideo, setShowVideo] = useState(false);
  const [showFade, setShowFade] = useState(false);
  const [showButton, setShowButton] = useState(true);

  /* ------------------ INIT ------------------ */
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 🔁 detect hard reload
    const nav = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;

    if (nav?.type === "reload") {
      sessionStorage.removeItem(STORAGE_KEY);
    }

    // 🔐 check session unlock
    const unlocked = sessionStorage.getItem(STORAGE_KEY);
    setLocked(!unlocked);

    // 📱 detect touch device (after mount → no flicker)
    const touch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    setIsTouch(touch);
  }, []);

  /* ------------------ UNLOCK ------------------ */
  const unlockSite = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    unlockOverlayFade(overlayRef.current, () => setLocked(false));
  };

  /* ------------------ TOUCH HANDLERS ------------------ */
  const onTouchStart = (e: React.TouchEvent) => {
    if (!isTouch) return;
    startY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isTouch || startY.current === null) return;

    const delta = startY.current - e.changedTouches[0].clientY;

    if (delta > 80) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      unlockOverlaySwipeUp(overlayRef.current, () => setLocked(false));
    }

    startY.current = null;
  };

  /* ------------------ DESKTOP VIDEO ------------------ */
  // const handleStartClick = () => {
  //   setShowButton(false);
  //   setShowVideo(true);
  // };

  const handleStartClick = () => {
    setShowButton(false);
    setShowVideo(true);

    // стартирай аудиото
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          console.log("Audio started");
        })
        .catch((err) => {
          console.warn("Audio failed to play:", err);
        });
    }

    // стартирай видео
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [showVideo]);

  // const handleVideoEnd = () => {
  //   setShowFade(true);
  //   setTimeout(unlockSite, 1000);
  // };

  const handleVideoEnd = () => {
    setShowFade(true);

    // меко заглъхване (по избор)
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }

    setTimeout(unlockSite, 1000);
  };

  /* ------------------ GUARDS ------------------ */
  if (locked === null || isTouch === null || !locked) return null;

  /* ------------------ RENDER ------------------ */
  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-9999 bg-white text-black"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ================= TOUCH DEVICES ================= */}
      {isTouch && (
        <div
          className="
            h-full flex flex-col items-center justify-center text-center
            bg-[url(/bg-l.png)] dark:bg-[url(/bg-d.png)]
            bg-no-repeat bg-center
            bg-size-[460%] sm:bg-size-[300%] md:bg-size-[170%]
            bg-white dark:bg-[#151515]
          "
        >
          <Logo className="w-80 md:w-160 h-auto dark:invert dark:brightness-0" />

          <p className="text-sm opacity-60 mt-20 mb-6 dark:text-white">
            Swipe up to unlock
          </p>

          <div className="h-10 w-1 rounded-full bg-black/40 dark:bg-white/40 animate-pulse" />
        </div>
      )}

      {/* ================= DESKTOP ================= */}
      {!isTouch && (
        <div className="fixed inset-0 overflow-hidden">
          {showVideo && (
            <>
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="/lock-screen.webm"
                muted
                playsInline
                onEnded={handleVideoEnd}
              />
              <audio
                ref={audioRef}
                src="/lock-screen.mp3"
                preload="auto"
                autoPlay
                controls={false}
                className="hidden"
              />
            </>
          )}

          <div
            className={`absolute inset-0 bg-white transition-opacity duration-1000 ${
              showFade ? "opacity-100" : "opacity-0"
            }`}
          />

          {showButton && (
            <button
              onClick={handleStartClick}
              className="
                absolute inset-0 m-auto h-fit w-fit
                px-10 py-3 rounded-full
                border border-black text-black
                bg-white/80 backdrop-blur
                hover:bg-black hover:text-white
                transition-all duration-300
              "
            >
              ENTER EXPERIENCE
            </button>
          )}
        </div>
      )}
    </div>
  );
}
