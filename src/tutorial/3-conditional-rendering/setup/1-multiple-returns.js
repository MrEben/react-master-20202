import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setloading] = useState(true);
  const [isError, setisError] = useState(false);
  const [user, setuser] = useState("default user");
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          response.json();
        } else {
          setloading(false);
          setisError(true);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setuser(login);
        setloading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return (
      <>
        <div>
          <h2>Loading...</h2>
        </div>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <div>
          <h1>Error...</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <h1>{user}</h1>
      </div>
    </>
  );
};

export default MultipleReturns;
