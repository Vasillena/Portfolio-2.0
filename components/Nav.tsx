import { MazzardExtraLight, MazzardThin } from "@/utils/fonts";

import { useModal } from "@/utils/ModalContext";

export default function Nav() {
  const { openModal } = useModal();

  return (
    <nav
      className={`hidden xl:flex text-2xl tracking-wide ${MazzardExtraLight.className}`}
    >
      <button
        className="group flex items-center gap-2"
        // onClick={() => setIsAboutOpen(true)}
        onClick={() => openModal("isAboutOpen")}
      >
        <span
          className={`text-xl ${MazzardThin.className} opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
        >
          &lt;a&gt;
        </span>
        <span className="group-hover:font-extrabold">About</span>
        <span
          className={`text-xl ${MazzardThin.className} opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
        >
          &lt;/a&gt;
        </span>
      </button>

      <button
        className="group flex items-center gap-2"
        // onClick={() => setIsProjectsOpen(true)}
        onClick={() => openModal("isProjectsOpen")}
      >
        <span
          className={`text-xl ${MazzardThin.className} opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
        >
          &lt;a&gt;
        </span>
        <span className="group-hover:font-extrabold">Projects</span>
        <span
          className={`text-xl ${MazzardThin.className} opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
        >
          &lt;/a&gt;
        </span>
      </button>

      <button
        className="group flex items-center gap-2"
        // onClick={() => setIsContactOpen(true)}
        onClick={() => openModal("isContactOpen")}
      >
        <span
          className={`text-xl ${MazzardThin.className} opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
        >
          &lt;a&gt;
        </span>
        <span className="group-hover:font-extrabold">Contact</span>
        <span
          className={`text-xl ${MazzardThin.className} opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
        >
          &lt;/a&gt;
        </span>
      </button>
    </nav>
  );
}
