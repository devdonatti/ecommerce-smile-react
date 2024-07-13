// DetalleProducto.jsx
import React, { useContext } from 'react';
import { ProductContext } from "./context/ProductContext";

const DetalleProducto = () => {
  const { selectedProduct, setSelectedProduct } = useContext(ProductContext);

 
  return (
    <div>
      {selectedProduct && (
        <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded overflow-hidden bg-white m-2 mt-8 relative text-center font-helvetica'>
          <img className='w-full transform hover:opacity-75 hover:shadow-lg' src={selectedProduct.imagen} alt={selectedProduct.nombre} />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <p>{selectedProduct.titulo}</p>
            <p>Precio: {selectedProduct.precio}</p>
            <label htmlFor='quantity'>Cantidad:</label>
            <input type='number' id='quantity' defaultValue='1' />
            <button>Comprar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetalleProducto;
