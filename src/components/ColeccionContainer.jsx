import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CategoriaProductos = () => {
  const { categoria } = useParams(); // Obtener el parámetro de la URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const filteredProducts = products.filter(product => product.categoria === categoria);

  return (
    <div>
      <h2>Productos de la categoría: {categoria}</h2>
      <div className='flex flex-wrap justify-center bg-white p-5'>
        {filteredProducts.map(product => (
          <div key={product.id} className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded overflow-hidden bg-white m-2 mt-8 relative text-center font-helvetica'>
            <img className='w-full transform hover:opacity-75 hover:shadow-lg' src={product.imagen} alt={product.nombre} />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <p>{product.nombre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriaProductos;
