import data from "../assets/data.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Todos() {
  const [todos, setState] = useState(data);

  return (
    <>
      <main>
        <p>ToDOS </p>
        <ul>
          {todos.map((todo, index) => (
            <li className={"item"} key={index}>
              <button className="delete-button" onClick={() => setState(todos.filter((_, i) => i !== index))}>
                Delete
              </button>
              {todo.task} {todo.completed ? "✓" : "X"}
              <Link to={`/${todo.id}`} className="details-button">
                Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
