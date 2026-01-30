"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type ModalContextType = {
  isAboutOpen: boolean;
  isProjectsOpen: boolean;
  isContactOpen: boolean;
  isStackOpen: boolean;
  isMobileTechOpen: boolean;
  isMobileCreativeOpen: boolean;
  openModal: (
    name: keyof Omit<ModalContextType, "openModal" | "closeModal">
  ) => void;
  closeModal: (
    name: keyof Omit<ModalContextType, "openModal" | "closeModal">
  ) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isStackOpen, setIsStackOpen] = useState(false);
  const [isMobileTechOpen, setIsMobileTechOpen] = useState(false);
  const [isMobileCreativeOpen, setIsMobileCreativeOpen] = useState(false);

  const openModal = (
    name: keyof Omit<ModalContextType, "openModal" | "closeModal">
  ) => {
    switch (name) {
      case "isAboutOpen":
        setIsAboutOpen(true);
        break;
      case "isProjectsOpen":
        setIsProjectsOpen(true);
        break;
      case "isContactOpen":
        setIsContactOpen(true);
        break;
      case "isStackOpen":
        setIsStackOpen(true);
        break;
      case "isMobileTechOpen":
        setIsMobileTechOpen(true);
        break;
      case "isMobileCreativeOpen":
        setIsMobileCreativeOpen(true);
        break;
    }
  };

  const closeModal = (
    name: keyof Omit<ModalContextType, "openModal" | "closeModal">
  ) => {
    switch (name) {
      case "isAboutOpen":
        setIsAboutOpen(false);
        break;
      case "isProjectsOpen":
        setIsProjectsOpen(false);
        break;
      case "isContactOpen":
        setIsContactOpen(false);
        break;
      case "isStackOpen":
        setIsStackOpen(false);
        break;
      case "isMobileTechOpen":
        setIsMobileTechOpen(false);
        break;
      case "isMobileCreativeOpen":
        setIsMobileCreativeOpen(false);
        break;
    }
  };

  return (
    <ModalContext.Provider
      value={{
        isAboutOpen,
        isProjectsOpen,
        isContactOpen,
        isStackOpen,
        isMobileTechOpen,
        isMobileCreativeOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
}
