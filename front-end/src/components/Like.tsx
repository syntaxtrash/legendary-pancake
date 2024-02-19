import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";

const Like = () => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
    console.log("clicked!");
  };

  return isActive ? (
    <IoMdHeart size="100px" color="red" onClick={toggle} />
  ) : (
    <IoMdHeartEmpty size="100px" onClick={toggle} />
  );
};

export default Like;
