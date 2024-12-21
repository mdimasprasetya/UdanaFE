import About from "../components/About";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Navbar from "../components/Navbar";


const LandingPages = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <Cards />

      <Main />

      <About />

      <Footer />
    </div>
  );
};

export default LandingPages;
