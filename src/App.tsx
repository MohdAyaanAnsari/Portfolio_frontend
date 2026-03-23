import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./routes/home";
import AboutPage from "./routes/about";
import ProjectsPage from "./routes/Projects";
import ServicesPage from "./routes/Services";
import ContactPage from "./routes/Contact";
import ResumePage from "./routes/Resume";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={< ProjectsPage/>} />
        <Route path="/services" element={< ServicesPage/>} />
        <Route path="/contact" element={< ContactPage/>} />
        <Route path="/resume" element={< ResumePage/>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
