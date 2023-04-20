import React from 'react';
import { useRef, useState, useEffect } from 'react';
import cryptoLP from '../images/cryptolp.png';
import spidermen from '../images/spidermen.jpg';
import underwater from '../images/underwater.png';

export default function Caroussel() {
  const dotsRef = useRef([]);
  const carousselElementsRef = useRef([]);
  const isMounted = useRef(false);

  const [selectedItemIndex, setSelectedItemIndex] = useState([null, 1]);

  const clickCarousselElement = index => {
    setSelectedItemIndex([selectedItemIndex[1], index]);

    console.log(selectedItemIndex);
  };

  useEffect(() => {
    carousselElementsRef.current[selectedItemIndex[0]]?.classList.replace(
      'selected',
      'unselected'
    );
    carousselElementsRef.current[selectedItemIndex[1]]?.classList.replace(
      'unselected',
      'selected'
    );
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
    <div className="w-[130%] md:w-5/6 h-auto relative mr-[-15%] ml-[-15%] md:mx-[8.333335%]">
      <ul className="relative flex w-full h-[60vh] pb-10 pt-7 px-5 list-none justify-between items-center ">
        <li
          className="unselected h-fit border-2 border-sky-600 rounded-md p-1 cursor-pointer left"
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
          className="selected h-auto border-2 border-sky-600 rounded-md p-1 cursor-pointer"
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
          className="unselected h-fit border-2 border-sky-600 rounded-md p-1 cursor-pointer right"
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
