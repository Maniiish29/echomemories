import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Memories from "./pages/Memories";
import MemoryDetail from "./pages/MemoryDetail";
import Caregiver from "./pages/Caregiver";

function App() {
  const location = useLocation();

  const isFocusMode = location.pathname.startsWith("/memories/");

  return (
    <>
      {!isFocusMode && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/memories/:id" element={<MemoryDetail />} />
        <Route path="/caregiver" element={<Caregiver />} />
      </Routes>

      {!isFocusMode && <Footer />}
    </>
  );
}

export default App;
