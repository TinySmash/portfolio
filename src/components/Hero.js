import React, { useEffect, useRef } from 'react';
import avatar from '../images/achraf.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

function Hero() {
  const title = useRef('');
  const Name = useRef('');
  const header = useRef('');
  const pText = useRef('');
  const socialMediaIconsRef = useRef([]);

  useEffect(() => {
    const heroTitle = ['Hello, I am ', 'Achraf'];
    let titleCount = 0;
    let titlePart = 0;

    setTimeout(() => {
      const typingEffect = setInterval(() => {
        if (title.current == undefined || Name.current == undefined) {
          clearInterval(typingEffect);
        } else {
          if (titleCount < heroTitle[titlePart].length && titlePart == 0) {
            titleCount++;
            title.current.innerHTML = heroTitle[titlePart]?.slice(
              0,
              titleCount
            ); //+ "<span class='nameTitle text-sky-500' ref{Name}></span>"
          } else if (
            titleCount >= heroTitle[titlePart].length &&
            titlePart == 0
          ) {
            titlePart++;
            titleCount = 0;
          } else if (
            titleCount <= heroTitle[titlePart].length &&
            titlePart == 1
          ) {
            Name.current.innerHTML += heroTitle[titlePart]?.charAt(titleCount);
            Name.current.innerHTML = heroTitle[titlePart]?.slice(0, titleCount);
            titleCount++;
          } else if (
            titleCount > heroTitle[titlePart].length &&
            titlePart == 1
          ) {
            clearInterval(typingEffect);
            header.current.classList.remove('static-typing-border');
            header.current.classList.add('typing-border');
          }
        }
      }, 200);

      // tamara

      let pIndex = 0;

      let changePText = setInterval(() => {});

      setTimeout(() => {
        if (title.current == undefined || Name.current == undefined) {
          clearInterval(changePText);
        }

        changePText = setInterval(e => {
          e?.preventDefault();
          const Ps = ['Front end developer', 'UI designer', 'Content creator'];
          if (pText.current == undefined || null) {
            clearInterval(changePText);
            pIndex = 0;
          } else {
            pText.current?.classList.add('featureApp');
            setTimeout(e => {
              e?.preventDefault();
              pText.current?.classList.remove('featureApp');
            }, 1200);

            pText.current.innerHTML = Ps[pIndex];
            pIndex++;
            if (pIndex == Ps.length) {
              pIndex = 0;
            }
          }
        }, 2000);
      }, 2300);
    }, 1000);

    //   SOCIAL MEDIA ICONS APPEARENCE
    setTimeout(() => {
      for (let i = 0; i <= 3; i++) {
        setTimeout(() => {
          socialMediaIconsRef.current[i]?.classList.remove('opacity-0');
          socialMediaIconsRef.current[i]?.classList.add('sm-icon-drop');
        }, 300 * i);
      }
    }, 400);

    // console.log(socialMediaIconsRef[1]);
  }, []);

  return (
    <section className="Hero w-full h-screen px-5 flex justify-center">
      <img
        src={avatar}
        alt=""
        className="w-1/2 sm:w-1/3 md:w-1/4 mt-24 sm:mt-36 md:mt-32 lg:mt-28 absolute right-5 sm:right-7 md:right-14 bg-slate-400 rounded-full p-2"
      />
      <div className="absolute left-5 sm:left-9 mt-[23rem] sm:mt-44 text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
        <h1
          className="title font-medium text-slate-200 static-typing-border pr-1 mb-5 w-auto max-w-3/4 sm:max-w-1/2 md:max-w-2/3"
          ref={header}
        >
          <span ref={title}></span>{' '}
          <span className="nameTitle text-sky-400" ref={Name}></span>
        </h1>
        <h1
          className="absolute w-[120%] text-sky-400 text-P sm:text-4xl md:text-5xl lg:text-6xl font-semibold pr-1 pText"
          ref={pText}
        ></h1>
      </div>
      <div className="absolute flex w-3/4 sm:w-1/2 h-[4.2rem] sm:h-24 md:h-28 bottom-8">
        <ul className="list-none flex w-full h-full justify-between">
          <li
            className="sm-icon bg-slate-900 h-3/4 p-2 sm:p-3 md:p-4 rounded-full opacity-0"
            ref={e => {
              socialMediaIconsRef.current[0] = e;
            }}
          >
            <a
              href="https://www.instagram.com/achrafcodes"
              target="_blank"
              className="w-full h-full"
            >
              <img src={instagram} loading="lazy" alt="" className="h-full" />
            </a>
          </li>
          <li
            className="sm-icon bg-slate-900 h-3/4 p-2 sm:p-3 md:p-4 rounded-full opacity-0"
            ref={e => {
              socialMediaIconsRef.current[1] = e;
            }}
          >
            <a href="" target="_blank" className="w-full h-full">
              <img src={linkedin} loading="lazy" alt="" className="h-full" />
            </a>
          </li>
          <li
            className="sm-icon bg-slate-900 h-3/4 p-2 sm:p-3 md:p-4 rounded-full opacity-0"
            ref={e => {
              socialMediaIconsRef.current[2] = e;
            }}
          >
            <a
              href="https://github.com/Achrafcodes"
              target="_blank"
              className="w-full h-full"
            >
              <img src={github} loading="lazy" alt="" className="h-full" />
            </a>
          </li>
          <li
            className="sm-icon bg-slate-900 h-3/4 p-2 sm:p-3 md:p-4 rounded-full opacity-0"
            ref={e => {
              socialMediaIconsRef.current[3] = e;
            }}
          >
            <a href="" target="_blank" className="w-full h-full">
              <img src={facebook} loading="lazy" alt="" className="h-full" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
