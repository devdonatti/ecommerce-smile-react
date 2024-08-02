import React, { useContext } from 'react';
import { ProductContext } from '../components/context/ProductContext';

const Carrito = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useContext(ProductContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, e) => {
    const newQuantity = parseInt(e.target.value);
    updateCartItemQuantity(productId, newQuantity);
  };

  // Función para calcular el total del carrito
  const calcularTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.precio * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div className='max-w-3xl mx-auto p-4'>
     
      {cart.length === 0 ? (
        <p className='text-center text-gray-600'>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div className='flex items-center border-b border-gray-300 py-4' key={item.id}>
              <img src={item.imagen} alt={item.nombre} className='w-24 h-24 object-cover mr-4' />
              <div className='flex-1'>
                <h2 className='text-lg font-semibold'>{item.titulo}</h2>
                <p className='text-gray-700'>Precio: ${item.precio.toFixed(2)}</p>
                <div className='flex items-center mt-2'>
                  <label htmlFor={`quantity-${item.id}`} className='mr-2 text-sm'>Cantidad:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e)}
                    className='border border-gray-300 rounded-md px-2 py-1 w-16 text-center'
                  />
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className='ml-4 bg-black text-white px-4 py-2 hover:bg-black'
              >
                Eliminar
              </button>
              
            </div>
          ))}
          <div className='mt-4 text-center'>
            <p className='text-lg font-semibold text-left'>Total: ${calcularTotal()}</p>
            <button className='ml-4 bg-black text-white px-4 py-2 mt-6  hover:bg-black'>COMPRAR</button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Carrito;
