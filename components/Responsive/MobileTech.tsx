import MobileProjects from "./MobileProjects";
import { techProjects } from "@/utils/projects";
import { useModal } from "@/utils/ModalProvider";

export default function MobileTech() {
  const { isMobileTechOpen, closeModal } = useModal();

  return (
    <MobileProjects
      isOpen={isMobileTechOpen}
      onClose={() => closeModal("isMobileTechOpen")}
      title="Tech Projects"
      icon="⌨️"
      projects={techProjects}
    />
  );
}
