import { MoveRight } from "lucide-react";
import "../App.scss";
import Reading from "../assets/images/reading2.jpg";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

const Hero = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      className="hero md:h-[100vh] h-[100lvh]"
      ref={container}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <motion.div>
        <div className="flex flex-col md:max-w-7xl mx-auto px-3.5  py-20">
          <div className="py-10 flex flex-col gap-3">
            <h1 className="nevada text-[28px] md:text-[54px] md:font-bold font-[500]">
              Unleash Your{" "}
              <span className="text-custom-yellow">Creativity</span> –
              Empowering <br /> Writers, Inspiring Readers.
            </h1>
            <p className="font-dm-sans">
              Your destination for self-publishing, storytelling, and connecting
              with <br className="md:block hidden" /> a global community of
              readers and writers.
            </p>
          </div>

          <div>
            {/* call to action button's */}
            <button
              className="button-52 flex items-center font-dm-sans"
              role="button"
            >
              Explore <MoveRight className="ml-2 move-right-icon" />
            </button>
          </div>
        </div>

        {/* photo spreader */}
        <div>
          <motion.div
            style={{ y }}
            className="h-[650px] fixed top-[75%] md:top-[60%] left-0 right-0 z-[-1]"
          >
            <img
              src={Reading}
              alt="reading"
              className="absolute object-cover md:object-[left_31%] object-[left_31%, center] h-[inherit] w-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
