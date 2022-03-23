import React from "react";

const Tab = ({ tabArray, setCurTabIndex }) => {
  const selectTab = (index) => {
    console.log("Tab Clicked", index);
    setCurTabIndex(index);
  };

  return (
    <div>
      {tabArray.map((tab, index) => {
        return (
          <button onClick={() => selectTab(index)} key={index}>
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;
