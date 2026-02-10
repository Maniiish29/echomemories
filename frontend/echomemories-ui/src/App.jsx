import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Memories from "./pages/Memories";
import Caregiver from "./pages/Caregiver";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/caregiver" element={<Caregiver />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
