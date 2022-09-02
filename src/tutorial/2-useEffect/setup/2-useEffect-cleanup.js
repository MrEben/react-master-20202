import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const change = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", change);
    // const cleanupFunc = () => {
    //   window.removeEventListener("resize", change);
    // };
    // return cleanupFunc
  },[]);

  return (
    <>
      <h1>Window Width</h1>
      <h2>{width}px</h2>
    </>
  );
};

export default UseEffectCleanup;
