import React, { useContext } from "react";
import { userAuthContext } from "../context/userAuthContext";

const ComponentA = () => {
  const user = useContext(userAuthContext);
  console.log(user);
  return (
    <div>
      <h1>Copmonent A</h1>
      <h2>Name:{user.name}</h2>
    </div>
  );
};

export default ComponentA;
