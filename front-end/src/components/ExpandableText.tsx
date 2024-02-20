import { useState } from "react";

interface ExpandableTextProp {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 100 }: ExpandableTextProp) => {
  let text: string = "";
  const [isMore, setMore] = useState(false);

  if (children.length <= maxChars) {
    text = children;
  } else {
    text = isMore ? children : children.substring(0, maxChars);
  }
  return (
    <>
      <div>{text}...</div>
      <button onClick={() => setMore(!isMore)}>
        {isMore ? "Less" : "More"}
      </button>
    </>
  );
};

export default ExpandableText;
