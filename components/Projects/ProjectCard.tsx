import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import Link from "next/link";
import { ReactNode } from "react";

type ProjectCardProps = {
  href: string;
  image: StaticImageData | string;
  overlay: StaticImageData | string;
  title: string;
  subtitle?: ReactNode;
  width: number;
  height: number;
};

export default function ProjectCard({
  href,
  image,
  overlay,
  title,
  subtitle,
  width,
  height,
}: ProjectCardProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const interval = setInterval(() => {
      if (window.innerWidth < 1280 && isMounted) {
        setShowOverlay((prev) => !prev);
      }
    }, 2500);

    const timeout = setTimeout(() => {
      if (window.innerWidth < 1280 && isMounted) {
        setShowOverlay(true);
      }
    }, 1500);

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setShowOverlay(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      isMounted = false;
      clearInterval(interval);
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Link
      href={href}
      target="_blank"
      style={{ width, height }}
      className="relative group"
    >
      {/* <div className="relative overflow-hidden" style={{ width, height }}> */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={width}
          height={height}
          priority
          className="object-contain"
        />

        <div
          className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center
          transition-opacity duration-700
          xl:hidden
          ${showOverlay ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={overlay}
            alt="Project name overlay"
            width={width}
            height={height}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <p className="relative z-20 text-black text-center text-3xl pointer-events-none">
            {title}
            {subtitle && <span className="text-xl block mt-2">{subtitle}</span>}
          </p>
        </div>
      </div>

      <div
        className="hidden xl:flex absolute inset-0 w-full h-full  flex-col items-center justify-center
                      opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        <Image
          src={overlay}
          alt="Project name overlay"
          width={width}
          height={height}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <p className="relative z-20 text-black text-center text-3xl pointer-events-none">
          {title}
          {subtitle && <span className="text-xl block mt-2">{subtitle}</span>}
        </p>
      </div>
    </Link>
  );
}
