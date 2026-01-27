import BackIcon from "@/icons/m-back-icon.svg";
import { MazzardExtraLight } from "@/utils/fonts";
import MobileModal from "./MobileModal";
import Modal from "./Modal";
import { ModalButton } from "./ModalButtons";
import ProjectCard from "./ProjectCard";
import overlay1 from "@/public/overlay-1.png";
import { useModal } from "@/utils/ModalContext";
import { useState } from "react";

const creativeProjects = [
  {
    id: 1,
    img: "/m-creative-project-1.png",
    title: "Personal Portfolio",
    href: "#",
  },
  {
    id: 2,
    img: "/m-creative-project-2.png",
    title: "Travel app concept",
    href: "https://www.behance.net/gallery/228545489/Adventure-Club-App",
  },
  {
    id: 3,
    img: "/m-creative-project-3.png",
    title: "Booking app concept",
    href: "https://www.behance.net/gallery/220312663/SiT-Restaurant-Booking-App",
  },
  {
    id: 4,
    img: "/m-creative-project-4.png",
    title: "E-commerce concept",
    href: "https://www.behance.net/gallery/213872611/Aucwise",
  },
];

export default function MobileCreative() {
  const { isMobileCreativeOpen, closeModal } = useModal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? creativeProjects.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev === creativeProjects.length - 1 ? 0 : prev + 1
    );
  };

  const project = creativeProjects[currentIndex];

  return (
    <Modal
      isOpen={isMobileCreativeOpen}
      onClose={() => closeModal("isMobileCreativeOpen")}
    >
      <MobileModal>
        <h2 className="text-3xl">Creative Projects</h2>
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
            {currentIndex + 1} / {creativeProjects.length}
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

        <button
          className="text-lg px-8 py-1"
          onClick={() => closeModal("isMobileCreativeOpen")}
        >
          Close
        </button>
      </MobileModal>
    </Modal>
  );
}
