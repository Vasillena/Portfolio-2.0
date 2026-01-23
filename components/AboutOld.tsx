"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import gsap from "gsap";
import portrait from "@/public/portrait.png";

type AboutProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AboutOld({ isOpen, onClose }: AboutProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const butRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );

    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, scale: 0.95, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4 }
    );
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleContent = () => {
    if (imgRef.current && textRef.current && !isExpanded) {
      gsap.to(imgRef.current, {
        x: -60,
        duration: 0.8,
        ease: "power4.out",
      });
      gsap.to(textRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power4.out",
        onStart: () => {
          if (textRef.current) textRef.current.style.display = "block";
        },
      });

      setIsExpanded(true);
    } else {
      gsap.to(imgRef.current, {
        x: 0,
        duration: 0.8,
        ease: "power4.out",
      });
      gsap.to(textRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power4.out",
        onComplete: () => {
          if (textRef.current) textRef.current.style.display = "none";
        },
      });
      setIsExpanded(false);
    }
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-800/25 backdrop-blur-xs drop-shadow-lg"
      onClick={() => {
        setIsExpanded(false);
        onClose();
      }}
    >
      <div
        ref={aboutRef}
        className="relative w-[80vw] h-[80vh] rounded-lg bg-white p-8 text-black flex flex-col justify-end items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image + Buttons */}
        <div
          //   ref={imgRef}
          className="flex items-end justify-center w-full gap-4"
        >
          {/* Image */}
          <div ref={imgRef}>
            <div
              //   ref={butRef}
              className="absolute flex flex-col z-10 top-1/3 left-[52%] gap-8"
            >
              <button
                className="w-12 h-12 left-1/2 -translate-x-2/3 bg-black text-white rounded-full  hover:bg-gray-800"
                onClick={toggleContent}
                //   onMouseLeave={handleHoverLeave}
              >
                <i className="fas fa-play"></i>
              </button>
              <button
                className="w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800"
                onClick={toggleContent}
              >
                <i className="fas fa-pause"></i>
              </button>
            </div>
            <div
              // ref={imgRef}
              className="shrink-0"
            >
              <Image
                src={portrait}
                alt="Decor"
                width={683}
                height={571}
                priority
                className="h-[60vh] w-auto"
              />
            </div>
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className="w-120 -ml-54 text-justify"
            style={{
              opacity: 0,
              transform: "translateX(50px)",
              display: "none",
            }}
          >
            <p>
              Highly motivated, with a brain wired for perfection and a heart
              that beats for the environment&apos;s protection. Introverted
              soul, once lost in gaming&apos;s might, now finds peace where
              bytes collide and pixels alight. Master of laws, half-engineer,
              coder, designer, long, long seeking for my dream career. Years
              have passed, and now I know, I want to be a unicorn, creating
              magic where art and code both grow. With a thirst for knowledge
              that knows no bounds, with dreams as big as my cats&apos; yawns,
              forever curious, eager to know, cuz I don&apos;t need to “get a
              life”, for I&apos;m a gamer, you see, with endless lives and
              worlds to decree.
            </p>
          </div>
        </div>

        {/* Close */}
        <div className="self-end">
          <button
            className="mt-2 rounded bg-black text-white px-4 py-2 hover:bg-gray-800"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
