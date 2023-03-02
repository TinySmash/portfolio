import React from 'react';
import avatar from '../images/achraf.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png'

function Hero() {

  const heroTitle = ['Hello, I am ', 'Achraf']
  let titleCount = 0
  let titlePart = 0
  const typingEffect = setInterval(() => {
    let title = document.querySelector('.title');
    let Name = document.querySelector('.nameTitle')
    if ( titleCount < heroTitle[titlePart].length && titlePart == 0 ) {
      titleCount++
      title.innerHTML =  heroTitle[titlePart]?.slice(0,titleCount) + "<span class='nameTitle text-sky-500'></span>" 
    } else if ( titleCount >= heroTitle[titlePart].length && titlePart == 0 ) {
      titlePart++
      titleCount = 0
    }
    if (titleCount <= heroTitle[titlePart].length && titlePart == 1) {
      Name.innerHTML += heroTitle[titlePart]?.charAt(titleCount)
      Name.innerHTML =  heroTitle[titlePart]?.slice(0,titleCount)
      titleCount++
    }
    else if (titleCount > heroTitle[titlePart].length && titlePart == 1) {
      clearInterval(typingEffect)
      title.classList.remove('static-typing-border')
      title.classList.add('typing-border')
    }
  }, 200);

  return (
      <section className='Hero w-full h-screen px-5 flex justify-center'>
        <img src={avatar} alt="" className='w-1/2 sm:w-1/3 md:w-1/4 mt-24 sm:mt-36 md:mt-32 lg:mt-28 absolute right-5 sm:right-7 md:right-14 bg-slate-400 rounded-full p-2'/>
        <h1 className='title absolute left-8 mt-[23rem] sm:mt-44 text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-auto max-w-3/4 sm:max-w-1/2 mdmax-:w-2/3 font-semibold text-slate-200 static-typing-border pr-1'><span className='nameTitle text-sky-500'></span></h1>
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