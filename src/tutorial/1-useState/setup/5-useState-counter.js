import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setvalue] = useState(0);
  const complex = () => {
    setTimeout(() => {
      setvalue((prev) => {
        return prev + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Let's count</h2>
        <h1>{value}</h1>
        <buttton className="btn" onClick={() => setvalue(value - 1)}>
          decrease
        </buttton>
        <buttton className="btn" onClick={() => setvalue(0)}>
          Reset
        </buttton>
        <buttton className="btn" onClick={() => setvalue(value + 1)}>
          increase
        </buttton>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>complex count</h2>
        <h1>{value}</h1>
        <buttton className="btn" onClick={complex}>
          increase later
        </buttton>
      </section>
    </>
  );
};

export default UseStateCounter;
