import SectionItemList from "../SectionItemList/SectionItemList";

export type ProjectsItemType = {
  title: string;
  listItems: string[];
  periodOfTime?: string;
  website?: string;
};

const ProjectsItem = (props: ProjectsItemType) => {
  return (
    <div className="mt-15">
      <h3 className="font-bold text-lg">{props.title}</h3>
      {props.periodOfTime && (
        <span className="font-bold text-lg block">{props.periodOfTime}</span>
      )}
      {props.website && (
        <span className="italic text-md block">{props.website}</span>
      )}
      <div className="mt-2">
        <SectionItemList listItems={props.listItems} />
      </div>
    </div>
  );
};

export default ProjectsItem;
