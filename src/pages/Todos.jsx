import { useState } from "react";
import { Link } from "react-router-dom";
import AddToDo from "../components/AddToDo";
import { useTodosContext } from "../context/Todos.context";

export default function Todos() {
  const { todos, setTodos } = useTodosContext();

  const handleComplete = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const addTodo = (todoData) => {
    setTodos((prevTodos) => {
      return [...prevTodos, todoData];
    });
  };

  return (
    <main className="flex flex-col items-center justify-center w-full gap-20">
      <AddToDo addToDo={addTodo} />
      <ul className="flex flex-col items-start justify-around p-0 mx-24 my-4 bg-gray-100 shadow-sm max-h-[70vh] overflow-y-auto">
        {todos.map((todo) => (
          <li className="flex items-center gap-1.5 p-1.5" key={todo.id}>
            <button
              className={`px-2 py-1 border-2 border-blue-600 rounded transition-all duration-400 cursor-pointer text-base
                ${todo.completed ? "bg-green-500 text-white hover:bg-green-600" : "text-blue-600 hover:bg-blue-600 hover:text-white"}`}
              onClick={() => handleComplete(todo.id)}
            >
              {todo.completed ? "Completed" : "Complete"}
            </button>
            <Link to={`/todos/${todo.id}`} className="text-blue-600">
              {todo.task}
            </Link>
            <button className="px-2 py-1 border-2 border-red-500 rounded text-red-500 transition-all duration-400 cursor-pointer text-base hover:bg-red-500 hover:text-white" onClick={() => handleDelete(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
