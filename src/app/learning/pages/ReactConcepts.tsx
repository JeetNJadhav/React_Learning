
import { Counter as Countera } from "../react-features/counter/usingCustomHook/Counter";
import { Counter as Counterb } from "../react-features/counter/usingCustomHook/Counter";
import Parent from "../../../shared/components/Parent";
import AccordianPage from "../react-features/accordion/AccordionPage";
import CarouselPage from "../react-features/caraousel/CarouselPage";
import { DynamicCheckbox } from "../react-features/dynamicCheckbox/DynamicCheckbox";
import LocationDropdowns from "../react-features/locationDropdown/LocationDropdowns";
import TabsHome from "../react-features/tabs/TabsHome";
import Todo from "../react-features/todo/ToDo";
import Users from "../../../shared/stores/redux/components/Users";
import { DebounceComponent } from "../react-features/debounce/debounceComponent";
import { DynamicInput } from "../react-features/dynamicInput/DynamicInput";
const ReactConcepts = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 100,
          alignItems: "center",
        }}
      >
        <div>
          <h3>Concept used: useMemo, useCallback, types, javscript logic</h3>
          <DynamicCheckbox />
        </div>

        <div>
          <h3>Dynamic Dropdown</h3>
          <div>
            <LocationDropdowns />
          </div>
        </div>
      </div>
      <div>
        <Todo />
      </div>
      <div style={{ marginTop: 20 }}>
        <TabsHome />
      </div>
      <div style={{ marginTop: 20 }}>
        <AccordianPage />
      </div>
      <div style={{ marginTop: 20 }}>
        <CarouselPage />
      </div>
      <h3>How to send data from child to parent using callback functions</h3>
      <Parent />
      <p>check todo component</p>

      <div style={{ display: "flex", gap: 20 }}>
        <Countera /> <Counterb />{" "}
      </div>

      <h3>Redux</h3>
      <Users />

      <h3>useDebounce</h3>
      <DebounceComponent />

      <h3>Dynamic Input </h3> 
      <p>
        Interview React JS Task Assignment First, there will be an input field.
        The user will enter a number, such as 5. Based on that input, 5 dynamic
        input fields will be rendered. The value of each field will be stored in
        a separate state variable. Upon submission, all the values ​​will be
        retrieved.
      </p>

      <p>This example has <b><u>Core Concept: React state should be treadted as immutable</u></b></p>
      <ul>
        <li>Do NOT directly modify existing state.</li>
        <li>Instead create a NEW copy and update that copy.</li>
      </ul>

      <img src="src\shared\data\Images\image.png" alt="" height={700}/>
      
      <DynamicInput />
    </>
  );
};

export default ReactConcepts;
