import React from 'react';

const Locales = () => {
  return (
    <section className='bg-white'>
      <div className='flex flex-wrap justify-between'>
        
        {/* Imagen del local 1 */}
        <div className='relative w-full md:w-1/2 p-2'>
          <img 
            className='w-full h-auto object-cover' 
            src="img/local1.jpg" 
            alt="Local 1" 
          />
          <div className='absolute bottom-0 left-0 m-4 p-4 bg-black text-white w-64 h-64 flex flex-col justify-between'>
            <h1 className='text-xl font-bold mb-2'>PALERMO SOHO</h1>
            <p className='text-base mb-2'>Gurruchaga </p>
            <h2 className='text-lg font-semibold mb-2'>HORARIO DE ATENCIÓN:</h2>
            <p className='text-sm'>
              Lunes a Viernes de 12:00hs a 20:00hs.<br />
              Sábado de 11:30hs a 20:30hs.<br />
              Domingo de 14:00hs a 20:00hs.
            </p>
          </div>
        </div>

        {/* Imagen del local 2 */}
        <div className='relative w-full md:w-1/2 p-2'>
          <img 
            className='w-full h-auto object-cover' 
            src="img/local1.jpg" 
            alt="Local 2" 
          />
          <div className='absolute bottom-0 left-0 m-4 p-4 bg-black text-white w-64 h-64 flex flex-col justify-between'>
          <h1 className='text-xl font-bold mb-2'>BUENOS AIRES</h1>
            <p className='text-base mb-2'>Av. Cabildo </p>
            <h2 className='text-lg font-semibold mb-2'>HORARIO DE ATENCIÓN:</h2>
            <p className='text-sm'>
              Lunes a Viernes de 12:00hs a 20:00hs.<br />
              Sábado de 11:30hs a 20:30hs.<br />
              Domingo de 14:00hs a 20:00hs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locales;
