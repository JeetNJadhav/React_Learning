import { useState } from "react";
import { DEFAULT_ACTIVE_TAB_INDEX } from "../constants";
import type { TabsType } from "../types";

type Props = {
  tabs: TabsType[];
  defaultActiveId: string;
};

export const useTabs = ({ tabs, defaultActiveId }: Props) => {
  const initialIdx =
    defaultActiveId !== null
      ? tabs.findIndex((tab) => tab.id === defaultActiveId)
      : DEFAULT_ACTIVE_TAB_INDEX;

  const [activeIdx, setActiveIdx] = useState(
    initialIdx >= 0 ? initialIdx : DEFAULT_ACTIVE_TAB_INDEX
  );

  return { activeIdx, setActiveIdx };
};
