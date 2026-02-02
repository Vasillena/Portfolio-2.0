import { MazzardExtraLight } from "@/utils/fonts";
import { Project } from "@/utils/projects";
import ProjectCard from "./ProjectCard";

type Props = {
  project: Project;
  imageVariant?: "desktop" | "mobile";
  fallbackOverlay?: string;
};

export default function RenderProject({
  project,
  imageVariant = "desktop",
  fallbackOverlay,
}: Props) {
  return (
    <div className="relative group">
      <ProjectCard
        href={project.href}
        image={project.images[imageVariant]}
        overlay={project.layout?.overlay ?? fallbackOverlay ?? ""}
        title={project.title}
        subtitle={
          <span className={MazzardExtraLight.className}>
            Click to view project →
          </span>
        }
        width={project.layout!.width!}
        height={project.layout!.height!}
      />
    </div>
  );
}
