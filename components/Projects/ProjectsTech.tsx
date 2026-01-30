import { MazzardExtraLight } from "@/utils/fonts";
import ProjectCard from "./ProjectCard";
import overlay1 from "@/public/overlay-1.png";

// const techProjects = Array.from({ length: 8 }, (_, i) => ({
//   id: i + 1,
//   img: `/tech-project-${i + 1}.png`,
//   title: `Tech project ${i + 1}`,
// }));

const techProjects = [
  {
    id: 1,
    img: "/tech-project-1.png",
    title: "Personal Portfolio",
    href: "#",
    width: 540,
    height: 319,
    column: "left",
  },
  {
    id: 2,
    img: "/tech-project-2.png",
    title: "Catering Website",
    href: "https://www.qcatering.bg/bg",
    width: 540,
    height: 319,
    column: "left",
  },
  {
    id: 3,
    img: "/tech-project-3.png",
    title: "Blog Website",
    href: "#",
    width: 250,
    height: 319,
    column: "middle-left",
  },
  {
    id: 4,
    img: "/tech-project-4.png",
    title: "Restaurant Website",
    href: "https://www.saborna23.bg/bg",
    width: 250,
    height: 319,
    column: "middle-left",
  },
  {
    id: 5,
    img: "/tech-project-5.png",
    title: "Bar Website",
    href: "https://sipi.bg/bg",
    width: 253,
    height: 148,
    column: "middle-right",
  },
  {
    id: 6,
    img: "/tech-project-6.png",
    title: "Bar Website",
    href: "https://barthepost.bg/bg",
    width: 253,
    height: 148,
    column: "middle-right",
  },
  {
    id: 7,
    img: "/tech-project-7.png",
    title: "Bar Website",
    href: "https://q-bar.bg/bg",
    width: 253,
    height: 148,
    column: "middle-right",
  },
  {
    id: 8,
    img: "/tech-project-8.png",
    title: "Portfolio Website",
    href: "https://www.snezhana-aleksieva.com/bg",
    width: 253,
    height: 148,
    column: "middle-right",
  },
];

const renderProject = (project: (typeof techProjects)[number]) => (
  <div key={project.id} className="relative group">
    <ProjectCard
      href={project.href}
      image={project.img}
      overlay={overlay1.src}
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

// export default function TechProjects() {
//   return (
//     <div className="w-full grid grid-cols-2 justify-between gap-x-8">
//       <div className="grid content-between gap-y-8">
//         <div className="relative group">
//           <ProjectCard
//             href="#"
//             image={techProjects[0].img}
//             overlay={overlay1.src}
//             title="Personal Portfolio"
//             subtitle={
//               <span className={MazzardExtraLight.className}>
//                 Click to view project →
//               </span>
//             }
//             width={540}
//             height={319}
//           />
//         </div>
//         <div className="relative group">
//           <ProjectCard
//             href="https://www.qcatering.bg/bg"
//             image={techProjects[1].img}
//             overlay={overlay1.src}
//             title="Catering Website"
//             subtitle={
//               <span className={MazzardExtraLight.className}>
//                 Click to view project →
//               </span>
//             }
//             width={540}
//             height={319}
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-2 h-full justify-between gap-8">
//         <div className="grid content-between gap-y-8">
//           <div className="relative group">
//             <ProjectCard
//               href="#"
//               image={techProjects[2].img}
//               overlay={overlay1.src}
//               title="Blog Website"
//               subtitle={
//                 <span className={MazzardExtraLight.className}>
//                   Click to view project →
//                 </span>
//               }
//               width={250}
//               height={319}
//             />
//           </div>
//           <div className="relative group">
//             <ProjectCard
//               href="https://www.saborna23.bg/bg"
//               image={techProjects[3].img}
//               overlay={overlay1.src}
//               title="Restaurant Website"
//               subtitle={
//                 <span className={MazzardExtraLight.className}>
//                   Click to view project →
//                 </span>
//               }
//               width={250}
//               height={319}
//             />
//           </div>
//         </div>

//         <div className="grid content-between">
//           <div className="relative group">
//             <ProjectCard
//               href="https://sipi.bg/bg"
//               image={techProjects[4].img}
//               overlay={overlay1.src}
//               title="Bar Website"
//               subtitle={
//                 <span className={MazzardExtraLight.className}>
//                   Click to view project →
//                 </span>
//               }
//               width={253}
//               height={148}
//             />
//           </div>

//           <div className="relative group">
//             <ProjectCard
//               href="https://barthepost.bg/bg"
//               image={techProjects[5].img}
//               overlay={overlay1.src}
//               title="Bar Website"
//               subtitle={
//                 <span className={MazzardExtraLight.className}>
//                   Click to view project →
//                 </span>
//               }
//               width={253}
//               height={148}
//             />
//           </div>
//           <div className="relative group">
//             <ProjectCard
//               href="https://q-bar.bg/bg"
//               image={techProjects[6].img}
//               overlay={overlay1.src}
//               title="Bar Website"
//               subtitle={
//                 <span className={MazzardExtraLight.className}>
//                   Click to view project →
//                 </span>
//               }
//               width={253}
//               height={148}
//             />
//           </div>
//           <div className="relative group">
//             <ProjectCard
//               href="https://www.snezhana-aleksieva.com/bg"
//               image={techProjects[7].img}
//               overlay={overlay1.src}
//               title="Portfolio Website"
//               subtitle={
//                 <span className={MazzardExtraLight.className}>
//                   Click to view project →
//                 </span>
//               }
//               width={253}
//               height={148}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ProjectsTech() {
  return (
    <div className="w-full grid grid-cols-2 gap-x-8">
      {/* Left column */}
      <div className="grid content-between gap-y-8">
        {techProjects.filter((p) => p.column === "left").map(renderProject)}
      </div>

      {/* Right side */}
      <div className="grid grid-cols-2 h-full gap-8">
        <div className="grid content-between gap-y-8">
          {techProjects
            .filter((p) => p.column === "middle-left")
            .map(renderProject)}
        </div>

        <div className="grid content-between">
          {techProjects
            .filter((p) => p.column === "middle-right")
            .map(renderProject)}
        </div>
      </div>
    </div>
  );
}
