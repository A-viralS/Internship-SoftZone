import React from 'react'
import img from '../assets/homeImage.jpg'
import gst from '../assets/gst.png';
import school from '../assets/school.png'
import retail from '../assets/retail.png'
import path from '../assets/path.webp'
const products = () => {
    return (
        <div name="products" className='w-full h-full bg-[#251b3e]'>
            <div className='flex  '>

                <img src={gst} className='h-[300px]'></img>
                <div className='flex flex-col w-[800px] p-8 shadow-md shadow-[#f9a970] ml-[200px]'>
                    <span className='font-extrabold text-4xl text-[#f9a970]'>VISUAL SAFE-GST 18.0</span>
                    <span className='text-white   mt-[20px] font-serif'>Complete Financial Accounting with E-Invoice and GST Reports and Inventory Management Software with cutomised invoicing solution for Distributers/Whole Sellers and General Traders.. </span>
                    <button className='text-white mt-10 ml-[250px] hover:scale-110 h-[50px] w-[200px]  bg-gradient-to-tr  from-[#ed73ac] to-[#f9a970]'>Learn More</button>

                </div>




            </div>
            <div className='flex mt-[90px]  '>

                <div className='flex flex-col w-[800px] p-8 shadow-md shadow-[#f9a970] ml-[150px]'>
                    <span className='font-extrabold text-4xl text-[#f9a970]'>MYSCHOOL</span>
                    <span className='text-white   mt-[20px]  font-serif'>Complete Fees, Accounting Examination Report Card Generation Software for Schools and Colleges </span>
                    <button className='text-white mt-10 ml-[250px] hover:scale-110 h-[50px] w-[200px]  bg-gradient-to-tr  from-[#ed73ac] to-[#f9a970]'>Learn More</button>
                </div>
                <img src={school} className='h-[300px] ml-[150px] mr-8'></img>




            </div>

            <div className='flex mt-[90px] '>

                <img src={retail} className='h-[400px]'></img>
                <div className='flex flex-col h-[300px] w-[800px] p-8 shadow-md shadow-[#f9a970] ml-[200px]'>
                    <span className='font-extrabold text-4xl text-[#f9a970]'>RETAILX-POS</span>
                    <span className='text-white   mt-[20px] font-serif'>Point Of Sale (POS) Solution for retailers and shopping Malls
                        for Barcode based billing and Inventory with customised barcode
                        Printing system. </span>
                    <button className='text-white mt-10 ml-[250px] hover:scale-110 h-[50px] w-[200px]  bg-gradient-to-tr  from-[#ed73ac] to-[#f9a970]'>Learn More</button>
                </div>




            </div>
            <div className='flex mt-[90px]  '>

                <div className='flex flex-col h-[300px] mb-2 w-[800px] p-8 shadow-md shadow-[#f9a970] ml-[200px]'>
                    <span className='font-extrabold text-4xl text-[#f9a970]'>TEST2K9.0</span>
                    <span className='text-white   mt-[20px] font-serif'>Pathology Lab Solution for Patient Quick Report Generation.
                        Tests covered like CBC, Biochemistry Urinalysis etc.
                        Doctor wise Test Wise Report Analysis. </span>
                    <button className='text-white mt-10 ml-[250px] hover:scale-110 h-[50px] w-[200px]  bg-gradient-to-tr  from-[#ed73ac] to-[#f9a970]'>Learn More</button>
                </div>
                <img src={path} className='h-[300px] ml-[150px] mr-8'></img>




            </div>
        </div>
    )
}
export default products;
