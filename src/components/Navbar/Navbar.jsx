import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import Logo from "../../assets/images/Doaba-edit.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {

  const [mobileNav, setMobileNav] = useState(false);

  const showMobileNav = () => {
      setMobileNav(true);
  }

  const closeNav = () => {
    setMobileNav(false);
  }

  return (
    <>
    <div className="sm:flex sm:justify-between sm:items-center sm:border-b sm:py-3.5 sm:px-2 sm:border-black hidden">
         <div><img className="w-20 h-15" src={Logo} alt="Doabalogo" /></div>
         <div className='text-orangeBrand flex gap-3 font-semibold text-xl font-robotocondensed'>
         <Link className='hover:text-black'>Home</Link> 
         <Link className='hover:text-black'>Blog</Link> 
         <Link className='hover:text-black'>Contact Us</Link> 
         <Link className='hover:text-black'>About</Link></div>
         <div className='flex gap-3 text-orangeBrand'><Link className='text-2xl hover:text-black'><FaUser /></Link>
         <Link className='text-2xl hover:text-black'><FaNewspaper /></Link>
         </div>
    </div>
    <div className='sm:hidden flex justify-between border-b py-3.5 px-2 border-black'>
      <div><img className='w-20 h-15' src={Logo} alt="Doabalogo" /></div>
      <div>{mobileNav?  (   
    <div className='flex flex-col gap-3'><div className='text-orangeBrand text-4xl hover:text-black self-end' onClick={() => {closeNav()}} ><IoClose /> </div> 
      <div className='text-orangeBrand flex flex-col gap-3 font-semibold text-xl font-robotocondensed'>
         <Link className='hover:text-black'>Home</Link> 
         <Link className='hover:text-black'>Blog</Link> 
         <Link className='hover:text-black'>Contact Us</Link> 
         <Link className='hover:text-black'>About</Link></div>
         <div className='flex gap-3 text-orangeBrand'><Link className='text-2xl hover:text-black'><FaUser /></Link>
         <Link className='text-2xl hover:text-black'><FaNewspaper /></Link>
         </div>
      </div>  
    ) : (
      <div className='text-orangeBrand text-4xl hover:text-black' onClick={() => {showMobileNav()}}><GiHamburgerMenu /> </div>
    )
        
        }
      </div>

    </div>
    </>
  )
}

export default Navbar