"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [nav, setNav] = useState(false);

    const scrollNav = () => {
        if (window.scrollY >= 20) {
        setNav(true);
        } else {
        setNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',scrollNav)
    },[]);

  return (
    <header className={`z-50 ${nav ? "bg-[#ffffff46]" : "bg-transparent"} fixed flex justify-between items-center lg:justify-evenly top-0 p-4 md:py-6 md:px-10 w-full`}>
        <h1 className='text-2xl font-bold text-white'>LOGO</h1>

        <nav className='hidden lg:flex mx-auto items-center px-5'>
        <ul className="flex gap-2 md:gap-6 items-center justify-center w-full py-2.5 text-[#c9c9c9] text-xs lg:text-xl font-extralight tracking-wider">
          <li>
            <Link className='pb-1 hover:border-b-2 hover:border-b-white hover:text-white duration-100' href="/">Home</Link>
          </li>
          <li>
            <Link className='pb-1 hover:border-b-2 hover:border-b-white hover:text-white duration-100' href="/about-us">About Us</Link>
          </li>
          <li>
            <Link className='pb-1 hover:border-b-2 hover:border-b-white hover:text-white duration-100' href="/projects">Project</Link>
          </li>
          <li>
            <Link className='pb-1 hover:border-b-2 hover:border-b-white hover:text-white duration-100' href="/careers">Career </Link>
          </li>
          <li>
            <Link className='pb-1 hover:border-b-2 hover:border-b-white hover:text-white duration-100' href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-8 h-8 cursor-pointer"
      >
            {/* Top row */}
            <motion.span
            initial={false}
            animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -9,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`absolute left-0 right-0 mx-auto h-1.5 bg-white ${isOpen ? "rounded" : "rounded-t"} origin-center`}
            />
            {/* Mid row 1 */}
            <motion.span
            initial={false}
            animate={{
                opacity: isOpen ? 0 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute left-0 right-0 mx-auto top-1/2 transform -translate-y-1/2 h-0.5 bg-white rounded"
            />
            {/* mid row 2*/}
            <motion.span
            initial={false}
            animate={{
                opacity: isOpen ? 0 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute left-0 right-0 mx-auto top-1/2 mt-1 transform translate-y-1/2 h-0.5 bg-white rounded"
            />
            {/* Bottom row */}
            <motion.span
            initial={false}
            animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 9,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`absolute left-0 right-0 mx-auto h-1.5 bg-white ${isOpen ? "rounded" : "rounded-b"} origin-center`}
            />
      </button>
    </header>
  )
}

export default Navbar