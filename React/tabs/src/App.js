import "./App.css";
import { useState } from "react";
import Tab from "./components/Tab";
import Display from "./components/Display";

const App = () => {
  const [tabArray, setTabArray] = useState([
    { label: "Tab 1", content: "Tab 1 content here" },
    { label: "Tab 2", content: "Tab 2 content here" },
    { label: "Tab 3", content: "Tab 3 content here" },
  ]);
  const [curTabIndex, setCurTabIndex] = useState(0);

  return (
    <div className="App">
      <Tab tabArray={tabArray} setCurTabIndex={setCurTabIndex} />
      <Display tabArray={tabArray} curTabIndex={curTabIndex} />
    </div>
  );
};

export default App;
