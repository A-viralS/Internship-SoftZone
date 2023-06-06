import React from 'react'

const footer = () => {
    return (
        <>
            <div class="container bg-gradient-to-tr  from-[#ed73ac] to-[#f9a970] ">
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,50 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{ stroke: "none", fill: "#251b3e" }}></path>

                </svg>


                <div className='container overlay align-middle left-[990px] '>
                    <span className='text-4xl'>© </span>
                    <span className='font-serif font-semibold text-2xl ' >  2001 Softzone Software Consultants </span>
                    <p className='font-mono mt-2'>CONTACT:9839162450, 9236936488
                    </p>
                    <p className='font-mono'> Address: 3RD FLOOR NARAYAN HEIGHTS, ELITE-SIPRI ROAD, NEAR HOTEL SITA</p>
                    <p className='font-mono'> JHANSI(U.P)-284001</p>
                </div>
            </div>

        </>
    )
}
export default footer;