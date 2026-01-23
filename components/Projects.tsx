"use client";

import { useRef, useState } from "react";

import CloseIcon from "@/icons/close-icon.svg";
import CreativeIcon from "@/icons/creative-icon.svg";
import CreativeProjects from "./CreativeProjects";
import Modal from "./Modal";
import { ModalButton } from "./ModalButtons";
import TechIcon from "@/icons/tech-icon.svg";
import TechProjects from "./TechProjects";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Projects({ isOpen, onClose }: ModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<"tech" | "creative">("tech");

  // Scale gallery based on modal height
  // useEffect(() => {
  //   if (!isOpen) return;

  //   fadeInOverlay(overlayRef.current);
  //   openModalAnimation(modalRef.current);
  // }, [isOpen]);

  // Scale content on open + resize
  // useEffect(() => {
  //   if (!isOpen) return;

  //   const updateScale = () =>
  //     scaleContentToFit(modalRef.current, contentRef.current);

  //   updateScale();
  //   window.addEventListener("resize", updateScale);
  //   return () => window.removeEventListener("resize", updateScale);
  // }, [isOpen]);

  if (!isOpen) return null;

  return (
    // <div
    //   ref={overlayRef}
    //   className="fixed inset-0 z-50 flex items-center justify-center bg-slate-800/25 backdrop-blur-xs drop-shadow-lg"
    //   onClick={onClose}
    // >
    //   <div
    //     ref={modalRef}
    //     className="relative w-[80vw] h-[80vh] rounded-lg bg-white p-8 text-black flex  justify-center items-center overflow-hidden"
    //     onClick={(e) => e.stopPropagation()}
    //   >
    <Modal isOpen={isOpen} onClose={onClose} contentRef={contentRef}>
      <div className="hidden xl:flex flex-col items-center absolute z-10 top-8 right-8 gap-8">
        <ModalButton
          icon={<CloseIcon className="w-9 h-9" />}
          onClick={onClose}
        />

        <ModalButton
          icon={<TechIcon className="w-9 h-9" />}
          label="Tech"
          onClick={() => setView("tech")}
        />

        <ModalButton
          icon={<CreativeIcon className="w-9 h-9" />}
          label="Creative"
          onClick={() => setView("creative")}
        />
      </div>
      <div
        ref={contentRef}
        className="w-full flex flex-col items-center justify-center gap-8 origin-top-center"
      >
        {view === "tech" && <TechProjects />}
        {view === "creative" && <CreativeProjects />}
      </div>
    </Modal>
  );
}
