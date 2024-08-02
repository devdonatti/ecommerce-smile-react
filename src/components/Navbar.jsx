import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../components/context/ProductContext';

const Navbar = ({ user }) => {
  const { cart } = useContext(ProductContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

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

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='relative flex items-center justify-between bg-white p-4'>
      {/* Menú desplegable en pantallas pequeñas */}
      {navOpen && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-lg z-20 md:hidden text-center'>
          <Link to="/" className='block px-4 py-2 text-gray-800 hover:text-gray-500 hover:underline' onClick={toggleNav}>HOME</Link>
          <Link to="/coleccion" className='block px-4 py-2 text-gray-800 hover:text-gray-500 hover:underline' onClick={toggleNav}>COLECCIÓN</Link>
          <Link to="/locales" className='block px-4 py-2 text-gray-800 hover:text-gray-500 hover:underline' onClick={toggleNav}>LOCALES</Link>
        </div>
      )}

      {/* Contenedor de la barra de navegación */}
      <div className='relative flex w-full items-center'>
        {/* Botón de menú en pantallas pequeñas */}
        <button 
          className='md:hidden flex items-center mx-auto'
          onClick={toggleNav}
        >
          <img className='h-15 w-15' src="/iconos/icononav.png" alt="Logo" />
        </button>

        {/* Menú en pantallas grandes */}
        <div className='hidden md:flex w-full items-center'>
          {/* Contenedor del logo */}
          <div className='flex-shrink-0'>
            <Link to="/">
              <img className='h-15 w-15' src="/iconos/icononav.png" alt="Logo" />
            </Link>
          </div>

          {/* Menú de navegación */}
          <div className='relative flex-grow flex justify-center items-center space-x-24'>
            <Link className='font-helvetica focus:outline-none tracking-widest text-sm hover:underline hover:text-gray-500' to="/">HOME</Link>
            
            <div className='relative'>
              <Link 
                className='font-helvetica focus:outline-none tracking-widest text-sm hover:text-gray-500 hover:underline' 
                onMouseEnter={toggleMenu} 
                onClick={() => setMenuOpen(!menuOpen)} 
                to="/coleccion"
              >
                COLECCIÓN
              </Link>
              {menuOpen && (
                <div className='absolute left-0 top-full bg-white shadow-lg rounded mt-2 w-48 py-2 z-10 transition-soft' onMouseLeave={closeMenu}>
                  <Link to='/categoria/hoodies' className='block px-4 py-2 text-gray-800 hover:text-gray-500 hover:underline transition-all duration-300 ease-in-out font-helvetica text-sm'>HOODIES</Link>
                  <Link to='/categoria/pants' className='block px-4 py-2 text-gray-800 hover:text-gray-500 hover:underline transition-all duration-300 ease-in-out font-helvetica text-sm'>PANTALONES</Link>
                  <Link to='/categoria/remeras' className='block px-4 py-2 text-gray-800 hover:text-gray-500 hover:underline transition-all duration-300 ease-in-out font-helvetica text-sm'>REMERAS</Link>
                  <Link to='/categoria/camperas' className='block px-4 py-2 text-gray-800 hover:text-gray-500 hover:underline transition-all duration-300 ease-in-out font-helvetica text-sm'>CAMPERAS</Link>
                  <Link to='/categoria/accesorios' className='block px-4 py-2 text-gray-800 hover:text-gray-500 hover:underline transition-all duration-300 ease-in-out font-helvetica text-sm'>ACCESORIOS</Link>
                </div>
              )}
            </div>
            
            <Link className='font-helvetica focus:outline-none tracking-widest text-sm hover:underline hover:text-gray-500' to="/locales">LOCALES</Link>
          </div>

          {/* Contenedor de íconos y saludo */}
          <div className='flex items-center gap-4 ml-auto'>
            {user && <span className="hidden md:block">Hola, {user}</span>}
        
            <Link to="/login" className='relative'>
              <img className='h-6 w-6' src="/iconos/user.png" alt="Usuario" />
            </Link>
            <Link to="/carrito" className='relative flex items-center'>
              <img className='h-6 w-6' src="/iconos/shopping-cart.png" alt="Carrito" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 -mt-0 -mr-8 h-6 w-6 flex items-center justify-center bg-black rounded-full text-white text-xs">
                  {calcularTotalProductos()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Íconos en pantallas pequeñas */}
      <div className='absolute  right-4 flex gap-4 items-center md:hidden'>
        <Link to="/buscar">
          <img className='h-6 w-6' src="/iconos/lupita.png" alt="Buscar" />
        </Link>
        <Link to="/login">
          <img className='h-6 w-6' src="/iconos/user.png" alt="Usuario" />
        </Link>
        <Link to="/carrito" className='relative flex items-center'>
          <img className='h-6 w-6' src="/iconos/shopping-cart.png" alt="Carrito" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 -mt-0 -mr-8 h-6 w-6 flex items-center justify-center bg-black rounded-full text-white text-xs">
              {calcularTotalProductos()}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
