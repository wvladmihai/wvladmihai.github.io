import SectionItemList from "../SectionItemList/SectionItemList";

export type WorkExperienceItemProps = {
  from: string;
  to: string;
  workplace: string;
  roleTitle: string;
  listItems: string[];
};

const WorkExperienceItem = (props: WorkExperienceItemProps) => {
  return (
    <div className="mt-15">
      <h3 className="mb-2">
        <span className="font-bold text-lg block">
          {props.from} - {props.to} @ {props.workplace}
        </span>
        <span className="font-bold text-lg block">{props.roleTitle}</span>
      </h3>
      <SectionItemList listItems={props.listItems} />
    </div>
  );
};

export default WorkExperienceItem;
