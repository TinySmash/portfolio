import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

function Navbar() {
  function onToggleMenu(e) {
    e?.preventDefault();
    mobileMenuRef.current?.classList.toggle('hidden');
  }

  const navigate = useNavigate();

  // const [navBg, setNavBg] = useState('transparent');
  const navbarRef = useRef('');
  const navNameRef = useRef('');
  const mobileMenuRef = useRef('');
  const mobileMenuButtonRef = useRef('');
  const menuElementsRef = useRef([]); // ARRAY OF REFERENCES TO ITERATE THROUGH
  const CTAbuttonRef = useRef('');

  useEffect(() => {
    const dropDownElements = [
      navNameRef.current,
      mobileMenuButtonRef.current,
      CTAbuttonRef.current
    ];

    const reversedMenuElements = [...menuElementsRef.current].reverse();

    if (window.innerWidth >= 768) {
      reversedMenuElements.forEach(e => {
        dropDownElements.splice(1, 0, e);
      });
    }
    console.log(dropDownElements);

    setTimeout(() => {
      dropDownElements.forEach(ele => {
        setTimeout(() => {
          ele.classList.add('navDropDown');
          ele.classList.remove('beforeDrop');
        }, 300 * dropDownElements.indexOf(ele));
      });
    }, 400);

    const handleScroll = () => {
      if (window.pageYOffset > 60) {
        navbarRef.current?.classList.add('turn-to-slate');
        navbarRef.current?.classList.remove('turn-to-transparent');
      } else {
        navbarRef.current?.classList.add('turn-to-transparent');
        navbarRef.current?.classList.remove('turn-to-slate');
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="flex fixed w-full h-20 pb-5 px-5 sm:px-8 justify-between items-center z-50 turn-to-transparent"
      ref={navbarRef}
    >
      <h1
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-200 font-semibold cursor-pointer beforeDrop"
        onClick={() => navigate('/')}
        ref={navNameRef}
      >
        Achraf Codes👨‍💻
      </h1>
      <nav className="w-5/12 px-6 md:flex hidden">
        <ul className="w-full flex justify-between">
          <li
            ref={e => {
              menuElementsRef.current[0] = e;
            }}
            className="beforeDrop"
          >
            <Link
              to="about"
              className="text-slate-200 font-medium md:text-lg md:font-semibold"
            >
              About
            </Link>
          </li>
          <li
            ref={e => {
              menuElementsRef.current[1] = e;
            }}
            className="beforeDrop"
          >
            <Link
              to="skills"
              className="text-slate-200 font-medium md:text-lg md:font-semibold"
            >
              Skills
            </Link>
          </li>
          <li
            ref={e => {
              menuElementsRef.current[2] = e;
            }}
            className="beforeDrop"
          >
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
        className="menu w-7 h-7 sm:w-9 sm:h-9 flex md:hidden border-2 rounded-md beforeDrop"
        onClick={e => onToggleMenu(e)}
        ref={mobileMenuButtonRef}
      ></button>
      <nav
        className="mobile-menu w-4/5 px-6 fixed hidden md:hidden top-[49px]"
        ref={mobileMenuRef}
      >
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
        className="CTC text-md sm:text-lg md:text-2xl font-semibold text-slate-200 bg-sky-500 py-1 px-3 sm:px-5 md:px-7 rounded-full beforeDrop"
        onClick={() => navigate('/lets-work')}
        ref={CTAbuttonRef}
      >
        Let's work
      </button>
    </header>
  );
}

export default Navbar;
