import { ReactNode } from "react";
type ModalProps = {
  children: ReactNode; // съдържанието на модала
};

export default function MobileModal({ children }: ModalProps) {
  return (
    <div className="xl:hidden flex flex-col justify-between items-center gap-4">
      <div className="absolute -top-6 text-5xl">🦄</div>
      {children}
    </div>
  );
}
