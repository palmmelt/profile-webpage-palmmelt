import React from 'react'
import Typed from 'react-typed'

const ComingSoon = () => {
  return (
    <div className=' text-gray-400 h-[110vh] w-full bg-gray-700'>
        <div className='bg-gray-700 max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
                <p className='text-5xl font-blod text-gray-400'>COMING SOON</p>
                <Typed 
                className='text-5xl font-blod pl-2'
                strings={['...']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop />
            </div>
    </div>
  )
}

export default ComingSoon