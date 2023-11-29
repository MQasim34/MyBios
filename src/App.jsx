import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Cancas from "./components/Cancas";

function App() {
  return (
    <BrowserRouter>
      <div className="fixed z-30">
        <NavBar />
      </div>
      <Cancas />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Pricing />
      <Blog />
      <Contact />
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
