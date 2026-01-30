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
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    fadeInOverlay(overlayRef.current);
    openModalAnimation(modalRef.current);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const updateScale = () => {
      if (!modalRef.current || !contentRef?.current || window.innerWidth < 1280)
        return;

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
        className="relative max-h-[90vh] w-[90vw] lg:w-[60vw] xl:w-[80vw] xl:h-[80vh] rounded-4xl xl:rounded-lg bg-white p-8 text-black flex flex-col xl:flex-none justify-center items-center "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
