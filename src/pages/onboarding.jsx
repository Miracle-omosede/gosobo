import { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Reading from "../assets/reading.jpg";


//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Onboarding = () => {
    const imageDetails = {
        width: 524,
        height: 650,
      };
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
              <div className='mua'>MUA: @mylifeascrystall</div>
            </motion.div>
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>Y</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>n</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}>T</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>q</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 800 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={Reading}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -1200 : -600,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Onboarding;



import { ChevronDown } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { motion } from "motion/react"

const DesktopMenu = ({ menu }) => {
    const [isHover , setIsHover ] = useState(false)

    const toggleHoverMenu = () => {
        setIsHover(!isHover);
    } 

    // variants
    const subMenuAnimate = {
        enter: {
          opacity: 1,
          rotateX: 0,
          transition: {
            duration: 0.5,
          },
          display: "block",
        },
        exit: {
          opacity: 0,
          rotateX: -15,
          transition: {
            duration: 0.5,
          },
          transitionEnd: {
            display: "none",
          },
        },
      };

    const hasSubMenu = menu?.subMenu?.length > 0
  return (
    <motion.li className='group/link' onHoverStart={toggleHoverMenu} onHoverEnd={toggleHoverMenu}>
        {/* replace with react-route */}
        <span className="flex-center gap-1 cursor-pointer px-3 py-1 hover:bg-white/5 font-dm-sans font-medium">
            {menu.name}
            {hasSubMenu && <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />}
        </span>

        {
            hasSubMenu && (
                <motion.div className='sub-menu' initial="exit" animate={isHover ? "enter" : "exit"} variants={subMenuAnimate}>
                    <div className={`grid gap-7 ${
                        menu.gridCols === 3 ? 'grid-cols-3' : menu.gridCols === 2 ? 'grid-cols-2' : 'grid-cols-1'
                    }`}>
                        {
                            menu?.subMenu?.map((subMenu, i) => (
                                <div key={i} className='relative cursor-pointer'>
                                    <div className='flex-center gap-x-4 group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300'>
                                        <div className='bg-black/5 w-fit p-2 rounded-md font-dm-sans'>
                                            {subMenu?.icon && <subMenu.icon/>}
                                        </div>

                                        <div>
                                            <h6 className='font-semibold'>{subMenu?.name}</h6>
                                            <p className='text-sm text-gray-600'>{subMenu?.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </motion.div>
            )
        }
    </motion.li>
  )}
DesktopMenu.propTypes = {
    menu: PropTypes.shape({
        name: PropTypes.string.isRequired,
        subMenu: PropTypes.array,
    }).isRequired
};  

export default DesktopMenu;

{subMenu.heading !== 'Events' && (
  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full ml-4 self-start">
    {/* <Loader /> */}
  </span>
)}