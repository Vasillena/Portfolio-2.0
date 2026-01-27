import Link from "next/link";
import { ICONS, type IconName } from "@/utils/iconsLibrary";

type IconProps = {
  title?: string;
  href?: string;
  icon: IconName;
  onClick?: () => void;
  showLabel?: boolean;
  invert?: boolean;
};

export default function Icon({
  title,
  href,
  icon,
  onClick,
  showLabel = true,
  invert = true,
}: IconProps) {
  const { desktop: DesktopIcon, mobile: MobileIcon } = ICONS[icon];

  const content = (
    <>
      {DesktopIcon && (
        <DesktopIcon
          aria-hidden="true"
          className={`hidden xl:flex w-9 h-9  justify-self-center ${
            invert && "dark:invert dark:brightness-0"
          }`}
        />
      )}

      {MobileIcon && (
        <div className="xl:hidden flex flex-col justify-center items-center sm:w-full sm:h-full">
          {/* <MobileIcon className="w-full h-full sm:p-2" /> */}
          <MobileIcon aria-hidden="true" className="w-full h-full" />
          {showLabel && title && <p className="md:text-2xl">{title}</p>}
        </div>
      )}
    </>
  );

  return href ? (
    <Link
      href={href}
      target="_blank"
      className="xl:hover:scale-110 sm:w-full sm:h-full"
      aria-label={title}
    >
      {content}
    </Link>
  ) : (
    <button
      // type="button"
      className="sm:w-full sm:h-full"
      aria-label={title}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
