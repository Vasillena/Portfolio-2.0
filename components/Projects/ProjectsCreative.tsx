import RenderProject from "./RenderProject";
import { creativeProjects } from "@/utils/projects";

export default function ProjectsCreative() {
  return (
    <div className="w-full grid grid-cols-2 gap-x-8">
      {/* Left big card */}
      <div className="w-full">
        {creativeProjects
          .filter((p) => p.layout?.column === "left")
          .map((project) => (
            <RenderProject key={project.id} project={project} />
          ))}
      </div>

      {/* Right side */}
      <div className="grid h-full justify-between">
        {/* Top */}
        <div className="w-full">
          {creativeProjects
            .filter((p) => p.layout?.column === "right-top")
            .map((project) => (
              <RenderProject key={project.id} project={project} />
            ))}
        </div>

        {/* Bottom 2 cards */}
        <div className="grid grid-cols-2 content-end gap-8">
          {creativeProjects
            .filter((p) => p.layout?.column === "right-bottom")
            .map((project) => (
              <RenderProject key={project.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
}
