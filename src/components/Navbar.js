import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

    let menuOpened = false;

    function onToggleMenu(e) {
        e?.preventDefault();
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.toggle('hidden');
    }

  return (
    <header className='flex fixed w-full h-16 px-5 sm:px-8 justify-between items-center z-50'>
        <h1 className='text-md sm:text-xl md:text-2xl lg:text-3xl text-slate-200 font-semibold'>Achraf Codes👨‍💻</h1>
        <nav className='w-5/12 px-6 md:flex hidden'>
            <ul className='w-full flex justify-between'>
                <li>
                    <Link to="about" className='text-slate-200 font-medium md:text-lg md:font-semibold'>About</Link>
                </li>
                <li>
                    <Link to="skills" className='text-slate-200 font-medium md:text-lg md:font-semibold'>Skills</Link>
                </li>
                <li>
                    <Link to="contact-me" className='text-slate-200 font-medium md:text-lg md:font-semibold'>Contact me</Link>
                </li>
            </ul>
        </nav>
        <button className='menu w-10 h-10 flex md:hidden border-2 rounded-md' onClick={(e) => onToggleMenu(e)}></button>
        <nav className='mobile-menu w-4/5 px-6 fixed hidden md:hidden top-16'>
            <ul className='w-full flex justify-between'>
                <li>
                    <Link to="about" className='text-slate-200 font-medium md:text-lg md:font-semibold'>About</Link>
                </li>
                <li>
                    <Link to="skills" className='text-slate-200 font-medium md:text-lg md:font-semibold'>Skills</Link>
                </li>
                <li>
                    <Link to="contact-me" className='text-slate-200 font-medium md:text-lg md:font-semibold'>Contact me</Link>
                </li>
            </ul>
        </nav>
        <button className='CTC text-md sm:text-lg md:text-2xl font-semibold text-slate-200 bg-sky-500 py-1 px-3 sm:px-5 md:px-7 rounded-full'>Let's work</button>
    </header>
  )
}


export default Navbar;