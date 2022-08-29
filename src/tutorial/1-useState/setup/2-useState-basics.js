import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState('apple'));
  // const handler = useState(1)[1];
  // const value = useState(1)[0];
  // console.log(value, handler);
  const [first, setfirst] = useState("random title");
  const handleClick = () => {
    if (first === "random title") {
      setfirst("New Title");
    } else {
      setfirst("random title");
    }
  };
  return (
    <div>
      <h1>{first}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Click Here
      </button>
    </div>
  );
};

export default UseStateBasics;
