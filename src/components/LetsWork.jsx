import React from 'react';
import lp from '../images/LandingPage.png';
import websites from '../images/websites.png';
import webapp from '../images/webapp.png';
import avatar from '../images/achraf.png';

export default function LetsWork() {
  return (
    <div className="w-full h-auto min-h-screen bg-sharp-glass absolute">
      <section className="w-full h-auto min-h-screen relative p-2 circles">
        <h1 className="mt-20 text-center relative text-slate-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Building Beautiful Websites - Let's Do This!
        </h1>
        <h2 className="mt-5 text-center relative text-slate-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          I can build
        </h2>
        <ul className="list-none flex flex-wrap w-full h-auto justify-center mt-5 off-app mb-28 z-50">
          <li className="skilldesc w-2/3 md:w-[30%] h-auto border-2 border-sky-600 mr-4 mb-6 bg-slate-700 rounded-3xl p-3 z-40">
            <img
              src={lp}
              alt=""
              className="w-1/3 mx-auto mt-2 mb-2"
              loading="lazy"
            />
            <h2 className="text-slate-200 text-2xl font-semibold text-center">
              Landing pages
            </h2>
          </li>
          <li className="skilldesc w-2/3 md:w-[30%] h-auto border-2 border-sky-600 mr-4 mb-6 bg-slate-700 rounded-3xl p-3 z-40">
            <img
              src={websites}
              alt=""
              className="w-1/3 mx-auto mt-2 mb-2"
              loading="lazy"
            />
            <h2 className="text-slate-200 text-2xl font-semibold text-center">
              Websites
            </h2>
          </li>
          <li className="skilldesc w-2/3 md:w-[30%] h-auto border-2 border-sky-600 mr-4 mb-6 bg-slate-700 rounded-3xl p-3 z-40">
            <img
              src={webapp}
              alt=""
              className="w-1/3 mx-auto mt-2 mb-2"
              loading="lazy"
            />
            <h2 className="text-slate-200 text-2xl font-semibold text-center">
              Web applications
            </h2>
          </li>
        </ul>
        <h2 className=" text-center absolute bottom-5 text-slate-200 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Working with you, we'll create an outstanding web presence. Let's get
          started!
        </h2>
      </section>
      <hr className="w-[90%] mx-auto border-2 border-slate-200" />
      <section className="w-full h-auto min-h-screen p-4">
        <img
          src={avatar}
          alt=""
          className="w-1/2 sm:w-1/3 md:w-1/4 mt-24 sm:mt-36 md:mt-32 lg:mt-28 absolute right-5 sm:right-7 md:right-14 bg-slate-400 rounded-full p-2"
        />

        <h1 className="relative title font-medium text-slate-200 pr-1 mb-5 w-auto max-w-3/4 sm:max-w-1/2 md:max-w-2/3 top-[22rem] sm:top-64 md:top-44 text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          Have something in mind ? <br />
          Lets build it Now!
        </h1>
      </section>
    </div>
  );
}
