import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTodosContext } from "../context/Todos.context";

export default function ItemDetails() {
  const { todos, setTodos } = useTodosContext();

  const { todoID } = useParams();

  const foundTodo = todos.find((item) => String(item.id) === String(todoID));
  const [editedTask, setEditedTask] = useState(foundTodo?.task || "");
  const [editedDetails, setEditedDetails] = useState(foundTodo?.details || "");
  const [editedCompleted, setCompleted] = useState(foundTodo?.completed || false);

  const updateTodo = (todoData) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => (String(todo.id) === String(todoData.id) ? todoData : todo));
    });
  };

  const handleEdit = () => {
    const updatedTodo = {
      ...foundTodo,
      task: editedTask,
      details: editedDetails,
      completed: editedCompleted,
    };

    updateTodo(updatedTodo);
  };

  return (
    <div className="flex flex-col p-5 m-10 w-full bg-gray-100 rounded-lg shadow-sm">
      <div className="flex flex-col items-start w-full">
        <h4 className="text-2xl text-neutral-500 dark:text-neutral-400 mb-1">Task Title</h4>
        <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} className="w-full mb-3 p-2 border border-gray-200 rounded text-neutral-600" />

        <h4 className="text-2xl text-neutral-500 dark:text-neutral-400 mb-1">Task Details</h4>
        <textarea value={editedDetails} onChange={(e) => setEditedDetails(e.target.value)} className="w-full min-h-[100px] mb-3 p-2 border border-gray-200 rounded text-neutral-600" />

        <h4 className="text-2xl text-neutral-500 dark:text-neutral-400 mb-1">Task Status</h4>
        <label className="flex justify-start text-left w-full mb-3">
          <input type="checkbox" checked={editedCompleted} onChange={(e) => setCompleted(e.target.checked)} className="mr-2" />
          <p className="text-neutral-600">{editedCompleted ? "Completed" : "Not Completed"}</p>
        </label>

        <Link to="/" onClick={handleEdit} className="px-4 py-2 mb-4 border-2 border-blue-600 rounded text-blue-600 transition-all duration-400 hover:bg-blue-600 hover:text-white">
          Save Changes
        </Link>
      </div>
    </div>
  );
}
