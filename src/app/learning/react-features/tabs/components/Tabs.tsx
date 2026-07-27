import { useTabs } from "../hook/useTabs";
import type { TabsType } from "../types";
import { TabsList } from "./TabsList";
import { TabsPanel } from "./TabsPanel";

type Props = {
  tabs: TabsType[];
  defaultActiveId: string;
};

export const Tabs = ({ tabs, defaultActiveId }: Props) => {
  const { activeIdx, setActiveIdx } = useTabs({ tabs, defaultActiveId });
  return (
    <>
      <TabsPanel tab={tabs[activeIdx]} />
      <TabsList tabs={tabs} onTabChange={setActiveIdx} activeIdx={activeIdx} />
    </>
  );
};
