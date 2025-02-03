import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/AddToDo.css";

export default function AddToDo({ setTodos }) {
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

    setTodos(newTodo);
    setTaskInput("");
    setDetailsInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <span className="todo-submit-title">New To-do Form</span>
      <input className="todo-input" name="task" type="text" onChange={handleInput} placeholder="Add a new task" value={taskInput} />
      <input className="todo-input" name="details" type="text" onChange={handleInput} placeholder="Add more details" value={detailsInput} />
      <button className="todo-submit" type="submit">
        Add Todo
      </button>
    </form>
  );
}
