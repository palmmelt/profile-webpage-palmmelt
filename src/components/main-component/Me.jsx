import React from 'react'
import Titl from 'react-parallax-tilt'
import './Me.css';

const Me = () => {
  return (
    <div id='developer' className='area-me w-auto flex justify-center items-center'>
      {/* block */}
      <div className='contain-box flex flex-col justify-center items-center text-center '>
        <h1 className='text-[#000000] font-bold p-10 text-4xl pointer-events-none'>Developer Team</h1>
        {/* animetion card*/}
        <Titl>
          <div className="card opacity-60 hover:opacity-100 duration-300">
            <div className="img-profile-box">
              <img className='w-[40vh] rounded-md ' src="https://sv1.picz.in.th/images/2023/01/25/L7l5B8.jpg" alt="" />
            </div>
            <div className="content-profile pointer-events-none">
              <h1 className='text-[#00000] font-bold text-xl'>Narongchai Wichaiya</h1>
              <p className='md:text-xl text-md font-bold text-gray-700 mt-1'>Full-stack Developer</p>
            </div>
          </div>
          </Titl>
      </div>
      {/* backgroud animetion */}
      <div className="">
        <div className='light x1'></div>
        <div className='light x2'></div>
        <div className='light x3'></div>
        <div className='light x4'></div>
        <div className='light x5'></div>
        <div className='light x6'></div>
        <div className='light x7' ></div>
        <div className='light x8' ></div>
        <div className='light x9'></div>
      </div>
    </div>
  )
}

export default Me