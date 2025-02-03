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

  const getTodo = (data) => {
    // console.log("added student:", data);

    setTodos((prevState) => [...prevState, data]);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="todos">
          <AddToDo setTodos={getTodo} />
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<Todos todos={todos} onComplete={handleComplete} onDelete={handleDelete} />} />
            <Route path="/item/:itemId" element={<ItemDetails items={todos} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
