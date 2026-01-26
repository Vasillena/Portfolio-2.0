import Clock from "./Clock";
import Icon from "./Icon";
import ModeToggle from "./ModeToggle";
import Player from "./Player";
import TabletDock from "./TabletDock";

export default function Tablet() {
  return (
    <div className="hidden sm:block xl:hidden">
      <div className="absolute top-52 left-12 w-[200px] h-[200px] flex flex-col gap-8 justify-center items-center">
        <Clock />

        {/* <Icon title="Player" icon="Player" /> */}
        <Player src="/cloud-of-sorrow.mp3" />
      </div>
      <div className="absolute bottom-52 right-12 w-[200px] h-auto flex flex-col gap-8 justify-center items-center">
        <Icon title="Portrait" icon="Portrait" />
      </div>
      <TabletDock />
    </div>
  );
}
