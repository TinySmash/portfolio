import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

function Navbar() {
  let menuOpened = false;

  function onToggleMenu(e) {
    e?.preventDefault();
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('hidden');
  }

  const navigate = useNavigate();

  // const [navBg, setNavBg] = useState('transparent');
  const navbar = useRef('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 70) {
        navbar.current?.classList.add('turn-to-slate');
        navbar.current?.classList.remove('turn-to-transparent');
      } else {
        navbar.current?.classList.add('turn-to-transparent');
        navbar.current?.classList.remove('turn-to-slate');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <header
      className="flex fixed w-full h-20 pb-5 px-5 sm:px-8 justify-between items-center z-50 turn-to-transparent"
      ref={navbar}
    >
      <h1
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-200 font-semibold cursor-pointer"
        onClick={() => navigate('/')}
      >
        Achraf Codes👨‍💻
      </h1>
      <nav className="w-5/12 px-6 md:flex hidden">
        <ul className="w-full flex justify-between">
          <li>
            <Link
              to="about"
              className="text-slate-200 font-medium md:text-lg md:font-semibold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              className="text-slate-200 font-medium md:text-lg md:font-semibold"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="contact-me"
              className="text-slate-200 font-medium md:text-lg md:font-semibold"
            >
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="menu w-7 h-7 sm:w-10 sm:h-10 flex md:hidden border-2 rounded-md"
        onClick={e => onToggleMenu(e)}
      ></button>
      <nav className="mobile-menu w-4/5 px-6 fixed hidden md:hidden top-[55px]">
        <ul className="w-full flex justify-between">
          <li>
            <Link to="about" className="text-slate-200 text-lg font-semibold">
              About
            </Link>
          </li>
          <li>
            <Link to="skills" className="text-slate-200 text-lg font-semibold">
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="contact-me"
              className="text-slate-200 text-lg font-semibold"
            >
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="CTC text-md sm:text-lg md:text-2xl font-semibold text-slate-200 bg-sky-500 py-1 px-3 sm:px-5 md:px-7 rounded-full"
        onClick={() => navigate('/lets-work')}
      >
        Let's work
      </button>
    </header>
  );
}

export default Navbar;
