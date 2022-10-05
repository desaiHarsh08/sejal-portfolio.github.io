import React from 'react'
// import { Link } from 'react-scroll'

export const MyFooter = () => {
  return (
    <>
        <footer className="mt-24 bg-blue-800 pt-10 pb-20 sm:pb-10 px-auto" id="footer">
      <div className="container mx-auto px-4 text-slate-300 text-center ">
        <div className="flex flex-col sm:flex-row justify-evenly items-center">
          <div className='w-[100%] md:w-[30%]'>
            <h2 className="text-2xl font-semibold mb-10 sm:m-0">#SH</h2>
          </div>
          <div className='w-[100%] md:w-[30%]'>
            <ul className="space-y-4 my-5">
              <li className='cursor-pointer'>
                <a href='/' smooth duration={500} >About</a>
              </li>
              <li className='cursor-pointer'>
                <a href='/' smooth duration={500} >Portfolio</a>  
              </li>
              <li className='cursor-pointer'>
                <a href='/' smooth duration={500} >Contact</a>
              </li>
            </ul>
          </div>
          <div className='w-[100%] md:w-[30%]'>

            <ul className="social-media text-center flex justify-center md:justify-start items-center space-x-4 mt-7 sm:mt-0">
              <li className="py-5 sm:py-0 h-[50px]"><a href="/" target={"_blank"} rel="noreferrer"><i className="fa-brands fa-facebook text-xl pr-3 py-1 text-blue-600 hover:text-blue-500 "></i></a>
              </li>
              <li className="py-5 sm:py-0 h-[50px]"><a href="https://wa.me/919322585046" target="_blank" rel="noreferrer"><i
                    className="fa-brands fa-whatsapp text-xl px-2 py-1 text-green-600 hover:text-green-500"></i></a>
              </li>
              <li className="py-5 sm:py-0 h-[50px] "><a href="/"><i
                    className="fa-brands fa-instagram text-xl px-2 py-1 text-red-600 hover:text-red-300"></i></a></li>
              <li className="py-5 sm:py-0 h-[50px] hover:text-slate-500"><a href="/" target="_blank" rel="noreferrer"><i
                    className="fa-brands fa-github text-xl px-2 py-1 "></i></a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-slate-400 mt-14 mb-10 sm:mb-5">Copyright &copy; fulchandbalbhudhe149. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  )
}
