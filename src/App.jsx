import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Todos from "./pages/Todos";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 p-4">
        <Sidebar />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<Todos />} />
          <Route path="/todos/:todoID" element={<ItemDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
