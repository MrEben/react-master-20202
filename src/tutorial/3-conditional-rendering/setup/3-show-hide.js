import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setshow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setsize] = useState(window.innerWidth);
  const checksize = () => {
    setsize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checksize);
    return () => {
      window.removeEventListener("resize", checksize);
    };
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window</h1>
      <h2>Size : {size}px </h2>
    </div>
  );
};
export default ShowHide;
