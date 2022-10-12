import React from 'react'
import homeImg from '../img/h1.png'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Home() {

  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Sejal Harde"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1200,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
        <div className='home pt-20 border-b-2 md:py-28 flex justify-center'>
            <div className='w-[90%] flex flex-col-reverse md:flex-row justify-center'>
              <div className='part-1 w-full md:w-2/3 text-center py-4 '>
                <span className='block text-xl font-medium '>Hey, There 😊</span>
                <div className='flex items-center justify-center space-x-3'>
                  <span className='block text-2xl sm:text-3xl font-medium  text-orange-500 '>I'm</span>
                  <h1 className='text-2xl sm:text-3xl font-medium text-orange-500 my-3' ><span className='text-green-500' ref={el}></span> </h1>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus vero ea deleniti corrupti qui, officia ut nostrum harum fugit ducimus doloremque.
                </p>
                <div className='btns my-4'>
                  <button className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md focus:ring-4 focus:ring-blue-300 ring-offset-1'>
                    <span>Download CV</span>
                    <i class="fa-sharp fa-solid fa-download"></i>
                  </button>
                </div>
              </div>
              <div className='part-2 w-full md:w-1/3 flex flex-col md:gap-4 gap-5 justify-center items-center'>
              <div className='flex justify-center '>
                        <img src={homeImg} className='h-24  md:h-44  border border-blue-400  rounded-full ' alt='myImage' />
                    </div>
                    <div className='social-icons flex space-x-12'>
                    <ul className='flex space-x-3'>
                        <li className='cursor-pointer transition-all text-blue-400 hover:scale-125 px-1 border border-transparent  hover:rounded-full hover:bg-blue-500 hover:text-white ' >
                            <i class="fa-brands fa-facebook"></i>
                        </li>
                        <li className='cursor-pointer transition-all text-green-500 hover:scale-125 px-1 border border-transparent  hover:rounded-full hover:bg-green-500 hover:text-white '>
                          <a href='https://wa.me/918007218085' target={"_blank"} rel="noreferrer"  >
                            <i class="fa-brands fa-whatsapp"></i></a>
                        </li>
                        <li className='cursor-pointer transition-all text-red-500 hover:scale-125 px-1 border border-transparent  hover:rounded-full hover:bg-red-500 hover:text-white '>
                          <a href='https://www.instagram.com/sejal_harde/' rel="noreferrer" target={"_blank"} >
                            <i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li className='cursor-pointer transition-all hover:scale-125 px-1 border border-transparent  hover:rounded-full hover:bg-black hover:text-white '>
                            <i class="fa-brands fa-github"></i>
                        </li>
                        
                    </ul>
                    </div>
              </div>
            </div>
        </div>
    </>
  )
}
