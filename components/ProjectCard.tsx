import Image, { StaticImageData } from "next/image";

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
  return (
    <Link href={href} target="_blank" style={{ width, height }}>
      <Image
        src={image}
        alt={title}
        width={width}
        height={height}
        priority
        className="object-contain"
      />

      <Image
        src={overlay}
        alt=""
        width={width}
        height={height}
        className="absolute inset-0 w-full h-full object-cover
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-300"
      />

      <p
        className="absolute inset-0 z-20 p-6
                   flex flex-col items-center justify-center
                   text-black text-center text-3xl
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-300
                   pointer-events-none"
      >
        {title}
        {subtitle && <span className="text-xl">{subtitle}</span>}
      </p>
    </Link>
  );
}
