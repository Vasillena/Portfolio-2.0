import Clock from "./Clock";
import Icon from "../Common/Icon";
import MobileCreative from "./MobileCreative";
import MobileStack from "./MobileStack";
import MobileTech from "./MobileTech";
import ModeToggle from "../Common/ModeToggle";
import dynamic from "next/dynamic";
import { useBreakpoints } from "@/utils/useBreakpoints";
import { useModal } from "@/utils/ModalProvider";

const Player = dynamic(() => import("./Player"), { ssr: false });

export default function Mobile() {
  const { openModal } = useModal();
  const { down } = useBreakpoints();

  return (
    <>
      <div className="sm:hidden grid col-span-3 grid-template-rows:repeat(7, minmax(0, 1fr)) w-full h-dvh items-center sm:py-2">
        <div className="w-full h-full flex col-span-3 row-span-2 gap-x-6 justify-center items-center">
          <div className="w-full h-full flex-[2.2] flex justify-center items-center">
            {down("sm") && <Clock />}
          </div>
          <div className="flex flex-col flex-1 items-center content-center">
            <div className="w-full h-full ">
              <ModeToggle />
            </div>
            <div className="w-full h-full">
              <Icon
                title="About"
                icon="About"
                onClick={() => openModal("isAboutOpen")}
              />
            </div>
          </div>
        </div>

        <div className="w-full h-full col-span-3 flex justify-center items-center gap-x-6">
          <div className="flex-[2.2] items-center">
            {down("sm") && <Player src="/cloud-of-sorrow.mp3" />}
          </div>

          <div className="flex-1">
            <Icon
              title="Stack"
              icon="Stack"
              onClick={() => openModal("isStackOpen")}
            />
          </div>
        </div>

        <div className="flex col-span-3 w-full h-full gap-x-6 justify-center items-center">
          <Icon
            title="Creative"
            icon="Creative"
            onClick={() => openModal("isMobileCreativeOpen")}
          />

          <Icon
            title="Tech"
            icon="Tech"
            onClick={() => openModal("isMobileTechOpen")}
          />

          <Icon
            title="Contact"
            icon="Contact"
            onClick={() => openModal("isContactOpen")}
          />
        </div>

        <div className="w-full h-full flex col-span-3 row-span-2 gap-x-6">
          <div className="flex flex-col flex-1 justify-center items-center">
            <Icon
              title="Facebook"
              href="https://www.facebook.com/vasilena.yoneva"
              icon="Facebook"
            />
            <Icon
              title="Instagram"
              href="https://instagram.com/____vasilena____"
              icon="Instagram"
            />
          </div>
          <div className="w-full h-full col-span-2 flex flex-[2.2] justify-center items-center">
            <Icon title="Portrait" icon="Portrait" />
          </div>
        </div>

        <div className="flex col-span-3 w-full h-full justify-center items-center gap-x-6">
          <Icon
            title="Linkedin"
            href="https://www.linkedin.com/in/vasilena-yoneva/"
            icon="LinkedIn"
          />
          <Icon
            title="Github"
            href="https://github.com/Vasillena"
            icon="GitHub"
          />
          <Icon
            title="Behance"
            href="https://www.behance.net/vasilenayoneva"
            icon="Behance"
          />
        </div>
      </div>

      {/* MODAL */}
      <MobileStack />
      <MobileTech />
      <MobileCreative />
    </>
  );
}
