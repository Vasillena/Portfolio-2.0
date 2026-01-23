"use client";

import {
  fadeInOverlay,
  openModalAnimation,
  resetHover,
  slideImageAndShowIcons,
  slideImageAndShowText,
} from "@/utils/animations";
import { useEffect, useRef } from "react";

import AboutIcon1 from "@/icons/about-icon-1.svg";
import AboutIcon2 from "@/icons/about-icon-2.svg";
import CloseIcon from "@/icons/close-icon.svg";
import Image from "next/image";
import { MazzardExtraLight } from "@/utils/fonts";
import MobileModal from "./MobileModal";
import Modal from "./Modal";
import { ModalButton } from "./ModalButtons";
import StackIcons from "./StackIcons";
import portrait from "@/public/portrait.png";

type AboutProps = {
  isOpen: boolean;
  onClose: () => void;
};

// const icons = Array.from({ length: 11 }, (_, i) => ({
//   id: i + 1,
//   img: `/stack-icon-${i + 1}.svg`,
//   title: `Stack icon ${i + 1}`,
// }));

export default function About({ isOpen, onClose }: AboutProps) {
  // const overlayRef = useRef<HTMLDivElement>(null);
  // const aboutRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!isOpen) return;

  //   fadeInOverlay(overlayRef.current);
  //   openModalAnimation(aboutRef.current);
  // }, [isOpen]);

  const handleInfoHoverEnter = () => {
    slideImageAndShowText(imgRef.current, textRef.current);
  };

  const handleStackHoverEnter = () => {
    slideImageAndShowIcons(imgRef.current, iconsRef.current);
  };

  const handleHoverLeave = () => {
    resetHover(imgRef.current, textRef.current, iconsRef.current);
  };

  const aboutText =
    " Highly motivated, with a brain wired for perfection and a heart that beats for the environment's protection. Introverted soul, once lost in gaming's might, now finds peace where bytes collide and pixels alight. Master of laws, half-engineer, coder, designer, long, long seeking for my dream career. Years have passed, and now I know, I want to be a unicorn, creating magic where art and code both grow. With a thirst for knowledge that knows no bounds, with dreams as big as my cats' yawns, forever curious, eager to know, cuz I don't need to “get a life”, for I'm a gamer, you see, with endless lives and worlds to decree.";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="hidden xl:flex flex-col items-center absolute top-8 right-8 gap-8">
        <ModalButton
          icon={<CloseIcon className="w-9 h-9" />}
          onClick={onClose}
        />

        <ModalButton
          icon={<AboutIcon1 className="w-9 h-9" />}
          label="Info"
          onMouseEnter={handleInfoHoverEnter}
          onMouseLeave={handleHoverLeave}
        />

        <ModalButton
          icon={<AboutIcon2 className="w-9 h-9" />}
          label="Stack"
          onMouseEnter={handleStackHoverEnter}
          onMouseLeave={handleHoverLeave}
        />
      </div>
      {/* <div className="hidden xl:flex flex-col items-center absolute z-10 top-8 right-8 gap-8">
        <button
          className="w-12 h-12 flex justify-center items-center bg-black text-white rounded-full hover:bg-gray-800"
          onClick={onClose}
        >
          <CloseIcon className="w-9 h-9" />
        </button>
        <div className="flex flex-col justify-center items-center gap-2">
          <button
            className="w-12 h-12 flex justify-center items-center bg-black text-white rounded-full  hover:bg-gray-800"
            onMouseEnter={handleInfoHoverEnter}
            onMouseLeave={handleHoverLeave}
          >
            <AboutIcon1 className="w-9 h-9" />
          </button>
          <p
            className={`text-lg text-center leading-5 ${MazzardExtraLight.className}`}
          >
            Info
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <button
            className="w-12 h-12 flex justify-center items-center bg-black text-white rounded-full hover:bg-gray-800"
            onMouseEnter={handleStackHoverEnter}
            onMouseLeave={handleHoverLeave}
          >
            <AboutIcon2 className="w-9 h-9" />
          </button>
          <p
            className={`text-lg text-center leading-5 ${MazzardExtraLight.className}`}
          >
            Stack
          </p>
        </div>
      </div> */}

      <div className="hidden xl:flex items-end justify-center w-full gap-4">
        <div ref={imgRef}>
          <div className="shrink-0">
            <Image
              src={portrait}
              alt="Portrait"
              width={683}
              height={571}
              priority
              className="h-[60vh] w-auto"
            />
          </div>
        </div>

        <div
          ref={textRef}
          className={`absolute w-120 text-xl text-justify leading-6 right-10  pointer-events-none ${MazzardExtraLight.className}`}
          style={{
            opacity: 0,
            transform: "translateX(50px)",
            // display: "none",
          }}
        >
          <p>{aboutText}</p>
        </div>

        <div
          ref={iconsRef}
          className="absolute w-120 flex-col items-center gap-8 right-10  pointer-events-none"
          style={{
            opacity: 0,
            transform: "translateX(50px)",
            // display: "none",
          }}
        >
          <StackIcons />
        </div>
      </div>

      {/* Mobile */}
      <MobileModal>
        <h2 className="text-3xl">About me</h2>
        <p className={`text-lg leading-5 ${MazzardExtraLight.className}`}>
          {aboutText}
        </p>
        <button className="text-lg px-8 py-1" onClick={onClose}>
          Close
        </button>
      </MobileModal>
    </Modal>
  );
}
