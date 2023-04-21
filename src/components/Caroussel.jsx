import React from 'react';
import { useRef, useState, useEffect } from 'react';
import cryptoLP from '../images/cryptolp.png';
import spidermen from '../images/spidermen.jpg';
import underwater from '../images/underwater.png';

export default function Caroussel() {
  const dotsRef = useRef([]);
  const carousselElementsRef = useRef([]);
  const isMounted = useRef(false);
  const carousel = useRef('');

  const [selectedItemIndex, setSelectedItemIndex] = useState([null, 1]);

  const clickCarousselElement = index => {
    setSelectedItemIndex([selectedItemIndex[1], index]);
  };

  useEffect(() => {
    if (selectedItemIndex[1] === 0) {
      carousel.current?.classList.replace('middle', 'left');
      carousel.current?.classList.replace('right', 'left');
    } else if (selectedItemIndex[1] === 2) {
      carousel.current?.classList.replace('middle', 'right');
      carousel.current?.classList.replace('left', 'right');
    } else if (selectedItemIndex[1] === 1) {
      carousel.current?.classList.replace('left', 'middle');
      carousel.current?.classList.replace('right', 'middle');
    }

    document
      .querySelector('.unselected-plus')
      ?.classList.replace('unselected-plus', 'unselected');
    carousselElementsRef.current[selectedItemIndex[0]]?.classList.replace(
      'selected',
      'unselected'
    );
    carousselElementsRef.current[selectedItemIndex[1]]?.classList.replace(
      'unselected',
      'selected'
    );

    if (
      JSON.stringify(selectedItemIndex) === JSON.stringify([0, 2]) ||
      JSON.stringify(selectedItemIndex) === JSON.stringify([2, 0])
    ) {
      carousselElementsRef.current[1]?.classList.replace(
        'unselected',
        'selected'
      );
      setTimeout(() => {
        carousselElementsRef.current[1]?.classList.replace(
          'selected',
          'unselected'
        );
      }, 150);
    }

    if (selectedItemIndex[1] !== 1) {
      if (
        carousselElementsRef.current[selectedItemIndex[1] - 2] !== undefined
      ) {
        carousselElementsRef.current[
          selectedItemIndex[1] - 2
        ]?.classList.replace('unselected' || 'selected', 'unselected-plus');
      } else {
        carousselElementsRef.current[
          selectedItemIndex[1] + 2
        ]?.classList.replace('unselected' || 'selected', 'unselected-plus');
      }
    }

    dotsRef.current[selectedItemIndex[0]]?.classList.replace(
      'selected-dot',
      'unselected-dot'
    );
    dotsRef.current[selectedItemIndex[1]]?.classList.replace(
      'unselected-dot',
      'selected-dot'
    );
  }, [selectedItemIndex]);

  return (
    <div className="w-[130%] md:w-5/6 mx-[15%] h-auto relative md:mx-[8.333335%]">
      <ul
        className="relative middle flex w-full h-[60vh] lg:h-[70vh] pb-10 pt-7 px-5 list-none justify-between items-center "
        ref={carousel}
      >
        <li
          className="unselected h-fit border-2 border-sky-600 rounded-md p-1 cursor-pointer left transition-all duration-300"
          onClick={() => {
            clickCarousselElement(0);
          }}
          ref={e => {
            carousselElementsRef.current[0] = e;
          }}
        >
          <img src={cryptoLP} alt="" loading="lazy"></img>
        </li>
        <li
          className="selected h-auto border-2 border-sky-600 rounded-md p-1 cursor-pointer transition-all duration-300"
          onClick={() => {
            clickCarousselElement(1);
          }}
          ref={e => {
            carousselElementsRef.current[1] = e;
          }}
        >
          <img src={spidermen} alt="" loading="lazy"></img>
        </li>
        <li
          className="unselected h-fit border-2 border-sky-600 rounded-md p-1 cursor-pointer right transition-all duration-300"
          onClick={() => {
            clickCarousselElement(2);
          }}
          ref={e => {
            carousselElementsRef.current[2] = e;
          }}
        >
          <img src={underwater} alt="" loading="lazy"></img>
        </li>
      </ul>
      <ul className="w-20 md:w-28 h-6 mx-auto flex justify-between items-center">
        <li
          className="unselected-dot transition-all duration-300 animate h-3 sm:h-4 rounded-full bg-slate-400 cursor-pointer"
          ref={e => {
            dotsRef.current[0] = e;
          }}
          onClick={() => {
            clickCarousselElement(0);
          }}
        ></li>
        <li
          className="selected-dot transition-all duration-300 animate h-3 sm:h-4 rounded-full bg-slate-200 cursor-pointer"
          ref={e => {
            dotsRef.current[1] = e;
          }}
          onClick={() => {
            clickCarousselElement(1);
          }}
        ></li>
        <li
          className="unselected-dot transition-all duration-300 animate h-3 sm:h-4 rounded-full bg-slate-400 cursor-pointer"
          ref={e => {
            dotsRef.current[2] = e;
          }}
          onClick={() => {
            clickCarousselElement(2);
          }}
        ></li>
      </ul>
    </div>
  );
}
