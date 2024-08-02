import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../components/context/ProductContext';

const DetalleProducto = () => {
  const { productId } = useParams();
  const { selectedProduct, selectProductById, isLoading, addToCart } = useContext(ProductContext);

  useEffect(() => {
    selectProductById(productId);
  }, [productId, selectProductById]);

  // Manejar clic en el botón "Agregar al Carrito"
  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      alert('Producto agregado al carrito');
    }
  };

  if (isLoading) {
    return <div className='text-center text-gray-600'>Cargando detalle del producto...</div>;
  }

  if (!selectedProduct) {
    return <div className='text-center text-gray-600'>No se ha seleccionado ningún producto.</div>;
  }

  return (
    <section className='bg-white'>
      <div className='flex flex-col md:flex-row max-w-screen-lg mx-auto my-8 p-4'>
        {/* Imagen del producto */}
        <div className='w-full md:w-1/2'>
          <img 
            className='w-full h-auto object-cover rounded-lg shadow-lg' 
            src={selectedProduct.imagen} 
            alt={selectedProduct.nombre} 
          />
        </div>

        {/* Información del producto */}
        <div className='w-full md:w-1/2 flex flex-col justify-between p-8'>
          <div className='flex flex-col justify-between h-full'>
            <div className='mb-6'>
              <p className='text-2xl font-bold mb-2'>{selectedProduct.titulo}</p>
              <p className='text-lg mb-4'>${selectedProduct.precio.toFixed(2)}</p>
              <h1 className='text-xl font-semibold mb-2'>¡Lleva 2 y pagá 1!</h1>
              <h2 className='text-lg text-gray-700'>Vas a poder aprovechar esta promoción en cualquier producto de la tienda.</h2>
            </div>
            
            <button 
              className='bg-black text-white font-helvetica py-2 px-4  hover:bg-gray-800 transition-colors duration-300'
              onClick={handleAddToCart}
            >
              Agregar al Carrito
            </button>
            
            <div className='mt-6'>
              <p className='text-lg font-semibold'><strong>ENVÍO EXPRESS</strong> a Capital Federal.</p>
              <p className='text-lg font-semibold'><strong>Retirá GRATIS</strong> en nuestras sucursales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetalleProducto;
