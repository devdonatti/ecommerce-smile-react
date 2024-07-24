import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../components/context/ProductContext';

const Navbar = () => {
  const { cart } = useContext(ProductContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para calcular el total de productos en el carrito
  const calcularTotalProductos = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.quantity;
    });
    return total;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='flex h-20 justify-between items-center m-4 bg-white '>
      <Link to="/">
        <img className='h-15 w-15' src="/iconos/icononav.png" alt="Logo" />
      </Link>
      <div className='font-helvetica focus:outline-none tracking-widest text-sm  hover:underline'>
        <a className=' hover:text-gray-500' href="">NOSOTROS</a>
      </div>
      <div className='relative'  >
        <Link className='font-helvetica focus:outline-none tracking-widest text-sm  hover:text-gray-500 hover:underline'
          onMouseEnter={toggleMenu} to="/coleccion"> COLECCIÓN</Link>
        {menuOpen && (
          <div className='absolute bg-white shadow-lg rounded mt-2 w-48 py-2 z-10 transition-soft' onMouseLeave={closeMenu} >
            <Link to='/categoria/hoodies' className='block px-4 py-2 text-gray-800 hover:text-gray-500 hover:underline transition-all duration-300 ease-in-out font-helvetica text-sm'>HOODIES</Link>
            <Link to='/categoria/pants' className='block px-4 py-2 text-gray-800 hover:text-gray-500 hover:underline transition-all duration-300 ease-in-out font-helvetica text-sm'>PANTALONES</Link>
            <Link to='/categoria/remeras' className='block px-4 py-2 text-gray-800 hover:text-gray-500 hover:underline transition-all duration-300 ease-in-out font-helvetica text-sm'>REMERAS</Link>
            <Link to='/categoria/camperas' className='block px-4 py-2 text-gray-800 hover:text-gray-500 hover:underline transition-all duration-300 ease-in-out font-helvetica text-sm'>CAMPERAS</Link>
            <Link to='/categoria/accesorios' className='block px-4 py-2 text-gray-800 hover:text-gray-500 hover:underline transition-all duration-300 ease-in-out font-helvetica text-sm'>ACCESORIOS</Link>
          </div>
        )}
      </div>
      <div className='font-helvetica focus:outline-none tracking-widest text-sm  hover:underline'>
        <a className=' hover:text-gray-500' href="">LOCALES</a>
      </div>
      <div className='flex gap-2 relative'>
        <Link to="/buscar">
          <img style={{ height: '1.5rem', width: '1.5rem' }} src="/iconos/lupita.png" alt="Lupa" />
        </Link>
        <Link to="/usuario">
          <img style={{ height: '1.5rem', width: '1.5rem' }} src="/iconos/user.png" alt="Usuario" />
        </Link>
        <Link to="/carrito" className='relative flex items-center'>
          <img style={{ height: '1.5rem', width: '1.5rem' }} src="/iconos/shopping-cart.png" alt="Carrito" />
          <div>
          {cart.length > 0 && (
            <span className="absolute top-1 right-0 -mt-1 -mr-8 h-6 w-6 flex items-center justify-center bg-black rounded-full text-white text-xs">
              {calcularTotalProductos()}
            </span>

           
          )}
          </div>
          
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;
