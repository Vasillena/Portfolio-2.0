import Clock from "./Clock";
import Icon from "../Common/Icon";
import Player from "./Player";
import TabletDock from "./TabletDock";
import { useBreakpoints } from "@/utils/useBreakpoints";

export default function Tablet() {
  const { down, up } = useBreakpoints();

  return (
    <div className="hidden sm:block xl:hidden">
      <div className="absolute top-36 left-12 w-50 h-50 flex flex-col gap-8 justify-center items-center">
        {up("sm") && down("xl") && (
          <>
            <Clock />
            <Player src="/cloud-of-sorrow.mp3" />
          </>
        )}
      </div>
      <div className="absolute bottom-36 right-12 w-50 h-auto flex flex-col gap-8 justify-center items-center">
        <Icon title="Portrait" icon="Portrait" />
      </div>
      <TabletDock />
    </div>
  );
}
