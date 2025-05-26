import data from "../../data/projectsItems.json";
import ProjectsItem, { ProjectsItemType } from "./ProjectsItem";

const projectsItems = data as ProjectsItemType[];

const ProjectsSection = () => {
  return (
    <div id="projects" className="pt-10 mt-55">
      <h2 className="font-bold text-2xl">Projects</h2>
      {projectsItems.map((item, index) => (
        <ProjectsItem key={`pi${index}`} {...item} />
      ))}
    </div>
  );
};

export default ProjectsSection;
