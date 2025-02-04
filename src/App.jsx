import { useState } from "react";
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 p-4">
        {/* <div className="flex"> */}
        <Sidebar />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/"
            element={
              <div className="flex flex-col items-center justify-center w-full gap-20">
                <AddToDo updateTodo={updateTodo} />
                <Todos todos={todos} onComplete={handleComplete} onDelete={handleDelete} />
              </div>
            }
          />
          <Route
            path="/item/:itemId"
            element={
              <div className="flex flex-col items-center justify-start w-full gap-5">
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
