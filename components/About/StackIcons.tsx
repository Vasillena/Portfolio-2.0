"use client";

import Icon from "../Common/Icon";
import type { IconName } from "@/utils/iconsLibrary";
import { MazzardExtraLight } from "@/utils/fonts";
import { memo } from "react";
import { useBreakpoints } from "@/utils/useBreakpoints";

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

const IconsRow = memo(function IconsRow({ icons }: { icons: IconItem[] }) {
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
});

export default function StackIcons() {
  const { up } = useBreakpoints();

  return up("xl") ? (
    <div className="flex flex-col items-center gap-8">
      <IconsRow icons={techIcons} />
      <IconsRow icons={creativeIcons} />
    </div>
  ) : (
    <div>
      <IconsRow icons={icons} />
    </div>
  );
}
