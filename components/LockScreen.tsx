"use client";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";

export default function SiteOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number | null>(null);
  const [locked, setLocked] = useState(true);

  const unlockMobile = () => {
    if (!overlayRef.current) return;

    gsap.to(overlayRef.current, {
      y: "-100%",
      duration: 0.9,
      ease: "power3.inOut",
      onComplete: () => setLocked(false),
    });
  };

  const unlockDesktop = () => {
    if (!overlayRef.current) return;

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 1.8,
      ease: "power2.out",
      onComplete: () => setLocked(false),
    });
  };

  const onTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!startY.current) return;

    const delta = startY.current - e.changedTouches[0].clientY;

    if (delta > 80) {
      unlockMobile();
    }

    startY.current = null;
  };

  if (!locked) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-black text-white
                 flex items-center justify-center"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* MOBILE / TABLET */}
      <div className="xl:hidden text-center">
        <p className="text-sm opacity-60 mb-6">Swipe up to unlock</p>
        <div className="h-10 w-1 rounded-full bg-white/40 mx-auto animate-pulse" />
      </div>

      {/* DESKTOP */}
      <div className="hidden xl:flex flex-col items-center gap-6">
        <h1 className="text-3xl">Welcome</h1>
        <button
          onClick={unlockDesktop}
          className="px-8 py-3 border border-white rounded-full
                     hover:bg-white hover:text-black transition"
        >
          Enter experience
        </button>
      </div>
    </div>
  );
}
