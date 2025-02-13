import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import { AboutUs } from "./pages/about";
import { Contact } from "./pages/contact";
import './styles/global.css';
import { QueryClientProvider } from "@tanstack/react-query";  
import { queryClient } from "./queryClient";  

export function App() {
  return (
    <QueryClientProvider client={queryClient}>  
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
