import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../section/Hero";
import Services from "../section/Services";
import Lenis from "lenis";
import Construction from "../section/Construction";
import Competiton from "./Competiton";

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
      <Competiton/>
      {/* <Navbar/>
      <Hero/>
      <Services/>
      <Construction/> */}
    </main>
  )
};

 


export default Home;