import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddToDo({ updateTodo }) {
  const [taskInput, setTaskInput] = useState("");
  const [detailsInput, setDetailsInput] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    const setValue = {
      task: setTaskInput,
      details: setDetailsInput,
    };
    setValue[name](value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      task: taskInput,
      completed: false,
      details: detailsInput,
    };

    updateTodo(newTodo);
    setTaskInput("");
    setDetailsInput("");
  };

  return (
    <form className="flex flex-col gap-1.5 p-3 bg-red-700 rounded-2xl shadow-sm h-[180px] w-[300px]" onSubmit={handleSubmit}>
      <span className="py-3 px-2 bg-white text-center  rounded font-semibold uppercase">New To-do</span>
      <input className="p-3 border border-gray-200 rounded text-base focus:outline-none focus:border-liverpool-red focus:ring-2 focus:ring-liverpool-red/10 placeholder-gray-500" name="task" type="text" onChange={handleInput} placeholder="Add a new task" value={taskInput} />
      <input className="p-3 border border-gray-200 rounded text-base focus:outline-none focus:border-liverpool-red focus:ring-2 focus:ring-liverpool-red/10 placeholder-gray-500" name="details" type="text" onChange={handleInput} placeholder="Add more details" value={detailsInput} />
      <button className="px-4 py-2 mb-4 bg-red-700 rounded text-white transition-all duration-400 hover:bg-red-300  hover:text-white" type="submit">
        Add Todo
      </button>
    </form>
  );
}
