import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        const removeItem = (id) => {
          setPeople((people) => {
            let newPeople = people.filter((person) => person.id !== id);
            return newPeople;
          });
        };
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              clear
            </button>
          </div>
        );
      })}

      <button type="button" className="btn" onClick={() => setPeople([])}>
        Remove All
      </button>
    </>
  );
};

export default UseStateArray;
