import { Accordion } from "./components/Accordion";
import { ACCORDION_ITEMS } from "./constants";

const AccordianPage = () => {
  return (
    <>
      <h2>Accordion Page</h2>
      <Accordion items={ACCORDION_ITEMS} />
    </>
  );
};

export default AccordianPage;
