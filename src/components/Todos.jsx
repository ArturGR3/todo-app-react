import data from "../assets/data.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Todos() {
  const [todos, setState] = useState(data);

  return (
    <>
      <main>
        <p>ToDOS </p>
        <ul className="items">
          {todos.map((todo) => (
            <li className={"item"} key={todo.id}>
              <button
                className={`complete-button ${todo.completed ? "completed" : ""}`}
                onClick={() => setState(todos.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t)))}
              >
                {todo.completed ? "Completed" : "Complete"}
              </button>
              <Link to={`/item/${todo.id}`} className="details-button">
                {todo.task}
              </Link>
              <button className="delete-button" onClick={() => setState(todos.filter((t) => t.id !== todo.id))}>
                X
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
