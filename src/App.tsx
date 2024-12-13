import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import BusinessProfile from "./pages/BusinessProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/business-profile" element={<BusinessProfile />} />
      </Routes>
    </Router>
  );
}

export default App;