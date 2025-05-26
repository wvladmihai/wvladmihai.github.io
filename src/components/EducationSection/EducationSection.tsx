import data from "../../data/educationItems.json";
import EducationItem, { EducationItemType } from "./EducationItem";

const educationItems = data as EducationItemType[];

const EducationSection = () => {
  return (
    <div id="education" className="pt-10 mt-55">
      <h2 className="font-bold text-2xl">Education</h2>
      {educationItems.map((item, index) => (
        <EducationItem key={`ei${index}`} {...item} />
      ))}
    </div>
  );
};

export default EducationSection;
