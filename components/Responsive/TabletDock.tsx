import Icon from "../Common/Icon";
import type { IconName } from "@/utils/iconsLibrary";
import { useModal } from "@/utils/ModalProvider";

type DockItem = {
  title: string;
  icon: IconName;
  href?: string;
  onClick?: () => void;
};

export default function TabletDock() {
  const { openModal } = useModal();

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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
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
        {DOCK_ITEMS.map((item) => {
          return (
            <div key={item.title}>
              <div className="w-[clamp(42px,6vw,67px)] h-[clamp(42px,6vw,67px)] flex items-center justify-center">
                <Icon
                  icon={item.icon}
                  title={item.title}
                  href={item.href}
                  onClick={item.onClick}
                  showLabel={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
