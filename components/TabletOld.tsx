import Clock from "./Clock";
import Icon from "./Icon";
import ModeToggle from "./ModeToggle";

export default function TabletOld() {
  return (
    <div className="hidden sm:flex xl:hidden w-full h-dvh items-center sm:py-2">
      <div className="w-full h-auto flex gap-x-6 justify-center items-center">
        <div className="w-full h-auto flex flex-col flex-[1.8]">
          {/* <div className="w-full h-full flex-[2] flex justify-center items-center"> */}
          <Clock />
          {/* </div> */}
          <div className="w-full h-full flex">
            {/* <div className="w-full h-full "> */}
            <Icon title="About" icon="About" />
            {/* </div> */}
            {/* <div className="w-full h-full"> */}
            <Icon title="About" icon="About" />
            {/* </div> */}
          </div>
          <div className="flex">
            {/* <div className="w-full h-full "> */}
            <Icon title="About" icon="About" />
            {/* </div> */}
            {/* <div className="w-full h-full"> */}
            <Icon title="About" icon="About" />
            {/* </div> */}
          </div>
        </div>
        <div className="w-full h-auto flex-[4.2]">
          {/* <Icon title="Portrait" icon="Portrait" /> */}
          <Clock />
        </div>
      </div>

      {/* <div className="w-full h-full col-span-3 flex justify-center items-center gap-x-6">
        <div className="flex-[2.2] items-center">
          <Icon title="Player" icon="Player" />
        </div>

        <div className="flex-1">
          <Icon title="Stack" icon="Stack" />
        </div>
      </div>

      <div className="flex col-span-3 w-full h-full gap-x-6 justify-center items-center">
        <Icon title="Creative" icon="Creative" />

        <Icon title="Tech" icon="Tech" />

        <Icon title="Contact" icon="Contact" />
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
      </div> */}
    </div>
  );
}
