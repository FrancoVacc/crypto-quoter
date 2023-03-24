import React from "react";
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";

const Variation = ({ change, hidden }) => {
  return (
    <>
      <p className={`text-white ${hidden}`}>Variation:</p>
      <p
        className={` flex gap-2 ${hidden} ${
          change < 0 ? "text-red-500 font-bold" : "text-green-500 font-bold"
        }`}
      >
        {change}
        {change < 0 ? <BsGraphDownArrow /> : <BsGraphUpArrow />}
      </p>
    </>
  );
};

export default Variation;
