import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import { AboutUs } from "./pages/about";
import './styles/global.css';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}
