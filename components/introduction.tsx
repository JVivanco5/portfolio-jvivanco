"use client"

import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';



const Introduction = () => {
  return (
    <div className='z-20 w-full bg-darkBg/60'>
      <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
        <div className='mx-auto'>
        <Image src="/foto-tit.png" priority width="400" height="400" alt="Profile pic" className='rounded-full mb-5 mt-20 text-xl md:mb-8 text-justify text-center'/>
        </div>
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


          <p className='mx-auto mb-2 text-xl md:mb-8 text-justify'>
          Creo que durante mi formación he adquirido conocimientos sólidos en diversas áreas, especialmente en el desarrollo. He mejorado mis habilidades blandas, lo que me ha permitido trabajar de manera eficaz tanto individualmente como en equipo. Pienso que mi proactividad, responsabilidad y compromiso son cualidades que me definen, siempre con un enfoque empático. Estoy interesado en seguir creciendo y desarrollando mis competencias profesionales.
          </p>



          <div className='flex item-center justify-center gap-3 md:justify-start md:gap-10'>
            <Link
              href='/perfil'
              className='px-3 py-2 transition-all border-2 cursor-pointer 
            text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
              Sobre mi
            </Link>
          </div>
        </div>

      </div>
    </div>
  );

}


export default Introduction;