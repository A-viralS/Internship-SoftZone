import React from 'react'

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const navbar = () => {
    return (
        <div className='w-full h-[120px]  flex justify-between items-center px-4 bg-[#251b3e]'>


            <ul className=' hidden md:flex text-[#f9a970] font-bold ml-[1000px] font-capital1 space-x-6  cursor-pointer'>
                <a href='/'>
                    <li className='hover:text-white hover:rounded-md  hover: text-2xl  font-serif'>
                        <Link to="home" smooth={true} duration={500} >
                            Home
                        </Link>

                    </li>
                </a>
                <li className='hover:text-white hover:rounded-md   text-2xl  font-serif'>    <Link to="about" smooth={true} duration={500} >
                    About
                </Link></li>
                <li className='hover:text-white hover:rounded-md   text-2xl  font-serif'>    <Link to="products" smooth={true} duration={500} >
                    <div class="dropdown hover:text-white hover:rounded-md   text-2xl  font-serif">
                        <button class="dropbtn hover:text-white">Products</button>
                        <div class="dropdown-content">
                            <a href="#">Visual Safe GST</a>
                            <a href="#">MySchool</a>
                            <a href="#">RetailX-Pos</a>
                            <a href="#">Test2K9.0</a>
                        </div>
                    </div>
                </Link></li>



                <a href='../components/form' target='_blank'>
                    <li className='hover:text-white hover:rounded-md   text-2xl  font-serif'>   Contact</li>
                </a>

            </ul>
        </div>
    )
}
export default navbar;