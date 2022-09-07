import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, settext] = useState("");
  const [error, seterror] = useState(false);
  // const [text, settext] = useState("");
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h2>{firstValue}</h2>
      <h3>second : {secondValue} </h3> */}
      {/* {if () {
        console.log(see);
      }} */}
      <h1>{text || "Hello world"}</h1>
      <button className="btn" onClick={() => seterror(!error)}>
        Toggle error
      </button>
      {error && <h2>Heyya</h2>}
      {error ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h3>no error</h3>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
