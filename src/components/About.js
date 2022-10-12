import React from 'react'
import img1 from '../img/home-image.png'
import c from '../img/c.png'
import HtmlImg from '../img/html.png'
import java from '../img/java.png'
import js from '../img/js.jpg'
import nodeJS from '../img/node-js.png'
import tCSS from '../img/tailwind-css.png'
export default function About() {
  return (
    <>
      <div className='about py-20'>
        <h2 className='text-3xl mb-10 underline  font-medium text-center'>About me</h2>


        <div className='my-8 mx-2 md:mx-10 flex flex-col md:flex-row'>
          <div className='part1 mt-5 border-r-2 md:border-r-blue-500 w-[100%] md:w-[50%]'>
            <h3 className='text-2xl font-semibold'>Who am I?</h3>
            <div className='flex justify-center mt-5'>
              <img src={img1} alt="aboutImage" className='border-2 border-blue-500 rounded-md h-48' />
            </div>
            <div className='mt-9'>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minima quis repudiandae ad. Incidunt natus autem repellat reprehenderit! Quo cumque minus quibusdam deleniti.
                <br /><br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minima quis repudiandae ad. Incidunt natus autem repellat reprehenderit! Quo cumque minus quibusdam deleniti.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minima quis repudiandae ad. Incidunt natus autem repellat reprehenderit! Quo cumque minus quibusdam deleniti.
              </p>
            </div>
          </div>
          <div className='part2 mx-2 mt-5 w-[100%] md:w-[50%] '>
            <h3 className='text-2xl font-semibold'>Skills</h3>
            <div className='flex flex-wrap justify-start mt-7 '>
              <img src={c} className='w-24 my-5 ' alt='c' />
              <img src={java} className='w-24 my-5 ' alt='java' />
              <img src={HtmlImg} className='w-24 my-5 ' alt='HtmlImg' />
              <img src={tCSS} className='w-24' alt='tCSS' />
              <img src={nodeJS} className='w-24 my-5 ' alt='nodeJS' />
              <img src={js} className='w-24 my-5 ' alt='js' />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
