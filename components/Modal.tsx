"use client";

import { ReactNode, useEffect, useRef } from "react";
import {
  fadeInOverlay,
  openModalAnimation,
  scaleContentToFit,
} from "@/utils/animations";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  contentRef?: React.RefObject<HTMLDivElement | null>;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  contentRef,
}: //   className = "",
ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     if (!isOpen) return;

  //     gsap.fromTo(
  //       overlayRef.current,
  //       { opacity: 0 },
  //       { opacity: 1, duration: 0.3 }
  //     );

  //     gsap.fromTo(
  //       modalRef.current,
  //       { opacity: 0, scale: 0.95, y: 50 },
  //       { opacity: 1, scale: 1, y: 0, duration: 0.4 }
  //     );
  //   }, [isOpen]);

  //   if (!isOpen) return null;

  useEffect(() => {
    if (!isOpen) return;

    fadeInOverlay(overlayRef.current);
    openModalAnimation(modalRef.current);
  }, [isOpen]);

  // useEffect(() => {
  //   if (!isOpen || !contentRef?.current) return;

  //   const updateScale = () =>
  //     scaleContentToFit(modalRef.current, contentRef.current);

  //   updateScale();
  //   window.addEventListener("resize", updateScale);
  //   return () => window.removeEventListener("resize", updateScale);
  // }, [isOpen, contentRef]);

  useEffect(() => {
    if (!isOpen) return;

    const updateScale = () => {
      if (!modalRef.current || !contentRef?.current) return;
      scaleContentToFit(modalRef.current, contentRef.current);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [isOpen, contentRef]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-800/25 backdrop-blur-xs drop-shadow-lg"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative w-[90vw] lg:w-[60vw] xl:w-[80vw] xl:h-[80vh] rounded-4xl xl:rounded-lg bg-white p-8 text-black flex flex-col xl:flex-none justify-center items-center "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
