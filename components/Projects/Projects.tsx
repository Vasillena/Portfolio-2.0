"use client";

import { useRef, useState } from "react";

import CloseIcon from "@/icons/close-icon.svg";
import CreativeIcon from "@/icons/creative-icon.svg";
import Modal from "../Common/Modal";
import { ModalButton } from "../Common/ModalButtons";
import ProjectsCreative from "./ProjectsCreative";
import ProjectsTech from "./ProjectsTech";
import TechIcon from "@/icons/tech-icon.svg";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Projects({ isOpen, onClose }: ModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<"tech" | "creative">("tech");

  if (!isOpen) return null;

  return (
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
        {view === "tech" && <ProjectsTech />}
        {view === "creative" && <ProjectsCreative />}
      </div>
    </Modal>
  );
}
