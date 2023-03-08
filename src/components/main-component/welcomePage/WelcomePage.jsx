import React from 'react'
import Typed from 'react-typed'
import './WelcomePage.css'

const WelcomePage = () => {
  return (
    <div className='text-white m-7 mt-10 p-0.5'>
      {/* wrapper */}
        <div className='area max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
            <p className='text-[#ff5e00] font-bold p-2 text-3xl'>Hello, this site is me.</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font bold md:py-6'>You can see how I grow up within this website. This site is one of my creations</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-blod'>and another is</p>
                <Typed 
                className='md:text-5xl sm:text-4xl text-xl font-blod pl-2'
                strings={['...','coming.','creating.']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 mt-2.5'>You can know me on this website and can comment.</p>
        
            <a href='/blogspost' target='_blank' className='hover:bg-[#ff5e00] bg-[#ff985c] w-[200px] text-black rounded-2xl font-medium my-6 mx-auto hover:scale-110 duration-300 py-2 z-20 cursor-pointer' >Blogs Post <i className="fa-solid fa-comment"></i></a>
            {/* <p className='md:text-2xl text-xl font-bold text-gray-500 mt-2.5 absolute bottom-0 right-0 m-3 mr-10'>January/23/2023 <i className="fa-solid fa-wrench"></i></p> */}
            <ul className="circles z-10">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        </div>
    </div>
  )
}

export default WelcomePage