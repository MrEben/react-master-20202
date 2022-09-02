import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setvalue] = useState(0);
  useEffect(() => {
    console.log("apples");
    if (value >= 1) {
      document.title = `New Message(${value})`;
    }
  },[value]);
  console.log("ferver");
  return (
    <>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={() => setvalue(value + 1)}>
        Increase
      </button>
      <button className="btn" type="button" onClick={() => setvalue(0)}>
        reset
      </button>
    </>
  );
};

export default UseEffectBasics;
