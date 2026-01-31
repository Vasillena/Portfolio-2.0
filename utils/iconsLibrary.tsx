// import { FC, SVGProps } from "react";

import AboutIconM from "@/icons/m-about-icon.svg";
import AfterEffects from "@/icons/stack-icon-10.svg";
import AfterEffectsM from "@/icons/m-stack-icon-10.svg";
import BehanceIcon from "@/icons/socials-icon-5.svg";
import BehanceIconM from "@/icons/m-socials-icon-5.svg";
import CSS from "@/icons/stack-icon-3.svg";
import CSSM from "@/icons/m-stack-icon-3.svg";
import ContactIconM from "@/icons/m-contact-icon.svg";
import CreativeIconM from "@/icons/m-creative-icon.svg";
import FacebookIcon from "@/icons/socials-icon-1.svg";
import FacebookIconM from "@/icons/m-socials-icon-1.svg";
import Figma from "@/icons/stack-icon-7.svg";
import FigmaM from "@/icons/m-stack-icon-7.svg";
import GitHubIcon from "@/icons/socials-icon-4.svg";
import GitHubIconM from "@/icons/m-socials-icon-4.svg";
import HTML from "@/icons/stack-icon-2.svg";
import HTMLM from "@/icons/m-stack-icon-2.svg";
import Illustrator from "@/icons/stack-icon-9.svg";
import IllustratorM from "@/icons/m-stack-icon-9.svg";
import InstagramIcon from "@/icons/socials-icon-2.svg";
import InstagramIconM from "@/icons/m-socials-icon-2.svg";
import JavaScript from "@/icons/stack-icon-1.svg";
import JavaScriptM from "@/icons/m-stack-icon-1.svg";
import LinkedInIcon from "@/icons/socials-icon-3.svg";
import LinkedInIconM from "@/icons/m-socials-icon-3.svg";
import Next from "@/icons/stack-icon-5.svg";
import NextM from "@/icons/m-stack-icon-5.svg";
import Photoshop from "@/icons/stack-icon-8.svg";
import PhotoshopM from "@/icons/m-stack-icon-8.svg";
import PlayerIconPauseM from "@/icons/m-player-icon-2.svg";
import PlayerIconStartM from "@/icons/m-player-icon-1.svg";
import PortraitM from "@/icons/m-portrait.svg";
import React from "@/icons/stack-icon-4.svg";
import ReactM from "@/icons/m-stack-icon-4.svg";
import StackIconM from "@/icons/m-stack-icon.svg";
import Tailwind from "@/icons/stack-icon-6.svg";
import TailwindM from "@/icons/m-stack-icon-6.svg";
import TechIconM from "@/icons/m-tech-icon.svg";
import UIUX from "@/icons/stack-icon-11.svg";
import UIUXM from "@/icons/m-stack-icon-11.svg";

export const ICONS = {
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
  AfterEffects: { desktop: AfterEffects, mobile: AfterEffectsM },
  CSS: { desktop: CSS, mobile: CSSM },
  Figma: { desktop: Figma, mobile: FigmaM },
  HTML: { desktop: HTML, mobile: HTMLM },
  Illustrator: { desktop: Illustrator, mobile: IllustratorM },
  JavaScript: { desktop: JavaScript, mobile: JavaScriptM },
  Next: { desktop: Next, mobile: NextM },
  Photoshop: { desktop: Photoshop, mobile: PhotoshopM },
  React: { desktop: React, mobile: ReactM },
  Tailwind: { desktop: Tailwind, mobile: TailwindM },
  UIUX: { desktop: UIUX, mobile: UIUXM },
} as const;

export type IconName = keyof typeof ICONS;
