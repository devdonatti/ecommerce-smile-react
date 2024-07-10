import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';
import { ProductsContext } from './context/ProductsContext';

const ProductListContainer = () => {
  const { categoriaId } = useParams(); // Obtener el parámetro de la URL (ej. /categoria/Remeras)
  const { products } = useContext(ProductsContext);

  

  // Filtrar productos basados en la categoría de la URL
  const filteredProducts = products.filter(product => product.categoria === categoriaId);

  return (
    <div>
      <h2>Productos de la categoría: {categoriaId}</h2>
      <div className='flex flex-wrap justify-center'>
        <Products products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductListContainer;
