import { createContext, useContext, useState } from "react";
import items from "../assets/data.json";

const TodosContext = createContext(null);

export default function TodosContextWrapper({ children }) {
  const [todos, setTodos] = useState(items);
  return <TodosContext.Provider value={{ todos, setTodos }}>{children}</TodosContext.Provider>;
}

export const useTodosContext = () => useContext(TodosContext);
