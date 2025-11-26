"use client";
import Link from 'next/link';
import { motion as m, AnimatePresence } from "motion/react";
import { childMenu, parentMenu } from '@/animations/NavMenu';
import { FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import notchLogo from '@/public/images/base/notch-logo.webp';
import notchRedLogo from '@/public/images/base/notch-red-logo.webp';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [nav, setNav] = useState(false);
    const currentPathName = usePathname();

    const scrollNav = () => {
        if (window.scrollY >= 20) {
        setNav(true);
        } else {
        setNav(false);
        }
    }
    useEffect(() => {
      window.addEventListener('scroll', scrollNav);
      return () => window.removeEventListener('scroll', scrollNav);
    }, []);

    const navbarLists = [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about-us" },
      { name: "Project", path: "/projects" },
      { name: "Career", path: "/careers" },
      { name: "Contact Us", path: "#contact-us-footer" },
    ]

    const socmedLists = [
      { icon: <FaInstagram className="text-white text-2xl md:text-5xl"/>, path: "https://instagram.com/" },
      { icon: <FaLinkedinIn className="text-white text-2xl md:text-5xl"/>, path: "https://linkedin.com/" },
      { icon: <FaTiktok className="text-white text-2xl md:text-5xl"/>, path: "https://tiktok.com/" },
    ]

  return (
    <header className={`z-50 ${nav ? "bg-[#00000046] backdrop-blur-lg" : "bg-transparent"} fixed flex justify-between items-start md:items-end top-0 p-4 sm:px-7 md:px-14 md:py-8 lg:px-16 w-full duration-500`}>
        <Link href={"/"} className='w-fit'>
          <Image src={notchLogo} alt="Notch Initial Logo" width={100} height={100} className='w-24 h-auto md:w-28 md:h-auto'/> 
        </Link>

        <nav className='hidden md:flex items-center'>
        <ul className="flex gap-2 md:gap-6 items-center justify-center w-full py-2.5 text-[#c9c9c9] text-xs md:text-xl font-extralight tracking-wider">
            {navbarLists.map(({name, path}, index) => (
              <li key={index}>
                <Link className={`pb-1 ${currentPathName == path && 'text-white border-b-2 border-b-white'} hover:border-b-2 hover:border-b-white hover:text-white duration-100`} href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

          <button
            role='button'
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative w-8 h-7 cursor-pointer z-50 scale-110 md:hidden"
          >
            {/* Top row */}
            <m.span
              initial={false}
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -9,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`absolute left-0 right-0 mx-auto h-1.5 ${
                isOpen ? "rounded bg-black" : "rounded-t bg-white"
              } origin-center`}
            />
            {/* Mid row 1 */}
            <m.span
              initial={false}
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`absolute left-0 right-0 mx-auto top-1/2 transform -translate-y-1/2 h-0.5 bg-white rounded `}
            />
            {/* mid row 2*/}
            <m.span
              initial={false}
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute left-0 right-0 mx-auto top-1/2 mt-1 transform translate-y-1/2 h-0.5 bg-white rounded"
            />
            {/* Bottom row */}
            <m.span
              initial={false}
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 9,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`absolute left-0 right-0 mx-auto h-1.5 ${
                isOpen ? "rounded bg-black" : "rounded-b bg-white"
              } origin-center`}
            />
          </button>

        <AnimatePresence>
          {isOpen && (
            <m.div
            key="menu"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5}}
            exit={{ x: "100%", opacity: 0 }}
            className={`fixed top-0 right-0 h-screen w-full bg-white flex flex-col items-center justify-between text-center text-3xl md:hidden`}
            >
            
              <div className="w-full flex flex-col md:flex-row justify-center items-center">
                <m.ol 
                  variants={parentMenu}
                  initial="hidden"
                  animate="show" 
                  className="w-full md:w-1/2 flex gap-2 flex-col justify-start items-start mt-20 px-10">
                  {navbarLists.map(({name, path}, index) => (
                    <ul
                      key={index}
                      className={`${currentPathName == path && 'text-[#8d161e] translate-x-3'} transform hover:translate-x-3 duration-300 overflow-hidden -my-1`} 
                      onClick={() => setIsOpen(false)}>
                      <m.li variants={childMenu}  className={`text-4xl tracking-wide font-semibold py-1.5 text-start`}>
                        <Link href={path}>{name}</Link>
                      </m.li>
                    </ul>
                  ))}
                </m.ol>
              </div>

              {/* socmed */}
              <m.div 
                animate={{ x: 0, opacity: 1 }} 
                initial={{ x: "-100%", opacity: 0 }} 
                transition={{ duration: 1, delay: 0.5 }} 
                className="bottom-0 w-full h-24 md:h-28 border-t-4 border-black flex justify-between items-center px-3.5">
                  <m.div
                    animate={{ y: 0, opacity: 1 }} 
                    initial={{ y: "100%", opacity: 0 }} 
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <Image src={notchRedLogo} alt="Notch Red Logo" width={100} height={100} className='w-24 h-auto md:w-28 md:h-auto'/>
                  </m.div>
                  <m.div
                    animate={{ y: 0, opacity: 1 }} 
                    initial={{ y: "100%", opacity: 0 }} 
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="flex gap-2 justify-center items-center">
                      {socmedLists.map(({icon, path}, index) => (
                        <Link key={index} href={path} className="hover:scale-90 duration-300 bg-[#8d161e] p-2 rounded-lg">{icon}</Link>
                      ))}
                  </m.div>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
    </header>
  )
}

export default Navbar