import React from 'react'

const DevSkill = () => {
  return (
    <div className='flex bg-gray-600 justify-center items-center xl:pl-36 w-full pb-1 '>
        <div className='m-0 p-4  w-full h-40vh bg-gray-600 grid justify-center items-center md:grid-cols-6 sm:grid-cols-3  grid-cols-2 '>
            <div className='flex justify-center items-center w-36 xl:pl-0 sm:pt-4 pt-4 pl-10'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="" className=' w-26 h-24 ' />
            </div>
            <div className='flex justify-center items-center w-36 xl:pl-0 sm:pt-4 pt-4 pl-10'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="" className=' w-26 h-24 ' />
            </div>
            <div className='flex justify-center items-center w-36 xl:pt-0 lg:pt-0 xl:pl-0 sm:pt-4 pt-4 pl-10'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png" alt="" className=' w-26 h-24 ' />
            </div>
            <div className='flex justify-center items-center w-36 xl:pt-0 lg:pt-0 xl:pl-0 sm:pt-4 pt-4 pl-10'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" className=' w-26 h-20 ' />
            </div>
            <div className='flex justify-center items-center w-48 xl:pt-0 lg:pt-0 xl:pl-0 sm:pt-4 pt-4 pl-10'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="" className=' w-26 h-20 ' />
            </div>
            <div className='flex justify-center items-center w-36 xl:pt-0 lg:pt-0 xl:pl-0 sm:pt-4 pt-4 pl-10'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="" className=' w-26 h-20 ' />
            </div>
        </div>
    </div>
  )
}

export default DevSkill