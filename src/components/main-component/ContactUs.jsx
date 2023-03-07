import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'
import {useState} from 'react'
import { useForm } from 'react-hook-form'

const ContactUs = () => {
    // contact social
    const myGmail = 'palmmeltwork@gmail.com'
    const gmailCopy=()=>{
    navigator.clipboard.writeText(myGmail)
    swal("You copied contact email.", "palmmeltwork@gmail.com", "success");
    }

    // contact sent

    const {register,formState:{errors},reset,handleSubmit} = useForm();

    const [stateForm,setStateForm] = useState({
        // userName:"",
        // email:"",
        contactMessage:""
    });

    const {contactMessage} = stateForm;
    // userName,email,

    const inputeValue=name=>event=>{
        setStateForm({...stateForm,[name]:event.target.value});
    }
    

    const form = useRef();

    function sendEmail(e){
    // e.preventDefault();

    emailjs
    .sendForm(
        'service_72u8pan', 
        'template_1rgf9ff', 
        form.current, 
        '-_o5QF4-D55X5Mc96'
    )
    .then((result) => {
    console.log(result.text);
    swal("Message sent", "We will respond within 24 hours.", "success");
    reset();
    }
    ,
    (error) => {
    console.log(error.text);
    });
  };


  return (
    <div id='contact' className='text-black bg-orange-300'>
          {/* wrapper */}
            <div className='relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center'>
              {/* social media */}
              <div className='w-full md:w-1/2 md:px-0 mx-5 justify-center items-center flex'>
                <div className=' bg-orange-400 border border-orange-700 w-full lg:w-1/2 h-full p-5 pt-8'>
                  <h3 className='text-2xl mb-5 pointer-events-none justify-center items-center flex'>
                    Contact
                  </h3>
                  {/* list */}
                  <div className='flex flex-col gap-3  justify-center '>
                    <a href="https://www.facebook.com/palmiez" target='_blank' rel="noreferrer" className='flex items-center white hover:text-white hover:bg-orange-700 p-2 '>
                      <i className="fa-brands fa-square-facebook text-xl mr-3 "></i>
                      Facebook
                    </a>
                    <a href="https://www.instagram.com/palmmeltz/" target='_blank' rel="noreferrer" className='flex items-center white hover:text-white hover:bg-orange-700 p-2 '>
                      <i className="fa-brands fa-square-instagram text-xl mr-3 "></i>
                      Instagram
                    </a>
                    <a href="https://twitter.com/palmmelt_dev" target='_blank' rel="noreferrer" className='flex items-center white hover:text-white hover:bg-orange-700 p-2 '>
                      <i className="fa-brands fa-square-twitter text-xl mr-2 " ></i>
                      Twitter
                    </a>
                    <a href="#coppygmail" className='flex items-center  white hover:text-white hover:bg-orange-700 p-2 '
                    onClick={gmailCopy}
                    >
                      <i className="fa-solid fa-envelope text-xl mr-2 " ></i>
                      Gmail : palmmeltwork@gmail.com
                    </a>
                  </div>
                </div>
              </div>
                <form ref={form} autoComplete='off' onSubmit={handleSubmit(sendEmail)} className='w-full md:w-1/2 border border-orange-700 p-10 bg-orange-400' >
                    <h2 className='text-2xl pb-3 pointer-events-none justify-center items-center flex'>
                    Send message to my email.
                    </h2>
                    <div className='flex flex-col mb-4'>
                        <input 
                        {...register("user_name",{
                          required:"Username is required.",
                          minLength:{
                            value:6,
                            message:"Username must be atleast 6 characters long."
                          },
                          maxLength:{
                            value:16,
                            message:"Username must be atleast 16 characters long."
                          },
                        })}
                        type="text" 
                        name="user_name" 
                        placeholder='Name'
                        className={`px-3 py-2 text-orange-600 bg-gray-800 border border-gray-900 focus:border-orange-800 focus:outline-none focus:bg-gray-300 focus:text-orange-700 `}
                        // value={userName}
                        // onChange={inputeValue("userName")}  
                        />
                        <small className='pl-2 text-red-600'>{errors.user_name?.message}</small>
                        {/* <small className='pl-2'>Enter your name.</small> */}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <input 
                        {...register('user_email',{
                          required:"Email is required.",
                          pattern:{
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Email must be valid."
                          },
                        })}
                        type="email" 
                        name="user_email" 
                        placeholder='Email'
                        className={`px-3 py-2 text-orange-600 bg-gray-800 border border-gray-900 focus:border-orange-800 focus:outline-none focus:bg-gray-300 focus:text-orange-700 `}
                        />
                        <small className='pl-2 text-red-600'>{errors.user_email?.message}</small>
                    </div>
                    <div className='flex flex-col mb-2'>
                        <textarea 
                        {...register('message',{
                          required:"Message is required.",
                        })}
                        name="message" type="text" rows='4'
                        placeholder='Please enter a message.'
                        className='px-3 py-2 text-orange-600 bg-gray-800 border border-gray-900 focus:border-orange-800 focus:outline-none focus:bg-gray-300 focus:text-orange-700'
                        value={contactMessage} 
                        maxLength='300' 
                        onChange={inputeValue("contactMessage")}
                        /> 
                        <div className=' relative'>
                        <small className='pl-2 text-red-600'>{errors.message?.message}</small>
                        <small className=' absolute right-0 top-1'>{contactMessage.length} / 300</small></div>                   
                        </div>
                    <div className='w-full pt-1'>
                    <button type="submit" value="Send" className='w-full hover:bg-orange-600 bg-gray-800 rounded-sm font-medium my-6 mx-auto duration-300 py-2 hover:text-white text-orange-600'
                    >Submit</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default ContactUs