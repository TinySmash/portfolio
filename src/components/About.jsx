import React, {Fragment} from 'react'
import { useNavigate } from 'react-router'

export default function About() {

  const navigate = useNavigate();

  return (
    <div className='w-full h-screen bg-sharp-glass absolute p-6 overflow-hidden'>
      <div className='circle bg-gray-900 absolute w-full h-full'></div>
      <h1 className="about-title mt-24 text-4xl md:text-5xl font-bold text-slate-200 md:ml-8">About me:</h1>
      <p className='description text-2xl mt-10 text-slate-300 bg-gray-900 rounded-xl p-6 md:w-2/3 mx-auto'>Hello, <br />My name Is <span className='text-sky-400'>Achraf</span>, a front-end ReactJs web developer, designer and content creator since 2021 from Morocco. I am also interested in A.I, Linux kernel and cryptocurrencies.</p>
      <button className='CTC absolute w-auto bg-sky-500 p-2 rounded-full text-slate-200 font-bold text-2xl bottom-10 right-12 md:bottom-10 md:right-20 md:text-3xl lg:text-4xl' onClick={() => {navigate("/")}}>Go back home</button>
      
    </div>
  )
}
