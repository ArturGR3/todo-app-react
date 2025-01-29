import data from "../assets/data.json";
import { useState } from "react";

export default function Todos() {
  const [todos, setState] = useState(data);

  return (
    <>
      <main>
        <p>ToDOS </p>
        <ul>
          {todos.map((todo, index) => (
            <li class={"item"} key={index}>
              <button className="delete-button" onClick={() => setState(todos.filter((_, i) => i !== index))}>
                Delete
              </button>
              {todo.task} {todo.completed ? "✓" : "X"}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
