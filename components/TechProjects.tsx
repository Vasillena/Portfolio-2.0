import { MazzardExtraLight } from "@/utils/fonts";
import ProjectCard from "./ProjectCard";
import overlay1 from "@/public/overlay-1.png";

const techProjects = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  img: `/tech-project-${i + 1}.png`,
  title: `Tech project ${i + 1}`,
}));

export default function TechProjects() {
  return (
    <div className="w-full grid grid-cols-2 justify-between gap-x-8">
      <div className="grid content-between gap-y-8">
        <div className="relative group">
          <ProjectCard
            href="#"
            image={techProjects[0].img}
            overlay={overlay1.src}
            title="Personal Portfolio"
            subtitle={
              <span className={MazzardExtraLight.className}>
                Click to view project →
              </span>
            }
            width={540}
            height={319}
          />
        </div>
        <div className="relative group">
          <ProjectCard
            href="https://www.qcatering.bg/bg"
            image={techProjects[1].img}
            overlay={overlay1.src}
            title="Catering Website"
            subtitle={
              <span className={MazzardExtraLight.className}>
                Click to view project →
              </span>
            }
            width={540}
            height={319}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 h-full justify-between gap-8">
        <div className="grid content-between gap-y-8">
          <div className="relative group">
            <ProjectCard
              href="#"
              image={techProjects[2].img}
              overlay={overlay1.src}
              title="Blog Website"
              subtitle={
                <span className={MazzardExtraLight.className}>
                  Click to view project →
                </span>
              }
              width={250}
              height={319}
            />
          </div>
          <div className="relative group">
            <ProjectCard
              href="https://www.saborna23.bg/bg"
              image={techProjects[3].img}
              overlay={overlay1.src}
              title="Restaurant Website"
              subtitle={
                <span className={MazzardExtraLight.className}>
                  Click to view project →
                </span>
              }
              width={250}
              height={319}
            />
          </div>
        </div>

        <div className="grid content-between">
          <div className="relative group">
            <ProjectCard
              href="https://sipi.bg/bg"
              image={techProjects[4].img}
              overlay={overlay1.src}
              title="Bar Website"
              subtitle={
                <span className={MazzardExtraLight.className}>
                  Click to view project →
                </span>
              }
              width={253}
              height={148}
            />
          </div>

          <div className="relative group">
            <ProjectCard
              href="https://barthepost.bg/bg"
              image={techProjects[5].img}
              overlay={overlay1.src}
              title="Bar Website"
              subtitle={
                <span className={MazzardExtraLight.className}>
                  Click to view project →
                </span>
              }
              width={253}
              height={148}
            />
          </div>
          <div className="relative group">
            <ProjectCard
              href="https://q-bar.bg/bg"
              image={techProjects[6].img}
              overlay={overlay1.src}
              title="Bar Website"
              subtitle={
                <span className={MazzardExtraLight.className}>
                  Click to view project →
                </span>
              }
              width={253}
              height={148}
            />
          </div>
          <div className="relative group">
            <ProjectCard
              href="https://www.snezhana-aleksieva.com/bg"
              image={techProjects[7].img}
              overlay={overlay1.src}
              title="Portfolio Website"
              subtitle={
                <span className={MazzardExtraLight.className}>
                  Click to view project →
                </span>
              }
              width={253}
              height={148}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
