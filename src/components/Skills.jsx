import React from 'react'
import ProgressBar from '../ProgressBar'

export default function Skills() {

  const skillsArray = [
    {name : "HTML & CSS", percentage: 85, id: 1},
    {name : "Javascript", percentage: 75, id: 2},
    {name : "Responsive web design", percentage: 85, id: 3},
    {name : "Tailwindcss", percentage: 65, id: 4},
    {name : "ReactJs & Redux", percentage: 70, id: 5},
  ]

  const features = ["create", "build", "design", "make", "spark"]
  let featureIndex = 0;

  // CHANGE FUNCTION

  setInterval((e) => {
    e?.preventDefault();
    const featureText = document.querySelector('.feature-text');
    featureText?.classList?.add('featureApp');


    setTimeout((e) => {
      e?.preventDefault();
      featureText?.classList?.remove('featureApp');
    }, 1500)



    featureText.innerHTML = features[featureIndex];
    featureIndex++ ;
    if(featureIndex == 5) {
      featureIndex = 0;
    }
  }, 2000)


  return (
    <div className='w-full h-full'>
        <section className='skills skill-container w-full h-screen pb-12 pt-24 px-3 flex flex-wrap justify-center'>
          {skillsArray.map((e) => {
            return (
              <div className='relative w-48 lg:w-1/5 h-32 mx-2 my-4 px-5 pb-2 pt-3 rounded-xl bg-sharp-glass flex justify-center'>
                  <h1 className='text-slate-200 text-2xl font-semibold'>{e.name}</h1>
                  <ProgressBar percentage={e.percentage} id={e.id}/>
              </div>
            )
          })}
        </section>
        <section className='h-auto w-full py-10 px-4 sm:px-12 bg-sharp-glass'>
          {/* <h1 className='text-3xl sm:text-6xl font-bold text-slate-200'>Take your website design to the next level with me </h1> */}
          <div className="w-full h-auto p-4 flex">
            <h1 className='text-3xl sm:text-6xl font-bold text-slate-200 mb-6'>Let's</h1>
            <span className='feature-text text-sky-400 text-3xl sm:text-6xl font-bold mx-2'></span>
            <h1 className='text-3xl sm:text-6xl font-bold text-slate-200 mb-6'> your own website</h1>
          </div>
          
          <ul className='list-none flex flex-wrap w-full h-auto justify-center'>
            <div className="skilldesc w-2/3 sm:w-1/2 h-56 border-2 border-sky-600 mr-4 mb-6 bg-slate-700 rounded-3xl">

            </div>
            <div className="skilldesc w-2/3 sm:w-1/2 h-56 border-2 border-sky-600 mr-4 mb-6 bg-slate-700 rounded-3xl">

            </div>
            <div className="skilldesc w-2/3 sm:w-1/2 h-56 border-2 border-sky-600 mr-4 mb-6 bg-slate-700 rounded-3xl">

            </div>
            <div className="skilldesc w-2/3 sm:w-1/2 h-56 border-2 border-sky-600 mr-4 mb-6 bg-slate-700 rounded-3xl">

            </div>
          </ul>
          
        </section>
    </div>
  )
}
