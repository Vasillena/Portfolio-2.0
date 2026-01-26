"use client";

import { useState } from "react";
import Icon, { type IconName } from "./Icon";
import { useModal } from "@/utils/ModalContext";

type DockItem = {
  title: string;
  icon: IconName;
  href?: string;
  onClick?: () => void;
};

export default function TabletDock() {
  const { isAboutOpen, isProjectsOpen, isContactOpen, openModal, closeModal } =
    useModal();
  const [hovered, setHovered] = useState<number | null>(null);

  const DOCK_ITEMS: DockItem[] = [
    { title: "About", icon: "About", onClick: () => openModal("isAboutOpen") },
    { title: "Stack", icon: "Stack", onClick: () => openModal("isStackOpen") },
    {
      title: "Creative",
      icon: "Creative",
      onClick: () => openModal("isMobileCreativeOpen"),
    },
    {
      title: "Tech",
      icon: "Tech",
      onClick: () => openModal("isMobileTechOpen"),
    },
    {
      title: "Contact",
      icon: "Contact",
      onClick: () => openModal("isContactOpen"),
    },

    {
      title: "Facebook",
      icon: "Facebook",
      href: "https://facebook.com/...",
    },
    {
      title: "Instagram",
      icon: "Instagram",
      href: "https://instagram.com/...",
    },
    {
      title: "LinkedIn",
      icon: "LinkedIn",
      href: "https://linkedin.com/in/...",
    },
    {
      title: "GitHub",
      icon: "GitHub",
      href: "https://github.com/...",
    },
    {
      title: "Behance",
      icon: "Behance",
      href: "https://behance.net/...",
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
      flex
      gap-[clamp(6px,1.5vw,12px)]
      px-[clamp(12px,3vw,24px)]
      py-[clamp(4px,1vw,8px)]
      rounded-3xl
      bg-white/30 dark:bg-black/30
      backdrop-blur-xl
      border border-white/20
      shadow-2xl
      max-w-[95vw]
    "
      >
        {DOCK_ITEMS.map((item, index) => {
          const isHovered = hovered === index;
          const isNear = hovered !== null && Math.abs(hovered - index) === 1;

          return (
            <div
              key={item.title}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="transition-all duration-200"
              style={{
                transform: isHovered
                  ? "scale(1.45)"
                  : isNear
                  ? "scale(1.2)"
                  : "scale(1)",
              }}
            >
              <div className="w-[clamp(42px,6vw,67px)] h-[clamp(42px,6vw,67px)] flex items-center justify-center">
                <Icon
                  icon={item.icon}
                  href={item.href}
                  onClick={item.onClick}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
