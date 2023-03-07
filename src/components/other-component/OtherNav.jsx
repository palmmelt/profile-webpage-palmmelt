import React from 'react'

const OtherNav = () => {
  return (
    <div className='fixed z-50 w-full bg-black top-0'>
        <nav className=' relative z-50 flex justify-between h-20 items-center md:max-w-[1240px] m-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#ff5e00] cursor-pointer ' ><a href='/'>PALMMELT<i className="fa-solid fa-code"></i></a></h1>
            <p className='p-4 cursor-pointer hover:text-[#ff5e00] hover:scale-125 duration-300 py-1 w-24' ><a href='/'>Back <i class="fa-sharp fa-solid fa-rotate-left "></i></a></p>
        </nav>
    </div>
  )
}

export default OtherNav