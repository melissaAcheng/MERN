import { useParams } from "react-router";

const Text = (props) => {
  const { text } = useParams();
  return isNaN(text) ? <h1>The word is: {text}</h1> : <h1>The number is: {text}</h1>;
};

export default Text;
