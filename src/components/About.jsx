import React from 'react';
import { useNavigate } from 'react-router';
import achrafProfile from '../images/achrafProfile.jpeg';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto min-h-screen bg-sharp-glass absolute p-6 overflow-hidden">
      <div className="circle bg-gray-900 absolute w-full h-full"></div>
      <h1 className="about-title mt-[70px] sm:mt-24 text-4xl md:text-5xl font-bold text-slate-200 md:ml-8">
        About me:
      </h1>
      <p className="description text-lg sm:text-2xl md:text-3xl mt-2 sm:mt-10 text-slate-300 bg-gray-900 rounded-xl p-6 md:w-2/3 mx-auto z-10">
        Hello, <br />
        My name Is <span className="text-sky-400">Achraf</span>, a front-end
        ReactJs web developer, designer and content creator since 2020 from
        Morocco. I am also interested in A.I, Linux kernel and cryptocurrencies.
      </p>
      <button
        className="CTC absolute w-auto bg-sky-500 p-2 rounded-full text-slate-200 font-bold text-2xl bottom-7 sm:bottom-10 right-8 md:right-20 md:text-3xl lg:text-4xl z-50"
        onClick={() => {
          navigate('/contact-me');
        }}
      >
        Contact me
      </button>
      <div className="profile absolute w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 rounded-full border-2 border-gray-900 bg-gray-900 p-1">
        <img
          src={achrafProfile}
          loading="lazy"
          alt=""
          className="profilePic relative rounded-full "
        />
      </div>
    </div>
  );
}
