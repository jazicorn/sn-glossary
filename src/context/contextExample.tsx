import React, { createContext, useContext } from "react";

const myData = { username: "Israel" };
export const ExampleContext = createContext(myData);

interface Props {
  children: React.ReactNode;
}

export const ExampleProvider: React.FC<Props> = ({ children }) => {
  return (
    <ExampleContext.Provider value={{ username: "Chibuzor" }}>
      {children}
    </ExampleContext.Provider>
  );
};

export const Greet = () => {
  const data = useContext(ExampleContext);
  return <h1>Hello, {data.username}</h1>;
};
