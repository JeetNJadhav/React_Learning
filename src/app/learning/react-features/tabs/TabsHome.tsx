import { Tabs } from "./components/Tabs";

const TabsHome = () => {
  const TABS = [
    {
      id: "overview",
      label: "Overview",
      content: <div>Overview Content</div>,
    },
    {
      id: "details",
      label: "Details",
      content: <div>Details Content</div>,
    },
    {
      id: "settings",
      label: "Settings",
      content: <div>Settings Content</div>,
    },
  ];

  return (
    <div>
      <h2>Tabs Component: </h2>
      <Tabs tabs={TABS} defaultActiveId="overview" />
    </div>
  );
};

export default TabsHome;
// “A tab click triggers an index change in the useTabs hook, which updates
// the single source of truth and re-renders both the tab list and panel based
// on derived state.”
