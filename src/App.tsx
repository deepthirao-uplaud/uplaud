import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;