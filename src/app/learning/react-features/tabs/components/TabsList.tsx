import type { TabsType } from "../types";
import { Tab } from "./tab";

type Props = {
  tabs: TabsType[];
  activeIdx: number;
  onTabChange: (idx: number) => void;
};

export const TabsList = ({ tabs, onTabChange, activeIdx }: Props) => {
  return (
    <>
      {tabs.map((tab, index) => (
        <Tab
          key={tab.id}
          label={tab.label}
          isActive={index === activeIdx}
          onClick={() => onTabChange(index)}
        />
      ))}
    </>
  );
};
