import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import { AboutUs } from "./pages/about";
import './styles/global.css';
import { Interaction } from "./pages/interaction";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/interaction" element={<Interaction />} />
      </Routes>
    </Router>
  );
}
