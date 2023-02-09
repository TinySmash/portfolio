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
  
  setInterval((e) => {
    e?.preventDefault();
    document.querySelector('.feature-text').innerHTML = features[featureIndex];
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
        <section className='h-auto w-full py-10 px-5 sm:px-12 bg-sharp-glass'>
          {/* <h1 className='text-3xl sm:text-6xl font-bold text-slate-200'>Take your website design to the next level with me </h1> */}
          <h1 className='text-3xl sm:text-6xl font-bold text-slate-200 mb-6'>Let's <span className='text-sky-400 relative w-28 feature-text'></span> your own website</h1>
          
        </section>
    </div>
  )
}
