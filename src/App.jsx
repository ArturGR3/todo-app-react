import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Todos from "./components/Todos";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ItemDetails from "./pages/ItemDetails";
import NotFoundPage from "./pages/NotFoundPage";
import items from "./assets/data.json";
import AddToDo from "./components/AddToDo";

function App() {
  const [todos, setTodos] = useState(items);

  const handleComplete = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const updateTodo = (todoData) => {
    setTodos((prevTodos) => {
      // Check if todo with this id already exists
      const exists = prevTodos.some((todo) => todo.id === todoData.id);

      if (exists) {
        return prevTodos.map((todo) => (todo.id === todoData.id ? todoData : todo));
      } else {
        return [...prevTodos, todoData];
      }
    });
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/"
            element={
              <div className="todos">
                <AddToDo updateTodo={updateTodo} />
                <Todos todos={todos} onComplete={handleComplete} onDelete={handleDelete} />
              </div>
            }
          />
          <Route
            path="/item/:itemId"
            element={
              <div className="todos">
                <ItemDetails items={todos} updateTodo={updateTodo} />
              </div>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
