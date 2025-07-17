import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react'

import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch} from 'react-icons/ai'
import { FaMoon} from 'react-icons/fa'

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-blue-600 via-pink-600 to-purple-800 rounded-lg text-white'>Fred's</span>
            Blog
        
        </Link>
        <form>
            <TextInput 
                type='text'
                placeholder='Rechercher...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            
            />
        </form>
    <Button className='w-12 h-10 lg:hidden' color='gray' pill>
      <AiOutlineSearch/>
    </Button>
    <div className="flex gap-2 md:order-2">
      <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
        <FaMoon/> 
      </Button>
         <Link to='/Connexion'>
            <Button color='blue'>
              Connexion
            </Button>
          </Link>
          <NavbarToggle/>
    </div> 
          <NavbarCollapse>
            <NavbarLink active={path === "/"} as={'div'}>
              <Link to='/'>
                Accueil
              </Link>
            </NavbarLink>
            <NavbarLink active={path === "/Apropos"} as={'div'}>
              <Link to='/Apropos'>
              A propos
              </Link>
            </NavbarLink>
            <NavbarLink active= {path === "/Projets"} as={'div'} >
              <Link to='/Projets'>
              Projets
              </Link>
            </NavbarLink>
          </NavbarCollapse>   
    </Navbar>
  );
}
