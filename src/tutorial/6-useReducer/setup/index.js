import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";
// reducer function
const defaultState = {
  people: [],
  showmodal: false,
  modalContent: "",
};
const Index = () => {
  const [name, setname] = useState("");
  // const [people, setpeople] = useState(data);
  // const [showmodal, setshowmodal] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "TESTING", payload: newItem });
      // setshowmodal(true);
      // setpeople([...people, { id: new Date().getTime().toString(), name }]);
      setname("");
    } else {
      dispatch({ type: "no value" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "close modal" });
  };
  return (
    <>
      {state.showmodal && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <button type="submit">Add item</button>
      </form>
      {/* <button style={{ marginLeft: "1rem" }}>refresh list</button> */}
      <button
        onClick={() => dispatch({ type: "remove all" })}
        className="btn"
      >
        remove all
      </button>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "remove item", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
