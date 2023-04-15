import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { useInView } from 'react-intersection-observer';
import mail from '../images/mail.png';
import phone from '../images/phone.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';

export default function Contact() {
  const [ref, Viewed] = useInView({
    triggerOnce: true
  });

  const navigate = useNavigate();

  function triggerParagraph() {
    const parag = document.querySelector('.parag');
    parag?.classList?.add('pApp');
    parag?.classList?.remove('opacity-0');
  }

  return (
    <div className="skills w-full">
      <section className="w-fullh-auto  min-h-screen pt-20 px-8">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-200 mb-6 mt-6">
          Reach me and Let's build something{' '}
          <span className="text-sky-500">:)</span>
        </h1>
        <ul className="list-none flex flex-wrap w-full lg:w-3/4 h-auto justify-center m-auto md:pt-6 mt-20 md:mt-28">
          <li className="skilldesc relative w-5/6 sm:w-4/6 md:w-[45%] h-44 sm:h-56 border-2 border-sky-600 mr-4 mb-12 bg-sharp-glass rounded-3xl p-3">
            <img
              src={mail}
              alt=""
              className="w-1/4 relative -top-12 left-5 bg-sharp-glass rounded-full p-2 border-2 border-sky-600 z-40"
            />
            <h1 className=" relative -top-10 md:-top-6 text-3xl sm:text-4xl font-bold text-sky-400">
              E-mail
            </h1>
            <h1 className="relative -top-8 md:-top-6 text-xl sm:text-2xl font-bold text-slate-200 mb-6 break-words">
              achrafcodes99@gmail.com
            </h1>
          </li>
          <li className="skilldesc w-5/6 sm:w-4/6 md:w-[45%] h-44 sm:h-56 border-2 border-sky-600 mr-4 mb-6 bg-sharp-glass rounded-3xl p-3">
            <img
              src={phone}
              alt=""
              className="w-1/4 relative -top-12 left-5 bg-sharp-glass rounded-full p-2 border-2 border-sky-600 z-40"
            />
            <h1 className=" relative -top-10 md:-top-6 text-3xl sm:text-4xl font-bold text-sky-400">
              Phone
            </h1>
            <h1 className="relative -top-8 md:-top-6 text-3xl sm:text-4xl font-bold text-slate-200 mb-6 ">
              +212 682-839818
            </h1>
          </li>
        </ul>
      </section>
      <section className="w-full h-auto min-h-screen pt-[72px] md:px-12">
        <ul className="h-auto w-fit list-none p-5 mx-auto md:mx-0">
          <li className="h-auto min-h-12 bg-sky-400 w-auto min-w-5/6 md:w-fit rounded-full px-5 py-1  mb-10">
            <a
              href=""
              className="w-full h-full flex justify-between items-center"
            >
              <img
                src={twitter}
                alt="Twitter"
                loading="lazy"
                className="w-16 mr-7"
              ></img>
              <h1 className="font-semibold text-slate-200 text-2xl">Twitter</h1>
            </a>
          </li>
          <li className="h-auto min-h-12 relative bg-insta w-auto min-w-5/6 md:w-fit rounded-full px-5 py-1 mb-10 sm:left-2/4">
            <a
              href=""
              className="w-full h-full flex justify-between items-center"
            >
              <img
                src={instagram}
                alt="instagram"
                loading="lazy"
                className="w-16 mr-1 p-1"
              ></img>
              <h1 className="font-semibold text-slate-200 text-2xl">
                Instagram
              </h1>
            </a>
          </li>
          <li className="h-auto min-h-12 bg-blue-600 w-auto min-w-5/6 md:w-fit rounded-full px-5 py-1  mb-10">
            <a
              href=""
              className="w-full h-full flex justify-between items-center"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                loading="lazy"
                className="w-16 mr-4 p-1"
              ></img>
              <h1 className="font-semibold text-slate-200 text-2xl">
                LinkedIn
              </h1>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
