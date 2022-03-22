import React from "react";

const mainStyle = {
  backgroundColor: "#e06666",
  height: "400px",
  width: "700px",
  border: "1px solid black",
  display: "inline-block",
  verticalAlign: "top",
  padding: "10px",
};

const Main = (props) => {
  return <div style={mainStyle}>{props.children}</div>;
};

export default Main;
