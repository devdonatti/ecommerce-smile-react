import React from 'react';

const ProductList = ({ product }) => {

    
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded overflow-hidden bg-white m-2 mt-8 relative text-center font-helvetica">
      <img className="w-full transform hover:opacity-75 hover:shadow-lg" src={product.imagen} alt={product.titulo} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h3>{product.titulo}</h3>
        <p>{product.descripcion}</p>
        <h4>${product.precio}</h4>
        <button className="bg-black text-white p-2 tracking-widest">Comprar</button>
      </div>
    </div>
  );
};

export default ProductList;
