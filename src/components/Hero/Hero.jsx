import React from 'react'
import DiaryBg from "../../assets/images/Diary1.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='bg-center bg-cover bg-Herologo py-60 pl-10'
    // style={{ backgroundImage: `url(${DiaryBg})` }}
    >
     <div className='rounded-[10px] bg-cream/50 w-[90%]  sm:w-max px-3 py-5'>
      <h1 className='text-orangeBrand font-bold text-4xl font-robotomono mb-0.5'>The Diary of A Becoming Adult</h1>
      <p className='text-black font-bold text-xl font-robotocondensed mb-8.75'>Growing up isn't a destination - it's a story still being written..</p>
      <Link className='text-black font-bold text-xl font-robotocondensed bg-orangeBrand w-max rounded-md px-3 py-3 hover:bg-green-400 hover:text-white'>Explore Thoughts</Link>
     </div>
    </div>
  )
}


export default Hero
