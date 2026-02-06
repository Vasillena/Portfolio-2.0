import overlay1 from "@/public/overlay-1.png";
import overlay2 from "@/public/overlay-2.png";

export type Project = {
  id: number;
  title: string;
  href: string;
  images: {
    desktop: string;
    mobile: string;
  };
  layout?: {
    overlay?: string;
    width?: number;
    height?: number;
    column?: string;
  };
};

export const creativeProjects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    href: "https://www.behance.net/gallery/243315743/Personal-Portfolio",
    images: {
      desktop: "/creative-project-1.png",
      mobile: "/m-creative-project-1.png",
    },
    layout: {
      overlay: overlay1.src,
      width: 540,
      height: 720,
      column: "left",
    },
  },
  {
    id: 2,
    title: "Travel app concept",
    href: "https://www.behance.net/gallery/228545489/Adventure-Club-App",
    images: {
      desktop: "/creative-project-2.png",
      mobile: "/m-creative-project-2.png",
    },
    layout: {
      overlay: overlay2.src,
      width: 540,
      height: 300,
      column: "right-top",
    },
  },
  {
    id: 3,
    title: "Booking app concept",
    href: "https://www.behance.net/gallery/220312663/SiT-Restaurant-Booking-App",
    images: {
      desktop: "/creative-project-3.png",
      mobile: "/m-creative-project-3.png",
    },
    layout: {
      overlay: overlay1.src,
      width: 253,
      height: 380,
      column: "right-bottom",
    },
  },
  {
    id: 4,
    title: "E-commerce concept",
    href: "https://www.behance.net/gallery/213872611/Aucwise",
    images: {
      desktop: "/creative-project-4.png",
      mobile: "/m-creative-project-4.png",
    },
    layout: {
      overlay: overlay1.src,
      width: 253,
      height: 380,
      column: "right-bottom",
    },
  },
];

export const techProjects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    href: "#",
    images: {
      desktop: "/tech-project-1.png",
      mobile: "/m-creative-project-1.png",
    },
    layout: {
      overlay: overlay1.src,
      width: 540,
      height: 319,
      column: "left",
    },
  },
  {
    id: 2,
    title: "Catering Website",
    href: "https://www.qcatering.bg/bg",
    images: {
      desktop: "/tech-project-2.png",
      mobile: "/m-tech-project-2.png",
    },
    layout: {
      overlay: overlay1.src,
      width: 540,
      height: 319,
      column: "left",
    },
  },
  {
    id: 3,
    title: "Blog Website",
    href: "#",
    images: {
      desktop: "/tech-project-3.png",
      mobile: "/m-tech-project-3.png",
    },
    layout: {
      overlay: overlay1.src,
      width: 250,
      height: 319,
      column: "middle-left",
    },
  },
  {
    id: 4,
    title: "Restaurant Website",
    href: "https://www.saborna23.bg/bg",
    images: {
      desktop: "/tech-project-4.png",
      mobile: "/m-tech-project-4.png",
    },
    layout: {
      overlay: overlay1.src,
      width: 250,
      height: 319,
      column: "middle-left",
    },
  },
  {
    id: 5,
    title: "Bar Website",
    href: "https://sipi.bg/bg",
    images: {
      desktop: "/tech-project-5.png",
      mobile: "/m-tech-project-5.png",
    },
    layout: {
      overlay: overlay1.src,
      width: 253,
      height: 148,
      column: "middle-right",
    },
  },
  {
    id: 6,
    title: "Bar Website",
    href: "https://barthepost.bg/bg",
    images: {
      desktop: "/tech-project-6.png",
      mobile: "/m-tech-project-6.png",
    },
    layout: {
      overlay: overlay1.src,
      width: 253,
      height: 148,
      column: "middle-right",
    },
  },
  {
    id: 7,
    title: "Bar Website",
    href: "https://q-bar.bg/bg",
    images: {
      desktop: "/tech-project-7.png",
      mobile: "/m-tech-project-7.png",
    },
    layout: {
      overlay: overlay1.src,
      width: 253,
      height: 148,
      column: "middle-right",
    },
  },
  {
    id: 8,
    title: "Portfolio Website",
    href: "https://www.snezhana-aleksieva.com/bg",
    images: {
      desktop: "/tech-project-8.png",
      mobile: "/m-tech-project-8.png",
    },
    layout: {
      overlay: overlay1.src,
      width: 253,
      height: 148,
      column: "middle-right",
    },
  },
];
