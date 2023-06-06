import React from 'react'
import HomeImage from '../assets/homeImage.jpg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const homePage = () => {
    return (
        <>
            <div name='home' className='w-full p-5 h-screen bg-[#251b3e]'>
                <div className=' w-[800px] bg-[#251b3e] flex  ml-[50px]  rounded-md border-[#f9a970] shadow-2xl shadow-[#f9a970] h-[500px] '>

                    <div className='mt-[50px] ml-[50px]  '>
                        <span className='text-white uppercase text-6xl font-serif'> softzone </span>
                        <span className='text-white uppercase text-6xl mt-2  font-serif '>  software </span>
                        <p className='text-white uppercase text-6xl mt-2  font-serif' > consultants </p>
                        <p className='text-white mt-4 font-serif italic '>Welcome to our insight of latest and simple user friendly softwar solutions serving from last 15 years </p>
                    </div>

                    <Link to="products" smooth={true} duration={500} >
                        <button className='text-white mt-[330px] font-extrabold mr-[50px] hover:scale-110 h-[80px] w-[300px]  bg-gradient-to-tr  from-[#ed73ac] to-[#f9a970]'>
                            View Products
                        </button>
                    </Link>

                </div>
                <img src={HomeImage} className='ml-[950px]  mt-[-500px] '></img>

            </div >
        </>
    )
}
export default homePage