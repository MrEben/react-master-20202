import React from "react";

const ErrorExample = () => {
  let title = "Random Title";
  const handleClick = () => {
    console.log("here");
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Click Here
      </button>
    </React.Fragment>
  );
    
};

export default ErrorExample;
