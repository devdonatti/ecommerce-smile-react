import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';

const Categorias = () => {
  const { setSelectedProduct } = useContext(ProductContext);
  return (
    <section className='flex flex-wrap justify-center bg-white  p-5'>
      {/* Primera tarjeta */}
      <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded overflow-hidden shadow-lg bg-white m-2 relative text-center font-helvetica transform transition-transform hover:scale-105'>
        <img className='w-full' src="/img/remera4.1.jpg" alt="Remeras" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className='text-xl font-bold text-white mb-2'>REMERAS</h1>
          {/*<a href="#" className='text-white'>VER CATEGORÍA</a>*/}
          <Link onClick={setSelectedProduct} to= '/categoria/remeras'>ver categoria</Link>
        </div>
      </div>

      {/* Segunda tarjeta */}
      <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded overflow-hidden shadow-lg bg-white m-2 relative text-center  font-helvetica transform transition-transform hover:scale-105'>
        <img className='w-full' src="/img/pantalon.jpg" alt="Pantalones" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className='text-xl font-bold text-white mb-2'>PANTALONES</h1>
          <Link onClick={setSelectedProduct} to= '/categoria/pants'>ver categoria</Link>
        </div>
      </div>

      {/* Tercera tarjeta */}
      <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded overflow-hidden shadow-lg bg-white m-2 relative text-center  font-helvetica transform transition-transform hover:scale-105'>
        <img className='w-full' src="/img/hoodie3-1.jpg" alt="Zapatos" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className='text-xl font-bold text-white mb-2'>HOODIES</h1>
          <Link onClick={setSelectedProduct} to= '/categoria/hoodies'>ver categoria</Link>
        </div>
      </div>

      
    </section>
  );
}

export default Categorias;
