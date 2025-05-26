import SectionItemList from "../SectionItemList/SectionItemList";

export type EducationItemType = {
  institution: string;
  subject: string;
  periodOfTime: string;
  result?: string;
  listItems?: string[];
};

const EducationItem = (props: EducationItemType) => {
  return (
    <div className="mt-15">
      <h3 className="font-bold text-lg">{props.institution}</h3>
      <span className="font-bold text-lg block">{props.periodOfTime}</span>
      <span className="italic text-lg block">{props.subject}</span>
      {props.result && (
        <span className="text-lg block">{props.result}</span>
      )}
      {props.listItems && (
        <div className="mt-2">
          <SectionItemList listItems={props.listItems} />
        </div>
      )}
    </div>
  );
};

export default EducationItem;
