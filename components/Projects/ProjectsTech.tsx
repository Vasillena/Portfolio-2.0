import RenderProject from "./RenderProject";
import { techProjects } from "@/utils/projects";

export default function ProjectsTech() {
  return (
    <div className="w-full grid grid-cols-2 gap-x-8">
      {/* Left column */}
      <div className="grid content-between gap-y-8">
        {techProjects
          .filter((p) => p.layout?.column === "left")
          .map((project) => (
            <RenderProject key={project.id} project={project} />
          ))}
      </div>

      {/* Right side */}
      <div className="grid grid-cols-2 h-full gap-8">
        <div className="grid content-between gap-y-8">
          {techProjects
            .filter((p) => p.layout?.column === "middle-left")
            .map((project) => (
              <RenderProject key={project.id} project={project} />
            ))}
        </div>

        <div className="grid content-between">
          {techProjects
            .filter((p) => p.layout?.column === "middle-right")
            .map((project) => (
              <RenderProject key={project.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
}
