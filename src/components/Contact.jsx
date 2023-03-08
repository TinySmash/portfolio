import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { useInView } from 'react-intersection-observer';
import mail from '../images/mail.png';
import phone from '../images/phone.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png'

export default function Contact() {

  const [ ref, Viewed ] = useInView({
    triggerOnce: true
  });

  const navigate = useNavigate();

  function triggerParagraph() {
    const parag = document.querySelector('.parag');
    parag?.classList?.add('pApp');
    parag?.classList?.remove('opacity-0');
  }

  return (
    <div className='skills w-full'> 
      
      <section className='w-full h-screen pt-20 px-8'>
        <h1 className='text-3xl sm:text-6xl font-bold text-slate-200 mb-6'>Reach me and Let's build something <span className='text-sky-500'>:)</span></h1>
        <ul className='list-none flex flex-wrap w-full lg:w-3/4 h-auto justify-center m-auto md:pt-6 mt-20 md:mt-12'>
          <li className="skilldesc relative w-2/3 md:w-[45%] h-44 sm:h-56 border-2 border-sky-600 mr-4 mb-12 bg-sharp-glass rounded-3xl p-3">
            <img src={mail} alt=""  className='w-1/4 relative -top-12 left-5 bg-sharp-glass rounded-full p-2 border-2 border-sky-600 z-50'/>
            <h1 className=' relative -top-4 text-3xl sm:text-4xl font-bold text-sky-400 mb-4'>E-mail</h1>
            <h1 className='relative -top-4 text-xl sm:text-2xl font-bold text-slate-200 mb-6 break-words'>achrafcodes99@gmail.com</h1>
          </li>
          <li className="skilldesc w-2/3 md:w-[45%] h-44 sm:h-56 border-2 border-sky-600 mr-4 mb-6 bg-sharp-glass rounded-3xl p-3">
            <img src={phone} alt=""  className='w-1/4 relative -top-12 left-5 bg-sharp-glass rounded-full p-2 border-2 border-sky-600 z-50'/>
            <h1 className=' relative -top-4 text-3xl sm:text-4xl font-bold text-sky-400 mb-4'>Phone</h1>
            <h1 className='relative -top-4 text-3xl sm:text-4xl font-bold text-slate-200 mb-6 '>+212 682-839818</h1>
          </li>
        </ul>
      </section>
      <section className='w-full h-auto bg-sharp-glass px-4 sm:px-8 pb-16'>
        <div className='parag w-full h-auto py-5 opacity-0'>
          <p className='text-3xl sm:text-6xl my-10 font-bold text-slate-200 mx-auto'>Hey, let's chat! Drop me a message or call and let's get your website up and running</p>
          <ul className='list-none flex w-full px-5 sm:w-3/4 h-28 justify-between m-auto' ref={ref}>
            <a href="https://www.instagram.com/achrafcodes" target="_blank" className='sm-icon bg-slate-900 h-3/4 p-4 rounded-full'><img src={instagram} loading="lazy" alt="" className='h-full'/></a>
            <a href="" target="_blank" className='sm-icon bg-slate-900 h-3/4 p-4 rounded-full'><img src={linkedin} loading="lazy" alt="" className='h-full'/></a>
            <a href="https://github.com/Achrafcodes" target="_blank" className='sm-icon bg-slate-900 h-3/4 p-4 rounded-full'><img src={github} loading="lazy" alt="" className='h-full'/></a>
          {Viewed && triggerParagraph()}
          </ul>
        </div>
      </section>
    </div>
  )
}
