import React, { createContext, useState } from "react";

export const userAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John",
    email: "john@gmail.com",
  });
  return (
    <userAuthContext.Provider value={user}>{children}</userAuthContext.Provider>
  );
};
