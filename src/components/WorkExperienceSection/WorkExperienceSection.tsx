import WorkExperienceItem, {
  WorkExperienceItemProps,
} from "./WorkExperienceItem";
import data from "../../data/workExperienceItems.json";

const workExperienceItems = data as WorkExperienceItemProps[];

const WorkExperienceSection = () => {
  return (
    <div id="workExperience" className="pt-10 mt-110">
      <h2 className="font-bold text-2xl">Work experience</h2>
      {workExperienceItems.map((item, index) => (
        <WorkExperienceItem key={`wei${index}`} {...item} />
      ))}
    </div>
  );
};

export default WorkExperienceSection;
