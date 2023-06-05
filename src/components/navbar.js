import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const navbar = () => {
    return (
        <div className='fixed w-full h-[120px] flex justify-between items-center px-4 bg-[#0a192f]'>


            <ul className=' hidden md:flex text-[#ec61c4] font-bold ml-[1000px] font-capital1 space-x-6  cursor-pointer'>
                <li className='hover:text-white hover:rounded-md  hover: text-2xl  font-serif'>
                    <Link to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='hover:text-white hover:rounded-md   text-2xl  font-serif'>    <Link to="about" smooth={true} duration={500} >
                    About
                </Link></li>
                <li className='hover:text-white hover:rounded-md   text-2xl  font-serif'>    <Link to="skills" smooth={true} duration={500} >
                    Skills
                </Link></li>
                <li className='hover:text-white hover:rounded-md   text-2xl  font-serif'>    <Link to="work" smooth={true} duration={500} >
                    Works
                </Link></li>
                <li className='hover:text-white hover:rounded-md   text-2xl  font-serif'>    <Link to="contact" smooth={true} duration={500} >
                    Contact
                </Link></li>
            </ul>
        </div>
    )
}
export default navbar;