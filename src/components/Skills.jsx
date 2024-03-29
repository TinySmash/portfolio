import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ProgressBar from './ProgressBar';
import Caroussel from './Caroussel';
import influencer from '../images/influencer.png';
import coding from '../images/coding.png';
import writing from '../images/writing.png';
import vector from '../images/vector.png';

export default function Skills() {
  const navigate = useNavigate();

  const skillsArray = [
    { name: 'HTML & CSS', percentage: 85, id: 1 },
    { name: 'Javascript', percentage: 75, id: 2 },
    { name: 'Responsive web design', percentage: 85, id: 3 },
    { name: 'Tailwindcss', percentage: 65, id: 4 },
    { name: 'ReactJs & Redux', percentage: 80, id: 5 }
  ];

  let featureIndex = 0;

  // CHANGE FUNCTION
  const featureText = useRef('');

  useEffect(() => {
    const changeFeaturesText = setInterval(e => {
      const features = ['create', 'build', 'design', 'make', 'spark'];
      e?.preventDefault();
      if (featureText.current == undefined) {
        clearInterval(changeFeaturesText);
        featureIndex = 0;
      } else {
        featureText.current.classList.add('featureApp');
        setTimeout(e => {
          e?.preventDefault();
          featureText.current?.classList?.remove('featureApp');
        }, 1500);

        featureText.current.innerHTML = features[featureIndex];
        featureIndex++;
        if (featureIndex == 5) {
          featureIndex = 0;
        }
      }
      return () => clearInterval(changeFeaturesText);
    }, 2000);
  }, []);

  return (
    <div className="w-full h-full overflow-x-hidden">
      <section className="skills max-w-screen w-auto h-auto sm:h-screen pb-12 pt-24 px-3 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-slate-200 mb-6">
          Proficient in :
        </h1>
        <div className="w-full h-auto flex flex-wrap justify-center">
          {skillsArray.map(e => {
            return (
              <div
                className="relative w-48 lg:w-1/5 h-32 mx-2 my-4 px-5 pb-2 pt-3 rounded-xl bg-sharp-glass flex justify-center"
                key={e.id}
              >
                <h1 className="text-slate-200 text-2xl font-semibold">
                  {e.name}
                </h1>
                <ProgressBar percentage={e.percentage} id={e.id} key={e.id} />
              </div>
            );
          })}
        </div>
      </section>
      <section className="h-auto w-full py-10 px-4 sm:px-12 bg-sharp-glass border-t-8 border-b-8 border-slate-300">
        {/* <h1 className='text-3xl sm:text-6xl font-bold text-slate-200'>Take your website design to the next level with me </h1> */}
        <div className="w-full h-auto p-4 flex">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6">
            Let's
          </h1>
          <span
            className="feature-text text-sky-400 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mx-2"
            ref={featureText}
          ></span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6">
            {' '}
            your own website
          </h1>
        </div>

        <ul className="list-none flex flex-wrap w-full h-auto justify-center">
          <li className="skilldesc w-5/6 sm:w-2/3 md:w-[45%] h-auto md:h-80 border-2 border-sky-600 mr-4 mb-6 bg-slate-700 rounded-3xl p-3">
            <img
              src={coding}
              alt=""
              className="w-1/4 mx-auto mt-2 mb-2"
              loading="lazy"
            />
            <h2 className="text-slate-200 text-2xl font-semibold text-center">
              Web developer
            </h2>
            <p className="text-slate-300">
              As a web developer with over 2 years of experience, I have a
              passion for creating visually appealing and user-friendly websites
              that deliver an exceptional online experience to visitors. Using
              technologies like HTML, CSS, Tailwindcss, and ReactJs.
            </p>
          </li>
          <li className="skilldesc w-5/6 sm:w-2/3 md:w-[45%] h-auto md:h-80 border-2 border-sky-600 mr-4 mb-6 bg-slate-700 rounded-3xl p-3">
            <img
              src={vector}
              alt=""
              className="w-1/4 mx-auto mt-2 mb-2"
              loading="lazy"
            />
            <h2 className="text-slate-200 text-2xl font-semibold text-center">
              Web designer
            </h2>
            <p className="text-slate-300">
              I am passionate about creating visually stunning and pleasing
              websites that engage and impress visitors. I use design tools such
              as Figma for creating templates and visual content, my
              responsibility is delivering high-quality solutions that meet
              clients' needs
            </p>
          </li>
          <li className="skilldesc w-5/6 sm:w-2/3 md:w-[45%] h-auto md:h-80 border-2 border-sky-600 mr-4 mb-6 bg-slate-700 rounded-3xl p-3">
            <img
              src={writing}
              alt=""
              className="w-1/4 mx-auto mt-2 mb-2"
              loading="lazy"
            />
            <h2 className="text-slate-200 text-2xl font-semibold text-center">
              Content writer
            </h2>
            <p className="text-slate-300">
              I am an content creator on instagram, I like to write and post my
              coding journey in form of Instagram reels and stories, I also
              write website content to optimize it for search engines and rank
              it higher to drive more website traffic
            </p>
          </li>
          <li className="skilldesc w-5/6 sm:w-2/3 md:w-[45%] h-auto md:h-80 border-2 border-sky-600 mr-4 mb-6 bg-slate-700 rounded-3xl p-3">
            <img
              src={influencer}
              alt=""
              className="w-1/4 mx-auto mt-2 mb-2"
              loading="lazy"
            />
            <h2 className="text-slate-200 text-2xl font-semibold text-center">
              Content creator
            </h2>
            <p className="text-slate-300">
              I am also an active content creator on instagram. Join a community
              of more than 120k people passionate about coding and programming.
              I'm sharing content about my coding journey, other people
              experiences, coding tips funny reels, and more.{' '}
              <a
                href="https://www.instagram.com/achrafcodes"
                className="font-bold"
              >
                @achrafcodes
              </a>
            </p>
          </li>
        </ul>
        <h1 className="text-2xl sm:text-5xl font-bold text-slate-200 mb-6">
          Building stunning Web interfaces within smart web applications...
        </h1>
      </section>
      <section className="skills w-full max-w-full h-auto pb-12 pt-24">
        <Caroussel />
        <div className="block md:flex w-full h-auto items-center mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6 ml-16">
            View more projects on{' '}
            <a
              href="https://github.com/Achrafcodes"
              className="underline underline-offset-4 font-extrabold"
            >
              Github
            </a>
          </h1>
        </div>
      </section>
    </div>
  );
}
