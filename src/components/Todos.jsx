import { Link } from "react-router-dom";

export default function Todos({ todos, onComplete, onDelete }) {
  return (
    <>
      <main>
        <ul className="items">
          {todos.map((todo) => (
            <li className={"item"} key={todo.id}>
              <button className={`complete-button ${todo.completed ? "completed" : ""}`} onClick={() => onComplete(todo.id)}>
                {todo.completed ? "Completed" : "Complete"}
              </button>
              <Link to={`/item/${todo.id}`} className="details-button">
                {todo.task}
              </Link>
              <button className="delete-button" onClick={() => onDelete(todo.id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
