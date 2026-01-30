import { MazzardExtraLight } from "@/utils/fonts";
import ProjectCard from "./ProjectCard";
import overlay1 from "@/public/overlay-1.png";
import overlay2 from "@/public/overlay-2.png";

// const creativeProjects = Array.from({ length: 4 }, (_, i) => ({
//   id: i + 1,
//   img: `/creative-project-${i + 1}.png`,
//   title: `Creative project ${i + 1}`,
// }));

const creativeProjects = [
  {
    id: 1,
    img: "/creative-project-1.png",
    title: "Personal Portfolio",
    href: "#",
    overlay: overlay1.src,
    width: 540,
    height: 720,
    column: "left",
  },
  {
    id: 2,
    img: "/creative-project-2.png",
    title: "Travel app concept",
    href: "https://www.behance.net/gallery/228545489/Adventure-Club-App",
    overlay: overlay2.src,
    width: 540,
    height: 300,
    column: "right-top",
  },
  {
    id: 3,
    img: "/creative-project-3.png",
    title: "Booking app concept",
    href: "https://www.behance.net/gallery/220312663/SiT-Restaurant-Booking-App",
    overlay: overlay1.src,
    width: 253,
    height: 380,
    column: "right-bottom",
  },
  {
    id: 4,
    img: "/creative-project-4.png",
    title: "E-commerce concept",
    href: "https://www.behance.net/gallery/213872611/Aucwise",
    overlay: overlay1.src,
    width: 253,
    height: 380,
    column: "right-bottom",
  },
];

const renderCreativeProject = (project: (typeof creativeProjects)[number]) => (
  <div key={project.id} className="relative group">
    <ProjectCard
      href={project.href}
      image={project.img}
      overlay={project.overlay}
      title={project.title}
      subtitle={
        <span className={MazzardExtraLight.className}>
          Click to view project →
        </span>
      }
      width={project.width}
      height={project.height}
    />
  </div>
);

// export default function CreativeProjects() {
//   return (
//     <div className="w-full grid grid-cols-2 justify-between gap-x-8">
//       <div className="relative w-full group">
//         <ProjectCard
//           href="#"
//           image={creativeProjects[0].img}
//           overlay={overlay1.src}
//           title="Personal Portfolio"
//           subtitle={
//             <span className={MazzardExtraLight.className}>
//               Click to view project →
//             </span>
//           }
//           width={540}
//           height={720}
//         />
//       </div>
//       <div className="grid h-full justify-between">
//         <div className="w-full relative group">
//           <ProjectCard
//             href="https://www.behance.net/gallery/228545489/Adventure-Club-App"
//             image={creativeProjects[1].img}
//             overlay={overlay2.src}
//             title="Travel app concept"
//             subtitle={
//               <span className={MazzardExtraLight.className}>
//                 Click to view project →
//               </span>
//             }
//             width={540}
//             height={300}
//           />
//         </div>

//         <div className="grid grid-cols-2 row-span-2 content-end justify-between gap-8">
//           <div className="relative group">
//             <ProjectCard
//               href="https://www.behance.net/gallery/220312663/SiT-Restaurant-Booking-App"
//               image={creativeProjects[2].img}
//               overlay={overlay1.src}
//               title="Booking app concept"
//               subtitle={
//                 <span className={MazzardExtraLight.className}>
//                   Click to view project →
//                 </span>
//               }
//               width={253}
//               height={380}
//             />
//           </div>

//           <div className="relative group">
//             <ProjectCard
//               href="https://www.behance.net/gallery/213872611/Aucwise"
//               image={creativeProjects[3].img}
//               overlay={overlay1.src}
//               title="E-commerce concept"
//               subtitle={
//                 <span className={MazzardExtraLight.className}>
//                   Click to view project →
//                 </span>
//               }
//               width={253}
//               height={380}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ProjectsCreative() {
  return (
    <div className="w-full grid grid-cols-2 gap-x-8">
      {/* Left big card */}
      <div className="w-full">
        {creativeProjects
          .filter((p) => p.column === "left")
          .map(renderCreativeProject)}
      </div>

      {/* Right side */}
      <div className="grid h-full justify-between">
        {/* Top */}
        <div className="w-full">
          {creativeProjects
            .filter((p) => p.column === "right-top")
            .map(renderCreativeProject)}
        </div>

        {/* Bottom 2 cards */}
        <div className="grid grid-cols-2 content-end gap-8">
          {creativeProjects
            .filter((p) => p.column === "right-bottom")
            .map(renderCreativeProject)}
        </div>
      </div>
    </div>
  );
}
