import React, { useState, useRef, useEffect } from 'react';
import lp from '../images/LandingPage.png';
import websites from '../images/websites.png';
import webapp from '../images/webapp.png';
import avatar from '../images/achraf.png';
import growth from '../images/growth.png';
import people from '../images/people.png';
import truck from '../images/truck.png';
import 'react-intersection-observer';

export default function LetsWork() {
  const iconsRef = useRef([]);
  const [isViewedCount, setIsViewedCount] = useState(0);
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
      once: true
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (iconsRef.current[0]) {
      observer.observe(iconsRef.current[0]);
    }
    if (iconsRef.current[1]) {
      observer.observe(iconsRef.current[1]);
    }
    if (iconsRef.current[2]) {
      observer.observe(iconsRef.current[2]);
    }

    return () => {
      if (iconsRef.current[0]) {
        observer.unobserve(iconsRef.current[0]);
      }
      if (iconsRef.current[1]) {
        observer.unobserve(iconsRef.current[1]);
      }
      if (iconsRef.current[2]) {
        observer.unobserve(iconsRef.current[2]);
      }
    };
  }, [isViewedCount]);

  function handleIntersection(entries) {
    let count = isViewedCount;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (isViewed === false) {
          if (entry.target === iconsRef.current[0] && count < 1) {
            setTimeout(() => {
              iconsRef.current[0]?.classList.remove('opacity-0');
              iconsRef.current[0]?.classList.add('leftAppearence');
            }, 200);
            count += 1;
          } else if (entry.target === iconsRef.current[1] && count < 2) {
            setTimeout(() => {
              iconsRef.current[1]?.classList.remove('opacity-0');
              iconsRef.current[1]?.classList.add('rightAppearence');
            }, 200);
            count += 1;
          } else if (entry.target === iconsRef.current[2] && count < 3) {
            setTimeout(() => {
              iconsRef.current[2]?.classList.remove('opacity-0');
              iconsRef.current[2]?.classList.add('leftAppearence');
            }, 200);
            count += 1;
          }
        }
      }
    });

    setIsViewedCount(count);

    if (count === 3) {
      setIsViewed(true);
    }
  }

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full h-auto min-h-screen bg-sharp-glass absolute">
      <section className="w-full h-auto min-h-screen relative p-2 circles mb-10">
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
      <section className="w-full h-auto px-8 py-4 grid grid-cols-6 grid-rows-7 gap-2 sm:gap-5">
        <div
          className="h-auto  md:w-2/3 lg:w-7/12 border-2 border-sky-600 bg-slate-700 rounded-3xl p-5 sm:p-8 md:p-5 col-start-1 col-end-3 row-span-2 opacity-0"
          ref={e => (iconsRef.current[0] = e)}
        >
          <img src={growth} alt="" className="w-full" loading="lazy" />
        </div>
        <div className="col-start-3 col-end-7 row-start-1 row-end-3 block sm:py-2 lg:py-3">
          <h1 className="text-slate-100 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl sm:mb-4 md:mb-1 lg:mb-2 mt-7 sm:mt-0">
            SEO-Friendly Website for growing Online Presence
          </h1>
          <p className="text-slate-100 hidden sm:flex sm:text-lg md:text-xl lg:text-2xl ">
            Boost Your Online Presence and Reach More Customers with My Expert
            SEO-Friendly Website Design Services
          </p>
        </div>
        <div
          className="h-auto mx-auto md:w-2/3 lg:w-7/12 border-2 border-sky-600 bg-slate-700 rounded-3xl p-5 sm:p-8 md:p-5 col-start-5 col-end-7 row-start-3 row-end-5 opacity-0"
          ref={e => (iconsRef.current[1] = e)}
        >
          <img src={people} alt="" className="w-full" loading="lazy" />
        </div>
        <div className="col-start-1 col-end-5 row-start-3 row-end-5 block sm:py-2 lg:py-3 sm:mt-5 md:mt-3">
          <h1 className="text-slate-100 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl sm:mb-4 md:mb-1 lg:mb-2 mt-7 sm:mt-0">
            Attractive design and content to boost conversion
          </h1>
          <p className="text-slate-100 hidden sm:flex sm:text-lg md:text-xl lg:text-2xl ">
            Transform Visitors into Customers with Stunning Website Design and
            engaging Content
          </p>
        </div>
        <div
          className="h-auto  md:w-2/3 lg:w-7/12 border-2 border-sky-600 bg-slate-700 rounded-3xl p-5 sm:p-8 md:p-5 col-start-1 col-end-3 row-start-5 row-span-2 opacity-0"
          ref={e => (iconsRef.current[2] = e)}
        >
          <img src={truck} alt="" className="w-full" loading="lazy" />
        </div>
        <div className="col-start-3 col-end-7 row-start-5 row-span-2 block sm:py-2 lg:py-3">
          <h1 className="text-slate-100 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl sm:mb-4 md:mb-1 lg:mb-2 mt-7 sm:mt-0">
            Need it Now? Get Your Project Done Quickly and Efficiently
          </h1>
          <p className="text-slate-100 hidden sm:flex sm:text-lg md:text-xl lg:text-2xl ">
            Rapid delivery without sacrificing quality, so you get the website
            you need, exactly when you need it
          </p>
        </div>
      </section>
      <hr className="w-[90%] mx-auto border-2 border-slate-200" />
      <section className="w-full h-auto min-h-screen p-4 sm:px-6 md:px-12">
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
