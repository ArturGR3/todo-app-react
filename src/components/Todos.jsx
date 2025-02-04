import { Link } from "react-router-dom";

export default function Todos({ todos, onComplete, onDelete }) {
  return (
    <main>
      <ul className="flex flex-col items-start justify-around p-0 mx-24 my-4 bg-gray-100 shadow-sm">
        {todos.map((todo) => (
          <li className="flex items-center gap-1.5 p-1.5" key={todo.id}>
            <button
              className={`px-2 py-1 border-2 border-blue-600 rounded transition-all duration-400 cursor-pointer text-base
                ${todo.completed ? "bg-green-500 text-white hover:bg-green-600" : "text-blue-600 hover:bg-blue-600 hover:text-white"}`}
              onClick={() => onComplete(todo.id)}
            >
              {todo.completed ? "Completed" : "Complete"}
            </button>
            <Link to={`/item/${todo.id}`} className="text-blue-600">
              {todo.task}
            </Link>
            <button className="px-2 py-1 border-2 border-red-500 rounded text-red-500 transition-all duration-400 cursor-pointer text-base hover:bg-red-500 hover:text-white" onClick={() => onDelete(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
