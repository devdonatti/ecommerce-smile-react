import React from 'react';
import ProductList from './ProductList';

const Products = ({ products }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      {products.map(product => (
        <ProductList key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
