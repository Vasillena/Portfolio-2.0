import { MazzardExtraLight } from "@/utils/fonts";
import { ReactNode } from "react";

type ModalIconButtonProps = {
  icon: ReactNode;
  label?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function ModalButton({
  icon,
  label,
  ...handlers
}: ModalIconButtonProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        className="w-12 h-12 flex items-center justify-center
                     bg-black text-white rounded-full hover:bg-gray-800"
        {...handlers}
      >
        {icon}
      </button>

      {label && (
        <p
          className={`text-lg text-center leading-5 ${MazzardExtraLight.className}`}
        >
          {label}
        </p>
      )}
    </div>
  );
}
