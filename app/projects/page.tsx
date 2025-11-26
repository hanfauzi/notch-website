import OtherProjects from "@/components/sections/project/OtherProjects";
import ProjectCarousel from "@/components/sections/project/ProjectCarousel";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects — Our Successful Landings | Notch Creative Agency",
  description: "Explore Notch's successful landings—from brand campaigns to digital development, production, and activation. We map emotional terrains, craft strategic ideas, and create work that resonates with clarity and purpose.",
  url: "/projects"
})

const ProjectPage = () => {
  return (
    <section className="w-full py-20 sm:py-24 md:py-28 xl:py-35 min-h-screen overflow-hidden flex flex-col justify-start items-center">
      <ProjectCarousel/>
      <OtherProjects/>
    </section>
  );
};

export default ProjectPage;
