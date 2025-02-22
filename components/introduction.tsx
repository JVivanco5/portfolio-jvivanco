"use client"

import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';



const Introduction = () => {
  return (
    <div className='z-20 w-full bg-darkBg/60'>
      <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
        <Image src="/home-4.png" priority width="800" height="800" alt="Profile pic" />
        <div className='flex flex-col justify-center max-w-md'>

          <h1 className='mb-5 text-2xl leading-tight text-center 
    md:text-left md:text-4xl md:mb-10'
          >Si puedes pensarlo,
            <TypeAnimation

              sequence={[
                "puedes hacerlo.",
                2000,
                "puedes crearlo.",
                2000,
                "puedes enseñarlo.",
                2000,
                "puedes lograrlo.",
                2000,

              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
              className='block font-bold text-primary'
            />
          </h1>


          <p className='mx-auto mb-2 text-xl md:mb-8'>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>



          <div className='flex item-center justify-center gap-3 md:justify-start md:gap-10'>
            <Link
              href='/projects'
              className='px-3 py-2 transition-all border-2 cursor-pointer 
          text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
              Ver proyectos
            </Link>
          </div>
        </div>

      </div>
    </div>
  );

}


export default Introduction;