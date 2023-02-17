import React from 'react';
import avatar from '../images/achraf.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png'

function Hero() {
  return (
      <section className='Hero w-full h-screen px-5 flex justify-center'>
        <img src={avatar} alt="" className='w-1/2 sm:w-1/3 md:w-1/4 mt-24 sm:mt-36 md:mt-32 lg:mt-28 absolute right-5 sm:right-7 md:right-14 bg-slate-400 rounded-full p-2'/>
        <h1 className='title absolute left-8 mt-[23rem] sm:mt-44 text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-3/4 sm:w-1/2 md:w-2/3 font-semibold text-slate-200'>Hello, I am <span className='text-sky-500'>Achraf</span><br />Front-end web developer & designer</h1>
        <div className='absolute flex w-3/4 sm:w-1/2 h-20 sm:h-24 md:h-28 bottom-8'>
          <ul className='list-none flex w-full h-full justify-between'>
            <a href="https://www.instagram.com/achrafcodes" target="_blank" className='sm-icon bg-slate-900 h-3/4 p-2 sm:p-3 md:p-4 rounded-full'><img src={instagram} loading="lazy" alt="" className='h-full'/></a>
            <a href="" target="_blank" className='sm-icon bg-slate-900 h-3/4 p-2 sm:p-3 md:p-4 rounded-full'><img src={linkedin} loading="lazy" alt="" className='h-full'/></a>
            <a href="https://github.com/Achrafcodes" target="_blank" className='sm-icon bg-slate-900 h-3/4 p-2 sm:p-3 md:p-4 rounded-full'><img src={github} loading="lazy" alt="" className='h-full'/></a>
            <a href="" target="_blank" className='sm-icon bg-slate-900 h-3/4 p-2 sm:p-3 md:p-4 rounded-full'><img src={facebook} loading="lazy" alt="" className='h-full'/></a>
          </ul>
        </div>
      </section>
  )
}

export default Hero;