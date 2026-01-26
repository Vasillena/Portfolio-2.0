import MobileModal from "./MobileModal";
import Modal from "./Modal";
import StackIcons from "./StackIcons";
import { useModal } from "@/utils/ModalContext";

export default function MobileStack() {
  const { isStackOpen, closeModal } = useModal();

  return (
    <Modal isOpen={isStackOpen} onClose={() => closeModal("isStackOpen")}>
      <MobileModal>
        <h2 className="text-3xl sm:text-4xl">Stack</h2>
        <StackIcons />
        <button
          className="text-lg sm:text-xl px-8 py-1"
          onClick={() => closeModal("isStackOpen")}
        >
          Close
        </button>
      </MobileModal>
    </Modal>
  );
}
