import { ChevronDown } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { motion } from 'motion/react';

const DesktopMenu = ({ menu }) => {
  const [isHover, setIsHover] = useState(false);

  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };

  // Animation variants
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length > 0;

  return (
    <motion.li
      className="group/link relative"
      onMouseEnter={toggleHoverMenu}
      onMouseLeave={toggleHoverMenu}
    >
      {/* Main menu item */}
      <span className="flex-center gap-2 cursor-pointer px-4 py-2 rounded-md hover:bg-dark-cyan hover:text-white font-dm-sans font-medium transition duration-300 ease-in-out">
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] size-3 group-hover/link:rotate-180 duration-200" />
        )}
      </span>

      {/* Submenu */}
      {hasSubMenu && (
        <motion.div
          className="absolute top-full left-0 bg-white shadow-lg p-6 rounded-lg z-10"
          initial="exit"
          animate={isHover ? 'enter' : 'exit'}
          variants={subMenuAnimate}
          style={{
            width: menu.gridCols === 4 ? '900px' : '400px',
          }}
        >
          <div className={`grid gap-6 grid-cols-${menu.gridCols || 1}`}>
            {/* Bookstore Dropdown */}
            {menu.name === 'Bookstore' &&
              menu.subMenu.map((sub, i) => (
                <div key={i}>
                  <h6 className="flex items-center gap-2 mb-2 font-semibold text-gray-800">
                    {sub.icon && (
                      <sub.icon className="bg-dark-cyan text-white p-2 rounded-lg w-7 h-7" />
                    )}
                  <span>
                  <p> {sub.heading}</p>
                    {/* Displaying the description for each submenu heading */}
                    {/* <p className="text-[10px] text-gray-600 mb-3">
                      {sub.desc}
                    </p> */}
                  </span>
                  </h6>

                  <hr className=' border-gray-600/25 my-5'/>

                  <div className="flex flex-col gap-3">
                    {sub.items.map((item, j) => (
                      <div key={j} className="flex flex-col">
                        <span className="text-sm text-gray-800 font-medium hover:text-dark-cyan hover:underline cursor-pointer transition duration-300 ease-in-out">
                          {item.name}
                        </span>
                        
                        <p className='text-xs text-gray-600 mb-3'>
                            {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            {/* Resources Dropdown */}
            {menu.name === 'Resources' &&
              menu.subMenu.map((item, i) => (
                <div key={i} className="flex items-start gap-3 hover:bg-dark-cyan hover:text-white p-2 rounded-md transition duration-300 ease-in-out">
                  {item.icon && (
                    <item.icon className="bg-dark-cyan text-white p-2 rounded-lg w-7 h-7" />
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-800 font-medium hover:text-white hover:underline cursor-pointer transition duration-300 ease-in-out">
                      {item.name}
                    </span>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};

DesktopMenu.propTypes = {
  menu: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subMenu: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string,
        icon: PropTypes.elementType,
        desc: PropTypes.string, // Ensure desc is available for submenu heading
        items: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
          })
        ),
      })
    ),
    gridCols: PropTypes.number,
  }).isRequired,
};

export default DesktopMenu;
