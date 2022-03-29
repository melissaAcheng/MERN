import { useParams } from "react-router";

const Color = (props) => {
  const { word, textColor, bgColor } = useParams();
  if (isNaN(word)) {
    return <h1 style={{ color: textColor, backgroundColor: bgColor }}>{word}</h1>;
  } else {
    return <h1>Please enter a word</h1>;
  }
};

export default Color;
