import { ReactNode } from "react";

const SectionItemList = (props: { listItems: string[] | ReactNode[] }) => {
  return (
    <ul className="list-disc list-inside">
      {props.listItems.map((item) => (
        <li key={`${item}`}>{item}</li>
      ))}
    </ul>
  );
};

export default SectionItemList;
