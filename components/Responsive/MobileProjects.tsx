import BackIcon from "@/icons/m-back-icon.svg";
import { MazzardExtraLight } from "@/utils/fonts";
import MobileModal from "./MobileModal";
import Modal from "../Common/Modal";
import { ModalButton } from "../Common/ModalButtons";
import { Project } from "@/utils/projects";
import ProjectCard from "../Projects/ProjectCard";
import overlay1 from "@/public/overlay-1.png";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: string;
  projects: Project[];
};

export default function MobileProjects({
  isOpen,
  onClose,
  title,
  icon,
  projects,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[currentIndex];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <MobileModal icon={icon}>
        <h2 className="text-3xl">{title}</h2>

        <div className="relative">
          <ProjectCard
            href={project.href}
            image={project.images.mobile}
            overlay={project.layout?.overlay ?? overlay1.src}
            title={project.title}
            subtitle={
              <span className={MazzardExtraLight.className}>
                Click to view project →
              </span>
            }
            width={250}
            height={340}
          />
        </div>

        <p className={`text-xl ${MazzardExtraLight.className}`}>
          {project.title}
        </p>

        <div className="flex justify-between items-center mt-6 gap-8">
          <ModalButton
            icon={<BackIcon className="w-9 h-9" />}
            onClick={prevProject}
          />

          <span className="text-sm">
            {currentIndex + 1} / {projects.length}
          </span>

          <ModalButton
            icon={<BackIcon className="w-9 h-9 scale-x-[-1]" />}
            onClick={nextProject}
          />
        </div>

        <button className="text-lg px-8 py-1" onClick={onClose}>
          Close
        </button>
      </MobileModal>
    </Modal>
  );
}
