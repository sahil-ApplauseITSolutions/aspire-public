import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import ImpactReachPage from "./pages/ImpactReach";
import Gallery from "./pages/Gallery";
import GuaranteedInternshipDetails from "./pages/GuaranteedInternshipDetails";
import CampusToCorporateDetails from "./pages/CampusToCorporateDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/impact-reach" element={<ImpactReachPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/programs/guaranteed-internship" element={<GuaranteedInternshipDetails />} />
        <Route path="/programs/campus-to-corporate" element={<CampusToCorporateDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
