import React, { createContext } from "react";

type Props = {};

const TodosContext = createContext({});

const TodosProvider = (props: Props) => {
  return <div>TodosProvider</div>;
};
