import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [value, setvalue] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const value = await response.json();
    setvalue(value);
    // console.log(value);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>Github users</h2>
      <ul className="users">
        {value.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;