import React from 'react';
import { Link } from 'react-router-dom';

const Coleccion = () => {

  return (
    <div>
      <section className='flex flex-wrap justify-center bg-white p-5'>
        <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded overflow-hidden bg-white m-2 mt-8 relative text-center font-helvetica'>
          <img className='w-full transform hover:opacity-75 hover:shadow-lg' src="/img/remera1.1.jpg" alt="Remeras" />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Link to="/categoria/remeras" className='bg-black font-helvetica mt-3 text-white p-2 tracking-widest'>REMERAS</Link>
          </div>
        </div>

        <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded overflow-hidden bg-white m-2 mt-8 relative text-center font-helvetica'>
          <img className='w-full transform hover:opacity-75 hover:shadow-lg' src="/img/hoodie2-1.jpg" alt="Hoodies" />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Link to="/categoria/hoodies" className='bg-black font-helvetica mt-3 text-white p-2 tracking-widest'>HOODIES</Link>
          </div>
        </div>
        
        <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded overflow-hidden bg-white m-2 mt-8 relative text-center font-helvetica'>
          <img className='w-full transform hover:opacity-75 hover:shadow-lg' src="/img/pantalon.jpg" alt="Pantalones" />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Link to="/categoria/pants" className='bg-black font-helvetica mt-3 text-white p-2 tracking-widest'>PANTALONES</Link>
          </div>
        </div>
        
        <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded overflow-hidden bg-white m-2 mt-8 relative text-center font-helvetica'>
          <img className='w-full transform hover:opacity-75 hover:shadow-lg' src="/img/accesorios1.1.jpg" alt="Pantalones" />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Link to="/categoria/accesorios" className='bg-black font-helvetica mt-3 text-white p-2 tracking-widest'>ACCESORIOS</Link>
          </div>
        </div>
        <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded overflow-hidden bg-white m-2 mt-8 relative text-center font-helvetica'>
          <img className='w-full transform hover:opacity-75 hover:shadow-lg' src="/img/campera1.1.jpg" alt="Pantalones" />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Link to="/categoria/camperas" className='bg-black font-helvetica mt-3 text-white p-2 tracking-widest'>CAMPERAS</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coleccion;
