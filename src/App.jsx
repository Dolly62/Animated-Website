import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import Features from "./components/Feature/Features";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Pricing />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
