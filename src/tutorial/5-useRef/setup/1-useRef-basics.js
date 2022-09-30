import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const useRefContainer = useRef(null);
  const divcont = useRef(null);
  const handler = (e) => {
    e.preventDefault();
   console.log(useRefContainer.current.value);
   console.log(divcont.current);
  };
  return (
    <form className="form" onSubmit={handler}>
      <div>
        <input type="text" ref={useRefContainer} />
        <button type="submit">Submit</button>
      </div>
      <div ref={divcont}>Hello world</div>
    </form>
  );
};

export default UseRefBasics;
