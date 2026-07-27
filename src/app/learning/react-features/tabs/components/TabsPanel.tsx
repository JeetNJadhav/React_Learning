import type { TabsType } from "../types";

type Props = {
  tab: TabsType;
};

export const TabsPanel = ({ tab }: Props) => {
  return <div id={tab.id}>{tab.content}</div>;
};
