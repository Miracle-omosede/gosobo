import Logo from '../assets/images/logo.svg'
import { Menus } from '../utils'
import DesktopMenu from './DesktopMenu'

const Navbar = () => {
  return (
    <div>
      <header className='h-24 text-[15px] fixed inset-0 flex-center bg-white'>
        <nav className='px-3.5 flex-center-between w-full max-w-7xl mx-auto'>
          <div className='flex-center gap-x-3 z-[999] relative'>
            <img src={Logo} alt="logo" className='size-[3.5rem]' />
            
          </div>

          {/* menu */}

          {/* Desktop */}
          <ul className='lg:flex-center hidden gap-x-1'>
            {Menus.map((menu) => (
              <DesktopMenu key={menu.menu} menu={menu}  />
            ))}
          </ul>

          {/* Sign In and Register Buttons */}
          <div className='flex-center gap-x-5'>
            <button className='bg-transparent  border-gray-600  hover:border-custom-yellow border-[1px] text-black px-5 py-2 rounded-md hover:bg-custom-yellow hover:text-white transition duration-300 font-semibold font-dm-sans'>
              Register
            </button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
