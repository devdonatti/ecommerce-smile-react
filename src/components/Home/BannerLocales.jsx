import React from 'react';
import { Link } from 'react-router-dom';

const BannerLocales = () => {
  return (
    <section className='bg-white'>
      <div className='flex bg-cover bg-start py-30 m-5'>
        {/* Columna izquierda (imagen) */}
        <div className='w-1/2'>
          <img className='w-full h-full object-cover' src="/img/remera2.jpg" alt="Locales" />
        </div>

        {/* Columna derecha (texto y botón) */}
        <div className='w-1/2 flex items-center justify-center flex-col bg-white p-8'>
          <h1 className='text-3xl font-bold mb-4 font-helvetica'>LOCALES</h1>
          <h2 className='text-lg text-center mb-4 font-helvetica'>También puedes encontrar nuestros productos en nuestras tiendas exclusivas.</h2>
          <Link to="/locales">
            <button className='hover:bg-gray-400 transition-all duration-300 bg-black font-helvetica mt-3 text-white p-2 tracking-widest'>
              VER LOCALES
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerLocales;
