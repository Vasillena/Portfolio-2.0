import MobileProjects from "./MobileProjects";
import { creativeProjects } from "@/utils/projects";
import { useModal } from "@/utils/ModalProvider";

export default function MobileCreative() {
  const { isMobileCreativeOpen, closeModal } = useModal();

  return (
    <MobileProjects
      isOpen={isMobileCreativeOpen}
      onClose={() => closeModal("isMobileCreativeOpen")}
      title="Creative Projects"
      icon="🎨"
      projects={creativeProjects}
    />
  );
}
