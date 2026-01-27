"use client";

import Icon from "./Icon";
import type { IconName } from "@/utils/iconsLibrary";
// import AfterEffects from "@/icons/stack-icon-10.svg";
// import CSS from "@/icons/stack-icon-3.svg";
// import Figma from "@/icons/stack-icon-7.svg";
// import HTML from "@/icons/stack-icon-2.svg";
// import Illustrator from "@/icons/stack-icon-9.svg";
// import JavaScript from "@/icons/stack-icon-1.svg";
import { MazzardExtraLight } from "@/utils/fonts";
// import type { FC, SVGProps } from "react";

// import Next from "@/icons/stack-icon-5.svg";
// import Photoshop from "@/icons/stack-icon-8.svg";
// import React from "@/icons/stack-icon-4.svg";
// import Tailwind from "@/icons/stack-icon-6.svg";
// import UIUX from "@/icons/stack-icon-11.svg";

// type IconComponent = FC<SVGProps<SVGSVGElement>>;

type IconItem = {
  id: number;
  icon: IconName;
  title: string;
};

const icons: IconItem[] = [
  { id: 1, icon: "JavaScript", title: "Java Script" },
  { id: 2, icon: "HTML", title: "HTML" },
  { id: 3, icon: "CSS", title: "CSS" },
  { id: 4, icon: "React", title: "React" },
  { id: 5, icon: "Next", title: "Next.js" },
  { id: 6, icon: "Tailwind", title: "Tailwind" },
  { id: 7, icon: "Figma", title: "Figma" },
  { id: 8, icon: "Photoshop", title: "Photoshop" },
  { id: 9, icon: "Illustrator", title: "Illustrator" },
  { id: 10, icon: "AfterEffects", title: "After Effects" },
  { id: 11, icon: "UIUX", title: "UI/UX" },
];

const techIcons = icons.slice(0, 6);
const creativeIcons = icons.slice(6);

function IconsRow({ icons }: { icons: IconItem[] }) {
  return (
    <div className="flex flex-wrap xl:flex-nowrap justify-center items-start gap-8">
      {icons.map(({ id, icon, title }) => (
        <div key={id} className="flex flex-col items-center gap-2 w-12">
          <div className="w-full h-auto">
            <Icon icon={icon} title={title} showLabel={false} invert={false} />
          </div>
          <p
            className={`text-md text-center leading-5 ${MazzardExtraLight.className}`}
          >
            {title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function StackIcons() {
  return (
    <>
      <div className="hidden xl:flex flex-col items-center gap-8">
        <IconsRow icons={techIcons} />
        <IconsRow icons={creativeIcons} />
      </div>
      <div className="block xl:hidden">
        <IconsRow icons={icons} />
      </div>
    </>
  );
}
