// DetalleProducto.js
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../components/context/ProductContext';

const DetalleProducto = () => {
  const { productId } = useParams();
  const { selectedProduct, selectProductById, isLoading,addToCart } = useContext(ProductContext);

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
    return <div>Cargando detalle del producto...</div>;
  }

  if (!selectedProduct) {
    return <div>No se ha seleccionado ningún producto.</div>;
  }

  return (
    <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded overflow-hidden bg-white m-2 mt-8 relative text-center font-helvetica'>
      <img className='w-full transform hover:opacity-75 hover:shadow-lg' src={selectedProduct.imagen} alt={selectedProduct.nombre} />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <p>{selectedProduct.titulo}</p>
        <p>Precio: {selectedProduct.precio}</p>
        <button onClick={handleAddToCart} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default DetalleProducto;
