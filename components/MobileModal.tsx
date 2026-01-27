import { ReactNode } from "react";
type ModalProps = {
  icon: string;
  children: ReactNode; // съдържанието на модала
};

export default function MobileModal({ icon, children }: ModalProps) {
  return (
    <div className="xl:hidden flex flex-col justify-between items-center gap-4">
      <div className="absolute -top-6 text-5xl">{icon}</div>
      {children}
    </div>
  );
}
