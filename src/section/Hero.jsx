import { MoveRight } from "lucide-react"
import "../App.scss"
import Reading from "../assets/images/reading2.jpg";
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';

const Hero = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="hero h-[100vh]" ref={container} style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
      <motion.div>
      <div className="flex flex-col md:max-w-7xl mx-auto px-3.5  py-20" >
            <div className="py-10">
            <h1 className="nevada text-[30px] md:text-[54px] font-bold">Unleash Your <span className="text-custom-yellow">Creativity</span> – Empowering <br/> Writers, Inspiring Readers.</h1>
            <p className="font-dm-sans">
            Your destination for self-publishing, storytelling, and connecting with <br/> a global community of readers and writers.
            </p>
            </div>
            
            <div>
                {/* call to action button's */}
                <button className="button-52 flex items-center font-dm-sans" role="button">Explore <MoveRight className="ml-2 move-right-icon"/></button>
            </div>
        </div>

        {/* photo spreader */}
        <div >
        <motion.div style={{y}} className="h-[650px] fixed top-[60%] left-0 right-0 z-[-1]">
            <img src= {Reading} alt="reading" className="absolute object-cover object-[left_31%] h-[inherit] w-full"/>
        </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero