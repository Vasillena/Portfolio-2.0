import AboutIconM from "@/icons/m-about-icon.svg";
import BehanceIcon from "@/icons/socials-icon-5.svg";
import BehanceIconM from "@/icons/m-socials-icon-5.svg";
import ContactIconM from "@/icons/m-contact-icon.svg";
import CreativeIconM from "@/icons/m-creative-icon.svg";
import FacebookIcon from "@/icons/socials-icon-1.svg";
import FacebookIconM from "@/icons/m-socials-icon-1.svg";
import GitHubIcon from "@/icons/socials-icon-4.svg";
import GitHubIconM from "@/icons/m-socials-icon-4.svg";
import InstagramIcon from "@/icons/socials-icon-2.svg";
import InstagramIconM from "@/icons/m-socials-icon-2.svg";
import Link from "next/link";
import LinkedInIcon from "@/icons/socials-icon-3.svg";
import LinkedInIconM from "@/icons/m-socials-icon-3.svg";
import PlayerIconPauseM from "@/icons/m-player-icon-2.svg";
import PlayerIconStartM from "@/icons/m-player-icon-1.svg";
import PortraitM from "@/icons/m-portrait.svg";
import StackIconM from "@/icons/m-stack-icon.svg";
import TechIconM from "@/icons/m-tech-icon.svg";

type IconProps = {
  title?: string;
  href?: string;
  icon: IconName;
  onClick?: () => void;
};

const ICONS = {
  Facebook: { desktop: FacebookIcon, mobile: FacebookIconM },
  Instagram: { desktop: InstagramIcon, mobile: InstagramIconM },
  LinkedIn: { desktop: LinkedInIcon, mobile: LinkedInIconM },
  GitHub: { desktop: GitHubIcon, mobile: GitHubIconM },
  Behance: { desktop: BehanceIcon, mobile: BehanceIconM },
  About: { desktop: undefined, mobile: AboutIconM },
  Stack: { desktop: undefined, mobile: StackIconM },
  Contact: { desktop: undefined, mobile: ContactIconM },
  PlayerStart: { desktop: undefined, mobile: PlayerIconStartM },
  PlayerPause: { desktop: undefined, mobile: PlayerIconPauseM },
  Tech: { desktop: undefined, mobile: TechIconM },
  Creative: { desktop: undefined, mobile: CreativeIconM },
  Portrait: { desktop: undefined, mobile: PortraitM },
} as const;

export type IconName = keyof typeof ICONS;

export default function Icon({ title, href, icon, onClick }: IconProps) {
  const { desktop: DesktopIcon, mobile: MobileIcon } = ICONS[icon];

  const content = (
    <>
      {DesktopIcon && (
        <DesktopIcon className="hidden xl:block w-9 h-9 dark:invert dark:brightness-0" />
      )}

      <div className="xl:hidden flex flex-col justify-center items-center sm:w-full sm:h-full">
        {/* <MobileIcon className="w-full h-full sm:p-2" /> */}
        <MobileIcon className="w-full h-full" />

        <p className="md:text-4xl">{title}</p>
      </div>
    </>
  );

  return href ? (
    <Link
      href={href}
      target="_blank"
      className="hover:scale-110 sm:w-full sm:h-full"
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
