import React, { useState } from "react";

const UseStateObject = () => {
  const [first, setfirst] = useState({
    name: "Dramani",
    age: "age 50",
    message: "How are you?",
  });
  // const [name, setfname] = useState("Godlove");
  // const [age, setage] = useState(25);
  // const [message, setmessage] = useState("I'm bad");
  const changemesage = () => {
    setfirst({ ...first, message: "How old are you?" });
    // setmessage("I'm good");
  };
  return (
    <>
      <h2>{first.name}</h2>
      <h3>{first.age} </h3>
      <h4>{first.message}</h4>
      <button type="button" className="btn" onClick={changemesage}>
        Change the message
      </button>
    </>
  );
};

export default UseStateObject;
