import React from "react";

const Display = ({ tabArray, curTabIndex }) => {
  return <div>{tabArray[curTabIndex].content}</div>;
};

export default Display;
