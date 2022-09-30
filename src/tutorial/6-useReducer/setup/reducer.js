export const reducer = (state, action) => {
  const newItems = [...state.people, action.payload];
  if (action.type === "TESTING") {
    return {
      ...state,
      people: newItems,
      showmodal: true,
      modalContent: "item added",
    };
  }
  if (action.type === "no value") {
    return {
      ...state,
      showmodal: true,
      modalContent: "Please add item",
    };
  }
  if (action.type === "remove item") {
    const newItem = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newItem,
    };
  }
  if (action.type === "close modal") {
    return {
      ...state,
      showmodal: false,
    };
  }
  if (action.type === "remove all") {
    return {
      ...state,
      people:[]
    };
  }
  throw new Error("no item");
};
