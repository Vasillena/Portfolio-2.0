import BackIcon from "@/icons/m-back-icon.svg";
import { MazzardExtraLight } from "@/utils/fonts";
import MobileModal from "./MobileModal";
import Modal from "./Modal";
import { ModalButton } from "./ModalButtons";
import ProjectCard from "./ProjectCard";
import overlay1 from "@/public/overlay-1.png";
import { useModal } from "@/utils/ModalContext";
import { useState } from "react";

// const techProjects = Array.from({ length: 8 }, (_, i) => ({
//   id: i + 1,
//   img: `/m-tech-project-${i + 1}.png`,
//   title: `Tech project ${i + 1}`,
// }));

const techProjects = [
  {
    id: 1,
    img: "/m-creative-project-1.png",
    title: "Personal Portfolio",
    href: "#",
  },
  {
    id: 2,
    img: "/m-tech-project-2.png",
    title: "Catering website",
    href: "https://www.qcatering.bg/bg",
  },
  {
    id: 3,
    img: "/m-tech-project-3.png",
    title: "Blog Website",
    href: "#",
  },
  {
    id: 4,
    img: "/m-tech-project-4.png",
    title: "Restaurant Website",
    href: "https://www.saborna23.bg/bg",
  },
  {
    id: 5,
    img: "/m-tech-project-5.png",
    title: "Bar Website",
    href: "https://sipi.bg/bg",
  },
  {
    id: 6,
    img: "/m-tech-project-6.png",
    title: "Bar Website",
    href: "https://barthepost.bg/bg",
  },
  {
    id: 7,
    img: "/m-tech-project-7.png",
    title: "Bar Website",
    href: "https://q-bar.bg/bg",
  },
  {
    id: 8,
    img: "/m-tech-project-8.png",
    title: "Portfolio Website",
    href: "https://www.snezhana-aleksieva.com/bg",
  },
];

export default function MobileTech() {
  const { isMobileTechOpen, closeModal } = useModal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? techProjects.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev === techProjects.length - 1 ? 0 : prev + 1
    );
  };

  const project = techProjects[currentIndex];

  return (
    <Modal
      isOpen={isMobileTechOpen}
      onClose={() => closeModal("isMobileTechOpen")}
    >
      <MobileModal>
        <h2 className="text-3xl">Tech Projects</h2>
        <div className="relative">
          <ProjectCard
            href={project.href}
            image={project.img}
            overlay={overlay1.src}
            title={project.title}
            subtitle={
              <span className={MazzardExtraLight.className}>
                Click to view project →
              </span>
            }
            width={540}
            height={319}
          />
        </div>

        <div className="flex justify-between items-center mt-6 px-10">
          <div className="flex justify-between items-center mt-6 gap-8">
            {/* <button
            onClick={prevProject}
            className="text-3xl active:scale-95 transition"
          >
            ←
          </button> */}
            <ModalButton
              icon={<BackIcon className="w-9 h-9" />}
              onClick={prevProject}
            />

            <span className="text-sm">
              {currentIndex + 1} / {techProjects.length}
            </span>

            {/* <button
            onClick={nextProject}
            className="text-3xl active:scale-95 transition"
          >
            →
          </button> */}

            <ModalButton
              icon={<BackIcon className="w-9 h-9 scale-x-[-1]" />}
              onClick={nextProject}
            />
          </div>
        </div>

        <button
          className="text-lg px-8 py-1"
          onClick={() => closeModal("isMobileTechOpen")}
        >
          Close
        </button>
      </MobileModal>
    </Modal>
  );
}
