"use client";

import {
  resetHover,
  slideImageAndShowIcons,
  slideImageAndShowText,
} from "@/utils/animations";
import { useCallback, useRef } from "react";

import AboutIcon1 from "@/icons/about-icon-1.svg";
import AboutIcon2 from "@/icons/about-icon-2.svg";
import CloseIcon from "@/icons/close-icon.svg";
import Image from "next/image";
import { MazzardExtraLight } from "@/utils/fonts";
import MobileModal from "../Responsive/MobileModal";
import Modal from "../Common/Modal";
import { ModalButton } from "../Common/ModalButtons";
import StackIcons from "./StackIcons";
import portrait from "@/public/portrait.webp";
import { useBreakpoints } from "@/utils/useBreakpoints";

type AboutProps = {
  isOpen: boolean;
  onClose: () => void;
};

const aboutText =
  " Highly motivated, with a brain wired for perfection and a heart that beats for the environment's protection. Introverted soul, once lost in gaming's might, now finds peace where bytes collide and pixels alight. Master of laws, half-engineer, coder, designer, long, long seeking for my dream career. Years have passed, and now I know, I want to be a unicorn, creating magic where art and code both grow. With a thirst for knowledge that knows no bounds, with dreams as big as my cats' yawns, forever curious, eager to know, cuz I don't need to “get a life”, for I'm a gamer, you see, with endless lives and worlds to decree.";

export default function About({ isOpen, onClose }: AboutProps) {
  const { up } = useBreakpoints();

  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  // const handleInfoHoverEnter = () => {
  //   slideImageAndShowText(imgRef.current, textRef.current);
  // };

  // const handleStackHoverEnter = () => {
  //   slideImageAndShowIcons(imgRef.current, iconsRef.current);
  // };

  // const handleHoverLeave = () => {
  //   resetHover(imgRef.current, textRef.current, iconsRef.current);
  // };

  const handleInfoHoverEnter = useCallback(() => {
    slideImageAndShowText(imgRef.current, textRef.current);
  }, []);

  const handleStackHoverEnter = useCallback(() => {
    slideImageAndShowIcons(imgRef.current, iconsRef.current);
  }, []);

  const handleHoverLeave = useCallback(() => {
    resetHover(imgRef.current, textRef.current, iconsRef.current);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {up("xl") && (
        <>
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

          <div className="hidden xl:flex items-end justify-center w-full gap-4">
            <div ref={imgRef}>
              <div className="shrink-0">
                <Image
                  src={portrait}
                  alt="Portrait"
                  width={683}
                  height={571}
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
              }}
            >
              <StackIcons />
            </div>
          </div>
        </>
      )}

      {/* Mobile */}
      <MobileModal icon="🦄">
        <h2 className="text-3xl sm:text-4xl">About me</h2>
        <p
          className={`text-lg sm:text-xl leading-5 ${MazzardExtraLight.className}`}
        >
          {aboutText}
        </p>
        <button className="text-lg sm:text-xl px-8 py-1" onClick={onClose}>
          Close
        </button>
      </MobileModal>
    </Modal>
  );
}
