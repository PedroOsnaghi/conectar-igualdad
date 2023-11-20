import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notebook from "./pages/Notebook";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Puedes agregar un Route para '/soporte-tecnico' si es necesario */}
      </Routes>
    </Router>
  );
}

export default App;
