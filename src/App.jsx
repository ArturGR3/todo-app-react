import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Todos from "./components/Todos";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Dashboard from "./pages/Dashboard";
import ItemDetails from "./pages/ItemDetails";
import NotFoundPage from "./pages/NotFoundPage";
import items from "./assets/data.json";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      {/* <Todos /> */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/item/:itemId" element={<ItemDetails items={items} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
