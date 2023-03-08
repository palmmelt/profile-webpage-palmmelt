import React from 'react'
import { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import swal from 'sweetalert'



const NavBar = () => {

    //NavBar-Toggle
    const [toggleBar,setToggleBar] = useState(true)

    const handleNav = () => {
        setToggleBar(!toggleBar)
    }

    //Accordion-Contact after toggle
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
    setIsOpen(!isOpen);
    };

    // contact social
    const myGmail = 'palmmeltwork@gmail.com'
    const gmailCopy=()=>{
    navigator.clipboard.writeText(myGmail)
    swal("You copied contact email.", "palmmeltwork@gmail.com", "success");
    }

  return (
    <div className='fixed z-50 w-full bg-[#000000e5] top-0 '>
            <nav className=' relative z-50 flex justify-between h-20 items-center md:max-w-[1240px] m-auto px-4 text-white'>
                <h1 className='w-full text-3xl font-bold text-[#ff5e00] cursor-pointer' ><a href='/'>PALMMELT<i class="fa-solid fa-code"></i></a></h1>
                <ul className='hidden md:flex'>
                    <li className='p-4 cursor-pointer hover:text-[#ff5e00] hover:scale-125 duration-300 py-1'><a href='#home'>Home</a></li>
                    {/* <li className='p-4 cursor-pointer hover:text-[#ff5e00] hover:scale-125 duration-300 py-1'><a href='#'>About</a></li> */}
                    <li className='p-4 cursor-pointer hover:text-[#ff5e00] hover:scale-125 duration-300 py-1'><a href='#Blogs'>Blogs</a></li>
                    <li className='p-4 cursor-pointer hover:text-[#ff5e00] hover:scale-125 duration-300 py-1'><a href='#developer'>Developer</a></li>
                    <li className='p-4 cursor-pointer hover:text-[#ff5e00] hover:scale-125 duration-300 py-1'><a href='#contact'>Contact</a></li>
                </ul>
                <div onClick={handleNav} className='md:hidden block hover:text-[#ff5e00] hover:scale-105 duration-300' >
                    {!toggleBar ? <AiOutlineClose size={25} className='cursor-pointer' /> : <AiOutlineMenu size={25} className='cursor-pointer ' />}
                </div>
                <div className={!toggleBar ? 'fixed left-0 top-20 w-[60%] h-full border-r border-r-gray-900 bg-[#000000e5] ease-in-out peer:transition duration-300': 'fixed left-[-300%]'}>
                    {/* <h1 className='w-full text-3xl font-bold text-[#ff5e00] my-7 px-4 cursor-pointer'><a href='/'>{`PALMMELT`}<i class="fa-solid fa-code"></i></a></h1> */}
                    <ul className='uppercase p-4 text-white'>
                        <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#ff5e00] hover:scale-105 duration-300 '><a href='#home'>Home</a></li>
                        <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#ff5e00] hover:scale-105 duration-300 '><a href='#blogs'>Blogs</a></li>
                        <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#ff5e00] hover:scale-105 duration-300 '><a href='#developer'>Developer</a></li>
                        {/* <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#ff5e00] hover:scale-105 duration-300' onClick={toggleAccordion} ><a href='#contact'>Contact</a></li> */}
                        <div
                            className={`flex items-center justify-between p-4 border-b border-gray-600 cursor-pointer hover:text-[#ff5e00] hover:scale-105 duration-300 select-none
                            ${isOpen ? "text-[#ff5e00] scale-105":""}
                            `}
                            onClick={toggleAccordion}
                        >
                            <h2 className="text-lg font-medium">CONTACT</h2>
                            <svg
                                className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                        {isOpen && (
                            <div className='flex flex-col gap-3  justify-center mt-3 ml-5'>
                            <a href="https://www.facebook.com/palmiez" target='_blank' rel="noreferrer" className='flex items-center hover:text-orange-800  p-2 hover:bg-[#f0a5792f] '>
                              <i className="fa-brands fa-square-facebook  mr-3 "></i>
                              Facebook
                            </a>
                            <a href="https://www.instagram.com/palmmeltz/" target='_blank' rel="noreferrer" className='flex items-center hover:text-orange-800  p-2 hover:bg-[#f0a5792f] '>
                              <i className="fa-brands fa-square-instagram  mr-3 "></i>
                              Instagram
                            </a>
                            <a href="https://twitter.com/palmmelt_dev" target='_blank' rel="noreferrer" className='flex items-center  hover:text-orange-800  p-2 hover:bg-[#f0a5792f] '>
                              <i className="fa-brands fa-square-twitter  mr-2 " ></i>
                              Twitter
                            </a>
                            <a href="#coppygmail" className='flex items-center hover:text-orange-800  p-2 hover:bg-[#f0a5792f] '
                            onClick={gmailCopy}
                            >
                              <i className="fa-solid fa-envelope  mr-2 " ></i>
                              Gmail : Coppy
                            </a>
                          </div>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
  )
}

export default NavBar