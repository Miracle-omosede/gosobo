import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../section/Hero";
import Services from "../section/Services";
import Lenis from "lenis";

const Home = () => {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
    </main>
  )
};

 


export default Home;