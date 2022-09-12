import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setfirstName] = useState("");
  const [email, setemail] = useState("");
  const [people, setpeople] = useState([]);
  const handler = (e) => {
    e.preventDefault();
    if (firstName && email) {
      // console.log("submitted");
      const person = { id: new Date().getTime().toString(), firstName, email };
      setpeople((people) => {
        return [...people, person];
      });
      setemail("");
      setfirstName("");
    } else {
      console.log("not submitted");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handler}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
