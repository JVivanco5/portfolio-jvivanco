"use client"

import Image from 'next/image';
import Link from 'next/link';

const IntroductionProfile = () => {
  return (
    
    <div className="z-20 w-full bg-darkBg/60 pt-24 md:pt-0">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 gap-6">
        {/* Bloque de texto */}
        <div className="flex flex-col justify-center max-w-2xl mx-auto md:mx-0 md:ml-auto text-center md:text-right">
          <h1 className="mb-5 text-xl leading-relaxed md:mb-10 text-justify">
            ¡Hola, soy Joaquín Vivanco! Bienvenido a mi portafolio. Desde que vi como un familiar usaba Messenger 
            para hablar con un amigo en otro país, me llamó la atención la idea de lo que sucede detrás de cada esto; 
            me preguntaba cómo algo tan novedoso funcionaba a la perfección. Con el tiempo, esa curiosidad se expandió,
             y empecé a notar el impacto de la tecnología en aplicaciones que usamos a diario, desde Gmail hasta un casi 
             olvidado Facebook.
            <br /><br />
            Con mi título en Ingeniería en Informática, he podido transformar esa inquietud en una carrera llena de desafíos
             y oportunidades. Me motiva la posibilidad de convertir ideas en proyectos reales, de desarrollar soluciones 
             innovadoras que no solo cumplan su función, sino que además marquen una diferencia.
            <br /><br />
            Cada reto es una invitación a pensar de manera creativa y a crecer profesionalmente, y estoy comprometido a seguir
             aprendiendo y explorando el fascinante mundo de la tecnología.
          </h1>

          <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href="/about-me"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Mi trayectoria
            </Link>
          </div>
        </div>

        {/* Bloque de imagen */}
        <div className="mx-auto">
          <Image
            src="/msn-Photoroom.png"
            priority
            width="500"
            height="500"
            alt="Profile pic"
            className="mb-5 mt-10 w-48 md:w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default IntroductionProfile;
