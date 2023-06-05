import React from 'react'
import HomeImage from '../assets/homeImage.jpg'

const homePage = () => {
    return (
        <>
            <div name='home' className='w-full h-screen bg-[#251b3e]'>
                <div className=' w-[800px] bg-[#251b3e] flex mt-[200px] ml-[50px] fixed rounded-md border-[#f9a970] shadow-2xl shadow-[#f9a970] h-[500px] '>

                    <div className='mt-[50px] ml-[50px] '>
                        <span className='text-white uppercase text-6xl'> softzone </span>
                        <span className='text-white uppercase text-6xl mt-2 '>  software </span>
                        <p className='text-white uppercase text-6xl mt-2' > consultants </p>
                        <p className='text-white mt-4 '>WELCOMES TO OUR INSIGHT OF OUR LATEST AND SIMPLE
                            USER FRIENDLY SOFTWARE SOLUTIONS
                            SERVING FROM LAST 15 YEARS </p>
                    </div>

                    <button className='text-white mt-[330px] mr-[100px] hover:scale-110 h-[80px] w-[500px]  bg-gradient-to-tr  from-[#ed73ac] to-[#f9a970]'>View Products</button>

                </div>
                <img src={HomeImage} className='ml-[950px] pt-[150px] '></img>

            </div >
        </>
    )
}
export default homePage