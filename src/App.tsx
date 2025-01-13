import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import BusinessProfile from "./pages/BusinessProfile";
import GenerateQR from "./pages/GenerateQR";
import PublicBusinessPage from "./pages/PublicBusinessPage";
import ReviewerProfile from "./pages/ReviewerProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/business-profile" element={<BusinessProfile />} />
        <Route path="/generate-qr" element={<GenerateQR />} />
        <Route path="/business/:id" element={<PublicBusinessPage />} />
        <Route path="/reviewer/:id" element={<ReviewerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;